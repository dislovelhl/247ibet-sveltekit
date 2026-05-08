export type SearchCategory = 'Guide' | 'Hub' | 'Feature' | 'Tool' | 'News' | 'Policy';

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  tags: string[];
  featured?: boolean;
};

export type SearchResult = SearchItem & {
  score: number;
  matchedTerms: string[];
};

export const SEARCH_ITEMS: SearchItem[] = [
  {
    title: 'Interac Casino Canada',
    description: 'Compare Interac deposit and withdrawal options for Canadian online casinos.',
    href: '/interac-casino-canada',
    category: 'Guide',
    tags: ['interac', 'casino', 'payments', 'canada'],
    featured: true,
  },
  {
    title: 'Best Sports Betting Sites Canada',
    description:
      'A Canadian sportsbook ranking focused on regulation, payments, market depth, and mobile UX.',
    href: '/best-sports-betting-sites-canada',
    category: 'Guide',
    tags: ['sports', 'betting', 'sites', 'canada'],
    featured: true,
  },
  {
    title: 'Best Online Casinos Canada',
    description: 'Find regulated casino options, bonus context, payout notes, and safety checks.',
    href: '/best-online-casinos-canada',
    category: 'Guide',
    tags: ['casino', 'online', 'canada', 'bonuses'],
    featured: true,
  },
  {
    title: 'Ontario iGaming Hub',
    description: 'Ontario market guidance for legal sportsbook and online casino play.',
    href: '/ontario',
    category: 'Hub',
    tags: ['ontario', 'regulated', 'casino', 'sportsbook'],
    featured: true,
  },
  {
    title: 'Alberta iGaming Hub',
    description: 'Follow Alberta betting launch readiness, legal context, and operator checks.',
    href: '/alberta',
    category: 'Hub',
    tags: ['alberta', 'regulated', 'sportsbook', 'casino'],
    featured: true,
  },
  {
    title: 'Fast Payouts at 247iBET',
    description: 'Learn about our rapid Interac deposit and withdrawal processing.',
    href: '/fast-payouts',
    category: 'Guide',
    tags: ['payouts', 'withdrawals', 'banking', 'casino'],
    featured: true,
  },
  {
    title: '247iBET Casino Bonuses',
    description: 'Explore our welcome offers, free spins, and transparent wagering terms.',
    href: '/casino-bonuses-canada',
    category: 'Guide',
    tags: ['casino', 'bonuses', 'wagering', 'free spins'],
  },
  {
    title: 'Best Betting Apps Canada',
    description: 'Mobile-first comparison of betting apps, sign-up flow, and payment support.',
    href: '/best-betting-apps-canada',
    category: 'Guide',
    tags: ['apps', 'mobile', 'sports', 'betting'],
  },
  {
    title: 'Sports Betting Odds Explained',
    description: 'Learn decimal, fractional, and American odds for Canadian bettors.',
    href: '/guides/sports-betting-odds-explained',
    category: 'Guide',
    tags: ['odds', 'sports', 'betting', 'education'],
  },
  {
    title: 'Parlay Calculator',
    description: 'Calculate combined parlay odds and estimated payouts.',
    href: '/tools/parlay-calculator',
    category: 'Tool',
    tags: ['parlay', 'calculator', 'odds', 'payout'],
  },
  {
    title: 'Odds Calculator',
    description: 'Convert odds formats and estimate implied probability.',
    href: '/tools/odds-calculator',
    category: 'Tool',
    tags: ['odds', 'calculator', 'probability'],
  },
  {
    title: 'Payout Time Checker',
    description: 'Estimate casino withdrawal timing by payment method and verification step.',
    href: '/tools/payout-time-checker',
    category: 'Tool',
    tags: ['payout', 'withdrawal', 'payments', 'checker'],
  },
  {
    title: 'Responsible Gambling',
    description: 'Find safer gambling resources, warning signs, and support contacts.',
    href: '/responsible-gambling',
    category: 'Policy',
    tags: ['responsible gambling', 'safety', 'support'],
  },
  {
    title: 'Legal Online Gambling Canada',
    description: 'A practical guide to Canadian online gambling laws and provincial differences.',
    href: '/legal-online-gambling-canada',
    category: 'Guide',
    tags: ['legal', 'gambling', 'canada', 'regulation'],
  },
  {
    title: '247iBET Features',
    description: 'Explore our platform features and performance standards.',
    href: '/features/247ibet',
    category: 'Feature',
    tags: ['features', 'platform', '247ibet'],
  },
  {
    title: 'Canadian iGaming News',
    description:
      'Market intelligence for Canadian betting regulation, operators, and product changes.',
    href: '/news',
    category: 'News',
    tags: ['news', 'regulation', 'operators', 'canada'],
  },
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const tokenize = (value: string) =>
  Array.from(new Set(normalize(value).split(' ').filter(Boolean)));

const scoreItem = (item: SearchItem, terms: string[], normalizedQuery: string) => {
  const title = normalize(item.title);
  const description = normalize(item.description);
  const slug = normalize(item.href);
  const category = normalize(item.category);
  const tags = normalize(item.tags.join(' '));
  const matchedTerms: string[] = [];
  let score = 0;

  for (const term of terms) {
    let termScore = 0;

    if (title.includes(term)) termScore += 12;
    if (slug.includes(term)) termScore += 8;
    if (tags.includes(term)) termScore += 5;
    if (category.includes(term)) termScore += 3;
    if (description.includes(term)) termScore += 2;

    if (termScore > 0) {
      score += termScore;
      matchedTerms.push(term);
    }
  }

  if (matchedTerms.length === 0) return { score: 0, matchedTerms: [] };

  score += matchedTerms.length * 6;
  if (matchedTerms.length === terms.length) score += 20;
  if (title.includes(normalizedQuery)) score += 30;
  if (slug.includes(normalizedQuery)) score += 12;
  if (item.featured) score += 2;

  return { score, matchedTerms };
};

export const searchItems = (query: string, limit = 12): SearchResult[] => {
  const normalizedQuery = normalize(query);
  const terms = tokenize(query);

  if (terms.length === 0) return [];

  return SEARCH_ITEMS.map((item) => {
    const { score, matchedTerms } = scoreItem(item, terms, normalizedQuery);
    return { ...item, score, matchedTerms };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
};

export const getFeaturedSearchItems = (limit = 6): SearchItem[] =>
  SEARCH_ITEMS.filter((item) => item.featured).slice(0, limit);
