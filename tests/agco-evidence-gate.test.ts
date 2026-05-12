import { describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import {
  evaluateAgcoEvidence,
  getPublicCopyComplianceFiles,
  evaluatePublicCopyCompliance,
  evaluatePublicCopyText,
  loadAgcoEvidenceFile,
  runAgcoEvidenceGate,
} from '../scripts/agco-evidence-gate.mjs';

const ROOT = resolve(__dirname, '..');
const CURRENT_BRAND = readFileSync(resolve(ROOT, 'src/lib/ibet-brand.ts'), 'utf8');

function completeEvidence(overrides: Record<string, unknown> = {}) {
  const evidence = {
    legalOperatorIdentity: {
      legalEntityName: 'Verified Legal Operator Inc.',
      businessOrTradeNames: ['247iBET'],
      approvedDomains: ['247ibet.ca'],
      notes: 'Test fixture; not real licence evidence.',
    },
    agcoRegistration: {
      registrationNumber: 'AGCO-REG-123456',
      registrationType: 'Internet Gaming Operator',
      effectiveDate: '2026-01-01',
      expiryOrRenewalDate: '2099-12-31',
      officialDocumentReference: 'private://legal-vault/agco-registration',
      publicRegistryUrl: 'private://legal-vault/agco-registry-record',
    },
    igamingOntarioOperatingAgreement: {
      agreementReference: 'private://legal-vault/igo-agreement',
      approvedBrands: ['247iBET'],
      approvedSites: ['247ibet.ca'],
      jurisdictionScope: ['Ontario'],
      launchOrActivationConditions: ['No outstanding launch conditions recorded'],
    },
    ontarioGoLiveReadiness: {
      agcoCertificateOfRegistrationReference: 'private://legal-vault/certificate',
      technologyComplianceConfirmationReference: 'private://legal-vault/technology',
      regulatoryReportingSetupReference: 'private://legal-vault/reporting',
      secureDataChannelSetupReference: 'private://legal-vault/secure-channel',
      goLiveApprovalOrConditionsReference: 'private://legal-vault/go-live',
    },
    directoryReconciliation: {
      directoryUrl: 'https://www.igamingontario.ca/en/player/regulated-igaming-market',
      listingName: '247iBET',
      listingDateShownByIGO: '2026-05-07',
      categories: ['Casino'],
      screenshotOrArchiveReference: 'private://legal-vault/directory-screenshot',
    },
    publicCopyApproval: {
      approverNameOrRole: 'Legal Compliance Approver',
      approvalDate: '2026-05-12',
      approvedLicenceWording:
        'Verified Legal Operator Inc. is registered with AGCO as an Internet Gaming Operator under registration AGCO-REG-123456.',
      approvedBadgeOrLogoRules: 'Approved badge/logo usage rules',
      approvedPagesOrComponents: ['src/lib/ibet-brand.ts'],
    },
    releaseGate: {
      maySetIbetProfileAgcoLicensedTrue: true,
      mayPublishAgcoOrIGOClaims: true,
      releaseOwnerNameOrRole: 'Release Owner',
      approvalDate: '2026-05-12',
      mustRun: [
        'pnpm check',
        'pnpm lint',
        'pnpm test',
        'pnpm build',
        'pnpm compliance:agco',
        'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence',
        'pnpm compliance:agco:licensed',
        'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed',
        'git diff --check',
      ],
    },
  };

  return merge(evidence, overrides) as object;
}

function merge(base: Record<string, unknown>, overrides: Record<string, unknown>) {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overrides)) {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      out[key] &&
      typeof out[key] === 'object' &&
      !Array.isArray(out[key])
    ) {
      out[key] = merge(out[key] as Record<string, unknown>, value as Record<string, unknown>);
    } else {
      out[key] = value;
    }
  }
  return out;
}

