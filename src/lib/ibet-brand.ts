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
  tagline: 'Canada\'s premier online casino and sportsbook — fast Interac payouts, live dealer, and exclusive bonuses.',
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
      label: 'Fast Interac Payouts',
      detail: 'Typically 15-30 minutes after approval. One of the fastest payout casinos in Canada.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
    {
      icon: 'Gamepad2',
      label: '500+ Casino Games',
      detail: 'Slots, blackjack, roulette, baccarat, and live dealer from top providers.',
      accent: 'text-yellow-400',
      bg: 'bg-yellow-500/8 border-yellow-500/20',
    },
    {
      icon: 'Trophy',
      label: 'Full Sportsbook',
      detail: 'NHL, NBA, NFL, UFC, soccer — competitive odds, live betting, and parlay options.',
      accent: 'text-green-400',
      bg: 'bg-green-500/8 border-green-500/20',
    },
    {
      icon: 'MonitorPlay',
      label: 'Live Dealer 24/7',
      detail: 'Real dealers, real tables, real-time. Blackjack, roulette, baccarat — available around the clock.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
  ],
  trustSignals: [
    'Canada\'s trusted online casino and sportsbook',
    'Licensed and regulated — confirm availability in your province',
    'Fast Interac payouts, typically 15-30 minutes after approval',
    'Transparent bonus terms — wagering, expiry, and limits clearly shown',
    'Responsible gaming tools built into every account',
  ],
  trustPanel: [
    {
      label: 'Licence',
      value: 'Licensed & Regulated',
      detail: 'Confirm operator availability and licensing with your provincial regulator.',
    },
    {
      label: 'Payments',
      value: 'Fast Interac Payouts',
      detail: 'Canadian-first banking. Most payouts complete in 15-30 minutes after approval.',
    },
    {
      label: 'Security',
      value: '256-bit SSL encrypted',
      detail: 'Your account, payments, and identity are protected with bank-grade encryption.',
    },
    {
      label: 'Fair Play',
      value: 'Certified RNG & Live Dealer',
      detail: 'All games use certified random number generators. Live dealer tables streamed in real time.',
    },
  ],
  pros: [
    'Fast Interac payouts — typically 15-30 minutes',
    'Clear, upfront bonus terms',
    'Responsible gaming tools built into every account',
    '500+ casino games from top providers',
    'Full sportsbook with NHL, NBA, NFL, UFC, and live betting',
  ],
  cons: ['Must be 19+ (or 18+ in select provinces). See full T&Cs before playing.'],
} as const;

