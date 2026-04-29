<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Parlay Calculator Canada',
    description:
      'Free Canadian parlay calculator. Calculate potential payouts for multi-leg parlays with American odds.',
    url: 'https://247ibet.ca/tools/parlay-calculator',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Parlay Calculator',
        item: 'https://247ibet.ca/tools/parlay-calculator',
      },
    ],
  };
</script>

<svelte:head>
  <title>Parlay Calculator Canada: Estimate Your Payouts | 247iBET</title>
  <meta
    name="description"
    content="Free Canadian parlay calculator. Calculate potential payouts for multi-leg parlays with American odds. Supports NHL, CFL, NBA, NFL, UFC and more."
  />
  <meta property="og:title" content="Parlay Calculator Canada: Estimate Your Payouts | 247iBET" />
  <meta
    property="og:description"
    content="Free Canadian parlay calculator. Calculate potential payouts for multi-leg parlays with American odds."
  />
  <link rel="canonical" href={canonicalUrl('/tools/parlay-calculator')} />
  <JsonLd {schema} />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Parlay Calculator</li>
    </ol>
  </nav>

  <header class="mb-8">
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">Free betting tool</span>
    </div>
    <h1 class="page-hero-title text-3xl md:text-4xl mb-3">Parlay Calculator Canada</h1>
    <p class="page-hero-subtitle mt-3 max-w-2xl text-base">
      Build multi-leg parlays using Canadian sports and see projected payouts instantly. Add or
      remove legs to find the optimal combination of risk and reward.
    </p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <!-- Interactive Parlay Builder Placeholder -->
  <div class="navy-card rounded-2xl p-8 text-center mb-8">
    <div class="text-prestige-gold text-4xl mb-4">🎯</div>
    <p class="text-gray-400 font-sans text-sm">
      Interactive parlay calculator — implement as Svelte component in Phase 2.
    </p>
  </div>

  <section class="navy-card mt-10 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-xl font-bold mb-4">Parlay Betting Explained for Canadians</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400 font-sans">
      <div>
        <h3 class="text-white font-bold mb-2">What is a parlay?</h3>
        <p>
          A parlay combines 2+ individual bets into one. All legs must win for the parlay to pay
          out. In return, the odds multiply — producing significantly higher potential payouts than
          single bets.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Single-game betting in Canada</h3>
        <p>
          Since Bill C-218 passed in August 2021, single-game sports betting has been legal in
          Canada. Before that, only parlay-style bets were offered by provincial lotteries. Most
          AGCO-licensed sportsbooks now offer single bets.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Parlay risk vs reward</h3>
        <p>
          Each added leg multiplies potential payout but also reduces probability of winning. A
          3-leg parlay at <span class="odds">-110</span>/<span class="odds">-110</span>/<span
            class="odds">-110</span
          >
          pays roughly <span class="odds">+596</span> (+5.96:1) but has only a ~12.5% implied
          probability of winning all three legs.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Same-game parlays (SGP)</h3>
        <p>
          Same-game parlays combine bets from a single game (e.g., NHL game winner + total goals).
          247iBET offers same-game parlays across major Canadian sports markets. Note: SGP odds are
          often correlated — sportsbooks adjust payouts accordingly.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-8">
    <div class="mb-4 flex items-baseline justify-between gap-3">
      <h2 class="text-xl font-bold">Related Tools &amp; Guides</h2>
      <a href="/tools" class="view-all-link">View all tools →</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        href="/tools/odds-calculator"
        class="navy-card rounded-xl border border-white/10 p-4 hover:border-slate-blue/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-sm text-white">Odds Calculator</div>
          <div class="text-xs text-gray-500">Single bet payout estimator</div>
        </div>
        <span class="text-slate-blue" aria-hidden="true">→</span>
      </a>
      <a
        href="/best-sports-betting-sites-canada"
        class="navy-card rounded-xl border border-white/10 p-4 hover:border-slate-blue/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-sm text-white">Best Sportsbooks Canada</div>
          <div class="text-xs text-gray-500">Best SGP odds &amp; parlay builders</div>
        </div>
        <span class="text-slate-blue" aria-hidden="true">→</span>
      </a>
    </div>
  </section>
</div>