describe('AGCO evidence gate behavior', () => {
  it('fails closed with an actionable message when the private evidence file is missing', () => {
    const result = loadAgcoEvidenceFile(
      resolve(ROOT, 'docs/compliance/agco-license-evidence.missing.local.json'),
    );

    expect(result.evidence).toBeNull();
    expect(result.error).toContain('evidence file not found');
    expect(result.error).toContain('docs/compliance/agco-license-evidence.missing.local.json');
    expect(result.error).toContain('AGCO_EVIDENCE_FILE');
  });

  it('fails the CLI runner closed without a stack trace when the private evidence file is missing', () => {
    const errors: string[] = [];
    const exitCode = runAgcoEvidenceGate({
      root: ROOT,
      args: ['node', 'scripts/agco-evidence-gate.mjs', '--require-approved'],
      env: {
        AGCO_EVIDENCE_FILE: 'docs/compliance/agco-license-evidence.missing.local.json',
      },
      stderr: (message: string) => errors.push(message),
      stdout: () => undefined,
    });
    const output = errors.join('\n');

    expect(exitCode).toBe(1);
    expect(output).toContain('AGCO evidence gate failed: evidence file not found');
    expect(output).toContain('docs/compliance/agco-license-evidence.missing.local.json');
    expect(output).not.toContain('Error: ENOENT');
    expect(output).not.toContain('at readFileSync');
  });

  it('does not accept the committed template as approved private evidence', () => {
    const errors: string[] = [];
    const messages: string[] = [];
    const exitCode = runAgcoEvidenceGate({
      root: ROOT,
      args: ['node', 'scripts/agco-evidence-gate.mjs', '--require-approved'],
      env: {
        AGCO_EVIDENCE_FILE: 'docs/compliance/agco-license-evidence.template.json',
      },
      stderr: (message: string) => errors.push(message),
      stdout: (message: string) => messages.push(message),
    });
    const output = errors.join('\n');

    expect(exitCode).toBe(1);
    expect(messages).toEqual([]);
    expect(output).toContain('approved-evidence mode required');
    expect(output).toContain('approved-evidence mode requires complete evidence');
    expect(output).toContain('legalOperatorIdentity.legalEntityName');
    expect(output).toContain('agcoRegistration.registrationNumber');
  });

  it('fails closed with an actionable message when the evidence file is invalid JSON', () => {
    const dir = mkdtempSync(join(tmpdir(), 'agco-evidence-'));
    const evidencePath = join(dir, 'invalid.json');

    try {
      writeFileSync(evidencePath, '{ "releaseGate": ');

      const result = loadAgcoEvidenceFile(evidencePath);

      expect(result.evidence).toBeNull();
      expect(result.error).toContain('evidence file is not valid JSON');
      expect(result.error).toContain(evidencePath);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  it('keeps the standalone compliance gate wired to public-copy scanning', () => {
    const violations = evaluatePublicCopyText(
      'We offer over 500 premium casino games and withdrawals from our senior cashier team.',
      'casino/+page.svelte',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'casino/+page.svelte',
          severity: 'P1',
          reason: expect.stringContaining('games or betting markets'),
        }),
        expect.objectContaining({
          file: 'casino/+page.svelte',
          severity: 'P1',
          reason: expect.stringContaining('cashier'),
        }),
      ]),
    );
  });

  it('blocks unsafe static AI-summary licence and payout claims', () => {
    const violations = evaluatePublicCopyText(
      'Status: AGCO Registry Verified. Fast Payouts: Verified Interac e-Transfer speed benchmarks.',
      'static/llms.txt',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'static/llms.txt',
          severity: 'P0',
          reason: expect.stringContaining('AGCO registry verification'),
        }),
        expect.objectContaining({
          file: 'static/llms.txt',
          severity: 'P1',
          reason: expect.stringContaining('payout benchmarking'),
        }),
      ]),
    );
  });

  it('blocks misspelled ACGO regulator references in public source copy', () => {
    expect(evaluatePublicCopyText('Check ACGO status before relying on this page.', 'ontario/+page.svelte')).toEqual(
      [
        expect.objectContaining({
          file: 'ontario/+page.svelte',
          severity: 'P0',
          reason: expect.stringContaining('misspelled AGCO'),
        }),
      ],
    );
  });

  it('blocks 247iBET self-licence claims even in otherwise exempt guide paths', () => {
    const violations = evaluatePublicCopyText(
      '247iBET is AGCO Licensed and iGaming Ontario registered for Ontario players.',
      'guides/ontario-casino-operator-checks/+page.svelte',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'guides/ontario-casino-operator-checks/+page.svelte',
          severity: 'P0',
          reason: expect.stringContaining('247iBET AGCO/iGaming Ontario status'),
        }),
      ]),
    );
  });

  it('scans public layout shell copy for 247iBET self-licence claims', () => {
    const violations = evaluatePublicCopyText(
      '247iBET is an Ontario regulated operator with AGCO status.',
      '+layout.svelte',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: '+layout.svelte',
          severity: 'P0',
          reason: expect.stringContaining('247iBET AGCO/iGaming Ontario status'),
        }),
      ]),
    );
  });

  it('scans public design-system specimen copy for 247iBET self-licence claims', () => {
    const violations = evaluatePublicCopyText(
      'Design specimen: 247iBET is iGaming Ontario registered.',
      'design-system/+page.svelte',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'design-system/+page.svelte',
          severity: 'P0',
          reason: expect.stringContaining('247iBET AGCO/iGaming Ontario status'),
        }),
      ]),
    );
  });

  it('scans public route code and workflow surfaces for 247iBET self-licence claims', () => {
    const violations = evaluatePublicCopyText(
      'Workflow summary: 247iBET is an Ontario regulated operator.',
      'src/workflows/geo-optimizer.ts',
    );

    expect(violations).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: 'src/workflows/geo-optimizer.ts',
          severity: 'P0',
          reason: expect.stringContaining('247iBET AGCO/iGaming Ontario status'),
        }),
      ]),
    );
  });

  it('discovers public route and workflow code recursively instead of relying on a fixed allowlist', () => {
    const scannedFiles = getPublicCopyComplianceFiles(ROOT).map((file) =>
      file.replace(`${ROOT}/`, ''),
    );

    expect(scannedFiles).toEqual(
      expect.arrayContaining([
        'src/routes/authors/[slug]/+page.ts',
        'src/routes/api/workflows/geo-optimizer/+server.ts',
        'src/lib/workflows/pages.ts',
        'src/lib/age-gate-client.ts',
        'src/workflows/steps/write-report.ts',
      ]),
    );
    expect(scannedFiles).not.toContain('src/lib/server/auth.ts');
  });

  it('passes the standalone public-copy scan for the current no-proof source tree', () => {
    expect(evaluatePublicCopyCompliance(ROOT)).toEqual([]);
  });

  it('rejects approved-evidence metadata with invalid date format', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ agcoRegistration: { expiryOrRenewalDate: 'not-a-date' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode requires valid YYYY-MM-DD dates'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.expiryOrRenewalDate');
  });

  it('rejects placeholder evidence values in approved-evidence mode', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({
        agcoRegistration: { officialDocumentReference: 'TBD' },
        publicCopyApproval: { approvedBadgeOrLogoRules: 'pending' },
        releaseGate: { releaseOwnerNameOrRole: 'N/A' },
      }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode rejects placeholder evidence values'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.officialDocumentReference');
    expect(result.errors.join('\n')).toContain('publicCopyApproval.approvedBadgeOrLogoRules');
    expect(result.errors.join('\n')).toContain('releaseGate.releaseOwnerNameOrRole');
  });

  it('rejects synthetic or mock evidence references in approved-evidence mode', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({
        agcoRegistration: { officialDocumentReference: 'private://synthetic/agco-registration' },
        igamingOntarioOperatingAgreement: { agreementReference: 'private://mock/igo-agreement' },
        directoryReconciliation: { screenshotOrArchiveReference: 'private://dummy/directory-screenshot' },
      }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode rejects placeholder evidence values'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.officialDocumentReference');
    expect(result.errors.join('\n')).toContain('igamingOntarioOperatingAgreement.agreementReference');
    expect(result.errors.join('\n')).toContain('directoryReconciliation.screenshotOrArchiveReference');
  });

  it('rejects approved-evidence metadata with an expired AGCO registration date', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ agcoRegistration: { expiryOrRenewalDate: '2000-01-01' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires agcoRegistration.expiryOrRenewalDate to be current',
        ),
      ]),
    );
  });

  it('rejects future-dated effective, directory, or public-copy approval evidence', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({
        agcoRegistration: { effectiveDate: '2099-01-01' },
        directoryReconciliation: { listingDateShownByIGO: '2099-01-01' },
        publicCopyApproval: { approvalDate: '2099-01-01' },
        releaseGate: { approvalDate: '2099-01-01' },
      }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode requires evidence dates not to be future-dated'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.effectiveDate');
    expect(result.errors.join('\n')).toContain('directoryReconciliation.listingDateShownByIGO');
    expect(result.errors.join('\n')).toContain('publicCopyApproval.approvalDate');
    expect(result.errors.join('\n')).toContain('releaseGate.approvalDate');
  });

  it('rejects release-owner sign-off dated before prerequisite evidence approvals', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({
        publicCopyApproval: { approvalDate: '2026-05-12' },
        directoryReconciliation: { listingDateShownByIGO: '2026-05-07' },
        releaseGate: { approvalDate: '2026-05-01' },
      }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires releaseGate.approvalDate to be on or after evidence approval dates',
        ),
      ]),
    );
    expect(result.errors.join('\n')).toContain('directoryReconciliation.listingDateShownByIGO');
    expect(result.errors.join('\n')).toContain('publicCopyApproval.approvalDate');
  });

  it('rejects a non-iGO directory URL even when other evidence fields are filled', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ directoryReconciliation: { directoryUrl: 'https://example.invalid' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'directoryReconciliation.directoryUrl must point to the official iGaming Ontario regulated market directory',
        ),
      ]),
    );
  });

  it('rejects approved evidence that does not cover the configured public launch domain', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({
        legalOperatorIdentity: { approvedDomains: ['unrelated.example'] },
        igamingOntarioOperatingAgreement: { approvedSites: ['unrelated.example'] },
      }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode requires approved domain/site coverage for: 247ibet.ca'),
      ]),
    );
  });

  it('rejects an iGO directory listing name that does not match approved brand or trade names', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ directoryReconciliation: { listingName: 'Unrelated Operator' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires directoryReconciliation.listingName to match an approved brand or business/trade name',
        ),
      ]),
    );
  });

  it('rejects iGO directory categories outside the official directory taxonomy', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ directoryReconciliation: { categories: ['Lottery'] } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires directoryReconciliation.categories to use iGO directory categories',
        ),
      ]),
    );
    expect(result.errors.join('\n')).toContain(
      'Casino, Sports Betting, Poker, Bingo, Betting Exchange',
    );
  });

  it('accepts Betting Exchange when it appears in the current iGO directory category taxonomy', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ directoryReconciliation: { categories: ['Betting Exchange'] } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors.join('\n')).not.toContain(
      'directoryReconciliation.categories to use iGO directory categories',
    );
  });

  it('rejects AGCO registration evidence that is not an Internet Gaming Operator registration', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ agcoRegistration: { registrationType: 'Gaming-Related Supplier' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires agcoRegistration.registrationType to be Internet Gaming Operator',
        ),
      ]),
    );
  });

  it('rejects iGO operating-agreement evidence that does not include Ontario jurisdiction scope', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ igamingOntarioOperatingAgreement: { jurisdictionScope: ['Alberta'] } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires igamingOntarioOperatingAgreement.jurisdictionScope to include Ontario',
        ),
      ]),
    );
  });

  it('rejects approved evidence when public-copy approval omits the activated brand config file', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ publicCopyApproval: { approvedPagesOrComponents: ['src/routes/ontario/+page.svelte'] } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires publicCopyApproval.approvedPagesOrComponents to include: src/lib/ibet-brand.ts',
        ),
      ]),
    );
  });

  it('rejects approved public licence wording that does not match the approved evidence', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ publicCopyApproval: { approvedLicenceWording: 'Generic AGCO approved wording.' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires publicCopyApproval.approvedLicenceWording to match evidence fields',
        ),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.registrationNumber');
    expect(result.errors.join('\n')).toContain('agcoRegistration.registrationType');
    expect(result.errors.join('\n')).toContain('legalOperatorIdentity.legalEntityName');
  });

  it('rejects approved-evidence metadata that omits required release verification commands', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ releaseGate: { mustRun: ['pnpm test'] } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode requires releaseGate.mustRun to include'),
      ]),
    );
    expect(result.errors.join('\n')).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence',
    );
    expect(result.errors.join('\n')).toContain('pnpm compliance:agco:licensed');
    expect(result.errors.join('\n')).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed',
    );
    expect(result.errors.join('\n')).toContain('git diff --check');
  });

  it('validates complete private evidence without requiring public brand metadata activation', () => {
    const result = evaluateAgcoEvidence(completeEvidence(), CURRENT_BRAND, {
      requireCompleteEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.posture).toBe('complete-evidence rehearsal mode');
    expect(result.errors).not.toEqual(
      expect.arrayContaining([
        expect.stringContaining('IBET_PROFILE.agcoLicensed to be true'),
        expect.stringContaining('IBET_PROFILE.licences to include approved licence metadata'),
      ]),
    );
    expect(result.errors).toEqual([]);
  });

  it('rejects blank local evidence scaffolds in complete-evidence rehearsal mode', () => {
    const template = JSON.parse(
      readFileSync(resolve(ROOT, 'docs/compliance/agco-license-evidence.template.json'), 'utf-8'),
    );
    const result = evaluateAgcoEvidence(template, CURRENT_BRAND, {
      requireCompleteEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.posture).toBe('complete-evidence rehearsal mode');
    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('complete-evidence mode required'),
        expect.stringContaining('releaseGate enables claims but required evidence is incomplete'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('legalOperatorIdentity.legalEntityName');
    expect(result.errors.join('\n')).toContain('agcoRegistration.registrationNumber');
  });

  it('rejects approved-evidence metadata without release-owner sign-off', () => {
    const result = evaluateAgcoEvidence(
      completeEvidence({ releaseGate: { releaseOwnerNameOrRole: '', approvalDate: 'YYYY-MM-DD' } }),
      CURRENT_BRAND,
      { today: '2026-05-12T00:00:00.000Z' },
    );

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('releaseGate enables claims but required evidence is incomplete'),
      ]),
    );
    expect(result.errors.join('\n')).toContain('releaseGate.releaseOwnerNameOrRole');
    expect(result.errors.join('\n')).toContain('releaseGate.approvalDate');
  });

  it('keeps strict activation blocked until public brand licence metadata is activated', () => {
    const result = evaluateAgcoEvidence(completeEvidence(), CURRENT_BRAND, {
      requireApprovedEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining('approved-evidence mode requires IBET_PROFILE.agcoLicensed to be true'),
        expect.stringContaining('IBET_PROFILE.licences to include approved licence metadata'),
      ]),
    );
  });

  it('accepts strict activation when approved evidence and public brand licence metadata match', () => {
    const brandWithMatchingLicence = CURRENT_BRAND.replace('agcoLicensed: false', 'agcoLicensed: true').replace(
      'licences: []',
      "licences: ['Verified Legal Operator Inc. — Internet Gaming Operator — AGCO-REG-123456']",
    );

    const result = evaluateAgcoEvidence(completeEvidence(), brandWithMatchingLicence, {
      requireApprovedEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.errors).toEqual([]);
    expect(result.posture).toBe('approved-evidence mode');
  });

  it('rejects strict activation when brand licence metadata does not match approved evidence', () => {
    const brandWithMismatchedLicence = CURRENT_BRAND.replace('agcoLicensed: false', 'agcoLicensed: true').replace(
      'licences: []',
      "licences: ['Unmatched licence metadata']",
    );

    const result = evaluateAgcoEvidence(completeEvidence(), brandWithMismatchedLicence, {
      requireApprovedEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires IBET_PROFILE licence metadata to match evidence fields',
        ),
      ]),
    );
    expect(result.errors.join('\n')).toContain('agcoRegistration.registrationNumber');
    expect(result.errors.join('\n')).toContain('legalOperatorIdentity.legalEntityName');
  });

  it('does not accept evidence values placed outside the IBET_PROFILE licences metadata', () => {
    const brandWithEvidenceOnlyInComment = CURRENT_BRAND.replace(
      'agcoLicensed: false',
      "// Verified Legal Operator Inc. Internet Gaming Operator AGCO-REG-123456\n  agcoLicensed: true",
    ).replace('licences: []', "licences: ['Unmatched licence metadata']");

    const result = evaluateAgcoEvidence(completeEvidence(), brandWithEvidenceOnlyInComment, {
      requireApprovedEvidence: true,
      today: '2026-05-12T00:00:00.000Z',
    });

    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.stringContaining(
          'approved-evidence mode requires IBET_PROFILE licence metadata to match evidence fields',
        ),
      ]),
    );
  });
});
