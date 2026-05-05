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
