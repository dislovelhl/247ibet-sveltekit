<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const CURRENT_YEAR = new Date().getFullYear();

  const markets = [
    {
      name: 'Fight Winner (Moneyline)',
      desc: 'Bet on who wins the fight — Fighter A vs Fighter B. No spread, just pick the winner.',
    },
    {
      name: 'Method of Victory',
      desc: "How the fight ends: KO/TKO, submission, or judges' decision. Higher odds than moneyline alone.",
    },
    {
      name: 'Round Betting',
      desc: 'Which round the fight ends in, combined with the winner. Example: McGregor by KO in Round 1.',
    },
    {
      name: 'Over/Under Rounds',
      desc: 'Will the fight go over or under the set number of rounds? Main card fights are typically set at 2.5 or 4.5 rounds.',
    },
    {
      name: 'Goes the Distance',
      desc: "Yes/No — will the fight go to the judges' scorecards? Relevant for defensive matchups.",
    },
    {
      name: 'Live In-Play',
      desc: 'Bet between rounds or as the fight progresses. Odds shift dramatically after significant strikes or takedowns.',
    },
    {
      name: 'Title Fight Futures',
      desc: 'Champion odds across all weight classes — updated after each event.',
    },
  ];

  const tips = [
    {
      tip: 'Weight cut impacts performance',
      detail:
        "Severe weight cuts can diminish a fighter's strength, cardio, and chin. Monitor late weigh-in reports and fighter comments.",
    },
    {
      tip: 'Tale of the tape matters less than styles',
      detail:
        'Size and reach advantages are less predictive than stylistic matchup. A grappler vs a striker creates a fundamentally different dynamic than two strikers.',
    },
    {
      tip: 'Training camp leaks are valuable',
      detail:
        'Fighters and coaches often reveal camp details. Injury rumours or sparring partner changes can signal form issues before lines move.',
    },
    {
      tip: 'Main card vs prelims odds',
      detail:
        'Prelim fighters are less scouted — public money moves lines less. Find value by researching prelim fighters thoroughly.',
    },
    {
      tip: "Understand the judges' tendencies",
      detail:
        'Some judges over-score damage; others favour activity. If a fight goes to decision, knowing the judges assigned impacts your decision bet value.',
    },
  ];

  const relatedLinks = [
    { href: '/sportsbook', label: 'Sports Betting Canada' },
    { href: '/nhl-betting-canada', label: 'NHL Betting' },
    { href: '/events/nba-betting-canada', label: 'NBA Betting' },
    { href: '/guides/sports-betting-odds-explained', label: 'Odds Explained' },
    { href: '/tools/parlay-calculator', label: 'Parlay Calculator' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `UFC Betting Canada ${new Date().getFullYear()} — MMA Odds, Markets & Tips`,
    description:
      'Bet on UFC in Canada — fight winner, method of victory, round betting, and live in-play at 247iBET.',
    url: 'https://247ibet.ca/events/ufc-betting-canada',
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
        name: 'UFC Betting',
        item: 'https://247ibet.ca/events/ufc-betting-canada',
      },
    ],
  };
</script>

<svelte:head>
  <title>UFC Betting Canada {CURRENT_YEAR} — MMA Odds, Markets &amp; Tips | 247iBET</title>
  <meta
    name="description"
    content="Bet on UFC in Canada — fight winner, method of victory, round betting, and live in-play at 247iBET. Fast Interac payouts. 18+/19+."
  />
  <meta
    property="og:title"
    content="UFC Betting Canada {CURRENT_YEAR} — MMA Odds, Markets & Tips | 247iBET"
  />
  <meta
    property="og:description"
    content="Bet on UFC in Canada — fight winner, method of victory, round betting, and live in-play at 247iBET. Fast Interac payouts. 18+/19+."
  />
  <meta property="og:type" content="article" />
  <link rel="canonical" href={canonicalUrl('/events/ufc-betting-canada')} />
  <JsonLd schema={articleSchema} />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl space-y-16">
  <header>
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">UFC Betting</li>
      </ol>
    </nav>
    <div class="text-xs font-mono text-text-tertiary mb-1">Last updated: 2026-03-01</div>
    <h1 class="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-3">
      UFC Betting Canada {CURRENT_YEAR}
    </h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      Bet on all UFC events at 247iBET — fight winner, method of victory, round betting, and live
      in-play. Fast Interac payouts. 18+/19+.
    </p>
  </header>

  <div class="rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">
    Affiliate disclosure · Reviewed by: 247iBET Sports Desk · Last updated: 2026-03-01
  </div>

  <IBetShowcase
    variant="hero"
    ctaText="Bet on UFC Now"
    showFeatures={true}
    contextLabel="All UFC events · Round betting · Live in-play"
  />

  <section aria-labelledby="markets-heading">
    <h2 id="markets-heading" class="text-2xl font-bold text-[#F1F5F9] mb-5">UFC Betting Markets</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each markets as m}
        <div class="navy-card p-4">
          <div class="font-semibold text-[#F1F5F9] text-sm mb-1">{m.name}</div>
          <p class="text-xs text-[#94A3B8] leading-relaxed">{m.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="tips-heading">
    <h2 id="tips-heading" class="text-2xl font-bold text-[#F1F5F9] mb-5">UFC Betting Tips</h2>
    <div class="space-y-3">
      {#each tips as t}
        <div class="navy-card p-4 flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-[#D4943A] shrink-0 mt-2" aria-hidden="true"></div>
          <div>
            <span class="font-semibold text-[#F1F5F9] text-sm">{t.tip}: </span>
            <span class="text-xs text-[#94A3B8]">{t.detail}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <IBetShowcase
    variant="banner"
    ctaText="Bet on UFC"
    contextLabel="All events · Method of victory · Live in-play · Interac deposits"
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
