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
      '## AGCO/iGaming Ontario operational handoff',
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

  it('separates AGCO/iGaming Ontario operational readiness from public-web licence display', () => {
    for (const phrase of [
      'AGCO/iGaming Ontario operational handoff',
      'Store public-safe registration metadata in `src/lib/ibet-brand.ts` only after `pnpm compliance:agco:licensed` passes',
      'Hold the AGCO Certificate of Registration',
      'Maintain the iGO operating agreement',
      'Own ITL certification',
      'technology compliance confirmation',
      'regulatory reporting setup',
      'secure data/channel setup',
      'go-live approval or conditions',
      'player-risk monitoring',
      'AML submissions',
      'Public regulatory status API',
      'verification-first no-proof posture',
    ]) {
      expect(contract).toContain(phrase);
    }
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
    expect(IBET_CTA.deposit).toBe('Deposit Checklist');
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

describe('public copy avoids fake operational gaming-platform state', () => {
  const publicCopyFiles = [
    'src/lib/components/ReadyToPlay.svelte',
    'src/lib/components/PayoutProgress.svelte',
    'src/routes/+page.svelte',
    'src/routes/casino-bonuses-canada/+page.svelte',
    'src/routes/casino/+page.svelte',
    'src/routes/casino/baccarat/+page.svelte',
    'src/routes/deposit/+page.svelte',
    'src/routes/events/[slug]/+page.svelte',
    'src/routes/faq/+page.svelte',
    'src/routes/fast-payouts/+page.svelte',
    'src/routes/free-bets-canada/+page.svelte',
    'src/routes/sportsbook-bonuses-canada/+page.svelte',
    'src/routes/interac/+page.svelte',
    'src/routes/interac/deposit/+page.svelte',
    'src/routes/interac/withdraw/+page.svelte',
    'src/routes/interac-casino-canada/+page.svelte',
    'src/routes/payments/[slug]/+page.svelte',
    'src/routes/best-sports-betting-sites-canada/+page.svelte',
    'src/routes/guides/blackjack-online-canada/+page.svelte',
    'src/routes/guides/how-to-withdraw-casino-winnings/+page.svelte',
    'src/routes/guides/interac-e-transfer-casino/+page.svelte',
    'src/routes/guides/new-casino-canada/+page.svelte',
    'src/routes/guides/ontario-casino-operator-checks/+page.svelte',
    'src/routes/guides/paypal-casino-canada/+page.svelte',
    'src/routes/guides/interac-e-transfer-casino/+page.svelte',
    'src/routes/guides/single-game-betting-canada/+page.svelte',
    'src/routes/guides/slots-tips-canada/+page.svelte',
    'src/routes/guides/upcoming-alberta-sportsbooks/+page.svelte',
    'src/routes/gambling-laws-canada/+page.svelte',
    'src/routes/news/vcu-ai-launch-2026/+page.svelte',
    'src/routes/new-online-casinos-canada/+page.svelte',
    'src/routes/ontario/+page.svelte',
    'src/routes/responsible-gambling/+page.svelte',
    'src/routes/security/+page.svelte',
    'src/routes/tools/payout-time-checker/+page.svelte',
    'src/routes/best-betting-apps-canada/+page.svelte',
    'src/routes/ontario/online-casino/+page.svelte',
    'src/routes/guides/regulated-vs-offshore/+page.svelte',
    'src/routes/reviews/[slug]/+page.svelte',
    'src/routes/sportsbook/+page.svelte',
    'src/routes/sportsbook/cfl/+page.svelte',
    'src/routes/sportsbook/football/+page.svelte',
    'src/routes/sportsbook/live-betting/+page.svelte',
    'src/routes/sportsbook/mobile/+page.svelte',
    'src/routes/sportsbook/nba/+page.svelte',
    'src/routes/sportsbook/nhl/+page.svelte',
    'src/routes/sportsbook/parlays/+page.svelte',
    'src/routes/sportsbook/soccer/+page.svelte',
    'src/routes/sportsbook/ufc/+page.svelte',
    'src/routes/tools/parlay-calculator/+page.svelte',
  ];

  it('does not describe this public web repo as processing deposits, withdrawals, games, or bets', () => {
    const combinedCopy = publicCopyFiles.map((file) => readRepoFile(file)).join('\n');

    for (const forbidden of [
      /Interac payouts at 247iBET/i,
      /Interac e-Transfer payouts at 247iBET/i,
      /processed within 15[-–]30 minutes/i,
      /arrives within 15[-–]30 minutes/i,
      /typically received in 15[-–]30 mins/i,
      /247iBET testing across/i,
      /14 of 18 withdrawals within 4 hours/i,
      /fastest CAD/i,
      /full 247iBET casino/i,
      /minimum Interac e-Transfer deposit at 247iBET/i,
      /247iBET supports Interac e-Transfer for deposits and withdrawals/i,
      /247iBET offers (?:full single-game markets|live dealer blackjack|promotional credits)/i,
      /247iBET exclusively uses RNG-certified game providers/i,
      /247iBET requires (?:age verification|minimum 95\.5% average RTP)/i,
      /we process deposits instantly/i,
      /our team approves the withdrawal request/i,
      /our cashier flow/i,
      /Join 247iBET/i,
      /CREATE ACCOUNT/i,
      /Treat them as a current snapshot/i,
      /real-time editorial scoring/i,
      /500\+ Casino Games/i,
      /Fully Licensed/i,
      /Fully Regulated/i,
      /Your premier destination for Ontario regulated iGaming/i,
      /We verify licence status in real-time/i,
      /test KYC processing time/i,
      /confirm minimum payout thresholds match AGCO standards/i,
      /View AGCO-Licensed Casinos/i,
      /47\+ Ontario-licensed operators/i,
      /legally serve Canadians/i,
      /operate under Kahnawake licensing/i,
      /AGCO-approved new casinos/i,
      /licensed operators across Ontario and Alberta/i,
      /Discover Licensed Casinos/i,
      /Interac payout speed and KYC friction benchmarking at scale/i,
      /247iBET first-party payout testing/i,
      /Platforms processed Interac payouts < 4 hours in live Q1 testing/i,
      /14 \/ 18/i,
      /verified processing times/i,
      /Live odds tested/i,
      /Field-tested mobile rankings/i,
      /We rate live betting UX, Interac deposits/i,
      /your 247iBET account/i,
      /Our live casino is available 24\/7/i,
      /live odds instantly/i,
      /ctaText="Bet Now"/i,
      /Play baccarat online in Canada at 247iBET/i,
      /withdrawals take at 247iBET/i,
      /fast, secure CAD payouts/i,
      /payment methods at 247iBET/i,
      /payment method guide for Canadian players at 247iBET/i,
      /247iBET reviewers used real-money accounts/i,
      /completed standard KYC/i,
      /bank account name[\s\S]{0,120}247iBET\s+account/i,
      /open a new 247iBET account/i,
      /withdraw my winnings from 247iBET/i,
      /Interac withdrawals at 247iBET/i,
      /247iBET safe play protocols/i,
      /Canada'?s online casino and sportsbook/i,
      /at 247iBET/i,
      /Kahnawake Gaming Commission-licensed platforms[\s\S]{0,160}serving Canadian players/i,
      /not illegal for players under current Canadian law/i,
      /offshore-licensed casinos[\s\S]{0,120}(?:Malta Gaming Authority|Kahnawake)/i,
      /Bet Single Games at 247iBET/i,
      /LIVE NETWORK STATUS/i,
      /Funds Sent/i,
      /\bFunds in your (?:bank )?account\b/i,
    ]) {
      expect(combinedCopy).not.toMatch(forbidden);
    }

    expect(combinedCopy).toMatch(/separate gaming platform|separate operating platform/i);
    expect(combinedCopy).toMatch(/verify current|verify live|verify availability/i);
  });
});
