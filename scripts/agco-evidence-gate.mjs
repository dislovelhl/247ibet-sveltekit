#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const OFFICIAL_IGO_DIRECTORY_URL =
  'https://www.igamingontario.ca/en/player/regulated-igaming-market';

export const REQUIRED_RELEASE_COMMANDS = [
  'pnpm check',
  'pnpm lint',
  'pnpm test',
  'pnpm build',
  'pnpm compliance:agco',
  'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:evidence',
  'pnpm compliance:agco:licensed',
  'AGCO_EVIDENCE_FILE=docs/compliance/agco-license-evidence.local.json pnpm compliance:agco:licensed',
  'git diff --check',
];

export const REQUIRED_PUBLIC_DOMAINS = ['247ibet.ca'];

export const REQUIRED_APPROVED_COMPONENTS = ['src/lib/ibet-brand.ts'];

export const ALLOWED_IGO_DIRECTORY_CATEGORIES = [
  'Casino',
  'Sports Betting',
  'Poker',
  'Bingo',
  'Betting Exchange',
];

export const REQUIRED_AGCO_REGISTRATION_TYPE = 'Internet Gaming Operator';

export const REQUIRED_IGO_JURISDICTION = 'Ontario';

/**
 * @typedef {{ pattern: RegExp, severity: 'P0' | 'P1' | 'P2', reason: string, exempt?: RegExp[] }} PublicCopyRule
 * @typedef {{ file: string, severity: 'P0' | 'P1' | 'P2', pattern: string, reason: string }} PublicCopyViolation
 * @typedef {{ code?: string, message?: string }} FileLoadError
 */

