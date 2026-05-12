/**
 * Prohibited Language Gate
 *
 * Scans all public-facing Svelte route files for compliance-prohibited phrases.
 * Any match fails the test. This acts as a CI gate against AGCO/AGLC regulatory regressions.
 *
 * Severity classification:
 *   P0 — Remove immediately. Ontario public inducement / false licensing claim.
 *   P1 — Remove before launch. Unsupported performance/stat claim or KYC-light language.
 *   P2 — Flag for review. May be acceptable in specific educational contexts only.
 *
 * Exempt routes (educational / archived / noindex context):
 *   - /bonus-terms (noindex, archived — separate audit item)
 *   - /design-system, /lab/* (internal)
 *   - /admin/* (internal)
 */

import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SRC_ROOT = resolve(process.cwd(), 'src');
const ROUTES_DIR = join(SRC_ROOT, 'routes');
const COMPONENTS_DIR = join(SRC_ROOT, 'lib/components');
const PUBLIC_TS_FILES = [
  join(SRC_ROOT, 'lib/authors.ts'),
  join(SRC_ROOT, 'lib/ibet-brand.ts'),
  join(SRC_ROOT, 'lib/site.ts'),
  join(SRC_ROOT, 'lib/json-ld.ts'),
  join(SRC_ROOT, 'lib/search-index.ts'),
];

/** Routes excluded from scanning (pattern match on relative path) */
const EXEMPT_ROUTE_PATTERNS = [
  /^bonus-terms/,          // noindex/archived — tracked separately
  /^design-system/,        // internal reference page
  /^lab\//,                // internal exploration
  /^admin\//,              // internal dashboards
  /^\+layout/,             // layout files — disclosure in layout is intentional
];

// ---------------------------------------------------------------------------
// Prohibited phrase registry
// ---------------------------------------------------------------------------

interface ProhibitedPhrase {
  pattern: RegExp;
  severity: 'P0' | 'P1' | 'P2';
  reason: string;
  exempt?: RegExp[]; // route patterns that may contain this phrase
}

