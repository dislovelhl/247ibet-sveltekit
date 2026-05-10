
export interface PageData {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  faqsKey?: string;
  casinosKey?: string;
}

export const pages: Record<string, PageData> = {
  'best-online-casinos-canada': {
    slug: 'best-online-casinos-canada',
    title: 'Best Online Casinos Canada 2026: Top Rated Sites for Fast Payouts | 247iBET',
    description: 'Compare the top online casinos in Canada for 2026. Verified by our team for payout speed, Interac support, and provincial license verification.',
    lastUpdated: '2026-04-27',
    heroKicker: 'Canadian casino rankings — 2026',
    heroTitle: 'Top 10 Rated Canadian Casinos',
    heroSubtitle: 'Our team has verified and approved the top 10 Canadian online casinos for 2026 — a verified shortlist compared on Interac payout speed, game depth, and provincial compliance.',
    faqsKey: 'best-online-casinos-canada',
    casinosKey: 'topCasinos'
  },
  'best-betting-apps-canada': {
    slug: 'best-betting-apps-canada',
    title: 'Best Betting Apps Canada 2026 | iOS & Android | 247iBET',
    description: 'Compare Canadian sports betting apps for iPhone and Android. We rate live betting UX, Interac deposits, parlay builders, and regulatory license verification.',
    lastUpdated: '2026-03-01',
    heroKicker: 'Mobile sportsbook rankings',
    heroTitle: 'Best Betting Apps Canada 2026',
    heroSubtitle: 'Field-tested mobile rankings for iOS and Android sportsbooks in Canada — evaluated on biometric login security, SGP builder latency, and verified responsible gambling tools for on-the-go wagering.'
  }
};