/** @type {PublicCopyRule[]} */
export const PUBLIC_COPY_RULES = [
  {
    pattern:
      /(?:247iBET[\s\S]{0,160}(?:AGCO\s+Licensed|iGaming\s+Ontario\s+registered|Ontario\s+regulated\s+operator)|(?:AGCO\s+Licensed|iGaming\s+Ontario\s+registered|Ontario\s+regulated\s+operator)[\s\S]{0,160}247iBET)/i,
    severity: 'P0',
    reason:
      'Public source must not assert 247iBET AGCO/iGaming Ontario status without approved evidence activation.',
  },
  {
    pattern: /AGCO\s+Licensed/i,
    severity: 'P0',
    reason: 'Public source must not assert AGCO licensing without approved evidence activation.',
    exempt: [/^guides\//, /best-betting-apps/, /regulated-vs-offshore/],
  },
  {
    pattern: /AGCO\s+Registry\s+Verified/i,
    severity: 'P0',
    reason: 'Public source must not assert AGCO registry verification without approved evidence activation.',
  },
  {
    pattern: /\bACGO\b/i,
    severity: 'P0',
    reason: 'Public source must not publish misspelled AGCO regulator references.',
  },
  {
    pattern: /Official\s+licensed\s+operator/i,
    severity: 'P0',
    reason: 'Public source must not assert official operator status without documentary proof.',
  },
  {
    pattern: /operates\s+within\s+the\s+iGaming\s+Ontario\s+regulated\s+framework/i,
    severity: 'P0',
    reason: 'Public source must not imply 247iBET operates under Ontario authorization.',
  },
  {
    pattern: /247iBET\s+platform\s+activity|247iBET\s+platform\s+showcase|247iBET\s+account/i,
    severity: 'P1',
    reason: 'Public source must not imply this repo owns player accounts or gaming-platform state.',
  },
  {
    pattern: /\bat\s+247iBET\b/i,
    severity: 'P1',
    reason: 'Public source must not imply first-party gaming/payment execution.',
  },
  {
    pattern: /We\s+offer\s+over\s+500\s+premium\s+casino\s+games|We\s+offer\s+extensive\s+pre-game\s+and\s+live\s+in-play\s+options/i,
    severity: 'P1',
    reason: 'Public source must not imply this repo or brand directly offers games or betting markets.',
  },
  {
    pattern: /our\s+senior\s+cashier\s+team|our\s+recommended\s+sites\s+are\s+processed\s+via\s+encrypted\s+Interac\s+channels/i,
    severity: 'P1',
    reason: 'Public source must not imply first-party cashier/payment operations or payment guarantees.',
  },
  {
    pattern: /Follow\s+our\s+step-by-step\s+instructions\s+for\s+fast,\s+secure,\s+and\s+CAD-native\s+casino\s+deposits/i,
    severity: 'P1',
    reason: 'Public source must not imply first-party deposit execution or guaranteed deposit speed/security.',
  },
  {
    pattern: /Our\s+documented\s+process\s+for\s+KYC,\s+payment,\s+and\s+withdrawal\s+verification|Our\s+methodology\s+for\s+KYC,\s+payout,\s+and\s+withdrawal-speed\s+checks/i,
    severity: 'P1',
    reason: 'Public source must not imply first-party KYC/payment/withdrawal testing.',
  },
  {
    pattern: /verified\s+fast\s+payout\s+records|Verified\s+payout\s+times|Instant\s+withdrawal\s+guaranteed|Guaranteed\s+payout/i,
    severity: 'P1',
    reason: 'Public source must not assert unsupported payout-speed or payout-completion guarantees.',
  },
  {
    pattern: /Best\s+No\s+Deposit\s+Extra\s+Spins\s+Canada\s+2026\s+\|\s+Verified\s+Offers|Find\s+the\s+most\s+reliable\s+no\s+deposit\s+extra\s+spins\s+in\s+Canada|Explore\s+our\s+welcome\s+offers/i,
    severity: 'P1',
    reason: 'Public source must not imply current offers are verified first-party promotions.',
  },
  {
    pattern: /Only\s+register\s+at\s+Ontario-regulated\s+operators\s+to\s+ensure\s+your\s+funds\s+and\s+personal\s+data\s+are\s+protected|deposits\s+are\s+always\s+secure/i,
    severity: 'P1',
    reason: 'Public source must not guarantee funds or personal-data protection.',
  },
  {
    pattern: /premier\s+Canadian\s+sportsbook|Canada'?s\s+premier\s+online\s+casino\s+and\s+sportsbook|Canadian\s+casino\s+and\s+sportsbook\s+—\s+check\s+current\s+availability/i,
    severity: 'P1',
    reason: 'Public source must not use operator-style casino/sportsbook positioning.',
  },
  {
    pattern: /Canada.?s\s+regulated\s+iGaming\s+authority|primary\s+authority\s+on\s+regulated\s+Canadian\s+iGaming/i,
    severity: 'P1',
    reason: 'Public source must not overstate authority or regulated-market status.',
  },
  {
    pattern: /Verified\s+Interac\s+e-Transfer\s+speed\s+benchmarks|empirical\s+payout\s+testing|Benchmark\s+data\s+for\s+withdrawal\s+speeds|15[–-]30\s+minutes\s+\(post-approval\)/i,
    severity: 'P1',
    reason: 'Public source must not assert unsupported payout benchmarking or exact speed claims.',
  },
  {
    pattern: /Lightning-fast\s+Interac\s+funding|Learn\s+about\s+our\s+rapid\s+Interac\s+deposit\s+and\s+withdrawal\s+processing/i,
    severity: 'P1',
    reason: 'Public source must not assert unsupported payment-speed or first-party processing claims.',
  },
  {
    pattern: /legally\s+serve\s+Canadians|operate\s+under\s+Kahnawake\s+licensing|AGCO-approved\s+new\s+casinos|licensed\s+operators\s+across\s+Ontario\s+and\s+Alberta|Discover\s+Licensed\s+Casinos/i,
    severity: 'P1',
    reason: 'Public source must not make broad licensing or legal-availability claims without current evidence.',
  },
];

const PUBLIC_COPY_ROUTE_EXEMPTIONS = [
  /^bonus-terms/,
  /^lab\//,
  /^admin\//,
];

const PUBLIC_TS_FILES = [
  'src/lib/authors.ts',
  'src/lib/ibet-brand.ts',
  'src/lib/site.ts',
  'src/lib/json-ld.ts',
  'src/lib/search-index.ts',
];

const PUBLIC_STATIC_COPY_FILES = [
  'static/llms.txt',
  'static/llms-full.txt',
  'static/manifest.json',
  'static/site.webmanifest',
  'static/bot.txt',
  'static/humans.txt',
];

/** @param {unknown} value */
function nonEmpty(value) {
  if (Array.isArray(value)) return value.length > 0 && value.every(nonEmpty);
  return typeof value === 'string' && value.trim() !== '' && value !== 'YYYY-MM-DD';
}

/** @param {unknown} value */
function containsPlaceholder(value) {
  if (Array.isArray(value)) return value.some(containsPlaceholder);
  if (typeof value !== 'string') return false;

  const normalized = value.trim().toLowerCase();
  return (
    normalized === 'yyyy-mm-dd' ||
    /^(?:tbd|tba|todo|unknown|pending|placeholder|not available|n\/a|na)$/.test(normalized) ||
    /\b(?:synthetic|mock|dummy|example\.invalid)\b/.test(normalized)
  );
}

/** @param {unknown} value */
function parseIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value ? null : date;
}

