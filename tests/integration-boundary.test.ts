import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { IBET_CTA, IBET_PROFILE } from '../src/lib/ibet-brand';

function readRepoFile(path: string): string {
  return readFileSync(resolve(process.cwd(), path), 'utf-8');
}

const contractPath = 'docs/integration/gaming-platform-contract.md';
const contract = readRepoFile(contractPath);
const architecture = readRepoFile('docs/ARCHITECTURE.md');
const contentModel = readRepoFile('docs/CONTENT_MODEL.md');
const readme = readRepoFile('README.md');

describe('gaming platform integration boundary docs', () => {
  it('keeps the required integration contract sections', () => {
    for (const heading of [
      '## Important architecture clarification',
      '## Production positioning',
      '## Ownership matrix',
      '## Expected API integration points',
      '## Backend-dependency labels',
      '## Security assumptions',
      '## Required environment variables',
      '## Failure behavior',
      '## Launch blockers',
    ]) {
      expect(contract).toContain(heading);
    }
  });

  it('documents frontend-owned, shared, platform-owned, and explicitly not-owned boundaries', () => {
    expect(contract).toContain('Frontend web repo owns');
    expect(contract).toContain('Shared / handoff responsibility');
    expect(contract).toContain('Separate gaming platform owns');
    expect(contract).toContain('Explicitly not owned by this repo');
  });

  it('documents all requested handoff and display integration points', () => {
    for (const phrase of [
      'Signup / registration handoff',
      'Login handoff',
      'Operator CTA handoff',
      'Promotions / bonus data',
      'Payment method display data',
      'Responsible gaming links',
      'User session handoff',
      'Analytics events',
      'Future content/personalization APIs',
    ]) {
      expect(contract).toContain(phrase);
    }
  });

  it('states that the public site can launch before the gaming backend is connected', () => {
    expect(contract).toContain(
      'The site can launch as a brand/acquisition platform before the gaming backend is connected.',
    );
  });
});

describe('core docs positioning', () => {
  it('frames the repo as the public web and integration shell, not the gaming product', () => {
    const combinedDocs = [readme, architecture, contentModel, contract].join('\n');

    expect(combinedDocs).toContain('public web');
    expect(combinedDocs).toContain('separate gaming platform');
    expect(combinedDocs).toContain('not the gaming product');
    expect(combinedDocs).toContain('not describe this repo as');
  });
});

describe('central brand config avoids repo-owned gaming claims', () => {
  const profileText = [
    IBET_PROFILE.tagline,
    IBET_PROFILE.withdrawalSpeed,
    ...IBET_PROFILE.features.flatMap((feature) => [feature.label, feature.detail]),
    ...IBET_PROFILE.trustSignals,
    ...IBET_PROFILE.trustPanel.flatMap((panel) => [panel.label, panel.value, panel.detail]),
    ...IBET_PROFILE.pros,
    ...IBET_PROFILE.cons,
  ].join(' ');

  const ctaText = Object.values(IBET_CTA).join(' ');
  const centralText = `${profileText} ${ctaText}`;

  it('keeps repo-owned account, cashier, sportsbook, and game execution claims out of shared copy', () => {
    expect(centralText).not.toMatch(/our cashier|our sportsbook|our platform uses bank-grade/i);
    expect(centralText).not.toMatch(/built into every 247iBET account/i);
    expect(centralText).not.toMatch(
      /500\+ premium casino games|full sportsbook with competitive live odds/i,
    );
  });

  it('uses handoff/guide CTAs instead of transactional operator CTAs', () => {
    expect(IBET_CTA.primary).toBe('Visit Platform');
    expect(IBET_CTA.casino).toBe('Explore Casino Guide');
    expect(IBET_CTA.sports).toBe('Explore Sportsbook Guide');
    expect(IBET_CTA.deposit).toBe('Compare Payout Guidance');
    expect(IBET_CTA.register).toBe('Start Signup Handoff');

    expect(ctaText).not.toMatch(/Play Now|Play Casino|Bet Now|Fast Payouts|Get Paid Fast/i);
  });

  it('keeps educational caveats while assigning execution to the separate platform', () => {
    expect(profileText).toContain('operator approval');
    expect(profileText).toContain('separate gaming platform');
    expect(profileText).toContain('without repo-owned game execution');
    expect(profileText).toContain('without repo-owned odds execution');
  });
});
