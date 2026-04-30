<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const bettingTypes = [
    {
      type: 'Game moneylines',
      desc: 'Bet on who wins each individual tournament game. All 64 first-round games available at major sportsbooks.',
    },
    {
      type: 'Point spreads',
      desc: 'Higher seeds start as favourites. The spread determines by how much the favourite needs to win by to cover.',
    },
    {
      type: 'Tournament winner futures',
      desc: 'Bet on the overall champion before the tournament starts. Best value before the first round when fields are wide open.',
    },
    {
      type: 'First-round upsets',
      desc: 'Identifying 12-over-5 seed upsets is a classic March Madness strategy. Historically ~35% of 12-seeds win first-round games.',
    },
    {
      type: 'Same-game parlays',
      desc: 'Combine game winner + player props + total into one bet on a single game. Available at 247iBET and major Canadian sportsbooks for March Madness markets.',
    },
    {
      type: 'Live in-play',
      desc: 'Half-time and in-game betting available throughout the tournament. Odds update in real time — useful when favourites fall behind early.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>March Madness Betting Canada 2026 — NCAA Tournament Guide | 247iBET</title>
  <meta
    name="description"
    content="How to bet on March Madness in Canada. Best sportsbooks for NCAA tournament betting, bracket contests, live in-play tips, and AGCO-licensed Ontario sites."
  />
  <meta
    property="og:title"
    content="March Madness Betting Canada 2026 — NCAA Tournament Guide | 247iBET"
  />
  <meta
    property="og:description"
    content="How to bet on March Madness in Canada. Best sportsbooks for NCAA tournament betting, bracket contests, live in-play tips, and AGCO-licensed Ontario sites."
  />
  <meta
    name="twitter:title"
    content="March Madness Betting Canada 2026 — NCAA Tournament Guide | 247iBET"
  />
  <meta
    name="twitter:description"
    content="How to bet on March Madness in Canada. Best sportsbooks for NCAA tournament betting, bracket contests, live in-play tips, and AGCO-licensed Ontario sites."
  />
  <link rel="canonical" href={canonicalUrl('/march-madness-betting-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'March Madness Betting',
          item: 'https://247ibet.ca/march-madness-betting-canada',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">March Madness Betting</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">
      March Madness Betting Canada 2026
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Best Canadian sportsbooks for NCAA tournament betting — game lines, futures, live in-play, and
      bracket-style contests. AGCO-licensed Ontario options highlighted.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-03-01</p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <div class="navy-card mt-12 p-6 md:p-8">
    <h2 class="text-xl font-bold mb-4">March Madness Betting Types for Canadians</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 font-sans">
      {#each bettingTypes as { type, desc }}
        <div class="p-4 rounded-xl bg-white/3 border border-white/8">
          <div class="font-bold text-white mb-1">{type}</div>
          <p class="text-xs leading-relaxed">{desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="mt-8 flex flex-wrap gap-3">
    <a
      href="/tools/parlay-calculator"
      class="px-4 py-2 rounded-xl bg-slate-blue/10 border border-slate-blue/20 text-slate-blue text-sm hover:bg-slate-blue/20 transition-colors"
      >Parlay Calculator →</a
    >
    <a
      href="/best-sports-betting-sites-canada"
      class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors"
      >Best Sportsbooks →</a
    >
  </div>

  <div class="mt-12">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
