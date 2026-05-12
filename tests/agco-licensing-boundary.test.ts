import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { IBET_PROFILE } from '../src/lib/ibet-brand';

const ROOT = resolve(__dirname, '..');

function readProjectFile(path: string): string {
  return readFileSync(resolve(ROOT, path), 'utf-8');
}

function normalize(value: string): string {
  return value.replace(/\s+/g, ' ');
}

const AFFIRMATIVE_LICENSING_CLAIMS = [
  /247iBET\s+is\s+(?:AGCO\s+licensed|licensed\s+by\s+AGCO)/i,
  /247iBET\s+is\s+(?:iGaming\s+Ontario\s+registered|registered\s+with\s+iGaming\s+Ontario)/i,
  /247iBET\s+(?:operates|is\s+operating)\s+(?:within|under)\s+the\s+iGaming\s+Ontario\s+regulated\s+framework/i,
  /official\s+licensed\s+operator/i,
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
    expect(content).toContain('Minimum age: 19+ in Ontario and Alberta');
    expect(content).toContain('iGaming Ontario — Self-Exclusion');
    expect(content).toContain('AGLC — Voluntary Self-Exclusion Program');
    expect(content).toContain('Gamblers Anonymous Canada');
    expect(content).not.toContain('100% private and secure');
  });

  it('documents the no-proof boundary and official iGO source checks', () => {
    const content = normalize(readProjectFile('docs/compliance-evidence.md'));

    expect(content).toContain('Do not represent jdzd.com or 247iBET as AGCO-licensed');
    expect(content).toContain('iGaming Ontario regulated market directory');
    expect(content).toContain('Noindex retained; copy reframed as archived creative only');
    expect(content).toContain('Self-exclusion/support links for Ontario and Alberta');
  });
});
