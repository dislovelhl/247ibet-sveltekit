<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'nba',
    path: '/sportsbook/nba',
    title: 'NBA Betting Canada | 247iBET Canada',
    heading: 'NBA Betting in Canada',
    breadcrumbLabel: 'NBA Betting',
    metaDescription:
      'Review NBA betting in Canada with Raptors coverage, spread and total markets, player props, live in-play odds, and playoff futures at 247iBET.',
    keywords: 'NBA betting Canada, basketball betting Canada, NBA odds Canada',
    heroSubheading:
      'Follow Raptors games, compare spread and total markets, and track live NBA odds through the regular season, playoffs, and championship futures cycle.',
    heroImage: '/images/generated/sportsbook-nba-hero.png',
    overviewTitle: 'NBA markets Canadian bettors monitor',
    overviewIntro:
      'NBA betting menus are deep, especially on high-profile games. Spread, total, and player-prop pricing can all change quickly around injury news and rest patterns.',
    overviewCards: [
      {
        title: 'Raptors and marquee games',
        body: 'Toronto Raptors games sit high on the Canadian calendar, but market depth is also strongest on national TV and playoff matchups across the league.',
      },
      {
        title: 'Core bet types',
        body: 'Spread, moneyline, totals, and player props anchor the NBA board. Same-game parlays and alternate lines are especially common on star-heavy slates.',
      },
      {
        title: 'Playoff and title futures',
        body: 'Conference winner, Finals winner, and series prices become more relevant late in the season as playoff seeding starts to tighten.',
      },
    ],
    marketTitle: 'Where NBA lines move fastest',
    marketCards: [
      {
        title: 'Injury and lineup news',
        body: 'Late scratches, minutes limits, and confirmed starters can move both side and prop prices quickly, especially on back-to-backs.',
      },
      {
        title: 'Live pace changes',
        body: 'Runs, foul trouble, and timeout sequences can shift live totals and spread numbers within a few possessions.',
      },
      {
        title: 'Playoff rotation depth',
        body: 'Postseason betting often reacts to tighter rotations, matchup adjustments, and how coaches shorten benches in late-game situations.',
      },
    ],
    infoPanelTitle: 'Schedule context matters in NBA betting',
    infoPanelBody:
      'Basketball markets move on tempo and availability. For Canadian readers, the useful edge is understanding schedule context, not chasing promotional framing.',
    infoPanelPoints: [
      'Check for back-to-backs, travel spots, and confirmed rest before comparing spreads or player props.',
      'Live totals can move fast after shooting streaks, but pace and foul rate often matter as much as the current score.',
      'Playoff markets usually have deeper analysis value because matchup-specific adjustments become more stable from game to game.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'What are the main NBA bet types at 247iBET?',
        answer:
          'Spread, moneyline, totals, player props, and selected same-game parlay combinations are the main NBA betting options. Futures expand closer to the playoffs.',
      },
      {
        question: 'Can I bet on the Toronto Raptors in Canada?',
        answer:
          'Yes. Raptors games are part of the standard NBA board, alongside broader league coverage across regular season and playoff slates.',
      },
      {
        question: 'Why do NBA player props move so much?',
        answer:
          'Props react to injury reports, starting lineups, minute expectations, and matchup changes. Those inputs can change much closer to tip-off than team-level futures.',
      },
      {
        question: 'Is live NBA betting available?',
        answer:
          'Yes. Live betting is typically available across major NBA games, with spreads and totals updating throughout the game as scoring pace changes.',
      },
    ],
    relatedLinks: [
      {
        href: '/sportsbook',
        label: 'Return to Sportsbook',
        description: 'Go back to the main sportsbook pillar for the full Canada-wide overview.',
        accent: 'gold',
      },
      {
        href: '/interac',
        label: 'Interac Funding Guide',
        description:
          'Review CAD deposit and withdrawal flow details for Canadian betting accounts.',
        accent: 'blue',
      },
      {
        href: '/sportsbook/parlays',
        label: 'Parlay Betting Guide',
        description:
          'Review same-game parlay structure before stacking NBA side, total, and prop selections together.',
        accent: 'neutral',
      },
      {
        href: '/sportsbook/live-betting',
        label: 'Live Betting Guide',
        description:
          'See how in-play basketball markets behave once pace and foul trouble start moving the board.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Compare top-rated Canadian sports betting sites for basketball.',
        accent: 'gold',
      },
      {
        href: '/tools/odds-calculator',
        label: 'Odds Calculator',
        description: 'Convert NBA odds and calculate parlay payouts.',
        accent: 'blue',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description: 'Learn how basketball moneylines, spreads, and totals work.',
        accent: 'neutral',
      },
    ],
    ctaContextLabel: 'NBA · Raptors · player props · 19+',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sportsbook',
        item: 'https://247ibet.ca/sportsbook',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.breadcrumbLabel,
        item: 'https://247ibet.ca' + page.path,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
