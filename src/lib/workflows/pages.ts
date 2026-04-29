import type { PageEntry } from './types.js';

export const PAGE_REGISTRY: PageEntry[] = [
	{ slug: 'home', path: '/', hasFaq: false, tier: 'hub' },
	{ slug: 'casino', path: '/casino', hasFaq: false, tier: 'hub' },
	{ slug: 'sportsbook', path: '/sportsbook', hasFaq: false, tier: 'hub' },
	{ slug: 'ontario', path: '/ontario', hasFaq: false, tier: 'hub' },
	{ slug: 'alberta', path: '/alberta', hasFaq: false, tier: 'hub' },
	{ slug: 'faq', path: '/faq', hasFaq: true, tier: 'hub' },
	{ slug: 'guides', path: '/guides', hasFaq: false, tier: 'hub' },
	{ slug: 'fast-payouts', path: '/fast-payouts', hasFaq: false, tier: 'guide' },
	{
		slug: 'best-online-casinos-canada',
		path: '/best-online-casinos-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{
		slug: 'best-sports-betting-sites-canada',
		path: '/best-sports-betting-sites-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{
		slug: 'best-betting-sites-canada',
		path: '/best-betting-sites-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{
		slug: 'best-betting-apps-canada',
		path: '/best-betting-apps-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{
		slug: 'interac-casino-canada',
		path: '/interac-casino-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{
		slug: 'casino-bonuses-canada',
		path: '/casino-bonuses-canada',
		hasFaq: false,
		tier: 'guide'
	},
	{ slug: 'bonus-terms', path: '/bonus-terms', hasFaq: false, tier: 'utility' },
	{
		slug: 'responsible-gambling',
		path: '/responsible-gambling',
		hasFaq: false,
		tier: 'utility'
	},
	{ slug: 'editorial-policy', path: '/editorial-policy', hasFaq: false, tier: 'utility' },
	{ slug: 'sources', path: '/sources', hasFaq: false, tier: 'utility' },
	{ slug: 'about', path: '/about', hasFaq: false, tier: 'utility' }
];
