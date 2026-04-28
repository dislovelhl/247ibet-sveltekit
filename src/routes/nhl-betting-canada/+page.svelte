<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const bettingTypes = [
    { type: 'Moneyline', ex: 'Maple Leafs -130 vs Senators +110', desc: 'Bet on who wins the game outright. No spread — just pick the winner. Favourite pays less than +100; underdog pays more.' },
    { type: 'Puck Line', ex: 'Oilers -1.5 goals (-150)', desc: 'Similar to a point spread for hockey. The favourite needs a 2+ goal margin to cover. The underdog loses by 1 goal or wins — and still covers. Typical puck line is -1.5 or +1.5.' },
    { type: 'Total (Over/Under)', ex: 'Over 5.5 goals (-110)', desc: 'Bet on whether the total goals in the game goes over or under a set line. 5.5 is the most common total in NHL betting.' },
    { type: 'Period Betting', ex: '1st Period Result — Leafs -110', desc: 'Bet on the outcome of an individual period. Popular for in-play betting after the game starts.' },
    { type: 'Player Props', ex: 'McDavid Over 0.5 points (-165)', desc: 'Bet on individual player statistics — points, goals, assists, shots on goal. Available at bet365, DraftKings, and FanDuel.' },
    { type: 'Live In-Play', ex: 'Canucks to win from 0-1 down (+250)', desc: 'Bet while the game is in progress. Odds shift in real time. bet365 and DraftKings have the deepest in-play NHL markets.' },
  ];
</script>

<svelte:head>
  <title>NHL Betting Canada 2026 — Best Sites, Odds &amp; Tips | 247iBET</title>
  <meta name="description" content="NHL betting guide for Canadian fans. Best sportsbooks for hockey, how to read puck lines, NHL odds explained, and live in-play betting tips for the 2025–26 season." />
  <meta property="og:title" content="NHL Betting Canada 2026 — Best Sites, Odds &amp; Tips | 247iBET" />
  <meta property="og:description" content="NHL betting guide for Canadian fans. Best sportsbooks for hockey, how to read puck lines, NHL odds explained, and live in-play betting tips for the 2025–26 season." />
  <meta name="twitter:title" content="NHL Betting Canada 2026 — Best Sites, Odds &amp; Tips | 247iBET" />
  <meta name="twitter:description" content="NHL betting guide for Canadian fans. Best sportsbooks for hockey, how to read puck lines, NHL odds explained, and live in-play betting tips for the 2025–26 season." />
  <link rel="canonical" href="https://247ibet.ca/nhl-betting-canada" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"NHL Betting","item":"https://247ibet.ca/nhl-betting-canada"}]})}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">NHL Betting</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">NHL Betting Canada 2026</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">The best Canadian sportsbooks for NHL betting — ranked by market depth, puck-line availability, in-play quality, and live streaming. Plus: how to read hockey odds and bet smarter.</p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-03-01</p>
  </header>

  <div class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">Affiliate disclosure: This page may contain affiliate links.</div>

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <div class="navy-card mt-12 p-6 md:p-8">
    <h2 class="text-2xl font-bold mb-5">NHL Betting Types Explained</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-gray-400 font-sans">
      {#each bettingTypes as { type, ex, desc }}
        <div class="navy-card p-4">
          <div class="font-bold text-white mb-1">{type}</div>
          <div class="text-slate-blue text-xs font-mono mb-2">{ex}</div>
          <p class="text-xs leading-relaxed">{desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="mt-8 flex flex-wrap gap-3">
    <a href="/tools/odds-calculator" class="px-4 py-2 rounded-xl bg-slate-blue/10 border border-slate-blue/20 text-slate-blue text-sm hover:bg-slate-blue/20 transition-colors">Odds Calculator →</a>
    <a href="/tools/parlay-calculator" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">Parlay Calculator →</a>
    <a href="/guides/sports-betting-odds-explained" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors">Odds Guide →</a>
  </div>

  <div class="mt-12">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
    </div>
  </div>
</div>