/** @param {string} brand */
function extractLicenceMetadata(brand) {
  return /licences:\s*\[([\s\S]*?)\]/m.exec(brand)?.[1] ?? '';
}

/**
 * @param {string} dir
 * @param {string[]} extensions
 * @returns {string[]}
 */
function walkFiles(dir, extensions) {
  /** @type {string[]} */
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkFiles(full, extensions));
    } else if (extensions.some((extension) => entry.endsWith(extension))) {
      results.push(full);
    }
  }
  return results;
}

/**
 * @param {string} relPath
 * @param {PublicCopyRule} rule
 */
function ruleExempted(relPath, rule) {
  return Array.isArray(rule.exempt) && rule.exempt.some((pattern) => pattern.test(relPath));
}

/**
 * @param {string} content
 * @param {string} relPath
 * @returns {PublicCopyViolation[]}
 */
export function evaluatePublicCopyText(content, relPath) {
  /** @type {PublicCopyViolation[]} */
  const violations = [];
  if (PUBLIC_COPY_ROUTE_EXEMPTIONS.some((pattern) => pattern.test(relPath))) return violations;

  for (const rule of PUBLIC_COPY_RULES) {
    if (ruleExempted(relPath, rule)) continue;
    if (rule.pattern.test(content)) {
      violations.push({
        file: relPath,
        severity: rule.severity,
        pattern: rule.pattern.source,
        reason: rule.reason,
      });
    }
  }

  return violations;
}

/**
 * @param {string} root
 * @returns {string[]}
 */
export function getPublicCopyComplianceFiles(root = process.cwd()) {
  const srcRoot = resolve(root, 'src');
  const routesDir = join(srcRoot, 'routes');
  const libDir = join(srcRoot, 'lib');
  const componentsDir = join(srcRoot, 'lib/components');
  const workflowsDir = join(srcRoot, 'workflows');

  return [
    ...new Set([
      ...walkFiles(routesDir, ['.svelte']),
      ...walkFiles(componentsDir, ['.svelte']),
      ...walkFiles(routesDir, ['.js', '.ts']),
      ...walkFiles(libDir, ['.js', '.ts']).filter((file) => !file.includes('/src/lib/server/')),
      ...walkFiles(workflowsDir, ['.js', '.ts']),
      ...PUBLIC_TS_FILES.map((file) => resolve(root, file)),
      ...PUBLIC_STATIC_COPY_FILES.map((file) => resolve(root, file)),
    ]),
  ];
}

/**
 * @param {string} root
 */
export function evaluatePublicCopyCompliance(root = process.cwd()) {
  const routesDir = resolve(root, 'src/routes');
  const files = getPublicCopyComplianceFiles(root);
  const violations = [];

  for (const file of files) {
    const relPath = file.startsWith(routesDir)
      ? relative(routesDir, file)
      : relative(root, file);
    violations.push(...evaluatePublicCopyText(readFileSync(file, 'utf8'), relPath));
  }

  return violations;
}

