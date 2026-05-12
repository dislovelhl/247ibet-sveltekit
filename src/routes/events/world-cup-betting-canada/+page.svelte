<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const markets = [
    {
      name: 'Tournament Winner',
      desc: 'Bet on which country wins the 2026 FIFA World Cup outright. Best odds placed before the tournament begins.',
    },
    {
      name: 'Group Stage Winner',
      desc: 'Which team tops their group across the 12 groups in the 48-team 2026 format.',
    },
    {
      name: 'Game Winner (Moneyline)',
      desc: 'Pick the winner of an individual match — or the draw in 90 minutes. Three-way lines standard for soccer.',
    },
    {
      name: 'Asian Handicap',
      desc: 'Spread betting adapted for soccer — eliminates the draw by giving one team a goal head start.',
    },
    {
      name: 'Both Teams to Score (BTTS)',
      desc: 'Yes/No — will both teams score at least one goal in the match?',
    },
    {
      name: 'Over/Under Goals',
      desc: 'Will the match produce over or under the set total (typically 2.5 goals).',
    },
    {
      name: 'Player Props',
      desc: 'Top scorer (Golden Boot), anytime goalscorer, assists — available for major matches.',
    },
    {
      name: 'Live In-Play',
      desc: 'Bet during the match — next goal scorer, corner markets, time of next goal updated in real time.',
    },
  ];

  const canada2026Facts = [
    'Canada, the United States, and Mexico co-host the 2026 FIFA World Cup.',
    'Canada plays home group stage games — cities include Toronto, Vancouver, and Edmonton among North American venues.',
    'The 2026 World Cup expands to 48 teams — the largest in tournament history.',
    '104 matches total across 16 venues in three countries.',
    'The Final is scheduled for MetLife Stadium, East Rutherford, New Jersey on July 19, 2026.',
    "Canada men's national team qualifies as co-host — first World Cup home match in program history.",
  ];

  const strategies = [
    {
      heading: 'Bet tournament winner early',
      body: 'Outright odds for tournament winner are most valuable before play begins. Once group-stage results narrow the field, prices compress significantly.',
    },
    {
      heading: 'Group stage is high-variance',
      body: 'Group stage features many "must-win" situations driving tactical play. Goals markets (BTTS, totals) often provide better value than moneylines in evenly-matched groups.',
    },
    {
      heading: 'Track squad news before knockout matches',
      body: 'Player fitness and rotation are critical in a compressed schedule. Late injury withdrawals and yellow card accumulation affect team selection.',
    },
    {
      heading: 'Canadian team performance',
      body: 'Canada co-hosts and enters as a significant underdog for tournament progress. Group stage home advantage is real — consider Canada in BTTS and draw markets for home group games.',
    },
  ];

  const relatedLinks = [
    { href: '/sportsbook', label: 'Sports Betting Canada' },
    { href: '/events/nba-betting-canada', label: 'NBA Betting' },
    { href: '/events/ufc-betting-canada', label: 'UFC Betting' },
    { href: '/march-madness-betting-canada', label: 'March Madness' },
    { href: '/guides/sports-betting-odds-explained', label: 'Odds Explained' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'World Cup Betting Canada 2026 — FIFA Tournament Odds & Markets',
    description:
      'Bet on the 2026 FIFA World Cup in Canada — game lines, tournament winner odds, group stage betting, and live in-play.',
    url: 'https://247ibet.ca/events/world-cup-betting-canada',
    datePublished: '2026-03-01',
    dateModified: '2026-03-30',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'World Cup Betting',
        item: 'https://247ibet.ca/events/world-cup-betting-canada',
      },
    ],
  };
</script>

<svelte:head>
  <title>World Cup Betting Canada 2026 — FIFA Tournament Odds &amp; Markets | 247iBET</title>
  <meta
    name="description"
    content="Bet on the 2026 FIFA World Cup in Canada — Canada co-hosts the tournament. Game lines, tournament winner odds, group stage betting, and live in-play at 247iBET. Fast Interac payouts."
  />
  <meta
    property="og:title"
    content="World Cup Betting Canada 2026 — FIFA Tournament Odds & Markets | 247iBET"
  />
  <meta
    property="og:description"
    content="Bet on the 2026 FIFA World Cup in Canada — game lines, tournament winner odds, group stage betting, and live in-play at 247iBET."
  />
  <meta property="og:type" content="article" />
  <link rel="canonical" href={canonicalUrl('/events/world-cup-betting-canada')} />
  <JsonLd schema={articleSchema} />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-5xl space-y-16">
  <header>
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">World Cup Betting</li>
      </ol>
    </nav>
    <div class="text-xs font-mono text-text-tertiary mb-1">Last updated: 2026-03-01</div>
    <h1 class="page-hero-title mb-4">
      World Cup Betting Canada 2026
    </h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      Bet on the 2026 FIFA World Cup at 247iBET — Canada co-hosts the tournament. Game lines,
      tournament winner, group stage, player props, and live in-play. Fast Interac payouts. 18+/19+.
    </p>
  </header>

  <div class="rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">
    Affiliate disclosure · Reviewed by: 247iBET Sports Desk · Last updated: 2026-03-01
  </div>

  <IBetShowcase
    variant="hero"
    ctaText="Bet on the World Cup"
    showFeatures={true}
    contextLabel="2026 FIFA World Cup · Canada co-host · Kahnawake licensed"
  />

  <section aria-labelledby="context-heading">
    <h2 id="context-heading" class="text-2xl font-bold text-[#F1F5F9] mb-4">
      2026 World Cup — What Canadian Bettors Need to Know
    </h2>
    <div class="navy-card p-5 space-y-2">
      {#each canada2026Facts as fact}
        <div class="flex items-start gap-3 text-sm text-[#94A3B8]">
          <div class="w-1.5 h-1.5 rounded-full bg-[#D4943A] shrink-0 mt-2" aria-hidden="true"></div>
          {fact}
        </div>
      {/each}
    </div>
    <p class="text-xs text-[#8492A6] mt-2">
      Tournament schedule subject to FIFA confirmation. Last updated March 2026.
    </p>
  </section>

  <section aria-labelledby="markets-heading">
    <h2 id="markets-heading" class="text-2xl font-bold text-[#F1F5F9] mb-5">
      World Cup Betting Markets
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each markets as m}
        <div class="navy-card p-4">
          <div class="font-semibold text-[#F1F5F9] text-sm mb-1">{m.name}</div>
          <p class="text-xs text-[#94A3B8] leading-relaxed">{m.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="strategy-heading">
    <h2 id="strategy-heading" class="text-2xl font-bold text-[#F1F5F9] mb-4">
      World Cup Betting Strategy
    </h2>
    <div class="space-y-3">
      {#each strategies as s}
        <div class="navy-card p-4">
          <div class="font-semibold text-[#F1F5F9] text-sm mb-1">{s.heading}</div>
          <p class="text-xs text-[#94A3B8] leading-relaxed">{s.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <IBetShowcase
    variant="banner"
    ctaText="Bet on World Cup 2026"
    contextLabel="Kahnawake licensed · Interac deposits · Live in-play"
  />

  <nav aria-label="Related pages" class="border-t border-white/[0.08] pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related</p>
    <div class="flex flex-wrap gap-3">
      {#each relatedLinks as l}
        <a
          href={l.href}
          class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
          >{l.label}</a
        >
      {/each}
    </div>
  </nav>

  <div class="rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 18+/19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
