// Ported from lib/ibet-brand.ts — @/ → $lib/
import { PARTNER, SITE } from '$lib/site';

export const IBET_URLS = {
  register: PARTNER.url,
  casino: PARTNER.casinoUrl,
  deposit: `${SITE.url}/deposit`,
  login: `${PARTNER.url.replace('/home', '')}/login`,
  rg: `${SITE.url}/responsible-gambling`,
} as const;

export const IBET_PROFILE = {
  name: '247iBET',
  tagline: 'Canadian online casino and sports betting — editorially reviewed.',
  rating: null,
  logo: '/images/brand/logo.png',
  established: 2020,
  licences: [],
  agcoLicensed: false,
  minAge: 18,
  withdrawalSpeed: 'Fast Interac e-Transfer',
  paymentMethods: ['Interac'],
  provinces: ['ON', 'AB', 'BC', 'MB', 'SK', 'QC', 'NS', 'NB', 'PE', 'NL'],
  features: [
    { icon: 'Zap', label: 'Instant Interac Payouts', detail: 'Secure Interac e-Transfer for Canadian players.', accent: 'text-[#4A9EBF]', bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20' },
    { icon: 'Gamepad2', label: '500+ Casino Games', detail: 'Slots, live dealer, blackjack, roulette — certified RNG.', accent: 'text-yellow-400', bg: 'bg-yellow-500/8 border-yellow-500/20' },
    { icon: 'Trophy', label: 'NHL · CFL · NBA · UFC', detail: 'Deep Canadian sports coverage with in-play betting and parlays.', accent: 'text-green-400', bg: 'bg-green-500/8 border-green-500/20' },
    { icon: 'MonitorPlay', label: 'Live Dealer Tables', detail: '24/7 live blackjack, roulette, baccarat streamed in HD.', accent: 'text-[#4A9EBF]', bg: 'bg-[#4A9EBF]/8 border-[#4A9EBF]/20' },
  ],
  trustSignals: [
    'Canadian-focused iGaming experience',
    'Secure Interac e-Transfer',
    'SSL encrypted — 256-bit security',
    '24/7 Canadian support',
    'Responsible gambling tools required',
  ],
  trustPanel: [
    { label: 'Licence', value: 'Compliance-First Approach', detail: 'Committed to responsible gaming and transparent operations.' },
    { label: 'Payments', value: 'Secure Interac', detail: 'Canadian-first banking focused on Interac e-Transfer.' },
    { label: 'Security', value: '256-bit SSL encrypted', detail: 'Encrypted account, payment, and identity-verification flow.' },
    { label: 'Editorial stance', value: 'No pay-to-rank placement', detail: 'Product placement follows player value, payments, and market coverage.' },
  ],
  pros: [
    'Seamless Interac e-Transfer integration',
    'Full casino + sports betting under one login',
    'Canadian-first: CAD accounts and support',
    '24/7 live dealer games available',
    'No fees on Interac deposits or withdrawals',
  ],
  cons: ['Bonus details available on site only (AGCO compliance)'],
} as const;

export const IBET_CTA = {
  primary: 'Play Now',
  casino: 'Enter Casino',
  sports: 'Enter Lobby',
  bonus: 'Enter Site',
  deposit: 'Interac Gateway',
  register: 'Play Now',
  fastPayout: 'Confirm Payout Speed',
} as const;

export const IBET_DISCLAIMER =
  '18+/19+ depending on province. Play responsibly. T&Cs apply. ' +
  'Please check localized regulations for features and availability.';
