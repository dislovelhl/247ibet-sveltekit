// Centralized site config — single source of truth for all brand references.
// Ported from lib/site.ts (Next.js → SvelteKit).
// env: NEXT_PUBLIC_* → PUBLIC_* (SvelteKit prefix)

const DEFAULT_SITE_URL = 'https://247ibet.ca';

function resolveSiteUrl(): string {
  const explicit = import.meta.env.PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.endsWith('/') ? explicit.slice(0, -1) : explicit;

  const vercel = import.meta.env.VERCEL_URL?.trim();
  if (vercel) {
    const url = vercel.startsWith('http') ? vercel : `https://${vercel}`;
    return url.endsWith('/') ? url.slice(0, -1) : url;
  }

  if (import.meta.env.DEV) return 'http://localhost:5173';
  return DEFAULT_SITE_URL;
}

export const SITE = {
  url: resolveSiteUrl(),
  name: '247iBET',
  tagline: 'Canada\'s premier online casino and sportsbook — fast Interac payouts, live dealer, and exclusive bonuses.',
  legalName: '247iBET Media Inc.',
  locale: 'en-CA',
  ogImage: '/og-image.png',
  handles: {
    x: '@247ibet',
    instagram: '@247ibet',
    facebook: '247ibet',
    telegram: '247iBET',
    tiktok: '@247ibet',
  },
  sameAs: [
    'https://x.com/247ibet',
    'https://www.instagram.com/247ibet/',
    'https://www.facebook.com/247ibet',
    'https://t.me/247iBET',
    'https://www.tiktok.com/@247ibet',
  ],
} as const;

export const SEO = {
  defaultTitle: '247iBET: Canada\'s Premier Online Casino, Sportsbook & Fast Interac Payouts',
  defaultDescription:
    '247iBET offers Canadian players casino games, sports betting, fast Interac payouts, and exclusive bonuses. Join now and play with confidence.',
  defaultKeywords:
    'online casino canada, fast payouts casino, interac casino, ontario casino, sports betting canada',
  titleTemplate: '%s | 247iBET',
} as const;

export const TRACKING = {
  utmSource: '247ibet',
  ageVerifiedKey: '247ibet_age_verified',
  legacyAgeVerifiedKey: 'canadacasa_age_verified',
  newsletterDismissedKey: '247ibet_newsletter_dismissed',
  legacyNewsletterDismissedKey: 'canadacasa_newsletter_dismissed',
} as const;

export const PARTNER = {
  name: '247iBET',
  url: 'https://247ibet.ca/home',
  apiBase: 'https://boapi.ibet247.ca',
  casinoUrl: 'https://247ibet.ca/casino',
} as const;

export function canonicalUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${clean}`;
}

export function ogImageUrl(): string {
  return `${SITE.url}${SITE.ogImage}`;
}