const PROHIBITED: ProhibitedPhrase[] = [
  // --- P0: False licensing / Ontario public inducement ---
  {
    pattern: /Ontario\s+&\s+Alberta\s+Licensed/i,
    severity: 'P0',
    reason: 'Asserts specific provincial licensing without regulator verification.',
  },
  {
    pattern: /AGCO\s+Licensed/i,
    severity: 'P0',
    reason: 'Asserts AGCO licensing status about 247iBET. Use "Verify licensing" or "Independent guide" instead.',
    // Exempt: educational guides that reference AGCO licensing as a criterion to look for,
    // not as a claim about 247iBET itself. E.g., "AGCO-licensed picks to compare" is educational.
    exempt: [/^guides\//, /best-betting-apps/, /regulated-vs-offshore/],
  },
  {
    pattern: /Official\s+licensed\s+operator/i,
    severity: 'P0',
    reason: 'Asserts official licensed operator status without documentary proof.',
  },
  {
    pattern: /\bClaim\s+now\b/i,
    severity: 'P0',
    reason:
      'Ontario public-entry pages must not display direct bonus inducement CTAs. Use "Review terms" or "Compare eligibility" instead.',
  },
  {
    pattern: /\bClaim\s+bonus\b/i,
    severity: 'P0',
    reason: 'Direct bonus inducement CTA prohibited on Ontario public-entry pages.',
  },
  {
    pattern: /Welcome\s+bonus\b/i,
    severity: 'P2',
    reason:
      'Ontario inducement display rule applies to welcome bonus promotional framing on public CTAs. Educational comparison tables and guide content are acceptable with clear wagering disclosure.',
    // Allowed in: educational comparison tables, guides, FAQ, bonus explanation pages.
    // Prohibited in: CTA buttons, hero section eyebrow labels, promotional offer cards.
    exempt: [/^faq/, /^guides\//, /bonuses-canada/, /free-bets/, /new-player/, /no-deposit/, /sportsbook-bonuses/, /^\+page\.svelte$/],
  },
  {
    pattern: /Join\s+club\b/i,
    severity: 'P0',
    reason: 'Bet club / loyalty promotion CTA — treated as Ontario public inducement.',
  },
  {
    pattern: /\bNew\s+customer\s+offer\b/i,
    severity: 'P0',
    reason:
      'New customer offer / welcome inducement label. Ontario public-entry pages must not surface these.',
  },

  // --- P1: Unsupported performance/stat claims ---
  {
    pattern: /No\s+[Vv]erification\s+[Rr]equired/,
    severity: 'P1',
    reason:
      'KYC-light claim. All operators may require identity, age, location, or payment verification.',
  },
  {
    pattern: /Guaranteed\s+payout/i,
    severity: 'P2',
    reason: 'As an operator guarantee, unsupported. Acceptable in editorial guides when describing a category of feature — must be framed as "what operators call" not as a site claim.',
    exempt: [/^guides\//, /^faq/],
  },
  {
    pattern: /Instant\s+withdrawal\s+guaranteed/i,
    severity: 'P1',
    reason: 'Instant withdrawal guarantee is unsupported and misleading.',
  },
  {
    pattern: /lightning-fast\s+CAD\s+payouts/i,
    severity: 'P1',
    reason:
      'Unsupported absolute payout speed claim. Use "Interac withdrawals after operator approval" framing.',
  },
  {
    pattern: /verified\s+security\s+and\s+licensing/i,
    severity: 'P0',
    reason: 'Combines security and licensing verification claims without documentary proof.',
  },
  {
    pattern: /regulated\s+and\s+secure\s+gaming\s+environment/i,
    severity: 'P1',
    reason: 'Reads like an operator authorization and security guarantee claim.',
  },
  {
    pattern: /instant\s+Interac\s+withdrawals/i,
    severity: 'P1',
    reason: 'Absolute payout-speed claim. Use operator-approval and timing-varies wording instead.',
  },
  {
    pattern: /players\s+online/i,
    severity: 'P1',
    reason: 'Implies live user telemetry without a verified real-time data source.',
  },
  {
    pattern: /\b\d[\d,]*\+\s+Canadian\s+Players\b/i,
    severity: 'P1',
    reason: 'User-count claim requires verifiable audience data.',
  },
  {
    pattern: /Canada'?s\s+premier\s+online\s+casino\s+and\s+sportsbook/i,
    severity: 'P1',
    reason: 'Unsupported operator-style superiority claim.',
  },
  {
    pattern: /certified\s+and\s+secure\s+gaming\s+environment/i,
    severity: 'P1',
    reason: 'Certification/security claim without evidence or scope.',
  },
  {
    pattern: /certified\s+RNG\s*(?:&|and)\s*live\s+dealer/i,
    severity: 'P1',
    reason: 'Certification claim about game fairness/live dealer offering without proof.',
  },
  {
    pattern: /operates\s+within\s+the\s+iGaming\s+Ontario\s+regulated\s+framework/i,
    severity: 'P0',
    reason: 'Implies 247iBET itself operates under Ontario authorization.',
  },
  {
    pattern: /follows\s+AGCO\s*\([^)]*\)?\s*standards/i,
    severity: 'P0',
    reason: 'Implies 247iBET itself is held to AGCO operator standards rather than discussing them editorially.',
  },
  {
    pattern: /fastest\s+available\s+to\s+Canadian\s+players/i,
    severity: 'P1',
    reason: 'Unsupported comparative superlative for payout speed.',
  },
  {
    pattern: /zero\s+unnecessary\s+delays/i,
    severity: 'P1',
    reason: 'Promise of zero delays is a performance guarantee that cannot be assured.',
  },
  {
    pattern: /Canada.s\s+#1\s+Rated/i,
    severity: 'P1',
    reason: 'Unsupported superlative claim. Use "Independent Canadian iGaming Review" instead.',
  },
  {
    pattern: /Canadian\s+Licensed/i,
    severity: 'P1',
    reason:
      'Generic "Canadian Licensed" claim. Specific province and regulator must be confirmed. Use "Verify Licensing" instead.',
    exempt: [/responsible-gambling/],  // Educational mention of what "Canadian licensed" means is OK
  },
  {
    pattern: /legally\s+serve\s+Canadians/i,
    severity: 'P1',
    reason:
      'Broad offshore/operator legality claim without province-specific legal evidence. Use verification-first provincial/regulator language.',
  },
  {
    pattern: /operate\s+under\s+Kahnawake\s+licensing/i,
    severity: 'P1',
    reason:
      'Broad Kahnawake licensing/availability claim needs operator-specific evidence and should not be stated as a general public-web guarantee.',
  },
  {
    pattern: /AGCO-approved\s+new\s+casinos/i,
    severity: 'P1',
    reason:
      'Use registered/listed/current-verification language rather than implying blanket AGCO approval of new casinos.',
  },
  {
    pattern: /licensed\s+operators\s+across\s+Ontario\s+and\s+Alberta/i,
    severity: 'P1',
    reason:
      'Implies cross-province operator licensing scope without current documentary support. Use launch-watch/verify-current-status language.',
  },
  {
    pattern: /Discover\s+Licensed\s+Casinos/i,
    severity: 'P1',
    reason:
      'SEO title overstates licensing discovery; use verify-licensing language unless exact current approved operators are sourced.',
  },
  {
    pattern: /Best\s+odds\s+guarantee/i,
    severity: 'P1',
    reason: 'Best odds guarantee is an unsupported comparative claim.',
  },
  {
    pattern: /Exclusive\s+bonuses/i,
    severity: 'P1',
    reason:
      '"Exclusive bonuses" implies specific offers not substantiated by the editorial guide. Use promotional guide language.',
  },
  {
    pattern: /Institutional-grade\s+tracking/i,
    severity: 'P1',
    reason: 'Unverifiable superlative claim about data methodology.',
  },
  {
    pattern: /Play\s+in\s+Ontario/i,
    severity: 'P1',
    reason:
      'Province-specific CTA framing that may read as a call-to-action inducement on Ontario public pages. Use neutral language.',
  },
  {
    pattern: /\bat\s+247iBET\b/i,
    severity: 'P1',
    reason:
      'Reads like first-party operational casino/sportsbook/payment execution. Use public-guide or separate-platform wording.',
  },
  {
    pattern: /\b247iBET\s+account\b/i,
    severity: 'P1',
    reason:
      'Implies this public web repo owns player account state. Use separate-platform/operator account wording.',
  },
  {
    pattern: /247iBET\s+reviewers\s+used\s+real-money\s+accounts/i,
    severity: 'P1',
    reason:
      'Implies first-party real-money testing and KYC/payment execution without documentary evidence.',
  },
  {
    pattern: /247iBET\s+platform\s+activity/i,
    severity: 'P1',
    reason:
      'Ambiguous first-party platform wording. Use public-site, editorial, or separate-platform wording.',
  },
  {
    pattern: /247iBET\s+platform\s+showcase/i,
    severity: 'P1',
    reason:
      'Ambiguous first-party platform showcase label. Use public-guide or separate-platform wording.',
  },
  {
    pattern: /every\s+layer\s+of\s+the\s+247iBET\s+experience/i,
    severity: 'P1',
    reason:
      'Implies first-party operational security ownership. Use public guide or separate-platform controls wording.',
  },
  {
    pattern: /industry-leading\s+standards\s+to\s+protect\s+your\s+data\s+and\s+funds/i,
    severity: 'P1',
    reason:
      'Unsupported security/funds protection claim. Use educational security-control language.',
  },
  {
    pattern: /deposits\s+are\s+always\s+secure/i,
    severity: 'P1',
    reason:
      'Absolute funds-safety guarantee. Use regulator/operator verification language instead.',
  },
  {
    pattern: /Our\s+team\s+maintains\s+and\s+verifies\s+all\s+platform\s+standards\s+on\s+247iBET/i,
    severity: 'P1',
    reason:
      'Implies first-party platform standards and operational verification ownership.',
  },
  {
    pattern: /fast\s+payments,\s+and\s+responsible\s+gaming\s+for\s+all\s+Canadian\s+players/i,
    severity: 'P1',
    reason:
      'Implied operator/payment/RG performance claim from author metadata.',
  },
  {
    pattern: /premier\s+Canadian\s+sportsbook/i,
    severity: 'P1',
    reason:
      'Operator-style sportsbook positioning without documentary licence evidence. Use sportsbook education wording.',
  },
  {
    pattern: /Lightning-fast\s+Interac\s+funding/i,
    severity: 'P1',
    reason:
      'Unsupported payment-speed and funding claim. Use Interac funding-check education wording.',
  },
  {
    pattern: /247iBET\s+earns\s+revenue\s+from\s+platform\s+activity/i,
    severity: 'P1',
    reason:
      'Ambiguous platform-activity revenue wording. Use public-site CTA routing or owned brand surfaces wording.',
  },
  {
    pattern: /247iBET\s+monitoring\s+operator\s+licensing\s+progress/i,
    severity: 'P1',
    reason:
      'Can read like live licence tracking. Use editorial watchlist/source-check context.',
  },
  {
    pattern: /iGaming\s+intelligence\s+platform\s+tracking\s+Ontario\s+and\s+Alberta\s+operator\s+markets/i,
    severity: 'P1',
    reason:
      'Can overstate live regulatory/operator tracking. Use editorial intelligence/site wording.',
  },
  {
    pattern: /Learn\s+about\s+our\s+rapid\s+Interac\s+deposit\s+and\s+withdrawal\s+processing/i,
    severity: 'P1',
    reason: 'Can imply first-party payment processing. Use operator-dependent timing language.',
  },
  {
    pattern: /Explore\s+our\s+welcome\s+offers/i,
    severity: 'P1',
    reason: 'Can imply first-party bonus offers. Use bonus-guide language.',
  },
  {
    pattern: /Our\s+platform\s+provides\s+independent\s+reviews/i,
    severity: 'P1',
    reason: 'Can frame this repo as the gaming platform. Use public-site framing.',
  },
  {
    pattern: /Search\s+247iBET\s+for\s+platform\s+features/i,
    severity: 'P1',
    reason: 'Can imply gaming-platform features. Use public-site feature language.',
  },
  {
    pattern: /Canadian\s+casino\s+and\s+sportsbook\s+—\s+check\s+current\s+availability/i,
    severity: 'P1',
    reason: 'Can imply 247iBET is the casino/sportsbook. Use guide/operator-availability wording.',
  },
  {
    pattern: /We\s+offer\s+over\s+500\s+premium\s+casino\s+games/i,
    severity: 'P1',
    reason: 'Can imply this repo or brand directly offers casino game execution.',
  },
  {
    pattern: /We\s+offer\s+extensive\s+pre-game\s+and\s+live\s+in-play\s+options/i,
    severity: 'P1',
    reason: 'Can imply this repo or brand directly offers sportsbook markets.',
  },
  {
    pattern: /Verified\s+payout\s+times/i,
    severity: 'P1',
    reason: 'Can imply payout timing has been verified as a first-party operational fact.',
  },
  {
    pattern: /Only\s+register\s+at\s+Ontario-regulated\s+operators\s+to\s+ensure\s+your\s+funds\s+and\s+personal\s+data\s+are\s+protected/i,
    severity: 'P1',
    reason: 'Overstates protection guarantees; use source-check and terms-review wording.',
  },
  {
    pattern: /verified\s+fast\s+payout\s+records\s+in\s+our\s+comparative\s+operator\s+matrix/i,
    severity: 'P1',
    reason: 'Can imply payout speed verification beyond public-source review.',
  },
  {
    pattern: /our\s+recommended\s+sites\s+are\s+processed\s+via\s+encrypted\s+Interac\s+channels/i,
    severity: 'P1',
    reason: 'Can imply first-party site recommendation and payment-processing guarantees.',
  },
  {
    pattern: /from\s+our\s+senior\s+cashier\s+team/i,
    severity: 'P1',
    reason: 'Can imply this repo owns cashier or withdrawal operations.',
  },
  {
    pattern: /Follow\s+our\s+step-by-step\s+instructions\s+for\s+fast,\s+secure,\s+and\s+CAD-native\s+casino\s+deposits/i,
    severity: 'P1',
    reason: 'Can imply first-party deposit execution and guaranteed secure deposit speed.',
  },
  {
    pattern: /Our\s+documented\s+process\s+for\s+KYC,\s+payment,\s+and\s+withdrawal\s+verification/i,
    severity: 'P1',
    reason: 'Can imply first-party KYC/payment/withdrawal verification rather than editorial review.',
  },
  {
    pattern: /Our\s+methodology\s+for\s+KYC,\s+payout,\s+and\s+withdrawal-speed\s+checks/i,
    severity: 'P1',
    reason: 'Can imply operational payout/KYC testing rather than public-source editorial review.',
  },
  {
    pattern: /Best\s+No\s+Deposit\s+Extra\s+Spins\s+Canada\s+2026\s+\|\s+Verified\s+Offers/i,
    severity: 'P1',
    reason: 'Can imply current offers are verified promotional terms.',
  },
  {
    pattern: /Find\s+the\s+most\s+reliable\s+no\s+deposit\s+extra\s+spins\s+in\s+Canada/i,
    severity: 'P1',
    reason: 'Can imply verified current offers instead of educational offer-term review.',
  },

  // --- P2: Needs review (may be acceptable in non-inducement context) ---
  {
    pattern: /\bOdds\s+boost\b/i,
    severity: 'P2',
    reason:
      'Odds boost promotional language. Acceptable in comparative/educational context only; not as a CTA headline.',
    exempt: [/sportsbook\//, /bonus-terms/, /casino-bonuses/, /^guides\//, /^faq/, /^\+page\.svelte$/],
  },
  {
    pattern: /Weekly\s+bet\s+perks/i,
    severity: 'P2',
    reason: 'Loyalty promotion language. Must be educational, not promotional.',
  },
];

// ---------------------------------------------------------------------------
// File utilities
// ---------------------------------------------------------------------------

function walkDir(dir: string, allowedExtensions = ['.svelte']): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full, allowedExtensions));
    } else if (allowedExtensions.some((ext) => entry.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

function relativeToSrc(file: string): string {
  return relative(SRC_ROOT, file);
}

function isExempt(relPath: string, exemptPatterns: RegExp[]): boolean {
  return exemptPatterns.some((p) => p.test(relPath));
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

const allPublicFiles = [
  ...walkDir(ROUTES_DIR, ['.svelte']),
  ...walkDir(COMPONENTS_DIR, ['.svelte']),
  ...PUBLIC_TS_FILES,
];

describe('Prohibited language gate — compliance', () => {
  for (const rule of PROHIBITED) {
    it(`[${rule.severity}] "${rule.pattern.source}" must not appear in public pages`, () => {
      const violations: string[] = [];

      for (const file of allPublicFiles) {
        const rel = file.startsWith(ROUTES_DIR) ? relative(ROUTES_DIR, file) : relativeToSrc(file);

        // Skip globally exempt routes
        if (EXEMPT_ROUTE_PATTERNS.some((p) => p.test(rel))) continue;

        // Skip rule-specific exempt routes
        if (rule.exempt && isExempt(rel, rule.exempt)) continue;

        const content = readFileSync(file, 'utf-8');
        if (rule.pattern.test(content)) {
          violations.push(rel);
        }
      }

      if (violations.length > 0) {
        expect.fail(
          `[${rule.severity}] Prohibited phrase "${rule.pattern.source}" found in:\n` +
          violations.map((v) => `  - ${v}`).join('\n') +
          `\n\nReason: ${rule.reason}\n` +
          `Fix: Replace per compliance-evidence.md guidance.`,
        );
      }
    });
  }
});