/** @param {any} evidence */
function requiredEvidenceEntries(evidence) {
  return [
    ['legalOperatorIdentity.legalEntityName', evidence.legalOperatorIdentity?.legalEntityName],
    [
      'legalOperatorIdentity.businessOrTradeNames',
      evidence.legalOperatorIdentity?.businessOrTradeNames,
    ],
    ['legalOperatorIdentity.approvedDomains', evidence.legalOperatorIdentity?.approvedDomains],
    ['agcoRegistration.registrationNumber', evidence.agcoRegistration?.registrationNumber],
    ['agcoRegistration.registrationType', evidence.agcoRegistration?.registrationType],
    ['agcoRegistration.effectiveDate', evidence.agcoRegistration?.effectiveDate],
    ['agcoRegistration.expiryOrRenewalDate', evidence.agcoRegistration?.expiryOrRenewalDate],
    [
      'agcoRegistration.officialDocumentReference',
      evidence.agcoRegistration?.officialDocumentReference,
    ],
    [
      'igamingOntarioOperatingAgreement.agreementReference',
      evidence.igamingOntarioOperatingAgreement?.agreementReference,
    ],
    [
      'igamingOntarioOperatingAgreement.approvedSites',
      evidence.igamingOntarioOperatingAgreement?.approvedSites,
    ],
    [
      'igamingOntarioOperatingAgreement.approvedBrands',
      evidence.igamingOntarioOperatingAgreement?.approvedBrands,
    ],
    [
      'igamingOntarioOperatingAgreement.jurisdictionScope',
      evidence.igamingOntarioOperatingAgreement?.jurisdictionScope,
    ],
    [
      'igamingOntarioOperatingAgreement.launchOrActivationConditions',
      evidence.igamingOntarioOperatingAgreement?.launchOrActivationConditions,
    ],
    [
      'ontarioGoLiveReadiness.agcoCertificateOfRegistrationReference',
      evidence.ontarioGoLiveReadiness?.agcoCertificateOfRegistrationReference,
    ],
    [
      'ontarioGoLiveReadiness.technologyComplianceConfirmationReference',
      evidence.ontarioGoLiveReadiness?.technologyComplianceConfirmationReference,
    ],
    [
      'ontarioGoLiveReadiness.regulatoryReportingSetupReference',
      evidence.ontarioGoLiveReadiness?.regulatoryReportingSetupReference,
    ],
    [
      'ontarioGoLiveReadiness.secureDataChannelSetupReference',
      evidence.ontarioGoLiveReadiness?.secureDataChannelSetupReference,
    ],
    [
      'ontarioGoLiveReadiness.goLiveApprovalOrConditionsReference',
      evidence.ontarioGoLiveReadiness?.goLiveApprovalOrConditionsReference,
    ],
    ['directoryReconciliation.listingName', evidence.directoryReconciliation?.listingName],
    [
      'directoryReconciliation.listingDateShownByIGO',
      evidence.directoryReconciliation?.listingDateShownByIGO,
    ],
    ['directoryReconciliation.categories', evidence.directoryReconciliation?.categories],
    [
      'directoryReconciliation.screenshotOrArchiveReference',
      evidence.directoryReconciliation?.screenshotOrArchiveReference,
    ],
    ['publicCopyApproval.approverNameOrRole', evidence.publicCopyApproval?.approverNameOrRole],
    ['publicCopyApproval.approvalDate', evidence.publicCopyApproval?.approvalDate],
    [
      'publicCopyApproval.approvedLicenceWording',
      evidence.publicCopyApproval?.approvedLicenceWording,
    ],
    [
      'publicCopyApproval.approvedBadgeOrLogoRules',
      evidence.publicCopyApproval?.approvedBadgeOrLogoRules,
    ],
    [
      'publicCopyApproval.approvedPagesOrComponents',
      evidence.publicCopyApproval?.approvedPagesOrComponents,
    ],
    ['releaseGate.releaseOwnerNameOrRole', evidence.releaseGate?.releaseOwnerNameOrRole],
    ['releaseGate.approvalDate', evidence.releaseGate?.approvalDate],
  ];
}

