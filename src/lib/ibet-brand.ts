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
  tagline:
    'Public 247iBET web platform covering casino guides, sportsbook education, Interac payment-method guidance, and safe handoff paths to the separate gaming platform.',
  rating: null,
  logo: '/images/brand/logo.png',
  established: 2020,
  licences: [],
  agcoLicensed: false,
  minAge: 18,
  withdrawalSpeed:
    'Interac payouts may complete after operator approval, with timing varying by KYC, bonus review, and bank processing',
  paymentMethods: ['Interac'],
  provinces: ['ON', 'AB', 'BC', 'MB', 'SK', 'QC', 'NS', 'NB', 'PE', 'NL'],
  features: [
    {
      icon: 'Zap',
      label: 'Interac payment guidance',
      detail:
        'Interac withdrawals may complete after operator approval, but timing varies with KYC, account review, and bank processing.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
    {
      icon: 'Gamepad2',
      label: 'Casino guide coverage',
      detail:
        'Guides to slots, blackjack, roulette, baccarat, and live dealer formats; real game execution belongs to the separate gaming platform.',
      accent: 'text-yellow-400',
      bg: 'bg-yellow-500/8 border-yellow-500/20',
    },
    {
      icon: 'Trophy',
      label: 'Sportsbook guide coverage',
      detail:
        'Education for NHL, NBA, NFL, UFC, soccer, odds formats, live-betting concepts, and parlays; odds execution belongs to the separate gaming platform.',
      accent: 'text-green-400',
      bg: 'bg-green-500/8 border-green-500/20',
    },
    {
      icon: 'MonitorPlay',
      label: 'Live dealer coverage',
      detail:
        'Guidance on blackjack, roulette, baccarat, and other live dealer formats commonly offered by operators.',
      accent: 'text-[#4A9EBF]',
      bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20',
    },
  ],
  trustSignals: [
    'Interac payment-method guidance with approval and bank-processing caveats clearly explained',
    'Editorial focus on safer-play tools, payout terms, and operator transparency',
    'Archived creative terms are framed as verification-required, not current public offers',
    'Responsible-gambling education and links to account-level controls on the separate gaming platform',
    'Casino and sportsbook guides with platform handoff routes clearly separated',
  ],
  trustPanel: [
    {
      label: 'Security',
      value: '256-bit SSL encrypted',
      detail:
        'This public web layer uses secure transport and safe-link practices; player account, payment, and identity controls belong to the separate gaming platform.',
    },
    {
      label: 'Payments',
      value: 'Interac payment guidance',
      detail:
        'We explain operator approval, KYC review, and bank-side timing so readers know why payouts can vary.',
    },
    {
      label: 'Fair Play',
      value: 'Game fairness and live dealer explainers',
      detail:
        'We describe common RNG and live dealer concepts in educational terms rather than making certification claims about operators.',
    },
    {
      label: 'Support',
      value: 'Support and contact guidance',
      detail:
        'Public support content routes users to contact, responsible-gambling, and platform support resources without handling player account state.',
    },
  ],
  pros: [
    'Interac payment-method expectations explained with operator-approval caveats',
    'Casino catalogue guidance without repo-owned game execution',
    'Sportsbook education without repo-owned odds execution',
    'Canadian-first support and handoff guidance',
    'Responsible-gambling education and links to platform controls',
  ],
  cons: ['Must be 19+ (or 18+ in select provinces). Always play within your limits.'],
} as const;

