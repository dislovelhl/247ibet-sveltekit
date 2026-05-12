import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { IBET_PROFILE } from '../src/lib/ibet-brand';

const ROOT = resolve(__dirname, '..');

function readProjectFile(path: string): string {
  return readFileSync(resolve(ROOT, path), 'utf-8');
}

function normalize(value: string): string {
  return value.replace(/\s+/g, ' ');
}

function walkProjectFiles(dir: string, extensions = ['.svelte', '.ts', '.js', '.md']): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      out.push(...walkProjectFiles(full, extensions));
    } else if (extensions.some((ext) => full.endsWith(ext))) {
      out.push(full);
    }
  }
  return out;
}

const AFFIRMATIVE_LICENSING_CLAIMS = [
  /247iBET\s+is\s+(?:AGCO\s+licensed|licensed\s+by\s+AGCO)/i,
  /247iBET\s+is\s+(?:iGaming\s+Ontario\s+registered|registered\s+with\s+iGaming\s+Ontario)/i,
  /247iBET\s+(?:operates|is\s+operating)\s+(?:within|under)\s+the\s+iGaming\s+Ontario\s+regulated\s+framework/i,
  /official\s+licensed\s+operator/i,
];

const UNSUPPORTED_SELF_OWNED_MARKERS = [
  /AGCO\s+Regulated/i,
  /AGCO\s+verified/i,
  /AGCO\s+data-protection\s+vetted/i,
  /Kahnawake\s+licensed/i,
  /AGCO\s+trust\s+marks/i,
  /247iBET\s+betting\s+platform/i,
  /247iBET'?s\s+own\s+casino/i,
  /247iBET'?s\s+own\s+sportsbook/i,
  /real-money\s+wagering\s+users/i,
  /wagering\s+flows/i,
  /real-time\s+operator\s+data/i,
  /best\s+casino\s+and\s+sportsbook\s+options/i,
  /Withdrawal\s+speed\s+benchmarks/i,
  /Interac\s+e-Transfer\s+processing\s+data/i,
  /Interac\s+e-Transfer\s+withdrawals\s+processed\s+within/i,
  /500\+\s+Games/i,
  /500\+\s+casino\s+games/i,
  /built-in\s+tools\s+to\s+help\s+you\s+play\s+responsibly/i,
  /open\s+real\s+accounts/i,
  /make\s+real\s+deposits/i,
  /test\s+real\s+withdrawals/i,
  /Open\s+a\s+real-money\s+account/i,
  /Make\s+a\s+deposit\s+and\s+wager/i,
  /Submit\s+an\s+Interac\s+e-Transfer\s+withdrawal\s+request/i,
  /under\s+30\s+minutes/i,
  /Experience\s+lightning-fast/i,
  /bank-grade\s+security/i,
  /Verified\s+withdrawals/i,
  /real\s+cashout\s+behaviour/i,
  /withdrawal\s+timelines\s+from\s+real\s+accounts/i,
  /lightning-fast\s+Interac\s+payouts/i,
  /full\s+247iBET\s+sportsbook/i,
  /Interac\s+withdrawals\s+typically\s+arrive\s+within\s+1-4\s+hours/i,
  /Funds\s+typically\s+arrive\s+in\s+minutes/i,
  /verify\s+your\s+account\s+against\s+AGCO\s+records/i,
  /iGaming\s+Ontario'?s\s+province-wide\s+exclusion\s+register/i,
  /Responsible\s+Gambling\s+Tools\s+at\s+247iBET/i,
  /Fast\s+Interac\s+payouts/i,
  /Canada.?s\s+regulated\s+iGaming\s+authority/i,
  /risk-free\s+way/i,
  /without\s+financial\s+risk/i,
  /Bet\s+on\s+.*\s+at\s+247iBET/i,
  /Bet\s+on\s+.*\s+in\s+Canada\s+at\s+247iBET/i,
  /AGCO\s+LICENSED/,
  /iGO\s+VERIFIED/,
  /payout\s+speed\s+rankings/i,
  /processes\s+Interac\s+e-Transfer\s+withdrawals\s+in\s+under\s+24\s+hours/i,
  /ACGO/i,
  /247iBET\s+verified\s+tracking/i,
  /247iBET\s+tracking\s+operator\s+licensing\s+progress/i,
  /Free\s+Bet\s+Offers\s+at\s+247iBET/i,
  /available\s+on\s+the\s+247iBET\s+platform\s+for\s+registered\s+players/i,
  /Log\s+into\s+your\s+247iBET\s+account/i,
  /247iBET\s+reviews\s+the\s+request/i,
  /name\s+registered\s+on\s+your\s+247iBET\s+account/i,
  /Is\s+247iBET\s+licensed\s+in\s+my\s+province/i,
  /247iBET\s+summarizes\s+Canadian\s+regulated-market\s+context/i,
];