/**
 * @param {any} evidence
 * @param {string} brand
 * @param {{ requireApprovedEvidence?: boolean, requireCompleteEvidence?: boolean, today?: string | Date }} [options]
 */
export function evaluateAgcoEvidence(evidence, brand, options = {}) {
  const errors = [];
  const brandAgcoTrue = /agcoLicensed:\s*true/.test(brand);
  const brandAgcoFalse = /agcoLicensed:\s*false/.test(brand);
  const brandLicencesEmpty = /licences:\s*\[\s*\]/m.test(brand);
  const brandLicenceMetadata = extractLicenceMetadata(brand);
  const gateAllowsClaims = evidence.releaseGate?.mayPublishAgcoOrIGOClaims === true;
  const gateAllowsProfile = evidence.releaseGate?.maySetIbetProfileAgcoLicensedTrue === true;
  const requireApprovedEvidence = options.requireApprovedEvidence === true;
  const requireCompleteEvidence = options.requireCompleteEvidence === true;
  const evidenceMode = gateAllowsClaims || gateAllowsProfile || requireApprovedEvidence || requireCompleteEvidence;

  const missingEvidence = requiredEvidenceEntries(evidence)
    .filter(([, value]) => !nonEmpty(value))
    .map(([field]) => field);
  const placeholderEvidence = requiredEvidenceEntries(evidence)
    .filter(([, value]) => nonEmpty(value) && containsPlaceholder(value))
    .map(([field]) => field);

  const dateFields = [
    ['agcoRegistration.effectiveDate', evidence.agcoRegistration?.effectiveDate],
    ['agcoRegistration.expiryOrRenewalDate', evidence.agcoRegistration?.expiryOrRenewalDate],
    ['directoryReconciliation.listingDateShownByIGO', evidence.directoryReconciliation?.listingDateShownByIGO],
    ['publicCopyApproval.approvalDate', evidence.publicCopyApproval?.approvalDate],
    ['releaseGate.approvalDate', evidence.releaseGate?.approvalDate],
  ];

  const invalidDateFields = dateFields
    .filter(([, value]) => nonEmpty(value) && !parseIsoDate(value))
    .map(([field]) => field);

  const expiryDate = parseIsoDate(evidence.agcoRegistration?.expiryOrRenewalDate);
  const today = options.today ? new Date(options.today) : new Date();
  today.setUTCHours(0, 0, 0, 0);

  if (evidenceMode && invalidDateFields.length > 0) {
    errors.push(`approved-evidence mode requires valid YYYY-MM-DD dates: ${invalidDateFields.join(', ')}`);
  }

  if (evidenceMode && placeholderEvidence.length > 0) {
    errors.push(`approved-evidence mode rejects placeholder evidence values: ${placeholderEvidence.join(', ')}`);
  }

  if (evidenceMode && expiryDate && expiryDate < today) {
    errors.push('approved-evidence mode requires agcoRegistration.expiryOrRenewalDate to be current, not expired.');
  }

  const futureDateFields = [
    ['agcoRegistration.effectiveDate', parseIsoDate(evidence.agcoRegistration?.effectiveDate)],
    [
      'directoryReconciliation.listingDateShownByIGO',
      parseIsoDate(evidence.directoryReconciliation?.listingDateShownByIGO),
    ],
    ['publicCopyApproval.approvalDate', parseIsoDate(evidence.publicCopyApproval?.approvalDate)],
    ['releaseGate.approvalDate', parseIsoDate(evidence.releaseGate?.approvalDate)],
  ]
    .filter(([, date]) => date && date > today)
    .map(([field]) => field);

  if (evidenceMode && futureDateFields.length > 0) {
    errors.push(`approved-evidence mode requires evidence dates not to be future-dated: ${futureDateFields.join(', ')}`);
  }

  const releaseApprovalDate = parseIsoDate(evidence.releaseGate?.approvalDate);
  const releasePreconditionDates = [
    ['agcoRegistration.effectiveDate', parseIsoDate(evidence.agcoRegistration?.effectiveDate)],
    [
      'directoryReconciliation.listingDateShownByIGO',
      parseIsoDate(evidence.directoryReconciliation?.listingDateShownByIGO),
    ],
    ['publicCopyApproval.approvalDate', parseIsoDate(evidence.publicCopyApproval?.approvalDate)],
  ];
  const releaseApprovalBeforeFields = releasePreconditionDates
    .filter(([, date]) => releaseApprovalDate && date && releaseApprovalDate < date)
    .map(([field]) => field);

  if (evidenceMode && releaseApprovalBeforeFields.length > 0) {
    errors.push(
      `approved-evidence mode requires releaseGate.approvalDate to be on or after evidence approval dates: ${releaseApprovalBeforeFields.join(', ')}`,
    );
  }

  if (brandAgcoTrue && (!gateAllowsClaims || !gateAllowsProfile)) {
    errors.push('IBET_PROFILE.agcoLicensed is true but releaseGate does not allow licence/profile claims.');
  }


  if (requireCompleteEvidence && (!gateAllowsClaims || !gateAllowsProfile)) {
    errors.push(
      'complete-evidence mode required, but releaseGate does not allow both public claims and profile activation.',
    );
  }

  if (requireApprovedEvidence) {
    if (!gateAllowsClaims || !gateAllowsProfile) {
      errors.push(
        'approved-evidence mode required, but releaseGate does not allow both public claims and profile activation.',
      );
    }
    if (!brandAgcoTrue) {
      errors.push('approved-evidence mode requires IBET_PROFILE.agcoLicensed to be true.');
    }
    if (brandLicencesEmpty) {
      errors.push('approved-evidence mode requires IBET_PROFILE.licences to include approved licence metadata.');
    }

    const requiredBrandEvidence = [
      ['agcoRegistration.registrationNumber', evidence.agcoRegistration?.registrationNumber],
      ['agcoRegistration.registrationType', evidence.agcoRegistration?.registrationType],
      ['legalOperatorIdentity.legalEntityName', evidence.legalOperatorIdentity?.legalEntityName],
    ];

    const missingBrandEvidence = requiredBrandEvidence
      .filter(([, value]) => nonEmpty(value) && !brandLicenceMetadata.includes(String(value)))
      .map(([field]) => field);

    if (missingBrandEvidence.length > 0) {
      errors.push(
        `approved-evidence mode requires IBET_PROFILE licence metadata to match evidence fields: ${missingBrandEvidence.join(', ')}`,
      );
    }
  }

  const approvedLicenceWording = evidence.publicCopyApproval?.approvedLicenceWording;
  const requiredPublicWordingEvidence = [
    ['agcoRegistration.registrationNumber', evidence.agcoRegistration?.registrationNumber],
    ['agcoRegistration.registrationType', evidence.agcoRegistration?.registrationType],
    ['legalOperatorIdentity.legalEntityName', evidence.legalOperatorIdentity?.legalEntityName],
  ];
  const missingPublicWordingEvidence = requiredPublicWordingEvidence
    .filter(
      ([, value]) =>
        evidenceMode &&
        nonEmpty(approvedLicenceWording) &&
        nonEmpty(value) &&
        !String(approvedLicenceWording).includes(String(value)),
    )
    .map(([field]) => field);

  if (missingPublicWordingEvidence.length > 0) {
    errors.push(
      `approved-evidence mode requires publicCopyApproval.approvedLicenceWording to match evidence fields: ${missingPublicWordingEvidence.join(', ')}`,
    );
  }

  if (evidenceMode && missingEvidence.length > 0) {
    const evidenceContext = requireApprovedEvidence
      ? 'approved-evidence mode requires complete evidence'
      : 'releaseGate enables claims but required evidence is incomplete';
    errors.push(`${evidenceContext}: ${missingEvidence.join(', ')}`);
  }

  if (!gateAllowsClaims && !gateAllowsProfile) {
    if (!brandAgcoFalse) {
      errors.push('releaseGate is disabled, but IBET_PROFILE.agcoLicensed is not explicitly false.');
    }
    if (!brandLicencesEmpty) {
      errors.push('releaseGate is disabled, but IBET_PROFILE.licences is not empty.');
    }
  }

  if (evidence.directoryReconciliation?.directoryUrl !== OFFICIAL_IGO_DIRECTORY_URL) {
    errors.push(
      'directoryReconciliation.directoryUrl must point to the official iGaming Ontario regulated market directory.',
    );
  }

  const businessOrTradeNames = Array.isArray(evidence.legalOperatorIdentity?.businessOrTradeNames)
    ? evidence.legalOperatorIdentity.businessOrTradeNames
    : [];
  const approvedBrands = Array.isArray(evidence.igamingOntarioOperatingAgreement?.approvedBrands)
    ? evidence.igamingOntarioOperatingAgreement.approvedBrands
    : [];
  const expectedListingNames = new Set([...businessOrTradeNames, ...approvedBrands]);
  const directoryListingName = evidence.directoryReconciliation?.listingName;

  if (
    evidenceMode &&
    nonEmpty(directoryListingName) &&
    !expectedListingNames.has(directoryListingName)
  ) {
    errors.push(
      'approved-evidence mode requires directoryReconciliation.listingName to match an approved brand or business/trade name.',
    );
  }

  /** @type {string[]} */
  const directoryCategories = Array.isArray(evidence.directoryReconciliation?.categories)
    ? evidence.directoryReconciliation.categories
    : [];
  const invalidDirectoryCategories = directoryCategories.filter(
    (category) => !ALLOWED_IGO_DIRECTORY_CATEGORIES.includes(category),
  );

  if (
    evidenceMode &&
    invalidDirectoryCategories.length > 0
  ) {
    errors.push(
      `approved-evidence mode requires directoryReconciliation.categories to use iGO directory categories: ${ALLOWED_IGO_DIRECTORY_CATEGORIES.join(', ')}`,
    );
  }

  const registrationType = evidence.agcoRegistration?.registrationType;
  if (
    evidenceMode &&
    nonEmpty(registrationType) &&
    registrationType !== REQUIRED_AGCO_REGISTRATION_TYPE
  ) {
    errors.push(
      `approved-evidence mode requires agcoRegistration.registrationType to be ${REQUIRED_AGCO_REGISTRATION_TYPE}.`,
    );
  }

  const jurisdictionScope = Array.isArray(evidence.igamingOntarioOperatingAgreement?.jurisdictionScope)
    ? evidence.igamingOntarioOperatingAgreement.jurisdictionScope
    : [];

  if (
    evidenceMode &&
    jurisdictionScope.length > 0 &&
    !jurisdictionScope.includes(REQUIRED_IGO_JURISDICTION)
  ) {
    errors.push(
      `approved-evidence mode requires igamingOntarioOperatingAgreement.jurisdictionScope to include ${REQUIRED_IGO_JURISDICTION}.`,
    );
  }

  const approvedDomains = Array.isArray(evidence.legalOperatorIdentity?.approvedDomains)
    ? evidence.legalOperatorIdentity.approvedDomains
    : [];
  const approvedSites = Array.isArray(evidence.igamingOntarioOperatingAgreement?.approvedSites)
    ? evidence.igamingOntarioOperatingAgreement.approvedSites
    : [];
  const missingApprovedDomains = REQUIRED_PUBLIC_DOMAINS.filter(
    (domain) => !approvedDomains.includes(domain) || !approvedSites.includes(domain),
  );

  if (evidenceMode && missingApprovedDomains.length > 0) {
    errors.push(
      `approved-evidence mode requires approved domain/site coverage for: ${missingApprovedDomains.join(', ')}`,
    );
  }

  const approvedPagesOrComponents = Array.isArray(evidence.publicCopyApproval?.approvedPagesOrComponents)
    ? evidence.publicCopyApproval.approvedPagesOrComponents
    : [];
  const missingApprovedComponents = REQUIRED_APPROVED_COMPONENTS.filter(
    (component) => !approvedPagesOrComponents.includes(component),
  );

  if (evidenceMode && missingApprovedComponents.length > 0) {
    errors.push(
      `approved-evidence mode requires publicCopyApproval.approvedPagesOrComponents to include: ${missingApprovedComponents.join(', ')}`,
    );
  }

  const mustRun = Array.isArray(evidence.releaseGate?.mustRun) ? evidence.releaseGate.mustRun : [];
  const missingReleaseCommands = REQUIRED_RELEASE_COMMANDS.filter((command) => !mustRun.includes(command));

  if (evidenceMode && missingReleaseCommands.length > 0) {
    errors.push(
      `approved-evidence mode requires releaseGate.mustRun to include: ${missingReleaseCommands.join(', ')}`,
    );
  }

  const posture = requireCompleteEvidence
    ? 'complete-evidence rehearsal mode'
    : gateAllowsClaims || gateAllowsProfile
      ? 'approved-evidence mode'
      : 'no-documentary-proof mode';
  return { errors, posture };
}