export const IBET_CREATIVE_SNAPSHOTS = [
  {
    slug: 'welcome-bonus',
    group: 'bonus',
    title: 'Welcome Offer Snapshot',
    headline: 'Archived welcome offer creative',
    period: 'Welcome offer snapshot — verify terms on the gaming platform',
    summary:
      'Creative snapshot: new-player bonus language may appear on platform materials. Exact bonus values, deposit minimums, wagering requirements, eligible games, expiry, and eligibility must be verified on the separate gaming platform before opting in.',
    image: '/images/creatives/welcome-bonus-back.webp',
    alt: '247iBET archived welcome offer creative snapshot requiring current terms verification.',
    observedText: ['ARCHIVED BONUS CREATIVE', 'VERIFY CURRENT TERMS', '247iBET.ca'],
  },
  {
    slug: 'every-deposit-bonus',
    group: 'bonus',
    title: 'Every Deposit Bonus',
    headline: 'Archived every-deposit creative',
    period: 'Ongoing snapshot — verify terms on the gaming platform',
    summary:
      'Creative snapshot: every-deposit bonus language may appear on platform materials. Confirm current caps, eligibility, jurisdiction, and campaign windows on the separate gaming platform.',
    image: '/images/creatives/every-deposit-bonus.webp',
    alt: '247iBET archived every-deposit bonus creative requiring current terms verification.',
    observedText: ['ARCHIVED DEPOSIT BONUS CREATIVE'],
  },
  {
    slug: 'mothers-day-double-rewards',
    group: 'bonus',
    title: "Mother's Day Double Rewards",
    headline: 'Archived seasonal rewards creative',
    period: 'May 1–10 snapshot — verify terms on the gaming platform',
    summary:
      "Creative snapshot: Mother's Day Double Rewards used deposit-and-bonus language. Check current values, wagering, eligible games, expiry, and availability on the separate gaming platform.",
    image: '/images/creatives/mothers-day-double-rewards.webp',
    alt: "247iBET archived Mother's Day Double Rewards creative requiring current terms verification.",
    observedText: [
      "Mother's Day Double Rewards",
      'ARCHIVED REWARDS CREATIVE',
      'May. 1st – May. 10',
    ],
  },
  {
    slug: 'live-bonus-unified-mma',
    group: 'sportsbook',
    title: 'Unified MMA Live Bonus',
    headline: 'Live Bonus event for Unified MMA 63',
    period: 'Sep. 26 at Rebel, Toronto',
    summary:
      'We were proud to sponsor Unified MMA 63 with a Live Bonus event at Rebel Toronto. Check the separate gaming platform for current fight-night promotions.',
    image: '/images/creatives/live-bonus-unified-mma.webp',
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
      '247iBET is a proud sponsor of Unified MMA athlete Cody Chovancek. Follow his journey and verify any fight-market availability on the separate gaming platform.',
    image: '/images/creatives/our-champ-cody-chovancek.jpg',
    alt: '247iBET Our Champ: Cody Chovancek and Unified MMA.',
    observedText: ['OUR CHAMP', 'CODY CHOVANCEK', '247iBET.ca', '247iBET UNIFIED MMA'],
  },
  {
    slug: 'unified-mma-sponsorship',
    group: 'sportsbook',
    title: 'Unified MMA Sponsorship',
    headline: 'Official sponsor of Unified MMA',
    period: 'Ongoing sponsorship',
    summary:
      '247iBET is an official sponsor of Unified MMA. Check the separate gaming platform for current fight-night markets and promotions.',
    image: '/images/creatives/unified-mma-sponsorship.jpg',
    alt: 'Unified MMA sponsorship: 247iBET and partner logos.',
    observedText: ['UNIFIED MMA SPONSORSHIP', '247iBET'],
  },
  {
    slug: 'chase-the-big-win',
    group: 'event',
    title: 'Chase the Big Win',
    headline: 'Motorcycle supershow event',
    period: 'Jan. 9–11 at Toronto International Centre',
    summary:
      'We were at the Toronto International Centre Jan. 9–11 for the Chase the Big Win motorcycle supershow. Join us at our next event appearance.',
    image: '/images/creatives/chase-the-big-win.webp',
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
      'Our team was at the TABOO Toronto event Oct. 12–19. Stay tuned for our next event appearance.',
    image: '/images/creatives/play-for-pleasure.webp',
    alt: 'TABOO event: Play for Pleasure. Oct. 12–19, Toronto International Centre.',
    observedText: [
      'PLAY FOR PLEASURE',
      'OCT. 12–19',
      'TORONTO INTERNATIONAL CENTRE',
      '247iBET TABOO',
    ],
  },
  {
    slug: 'spin-your-fantasy',
    group: 'event',
    title: 'Spin Your Fantasy',
    headline: 'TABOO Edmonton event',
    period: 'Nov. 14–16 at Edmonton Expo Centre',
    summary:
      'We connected with players at TABOO Edmonton Nov. 14–16. Check our events page for upcoming appearances near you.',
    image: '/images/creatives/spin-your-fantasy.webp',
    alt: 'TABOO Edmonton: Spin Your Fantasy. Nov. 14–16, Edmonton Expo Centre.',
    observedText: ['SPIN YOUR FANTASY', 'NOV. 14–16', 'EDMONTON EXPO CENTRE', '247iBET TABOO'],
  },
] as const;

export const IBET_PROMO_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(({ group }) => group === 'bonus');
export const IBET_SPORTSBOOK_CREATIVE_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(
  ({ group }) => group === 'sportsbook',
);
export const IBET_EVENT_CREATIVE_SNAPSHOT = IBET_CREATIVE_SNAPSHOTS.filter(
  ({ group }) => group === 'event',
);

export const IBET_CTA = {
  primary: 'Visit Platform',
  casino: 'Explore Casino Guide',
  sports: 'Explore Sportsbook Guide',
  bonus: 'Review Bonus Terms',
  deposit: 'Compare Payout Guidance',
  register: 'Start Signup Handoff',
  fastPayout: 'Compare Payout Guidance',
} as const;

export const IBET_DISCLAIMER =
  '19+ to play (18+ in select provinces). Play responsibly. T&Cs apply.';
