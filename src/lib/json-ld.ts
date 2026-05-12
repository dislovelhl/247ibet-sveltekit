// Serialize a value as JSON-LD safe for inline embedding in <script type="application/ld+json">.
// Escapes < > & to prevent script-tag breakout, plus U+2028/U+2029 to keep the payload safe
// even if a downstream tool treats it as JavaScript instead of JSON.
const ESCAPES: Record<string, string> = {
  '<': '\\u003c',
  '>': '\\u003e',
  '&': '\\u0026',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

const UNSAFE_CHARS = /[<>&\u2028\u2029]/g;
const JSON_LD_SCRIPT_CLOSE = '</script>';

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(UNSAFE_CHARS, (c) => ESCAPES[c]);
}

// Build a complete <script type="application/ld+json"> element as a single HTML string.
// JsonLd.svelte renders this as raw HTML outside <svelte:head>; Svelte head
// hydration markers inside script bodies are parsed as text and can break hydration.
export function jsonLdScriptHtml(schema: unknown): string {
  return `<script type="application/ld+json">${safeJsonLd(schema)}${JSON_LD_SCRIPT_CLOSE}`;
}

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://247ibet.ca/#org',
    name: '247iBET',
    url: 'https://247ibet.ca',
    logo: 'https://247ibet.ca/images/brand/logo.png',
    description:
      '247iBET is a Canadian iGaming guide covering casino reviews, sportsbook education, Interac payment-method expectations, and safer-play information.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    sameAs: [
      'https://x.com/247ibet',
      'https://www.instagram.com/247ibet/',
      'https://t.me/247iBET',
      'https://www.tiktok.com/@247ibet',
    ],
    knowsAbout: [
      'Online Casino Canada',
      'Sports Betting Canada',
      'Interac Casino Payment Methods',
      'Live Dealer Casino',
      'Responsible Gambling',
      'Canadian iGaming Regulations',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
  };
}

// Reusable Article schema builder — use on any content page.
// Pages with Article + BreadcrumbList + FAQPage are cited 2x more by AI engines.
export interface ArticleSchemaOpts {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}

export function articleSchema(opts: ArticleSchemaOpts): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    publisher: {
      '@type': 'Organization',
      name: '247iBET',
      url: 'https://247ibet.ca',
    },
  };
  if (opts.imageUrl) schema.image = opts.imageUrl;
  return schema;
}

// Reusable HowTo schema — triggers AI Overviews 73% of the time for "how to" queries.
export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToSchemaOpts {
  name: string;
  description: string;
  steps: HowToStep[];
  estimatedCost?: { currency: string; value: string };
  totalTime?: string;
}

export function howToSchema(opts: HowToSchemaOpts): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      itemListElement: {
        '@type': 'HowToDirection',
        text: step.text,
      },
    })),
  };
  if (opts.estimatedCost) schema.estimatedCost = opts.estimatedCost;
  if (opts.totalTime) schema.totalTime = opts.totalTime;
  return schema;
}
