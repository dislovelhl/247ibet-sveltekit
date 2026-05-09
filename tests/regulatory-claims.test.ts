import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { IBET_PROFILE } from '../src/lib/ibet-brand';

const SRC_ROOT = resolve(__dirname, '..', 'src');
const SELF_REF = /247ibet|247iBET|iBET 247|ibet247/i;
const REG_CLAIM = /AGCO|iGaming Ontario/;
const PROXIMITY_LINES = 5;

const SKIP_FILES = new Set([
  resolve(SRC_ROOT, 'lib/site.ts'),
  resolve(SRC_ROOT, 'lib/ibet-brand.ts'),
]);

interface Violation {
  file: string;
  line: number;
  excerpt: string;
}

function listFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      out.push(...listFiles(full));
    } else if (stat.isFile() && (full.endsWith('.svelte') || full.endsWith('.ts'))) {
      out.push(full);
    }
  }
  return out;
}

function hasAllowlistMarker(content: string): boolean {
  // Match HTML `<!-- regulatory-claim:context ... -->` (Svelte) or `// regulatory-claim:context ...` (TS)
  // anywhere in the first 500 chars. Inline explanation text after the marker is allowed.
  const head = content.slice(0, 500);
  return /(<!--\s*regulatory-claim:context\b[^>]*-->|\/\/\s*regulatory-claim:context\b)/.test(head);
}

function findViolations(filePath: string): Violation[] {
  if (SKIP_FILES.has(filePath)) return [];

  const content = readFileSync(filePath, 'utf-8');
  if (!REG_CLAIM.test(content)) return [];
  if (!SELF_REF.test(content)) return [];
  if (hasAllowlistMarker(content)) return [];

  const lines = content.split('\n');
  const violations: Violation[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (!REG_CLAIM.test(lines[i])) continue;

    const start = Math.max(0, i - PROXIMITY_LINES);
    const end = Math.min(lines.length, i + PROXIMITY_LINES + 1);
    const window = lines.slice(start, end).join('\n');

    if (SELF_REF.test(window)) {
      violations.push({
        file: relative(resolve(__dirname, '..'), filePath),
        line: i + 1,
        excerpt: lines[i].trim().slice(0, 120),
      });
    }
  }

  return violations;
}

describe('regulatory-claim build gate (proximity-based)', () => {
  it('IBET_PROFILE has no verified Ontario licence (gate is enforced)', () => {
    const licences = IBET_PROFILE.licences as readonly { jurisdiction?: string; verified?: boolean }[];
    const hasVerifiedOnLicence = licences.some(
      (l) => l.jurisdiction === 'ON' && l.verified === true
    );
    // If this flips to true (license obtained + verified), the gate below is bypassed
    // and the test below becomes a no-op. Update IBET_PROFILE.agcoLicensed too.
    expect(hasVerifiedOnLicence).toBe(false);
    expect(IBET_PROFILE.agcoLicensed).toBe(false);
  });

  it('no source file places a 247iBET self-reference within 5 lines of an AGCO/iGO claim', () => {
    const allFiles = listFiles(SRC_ROOT);
    const allViolations = allFiles.flatMap(findViolations);

    if (allViolations.length > 0) {
      const summary = allViolations
        .slice(0, 25)
        .map((v) => `  ${v.file}:${v.line}  ${v.excerpt}`)
        .join('\n');
      const more = allViolations.length > 25 ? `\n  …and ${allViolations.length - 25} more` : '';
      throw new Error(
        `Found ${allViolations.length} regulatory-claim co-occurrence(s) (247iBET self-ref within ±${PROXIMITY_LINES} lines of AGCO/iGO).\n` +
          `Resolution options for each:\n` +
          `  (a) reword to review-context voice (per docs/CONTENT_MODEL.md)\n` +
          `  (b) move the AGCO claim to a clearly-different DOM region (>5 lines from self-ref)\n` +
          `  (c) delete if the claim has no editorial purpose\n` +
          `  (d) add HTML comment <!-- regulatory-claim:context --> at top of file (last resort)\n\n` +
          `Top violations:\n${summary}${more}`
      );
    }

    expect(allViolations).toEqual([]);
  });
});
