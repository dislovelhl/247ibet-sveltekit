// Ported from lib/ibet-brand.ts — @/ → $lib/
import { PARTNER, SITE } from '$lib/site';

/**
 * Robustly derives the login URL from a partner home URL.
 * It handles trailing '/home' or trailing slashes to ensure a clean '/login' path.
 */
export function deriveLoginUrl(partnerUrl: string): string {
  const url = partnerUrl.trim();
  const base = url.endsWith('/home')
    ? url.slice(0, -5)
    : url.endsWith('/')
      ? url.slice(0, -1)
      : url;
  return `${base}/login`;
}

export const IBET_URLS = {
  register: PARTNER.url,
  casino: PARTNER.casinoUrl,
  deposit: `${SITE.url}/deposit`,
  login: deriveLoginUrl(PARTNER.url),
  rg: `${SITE.url}/responsible-gambling`,
} as const;

export const IBET_PROFILE = {
  name: '247iBET',
  tagline: 'Independent Canadian iGaming review covering casino, sportsbook, and Interac payouts.',
  rating: null,
  logo: '/images/brand/logo.png',
  established: 2020,
  licences: [],
  agcoLicensed: false,
  minAge: 18,
  withdrawalSpeed: 'Interac payouts typically 15-30 minutes after approval',
  paymentMethods: ['Interac'],
  provinces: ['ON', 'AB', 'BC', 'MB', 'SK', 'QC', 'NS', 'NB', 'PE', 'NL'],
  features: [
    {
      icon: 'Zap',
      label: 'Interac timing review',
      detail: 'Published timing should be checked against the operator cashier before depositing.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
    {
      icon: 'Gamepad2',
      label: 'Casino catalogue review',
      detail: 'Verify the current game count, providers, and live dealer availability.',
      accent: 'text-yellow-400',
      bg: 'bg-yellow-500/8 border-yellow-500/20',
    },
    {
      icon: 'Trophy',
      label: 'Sportsbook market review',
      detail: 'Compare odds, limits, market depth, parlays, and live betting rules.',
      accent: 'text-green-400',
      bg: 'bg-green-500/8 border-green-500/20',
    },
    {
      icon: 'MonitorPlay',
      label: 'Live dealer checks',
      detail: 'Confirm live table availability, limits, providers, and mobile performance.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
  ],
  trustSignals: [
    'Independent Canadian iGaming guide',
    'Licensing status should be confirmed with the operator and provincial regulator',
    'Interac payout timing explained with approval caveats',
    'Bonus terms reviewed for wagering, expiry, and limits',
    'Responsible-gaming resources highlighted',
  ],
  trustPanel: [
    {
      label: 'Licence',
      value: 'Verify before playing',
      detail: 'Confirm operator availability and licensing with your provincial regulator.',
    },
    {
      label: 'Payments',
      value: 'Secure Interac',
      detail: 'Canadian-first banking focused on Interac e-Transfer.',
    },
    {
      label: 'Security',
      value: '256-bit SSL encrypted',
      detail: 'Encrypted account, payment, and identity-verification flow.',
    },
    {
      label: 'Editorial stance',
      value: 'No pay-to-rank placement',
      detail: 'Product placement follows player value, payments, and market coverage.',
    },
  ],
  pros: [
    'Interac payout timing explained clearly',
    'Clear, transparent bonus terms',
    'Responsible-gaming tools surfaced before signup',
    'Game catalogue and live dealer checks',
    'Sportsbook market checks for major events',
  ],
  cons: ['Licensing and bonus details must be confirmed with the operator before depositing'],
} as const;

export const IBET_CREATIVE_SNAPSHOTS = [
  {
    slug: 'welcome-bonus',
    group: 'bonus',
    title: 'Welcome Bonus',
    headline: 'Get C$2000 bonus back + 10 free spins',
    period: 'Image-observed creative; no clear date shown on the artwork',
    summary:
      'A welcome-offer creative showed C$2000 bonus back plus 10 free spins. Treat it as a reviewed snapshot and verify deposit minimums, wagering, eligible games, and expiry inside the cashier before opting in.',
    image: '/images/creatives/welcome-bonus-back.png',
    alt: '247BET welcome bonus creative reading Get $2000 bonus back plus 10 free spins beside Cody Chovancek.',
    observedText: ['GET $2000 BONUS BACK', '+10 FREE SPINS', '247BET.ca'],
  },
  {
    slug: 'every-deposit-bonus',
    group: 'bonus',
    title: 'Every Deposit Bonus',
    headline: 'C$1000 bonus every deposit',
    period: 'Image-observed creative; no clear date shown on the artwork',
    summary:
      'A hockey-themed creative promoted a C$1000 bonus on every deposit. The image does not clarify whether the cap applies per deposit, per day, or over a campaign window, so confirm the cashier wording before depositing.',
    image: '/images/creatives/every-deposit-bonus.png',
    alt: '247BET hockey-themed creative reading $1000 bonus every deposit.',
    observedText: ['$1000 BONUS EVERY DEPOSIT'],
  },
  {
    slug: 'mothers-day-double-rewards',
    group: 'bonus',
    title: 'Mother’s Day Double Rewards',
    headline: 'Deposit C$50, get C$50 bonus',
    period: 'Image-observed creative dated May 1–10',
    summary:
      'The Mother’s Day creative was clearer than the other bonus images: it advertised Deposit C$50, Get C$50 Bonus and showed a May 1–10 campaign window. Fine print still was not legible enough to confirm wagering, opt-in, or product eligibility.',
    image: '/images/creatives/mothers-day-double-rewards.png',
    alt: 'Mother’s Day Double Rewards creative reading Deposit $50 Get $50 Bonus with a May 1st to May 10 date range.',
    observedText: ['Mother’s Day Double Rewards', 'Deposit $50 Get $50 Bonus', 'May. 1st – May. 10'],
  },
  {
    slug: 'live-bonus-unified-mma',
    group: 'sportsbook',
    title: 'Unified MMA Live Bonus Creative',
    headline: 'Live Bonus event creative for Unified MMA 63',
    period: 'Image-observed creative dated Sep. 26 at Rebel, Toronto',
    summary:
      'This combat-sports creative used the phrase Live Bonus alongside 247iBET and Unified MMA 63 branding. No amount or offer mechanics were visible, so it is better treated as event marketing context than a usable bonus rule.',
    image: '/images/creatives/live-bonus-unified-mma.png',
    alt: '247iBET Unified MMA 63 event creative reading Live Bonus and Sep. 26 Rebel Toronto.',
    observedText: ['LIVE BONUS', 'SEP.26', 'REBEL · TORONTO', '247iBET UNIFIED MMA 63'],
  },
  {
    slug: 'our-champ-cody-chovancek',
    group: 'sportsbook',
    title: 'Our Champ / Cody Chovancek',
    headline: 'Athlete endorsement-style creative',
    period: 'Image-observed creative; no date shown',
    summary:
      'This artwork highlighted Cody Chovancek and 247BET.ca / Unified MMA branding. It did not show a claimable bonus, so we treat it as brand-and-athlete marketing rather than a specific offer.',
    image: '/images/creatives/our-champ-cody-chovancek.jpg',
    alt: '247BET Our Champ creative featuring Cody Chovancek and Unified MMA branding.',
    observedText: ['OUR CHAMP', 'CODY CHOVANCEK', '247BET.ca', '247BET UNIFIED MMA'],
  },
  {
    slug: 'unified-mma-sponsorship',
    group: 'sportsbook',
    title: 'Unified MMA Sponsorship',
    headline: 'Sponsorship and partner-logo creative',
    period: 'Image-observed creative; no date shown',
    summary:
      'A sponsorship banner tied 247BET to Unified MMA and other partner logos. It is useful as sportsbook-adjacent brand context, but it does not disclose a player offer or bonus terms.',
    image: '/images/creatives/unified-mma-sponsorship.jpg',
    alt: 'Unified MMA sponsorship creative with 247BET and partner logos.',
    observedText: ['UNIFIED MMA SPONSORSHIP', '247BET'],
  },
  {
    slug: 'chase-the-big-win',
    group: 'event',
    title: 'Chase the Big Win',
    headline: 'Motorcycle supershow event creative',
    period: 'Image-observed creative dated Jan. 9–11 at Toronto International Centre',
    summary:
      'This image looked like an event booth or experiential-marketing creative rather than a cashier bonus. No amount or claim instructions were readable, so we classify it as event collateral only.',
    image: '/images/creatives/chase-the-big-win.png',
    alt: 'Promotional event creative reading Chase the Big Win with Toronto International Centre dates.',
    observedText: ['CHASE THE BIG WIN', 'JAN. 9–11', 'TORONTO | INTERNATIONAL CENTRE'],
  },
  {
    slug: 'play-for-pleasure',
    group: 'event',
    title: 'Play for Pleasure',
    headline: 'TABOO event creative',
    period: 'Image-observed creative dated Oct. 12–19 at Toronto International Centre',
    summary:
      'The artwork referenced a TABOO event and read Play for Pleasure. It appears to be event promotion rather than a 247iBET bonus, so we include it for completeness but not as a live offer.',
    image: '/images/creatives/play-for-pleasure.png',
    alt: 'TABOO event creative reading Play for Pleasure and showing October dates at Toronto International Centre.',
    observedText: ['PLAY FOR PLEASURE', 'OCT. 12–19', 'TORONTO INTERNATIONAL CENTRE', '22BET TABOO'],
  },
  {
    slug: 'spin-your-fantasy',
    group: 'event',
    title: 'Spin Your Fantasy',
    headline: 'TABOO Edmonton event creative',
    period: 'Image-observed creative dated Nov. 14–16 at Edmonton Expo Centre',
    summary:
      'Another TABOO event-style creative, this time tied to Edmonton. It contains no clear bonus amount or terms, so it works as marketing collateral context rather than offer copy.',
    image: '/images/creatives/spin-your-fantasy.png',
    alt: 'TABOO Edmonton event creative reading Spin Your Fantasy with Edmonton Expo Centre dates.',
    observedText: ['SPIN YOUR FANTASY', 'NOV. 14–16', 'EDMONTON EXPO CENTRE', '20BET TABOO'],
  },
] as const;

export const IBET_PROMO_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(({ group }) => group === 'bonus');
export const IBET_SPORTSBOOK_CREATIVE_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(
  ({ group }) => group === 'sportsbook'
);
export const IBET_EVENT_CREATIVE_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(
  ({ group }) => group === 'event'
);

export const IBET_CTA = {
  primary: 'Visit Partner Site',
  casino: 'Explore Casino',
  sports: 'Explore Sportsbook',
  bonus: 'Check Bonus Terms',
  deposit: 'Compare Payouts',
  register: 'Visit Partner Site',
  fastPayout: 'See Payout Details',
} as const;

export const IBET_DISCLAIMER =
  '18+/19+ depending on province. Play responsibly. T&Cs apply. ' +
  '247iBET is an independent guide and may earn commission from partner links. ' +
  'Confirm eligibility and licensing before depositing.';