export const IBET_CREATIVE_SNAPSHOTS = [
  {
    slug: 'welcome-bonus',
    group: 'bonus',
    title: 'Welcome Bonus',
    headline: 'Get C$2000 bonus back + 10 free spins',
    period: 'Welcome offer — see cashier for full terms',
    summary:
      'New players get up to C$2000 bonus back plus 10 free spins on sign-up. Check deposit minimums, wagering requirements, eligible games, and expiry in the cashier before opting in.',
    image: '/images/creatives/welcome-bonus-back.png',
    alt: '247BET welcome bonus: Get $2000 bonus back plus 10 free spins.',
    observedText: ['GET $2000 BONUS BACK', '+10 FREE SPINS', '247BET.ca'],
  },
  {
    slug: 'every-deposit-bonus',
    group: 'bonus',
    title: 'Every Deposit Bonus',
    headline: 'C$1000 bonus every deposit',
    period: 'Ongoing — see cashier for full terms',
    summary:
      'Get a C$1000 bonus on every deposit. Confirm whether the cap applies per deposit, per day, or over a campaign window in the cashier before depositing.',
    image: '/images/creatives/every-deposit-bonus.png',
    alt: '247BET: $1000 bonus every deposit.',
    observedText: ['$1000 BONUS EVERY DEPOSIT'],
  },
  {
    slug: 'mothers-day-double-rewards',
    group: 'bonus',
    title: 'Mother\'s Day Double Rewards',
    headline: 'Deposit C$50, get C$50 bonus',
    period: 'May 1–10 — see cashier for full terms',
    summary:
      'Deposit C$50 and get a C$50 bonus during our Mother\'s Day Double Rewards event (May 1–10). Confirm wagering, opt-in requirements, and eligible games in the cashier.',
    image: '/images/creatives/mothers-day-double-rewards.png',
    alt: 'Mother\'s Day Double Rewards: Deposit $50 Get $50 Bonus. May 1st – May 10.',
    observedText: ['Mother\'s Day Double Rewards', 'Deposit $50 Get $50 Bonus', 'May. 1st – May. 10'],
  },
  {
    slug: 'live-bonus-unified-mma',
    group: 'sportsbook',
    title: 'Unified MMA Live Bonus',
    headline: 'Live Bonus event for Unified MMA 63',
    period: 'Sep. 26 at Rebel, Toronto',
    summary:
      'We sponsored Unified MMA 63 with a Live Bonus event at Rebel Toronto on Sep. 26. See the sportsbook for current fight-night promotions.',
    image: '/images/creatives/live-bonus-unified-mma.png',
    alt: '247iBET Unified MMA 63: Live Bonus. Sep. 26 Rebel Toronto.',
    observedText: ['LIVE BONUS', 'SEP.26', 'REBEL · TORONTO', '247iBET UNIFIED MMA 63'],
  },
  {
    slug: 'our-champ-cody-chovancek',
    group: 'sportsbook',
    title: 'Our Champ: Cody Chovancek',
    headline: 'Proud sponsor of Cody Chovancek',
    period: 'Ongoing sponsorship',
    summary:
      '247iBET is a proud sponsor of Unified MMA athlete Cody Chovancek. Follow his journey and bet on his fights in our sportsbook.',
    image: '/images/creatives/our-champ-cody-chovancek.jpg',
    alt: '247BET Our Champ: Cody Chovancek and Unified MMA.',
    observedText: ['OUR CHAMP', 'CODY CHOVANCEK', '247BET.ca', '247BET UNIFIED MMA'],
  },
  {
    slug: 'unified-mma-sponsorship',
    group: 'sportsbook',
    title: 'Unified MMA Sponsorship',
    headline: 'Official sponsor of Unified MMA',
    period: 'Ongoing sponsorship',
    summary:
      '247iBET is an official sponsor of Unified MMA. Check our sportsbook for fight-night odds and promotions.',
    image: '/images/creatives/unified-mma-sponsorship.jpg',
    alt: 'Unified MMA sponsorship: 247BET and partner logos.',
    observedText: ['UNIFIED MMA SPONSORSHIP', '247BET'],
  },
  {
    slug: 'chase-the-big-win',
    group: 'event',
    title: 'Chase the Big Win',
    headline: 'Motorcycle supershow event',
    period: 'Jan. 9–11 at Toronto International Centre',
    summary:
      '247iBET was at the Toronto International Centre Jan. 9–11 for the Chase the Big Win motorcycle supershow. Check our events page for upcoming appearances.',
    image: '/images/creatives/chase-the-big-win.png',
    alt: 'Chase the Big Win event: Jan. 9–11, Toronto International Centre.',
    observedText: ['CHASE THE BIG WIN', 'JAN. 9–11', 'TORONTO | INTERNATIONAL CENTRE'],
  },
  {
    slug: 'play-for-pleasure',
    group: 'event',
    title: 'Play for Pleasure',
    headline: 'TABOO event',
    period: 'Oct. 12–19 at Toronto International Centre',
    summary:
      'We were at the TABOO Toronto event Oct. 12–19. Stay tuned for our next event appearance.',
    image: '/images/creatives/play-for-pleasure.png',
    alt: 'TABOO event: Play for Pleasure. Oct. 12–19, Toronto International Centre.',
    observedText: ['PLAY FOR PLEASURE', 'OCT. 12–19', 'TORONTO INTERNATIONAL CENTRE', '22BET TABOO'],
  },
  {
    slug: 'spin-your-fantasy',
    group: 'event',
    title: 'Spin Your Fantasy',
    headline: 'TABOO Edmonton event',
    period: 'Nov. 14–16 at Edmonton Expo Centre',
    summary:
      'We were at TABOO Edmonton Nov. 14–16. Check our events page for upcoming appearances near you.',
    image: '/images/creatives/spin-your-fantasy.png',
    alt: 'TABOO Edmonton: Spin Your Fantasy. Nov. 14–16, Edmonton Expo Centre.',
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
  primary: 'Play Now',
  casino: 'Play Casino',
  sports: 'Bet Now',
  bonus: 'Claim Bonus',
  deposit: 'Fast Payouts',
  register: 'Sign Up',
  fastPayout: 'Get Paid Fast',
} as const;

export const IBET_DISCLAIMER =
  '19+ to play (18+ in select provinces). Play responsibly. T&Cs apply.';
