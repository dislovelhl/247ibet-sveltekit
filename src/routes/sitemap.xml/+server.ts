import type { RequestHandler } from './$types';

const STATIC_PAGES: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/casino', priority: 0.9, changefreq: 'daily' },
  { path: '/sportsbook', priority: 0.9, changefreq: 'daily' },
  { path: '/best-online-casinos-canada', priority: 0.9, changefreq: 'weekly' },
  { path: '/best-sports-betting-sites-canada', priority: 0.9, changefreq: 'weekly' },
  { path: '/best-paying-online-casinos-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/best-casino-apps-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/best-betting-sites-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/best-betting-apps-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/casino-bonuses-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/no-deposit-bonus-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/new-player-bonuses-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/free-bets-canada', priority: 0.8, changefreq: 'weekly' },
  { path: '/low-wagering-casinos-canada', priority: 0.7, changefreq: 'weekly' },
  { path: '/new-online-casinos-canada', priority: 0.7, changefreq: 'weekly' },
  { path: '/fast-payouts', priority: 0.7, changefreq: 'weekly' },
  { path: '/interac', priority: 0.8, changefreq: 'weekly' },
  { path: '/interac/deposit', priority: 0.7, changefreq: 'weekly' },
  { path: '/interac/withdraw', priority: 0.7, changefreq: 'weekly' },
  { path: '/interac-casino-canada', priority: 0.7, changefreq: 'weekly' },
  { path: '/deposit', priority: 0.7, changefreq: 'monthly' },
  { path: '/nhl-betting-canada', priority: 0.8, changefreq: 'daily' },
  { path: '/march-madness-betting-canada', priority: 0.6, changefreq: 'weekly' },

  { path: '/ontario', priority: 0.9, changefreq: 'weekly' },
  { path: '/ontario/online-casino', priority: 0.8, changefreq: 'weekly' },
  { path: '/ontario/sports-betting', priority: 0.8, changefreq: 'weekly' },
  { path: '/alberta', priority: 0.9, changefreq: 'weekly' },
  { path: '/alberta/online-casino', priority: 0.8, changefreq: 'weekly' },
  { path: '/alberta/sports-betting', priority: 0.8, changefreq: 'weekly' },

  { path: '/casino/slots', priority: 0.8, changefreq: 'weekly' },
  { path: '/casino/blackjack', priority: 0.8, changefreq: 'weekly' },
  { path: '/casino/roulette', priority: 0.7, changefreq: 'weekly' },
  { path: '/casino/live-casino', priority: 0.8, changefreq: 'weekly' },
  { path: '/casino/mobile', priority: 0.7, changefreq: 'monthly' },
  { path: '/casino/cad', priority: 0.7, changefreq: 'monthly' },
  { path: '/casino/baccarat', priority: 0.7, changefreq: 'monthly' },

  { path: '/sportsbook/nhl', priority: 0.8, changefreq: 'daily' },
  { path: '/sportsbook/nba', priority: 0.7, changefreq: 'daily' },
  { path: '/sportsbook/cfl', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/football', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/soccer', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/ufc', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/parlays', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/live-betting', priority: 0.7, changefreq: 'weekly' },
  { path: '/sportsbook/mobile', priority: 0.7, changefreq: 'monthly' },
  { path: '/sportsbook-bonuses-canada', priority: 0.8, changefreq: 'weekly' },

  { path: '/tools/odds-calculator', priority: 0.6, changefreq: 'monthly' },
  { path: '/tools/parlay-calculator', priority: 0.6, changefreq: 'monthly' },
  { path: '/tools/payout-time-checker', priority: 0.6, changefreq: 'monthly' },

  { path: '/guides', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/blackjack-online-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/slots-tips-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/live-dealer-casino-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/casino-payment-methods', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/interac-e-transfer-casino', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/no-deposit-free-spins', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/deposit-free-spins', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/how-to-withdraw-casino-winnings', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/legit-safe-online-casinos', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/online-gambling-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/legal-online-casino-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/wagering-requirements-explained', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/kyc-verification-online-casino', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/crypto-casino-canada', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/paypal-casino-canada', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/free-casino-games', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/jackpot-casino-games', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/new-casino-canada', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/sports-betting-odds-explained', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/strategy', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/win-big-online-casino', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/regulated-vs-offshore', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/ontario-casino-operator-checks', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/ontario-sportsbook-registration-checklist', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/alberta-operator-readiness-index', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/how-to-choose-online-casino', priority: 0.7, changefreq: 'monthly' },
  { path: '/guides/problem-gambling-signs', priority: 0.5, changefreq: 'monthly' },
  { path: '/guides/single-game-betting-canada', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/casino-login', priority: 0.6, changefreq: 'monthly' },
  { path: '/guides/sign-up-bonus-no-deposit', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/slots-no-deposit-bonuses', priority: 0.7, changefreq: 'weekly' },
  { path: '/guides/uk-real-money-casinos', priority: 0.5, changefreq: 'monthly' },
  { path: '/guides/upcoming-alberta-sportsbooks', priority: 0.6, changefreq: 'weekly' },

  { path: '/legal-online-gambling-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/gambling-laws-canada', priority: 0.7, changefreq: 'monthly' },
  { path: '/gambling-age-canada', priority: 0.7, changefreq: 'monthly' },

  { path: '/about', priority: 0.5, changefreq: 'monthly' },
  { path: '/about/how-we-test', priority: 0.5, changefreq: 'monthly' },
  { path: '/about/affiliate-disclosure', priority: 0.5, changefreq: 'monthly' },
  { path: '/faq', priority: 0.6, changefreq: 'weekly' },
  { path: '/contact', priority: 0.4, changefreq: 'monthly' },
  { path: '/security', priority: 0.5, changefreq: 'monthly' },
  { path: '/sources', priority: 0.5, changefreq: 'monthly' },
  { path: '/how-we-work', priority: 0.5, changefreq: 'monthly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/responsible-gambling', priority: 0.5, changefreq: 'monthly' },
];

const EXCLUDED_PREFIXES = [
  '/admin',
  '/design-system',
  '/lab',
  '/handler',
  '/search',
  '/api',
];

function isExcluded(path: string): boolean {
  return EXCLUDED_PREFIXES.some((p) => path.startsWith(p));
}

export const GET: RequestHandler = async () => {
  const baseUrl = 'https://247ibet.ca';

  const urls = STATIC_PAGES.filter((p) => !isExcluded(p.path))
    .map((p) => {
      const loc = `${baseUrl}${p.path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};