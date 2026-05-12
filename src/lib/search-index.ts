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

type SearchableItem = SearchItem & {
  normalizedTitle: string;
  normalizedDescription: string;
  normalizedHref: string;
  normalizedCategory: string;
  normalizedTags: string;
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
    description:
      'Compare casino options with regulator-verification caveats, bonus context, payment notes, and safety checks.',
    href: '/best-online-casinos-canada',
    category: 'Guide',
    tags: ['casino', 'online', 'canada', 'bonuses'],
    featured: true,
  },
  {
    title: 'Ontario iGaming Hub',
    description:
      'Ontario market guidance for verifying sportsbook and online-casino operator status.',
    href: '/ontario',
    category: 'Hub',
    tags: ['ontario', 'regulated', 'casino', 'sportsbook'],
    featured: true,
  },
  {
    title: 'Alberta iGaming Hub',
    description:
      'Follow Alberta betting launch readiness, legal context, and operator-source checks.',
    href: '/alberta',
    category: 'Hub',
    tags: ['alberta', 'regulated', 'sportsbook', 'casino'],
    featured: true,
  },
  {
    title: 'Fast Payout Guidance',
    description:
      'Learn why Interac deposit and withdrawal timing can vary by operator, KYC review, and bank processing.',
    href: '/fast-payouts',
    category: 'Guide',
    tags: ['payouts', 'withdrawals', 'banking', 'casino'],
    featured: true,
  },
  {
    title: '247iBET Casino Bonus Guide',
    description: 'Explore welcome-offer concepts, free-spin caveats, and wagering-term checks.',
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
    description: 'Explore public web guides, integration boundaries, and evaluation standards.',
    href: '/features/247ibet',
    category: 'Feature',
    tags: ['features', 'platform', '247ibet'],
  },
  {
    title: 'Canadian iGaming News',
    description:
      'Public market context for Canadian betting regulation, operator-source checks, and product changes.',
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

const SEARCHABLE_ITEMS: SearchableItem[] = SEARCH_ITEMS.map((item) => ({
  ...item,
  normalizedTitle: normalize(item.title),
  normalizedDescription: normalize(item.description),
  normalizedHref: normalize(item.href),
  normalizedCategory: normalize(item.category),
  normalizedTags: normalize(item.tags.join(' ')),
}));

const FEATURED_SEARCH_ITEMS = SEARCH_ITEMS.filter((item) => item.featured);

const scoreItem = (item: SearchableItem, terms: string[], normalizedQuery: string) => {
  const matchedTerms: string[] = [];
  let score = 0;

  for (const term of terms) {
    let termScore = 0;

    if (item.normalizedTitle.includes(term)) termScore += 12;
    if (item.normalizedHref.includes(term)) termScore += 8;
    if (item.normalizedTags.includes(term)) termScore += 5;
    if (item.normalizedCategory.includes(term)) termScore += 3;
    if (item.normalizedDescription.includes(term)) termScore += 2;

    if (termScore > 0) {
      score += termScore;
      matchedTerms.push(term);
    }
  }

  if (matchedTerms.length === 0) return { score: 0, matchedTerms: [] };

  score += matchedTerms.length * 6;
  if (matchedTerms.length === terms.length) score += 20;
  if (item.normalizedTitle.includes(normalizedQuery)) score += 30;
  if (item.normalizedHref.includes(normalizedQuery)) score += 12;
  if (item.featured) score += 2;

  return { score, matchedTerms };
};

export const searchItems = (query: string, limit = 12): SearchResult[] => {
  const normalizedQuery = normalize(query);
  const terms = tokenize(query);

  if (terms.length === 0) return [];

  return SEARCHABLE_ITEMS.map((item) => {
    const { score, matchedTerms } = scoreItem(item, terms, normalizedQuery);
    return {
      title: item.title,
      description: item.description,
      href: item.href,
      category: item.category,
      tags: item.tags,
      featured: item.featured,
      score,
      matchedTerms,
    };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
};

export const getFeaturedSearchItems = (limit = 6): SearchItem[] =>
  FEATURED_SEARCH_ITEMS.slice(0, limit);
