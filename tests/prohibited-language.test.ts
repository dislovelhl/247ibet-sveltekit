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
  join(SRC_ROOT, 'lib/ibet-brand.ts'),
  join(SRC_ROOT, 'lib/site.ts'),
  join(SRC_ROOT, 'lib/json-ld.ts'),
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