/**
 * @param {string} evidencePath
 * @returns {{ evidence: unknown, error: null } | { evidence: null, error: string }}
 */
export function loadAgcoEvidenceFile(evidencePath) {
  try {
    return {
      evidence: JSON.parse(readFileSync(evidencePath, 'utf8')),
      error: null,
    };
  } catch (error) {
    const fileError = /** @type {FileLoadError} */ (error);

    if (fileError.code === 'ENOENT') {
      return {
        evidence: null,
        error:
          `evidence file not found at ${evidencePath}; create docs/compliance/agco-license-evidence.local.json from the template or set AGCO_EVIDENCE_FILE to an approved private evidence file`,
      };
    }

    if (error instanceof SyntaxError) {
      return {
        evidence: null,
        error: `evidence file is not valid JSON at ${evidencePath}: ${error.message}`,
      };
    }

    throw error;
  }
}

/**
 * @param {{
 *   root?: string,
 *   env?: Record<string, string | undefined>,
 *   args?: string[],
 *   stdout?: (message: string) => void,
 *   stderr?: (message: string) => void,
 * }} [options]
 * @returns {0 | 1}
 */
export function runAgcoEvidenceGate(options = {}) {
  const root = options.root || process.cwd();
  const env = options.env || process.env;
  const args = options.args || process.argv;
  const stdout = options.stdout || console.log;
  const stderr = options.stderr || console.error;
  const evidencePath = resolve(
    root,
    env.AGCO_EVIDENCE_FILE || 'docs/compliance/agco-license-evidence.template.json',
  );
  const brandPath = resolve(root, 'src/lib/ibet-brand.ts');
  const loadedEvidence = loadAgcoEvidenceFile(evidencePath);

  if (loadedEvidence.error) {
    stderr(`AGCO evidence gate failed: ${loadedEvidence.error}`);
    return 1;
  }

  const brand = readFileSync(brandPath, 'utf8');
  const requireApprovedEvidence =
    env.AGCO_REQUIRE_APPROVED === '1' || args.includes('--require-approved');
  const requireCompleteEvidence =
    env.AGCO_REQUIRE_COMPLETE_EVIDENCE === '1' || args.includes('--require-complete-evidence');

  const result = evaluateAgcoEvidence(loadedEvidence.evidence, brand, {
    requireApprovedEvidence,
    requireCompleteEvidence,
  });
  const publicCopyViolations = evaluatePublicCopyCompliance(root);

  for (const error of result.errors) {
    stderr(`AGCO evidence gate failed: ${error}`);
  }

  for (const violation of publicCopyViolations) {
    stderr(
      `AGCO public-copy gate failed: [${violation.severity}] ${violation.file} matched /${violation.pattern}/ — ${violation.reason}`,
    );
  }

  if (result.errors.length > 0 || publicCopyViolations.length > 0) {
    return 1;
  }

  stdout(`AGCO evidence gate passed (${result.posture}) using ${evidencePath}.`);
  return 0;
}

function main() {
  process.exitCode = runAgcoEvidenceGate();
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