describe('AGCO and iGaming Ontario licensing boundary', () => {
  it('keeps brand licensing data unverified until documentary proof exists', () => {
    expect(IBET_PROFILE.agcoLicensed).toBe(false);
    expect(IBET_PROFILE.licences).toEqual([]);
  });

  it('keeps editorial policy in public-content and official-source verification voice', () => {
    const content = normalize(readProjectFile('src/routes/editorial-policy/+page.svelte'));

    expect(content).toContain('public editorial, acquisition, and compliance-support content');
    expect(content).toContain('not be read as proof of Ontario operator status');
    expect(content).toContain('official regulator sources');
    expect(content).toContain('separate operational gaming platform');
    expect(content).toContain('compensation does not determine licensing status');

    for (const claim of AFFIRMATIVE_LICENSING_CLAIMS) {
      expect(content).not.toMatch(claim);
    }
  });

  it('keeps archived bonus terms framed as non-current and non-inducement content', () => {
    const content = normalize(readProjectFile('src/routes/bonus-terms/+page.svelte'));

    expect(content).toContain('<meta name="robots" content="noindex, nofollow"');
    expect(content).toContain('Archived Bonus Creative Snapshot');
    expect(content).toContain('not a current offer page');
    expect(content).toContain(
      'not as a current public inducement, offer, or representation of Ontario availability',
    );
    expect(content).toContain('licensing status, jurisdiction, and eligibility');
    expect(content).not.toContain('Current Bonus Snapshot');
  });

  it('keeps responsible gambling copy separate from operational account controls', () => {
    const content = normalize(readProjectFile('src/routes/responsible-gambling/+page.svelte'));

    expect(content).toContain('public responsible-gambling guidance');
    expect(content).toContain('separate operating platform');
    expect(content).toContain('Minimum age: 19+ in Ontario and 18+ in Alberta');
    expect(content).toContain('iGaming Ontario — Self-Exclusion FAQ');
    expect(content).toContain('https://www.igamingontario.ca/en/player/player-faqs');
    expect(content).toContain('AGLC — Voluntary Self-Exclusion Program');
    expect(content).toContain('Gamblers Anonymous Canada');
    expect(content).not.toContain('100% private and secure');

    const problemGamblingGuide = normalize(
      readProjectFile('src/routes/guides/problem-gambling-signs/+page.svelte'),
    );
    expect(problemGamblingGuide).toContain(
      'each regulated Ontario operator offers its own self-exclusion program while a centralized program is still being developed',
    );
  });

  it('keeps public 247iBET bonus surfaces free of exact current-offer values', () => {
    const files = [
      'src/lib/ibet-brand.ts',
      'src/routes/+page.svelte',
      'src/routes/bonus-terms/+page.svelte',
      'src/routes/new-player-bonuses-canada/+page.svelte',
    ];
    const content = files.map((file) => readProjectFile(file)).join('\n');

    expect(content).not.toMatch(/C?\$\s?2,?000|C?\$\s?1000|10\s+free\s+spins/i);
    expect(content).not.toMatch(/Deposit\s+C?\$?50[^\n]{0,80}get\s+C?\$?50/i);
    expect(content).toMatch(/verify current terms|current eligibility|current cashier terms/i);
  });

  it('keeps unsupported self-owned licence badges and obsolete RG claims out of source copy', () => {
    const files = [
      ...walkProjectFiles(resolve(ROOT, 'src')),
      ...walkProjectFiles(resolve(ROOT, 'docs')),
    ];

    const violations: string[] = [];

    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      for (const marker of UNSUPPORTED_SELF_OWNED_MARKERS) {
        if (marker.test(content)) {
          violations.push(`${relative(ROOT, file)} :: ${marker}`);
        }
      }
    }

    expect(violations).toEqual([]);
  });

  it('marks direct affiliate handoff links as sponsored and nofollow', () => {
    const safeExternalLink = readProjectFile('src/lib/components/SafeExternalLink.svelte');
    const navbar = readProjectFile('src/lib/components/Navbar.svelte');
    const sticky = readProjectFile('src/lib/components/StickyMobileCTA.svelte');

    expect(safeExternalLink).toContain("rel = 'nofollow sponsored noopener noreferrer'");
    expect(navbar).toContain('rel="noopener noreferrer nofollow sponsored"');
    expect(navbar).toContain('rel="nofollow sponsored noopener noreferrer"');
    expect(
      sticky.match(/rel="nofollow sponsored noopener noreferrer"/g)?.length,
    ).toBeGreaterThanOrEqual(2);
    expect(sticky).toContain('Affiliate Disclosure: This site may earn commissions');
  });

  it('keeps licence activation gated by machine-readable evidence and control matrix', () => {
    const template = JSON.parse(
      readProjectFile('docs/compliance/agco-license-evidence.template.json'),
    );
    const matrix = normalize(readProjectFile('docs/compliance/agco-web-surface-control-matrix.md'));

    expect(template.releaseGate).toEqual({
      maySetIbetProfileAgcoLicensedTrue: false,
      mayPublishAgcoOrIGOClaims: false,
      releaseOwnerNameOrRole: '',
      approvalDate: 'YYYY-MM-DD',
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
    });
    expect(template.legalOperatorIdentity.legalEntityName).toBe('');
    expect(template.agcoRegistration.registrationNumber).toBe('');
    expect(template.igamingOntarioOperatingAgreement.approvedSites).toEqual([]);
    expect(template.ontarioGoLiveReadiness.agcoCertificateOfRegistrationReference).toBe('');
    expect(template.ontarioGoLiveReadiness.technologyComplianceConfirmationReference).toBe('');
    expect(template.ontarioGoLiveReadiness.regulatoryReportingSetupReference).toBe('');
    expect(template.ontarioGoLiveReadiness.secureDataChannelSetupReference).toBe('');
    expect(template.ontarioGoLiveReadiness.goLiveApprovalOrConditionsReference).toBe('');
    expect(template.directoryReconciliation.directoryUrl).toBe(
      'https://www.igamingontario.ca/en/player/regulated-igaming-market',
    );
    expect(template.publicCopyApproval.approvedLicenceWording).toBe('');

    expect(matrix).toContain('Public web vs gaming platform boundary');
    expect(matrix).toContain('Licence-claim activation gate');
    expect(matrix).toContain('iGaming Ontario regulated market directory');
    expect(matrix).toContain('iGaming Ontario steps to join the Ontario market');
    expect(matrix).toContain('Ontario go-live readiness');
    expect(matrix).toContain("AGCO Registrar's Standards for Internet Gaming");
    expect(matrix).toContain('Advertising and inducement controls');
    expect(matrix).toContain('must not advertise inducements, bonuses, credits, boosted odds');
    expect(matrix).toContain('iGaming Ontario player FAQs');
    expect(matrix).toContain('Do not claim Ontario centralized self-exclusion is live');
    expect(matrix).toContain('AGCO guidance for iGaming operators');
    expect(matrix).toContain('pnpm compliance:agco:evidence:init');
    expect(matrix).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence',
    );
    expect(matrix).toContain('Until this gate is complete');

    const runbook = normalize(
      readProjectFile('docs/compliance/agco-license-activation-runbook.md'),
    );
    expect(runbook).toContain('AGCO/iGaming Ontario Licence-Claim Activation Runbook');
    expect(runbook).toContain('This repository is the public web/acquisition/integration shell');
    expect(runbook).toContain('docs/compliance/agco-license-evidence.local.json');
    expect(runbook).toContain('pnpm compliance:agco:evidence:init');
    expect(runbook).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json',
    );
    expect(runbook).toContain(
      'Update `src/lib/ibet-brand.ts` with exact approved licence metadata only',
    );
    expect(runbook).toContain('pnpm compliance:agco');
    expect(runbook).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence',
    );
    expect(runbook).toContain('pnpm compliance:agco:licensed');
    expect(runbook).toContain(
      'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed',
    );
    expect(runbook).toContain('IBET_PROFILE.agcoLicensed = false');

    const packageJson = JSON.parse(readProjectFile('package.json'));
    expect(packageJson.scripts['compliance:agco']).toBe('node scripts/agco-evidence-gate.mjs');
    expect(packageJson.scripts['compliance:agco:licensed']).toBe(
      'node scripts/agco-evidence-gate.mjs --require-approved',
    );
    expect(packageJson.scripts['compliance:agco:evidence:init']).toBe(
      'node scripts/agco-evidence-init.mjs',
    );
    expect(packageJson.scripts['compliance:agco:evidence']).toBe(
      'node scripts/agco-evidence-gate.mjs --require-complete-evidence',
    );

    const gitignore = readProjectFile('.gitignore');
    expect(gitignore).toContain('docs/compliance/agco-license-evidence.local.json');
    expect(gitignore).toContain('docs/compliance/*.local.json');
    expect(gitignore).toContain('docs/compliance/*.private.json');

    const script = readProjectFile('scripts/agco-evidence-gate.mjs');
    expect(script).toContain('AGCO evidence gate failed');
    expect(script).toContain('env.AGCO_EVIDENCE_FILE');
    expect(script).toContain('ontarioGoLiveReadiness.agcoCertificateOfRegistrationReference');
    expect(script).toContain('igamingOntarioOperatingAgreement.approvedBrands');
    expect(script).toContain('igamingOntarioOperatingAgreement.jurisdictionScope');
    expect(script).toContain('igamingOntarioOperatingAgreement.launchOrActivationConditions');
    expect(script).toContain('publicCopyApproval.approvedBadgeOrLogoRules');
    expect(script).toContain('REQUIRED_RELEASE_COMMANDS');
    expect(script).toContain('REQUIRED_PUBLIC_DOMAINS');
    expect(script).toContain('REQUIRED_APPROVED_COMPONENTS');
    expect(script).toContain('ALLOWED_IGO_DIRECTORY_CATEGORIES');
    expect(script).toContain('REQUIRED_AGCO_REGISTRATION_TYPE');
    expect(script).toContain('REQUIRED_IGO_JURISDICTION');
    expect(script).toContain('approvedPagesOrComponents to include');
    expect(script).toContain('approved domain/site coverage');
    expect(script).toContain('directoryReconciliation.listingName to match');
    expect(script).toContain('directoryReconciliation.categories to use iGO directory categories');
    expect(script).toContain('agcoRegistration.registrationType to be');
    expect(script).toContain('igamingOntarioOperatingAgreement.jurisdictionScope to include');
    expect(script).toContain('publicCopyApproval.approvedLicenceWording to match evidence fields');
    expect(script).toContain('releaseGate.mustRun to include');
    expect(script).toContain('releaseGate.releaseOwnerNameOrRole');
    expect(script).toContain('releaseGate.approvalDate');
    expect(script).toContain('releaseGate.approvalDate to be on or after evidence approval dates');
    expect(script).toContain('rejects placeholder evidence values');
    expect(script).toContain('extractLicenceMetadata');
    expect(script).toContain('IBET_PROFILE licence metadata to match evidence fields');
    expect(script).toContain('releaseGate enables claims but required evidence is incomplete');
    expect(script).toContain('approved-evidence mode requires valid YYYY-MM-DD dates');
    expect(script).toContain('agcoRegistration.expiryOrRenewalDate to be current, not expired');
    expect(script).toContain('evidence dates not to be future-dated');
    expect(script).toContain('approved-evidence mode requires complete evidence');
    expect(script).toContain('approved-evidence mode required');
    expect(script).toContain('complete-evidence mode required');
    expect(script).toContain('IBET_PROFILE.licences to include approved licence metadata');
    expect(script).toContain('no-documentary-proof mode');

    const initScript = readProjectFile('scripts/agco-evidence-init.mjs');
    expect(initScript).toContain('agco-license-evidence.template.json');
    expect(initScript).toContain('agco-license-evidence.local.json');
    expect(initScript).toContain('refuses to overwrite');

    const docsIndex = readProjectFile('docs/README.md');
    expect(docsIndex).toContain('./compliance/agco-license-evidence-checklist.md');
    expect(docsIndex).toContain('./compliance/agco-license-activation-runbook.md');
    expect(docsIndex).toContain('./compliance/agco-web-surface-control-matrix.md');
    expect(docsIndex).toContain('AGCO/iGaming Ontario licence activation');
  });

  it('documents the no-proof boundary and official iGO source checks', () => {
    const content = normalize(readProjectFile('docs/compliance-evidence.md'));

    expect(content).toContain('Do not represent jdzd.com or 247iBET as AGCO-licensed');
    expect(content).toContain('iGaming Ontario regulated market directory');
    expect(content).toContain('Noindex retained; copy reframed as archived creative only');
    expect(content).toContain('Self-exclusion/support links for Ontario and Alberta');
  });

  it('keeps the AGCO no-proof compliance guard wired into CI and release docs', () => {
    const ciWorkflow = readProjectFile('.github/workflows/ci.yml');
    const ciDocs = readProjectFile('docs/CI.md');
    const opsDocs = readProjectFile('docs/OPERATIONS_DEPLOYMENT.md');
    const readme = readProjectFile('README.md');

    expect(ciWorkflow).toContain('node-version: 24');
    expect(ciWorkflow).toContain('name: AGCO compliance guard');
    expect(ciWorkflow).toContain('run: pnpm compliance:agco');

    for (const docs of [ciDocs, opsDocs, readme]) {
      expect(docs).toContain('pnpm compliance:agco');
    }

    expect(ciDocs).toContain('All five gates must pass');
    expect(ciDocs).toContain(
      'pnpm check && pnpm lint && pnpm test && pnpm build && pnpm compliance:agco',
    );
    expect(opsDocs).toContain('no-proof public-copy/evidence guard');
    expect(readme).toContain('no-documentary-proof mode');
  });
});