</script>

<svelte:head>
  <title>{page.title}</title>
  <meta name="description" content={page.metaDescription} />
  <meta property="og:title" content={page.title} />
  <meta property="og:description" content={page.metaDescription} />
  <link rel="canonical" href={canonicalUrl(page.path)} />
  <JsonLd schema={breadcrumbSchema} />
  <JsonLd schema={faqSchema} />
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/sportsbook" class="hover:text-white">Sportsbook</a></li>
        <li>/</li>
        <li class="text-white font-medium">{page.breadcrumbLabel}</li>
      </ol>
    </nav>
    <div
      class="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-navy-card md:h-60"
    >
      <img src={page.heroImage} alt={page.title + " — online betting in Canada"} class="h-full w-full object-cover opacity-80" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
      <div
        class="absolute bottom-5 left-6 text-[9px] font-mono font-bold uppercase tracking-[0.22em] text-prestige-gold md:left-8"
      >
        {page.breadcrumbLabel}
      </div>
    </div>
    <h1 class="page-hero-title mb-4">{page.heading}</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">{page.heroSubheading}</p>
  </header>

  <section class="mt-10">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">{page.overviewTitle}</h2>
    <p class="mt-3 max-w-3xl text-base leading-relaxed text-[#94A3B8]">{page.overviewIntro}</p>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each page.overviewCards as card}
        <div class="navy-card rounded-2xl p-5">
          <p class="font-bold text-white text-sm">{card.title}</p>
          <p class="mt-2 text-sm text-text-tertiary leading-relaxed">{card.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-14">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">{page.marketTitle}</h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each page.marketCards as card}
        <div class="navy-card rounded-2xl p-5">
          <p class="font-bold text-white text-sm">{card.title}</p>
          <p class="mt-2 text-sm text-text-tertiary leading-relaxed">{card.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <div
    class="mt-12 rounded-xl border {page.infoPanelAccent === 'gold'
      ? 'border-prestige-gold/20 bg-prestige-gold/5'
      : 'border-slate-blue/20 bg-slate-blue/5'} p-6"
  >
    <h2 class="text-lg font-bold text-white mb-3">{page.infoPanelTitle}</h2>
    <p class="text-sm text-text-tertiary leading-relaxed mb-4">{page.infoPanelBody}</p>
    <ul class="space-y-2">
      {#each page.infoPanelPoints as point}
        <li class="flex items-start gap-2 text-sm text-text-tertiary">
          <span class="text-prestige-gold mt-0.5">•</span>
          <span>{point}</span>
        </li>
      {/each}
    </ul>
  </div>

  <section class="mt-12">
    <div class="flex flex-wrap gap-4">
      {#each page.relatedLinks as link}
        <a
          href={link.href}
          class="{link.accent === 'gold'
            ? 'text-prestige-gold'
            : link.accent === 'blue'
              ? 'text-slate-blue'
              : 'text-text-tertiary'} font-bold text-sm hover:underline uppercase tracking-wider"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </section>

  <section class="mt-14 space-y-4">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">FAQ</h2>
    {#each page.faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-14">
    <IBetShowcase variant="banner" ctaText="Bet Now" contextLabel={page.ctaContextLabel} />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
