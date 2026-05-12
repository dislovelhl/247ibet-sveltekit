<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Sports Betting Odds Canada 2026 | Odds Explained | 247iBET</title>
  <meta
    name="description"
    content="Learn how to read American, decimal, and fractional odds in Canada with payout examples, implied probability basics, and responsible play guidance."
  />
  <meta property="og:title" content="Sports Betting Odds Canada 2026 | Odds Explained | 247iBET" />
  <meta
    property="og:description"
    content="American, decimal, and fractional odds demystified — with payout examples for NHL, CFL, and NBA betting in Canada."
  />
  <meta name="twitter:title" content="Sports Betting Odds Explained Canada 2026 | 247iBET" />
  <meta
    name="twitter:description"
    content="How to read American, decimal, and fractional odds with payout examples for Canadian bettors."
  />
  <link rel="canonical" href={canonicalUrl('/guides/sports-betting-odds-explained')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Sports Betting Odds Explained Canada 2026',
      description:
        'American, decimal, and fractional odds explained with payout examples for Canadian bettors.',
      url: 'https://247ibet.ca/guides/sports-betting-odds-explained',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://247ibet.ca/guides' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sports Betting Odds Explained',
          item: 'https://247ibet.ca/guides/sports-betting-odds-explained',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Sports Betting Odds</li>
    </ol>
  </nav>

  <header class="navy-card rounded-3xl border border-white/10 p-6 md:p-10 mb-8">
    <div class="text-xs font-mono text-prestige-gold uppercase tracking-[0.3em] mb-3">
      Betting Education
    </div>
    <h1 class="page-hero-title mb-4">Sports Betting Odds Explained</h1>
    <p class="text-gray-300 text-lg max-w-xl leading-relaxed">
      American, decimal, and fractional odds demystified — with payout examples for NHL, CFL, and
      NBA betting in Canada.
    </p>
  </header>

  <AffiliateDisclosure />

  <div class="space-y-5 mb-10">
    <section class="navy-card rounded-2xl border border-white/10 p-5 md:p-6">
      <h2 class="text-xl font-bold text-white mb-1">American Odds</h2>
      <div class="text-[11px] font-mono text-gray-500 mb-4 uppercase tracking-wider">
        Used by all Canadian sportsbooks
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
        <div class="p-4 rounded-xl bg-white/3 border border-white/8">
          <p class="font-bold text-white mb-1">Positive odds (+150): Underdog</p>
          <p>
            A $100 bet at +150 wins $150 profit ($250 total). The number tells you how much you win
            on a $100 bet. Higher number = bigger underdog = higher payout.
          </p>
        </div>
        <div class="p-4 rounded-xl bg-white/3 border border-white/8">
          <p class="font-bold text-white mb-1">Negative odds (-150): Favourite</p>
          <p>
            A bet at -150 requires wagering $150 to win $100 profit ($250 total). The number tells
            you how much you must bet to win $100. Higher absolute number = bigger favourite.
          </p>
        </div>
      </div>
    </section>

    <section class="navy-card rounded-2xl border border-white/10 p-5 md:p-6">
      <h2 class="text-xl font-bold text-white mb-1">Decimal Odds</h2>
      <div class="text-[11px] font-mono text-gray-500 mb-4 uppercase tracking-wider">
        Popular in Europe, used on some Canadian sites
      </div>
      <p class="text-sm text-gray-400 leading-relaxed">
        Decimal odds show your total return per $1 wagered (including your stake). <span
          class="text-white font-bold">2.50 decimal</span
        >
        = $1 bet returns $2.50 total = $1.50 profit. Conversion: American +150 = Decimal 2.50. Formula:
        <span class="text-slate-blue font-mono">Total payout = Stake × Decimal odds</span>
      </p>
    </section>

    <section class="navy-card rounded-2xl border border-white/10 p-5 md:p-6">
      <h2 class="text-xl font-bold text-white mb-1">Fractional Odds</h2>
      <div class="text-[11px] font-mono text-gray-500 mb-4 uppercase tracking-wider">
        Used in horse racing
      </div>
      <p class="text-sm text-gray-400 leading-relaxed">
        Fractional odds (e.g., <span class="text-white font-bold">3/2</span>) show profit relative
        to stake. 3/2 means: win $3 for every $2 wagered = $150 profit on a $100 bet. Equivalent to
        American +150. Used primarily in horse racing and some UK-licensed sportsbooks.
      </p>
    </section>
  </div>

  <section class="navy-card rounded-2xl border border-white/10 p-6 mb-8">
    <h2 class="text-xl font-bold text-white mb-4">Implied Probability — The Key Concept</h2>
    <p class="text-sm text-gray-400 mb-4 leading-relaxed">
      Every set of odds represents an <strong class="text-white">implied probability</strong> — the sportsbook's
      estimate of the likelihood of that outcome. The difference between your estimated probability and
      the implied probability is the edge (positive or negative).
    </p>
    <div class="overflow-x-auto">
      <table class="w-full text-xs border-collapse">
        <thead>
          <tr class="border-b border-white/10">
            <th class="text-left p-3 text-gray-400 font-mono uppercase">American Odds</th>
            <th class="text-left p-3 text-gray-400 font-mono uppercase">Implied Probability</th>
            <th class="text-left p-3 text-gray-400 font-mono uppercase">Example</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          {#each [['-200', '66.7%', 'Heavy favourite (e.g., NHL Oilers vs expansion team)'], ['-150', '60.0%', 'Moderate favourite'], ['-110', '52.4%', 'Spread bet standard line (includes vig)'], ['+100', '50.0%', 'Even money — no favourite'], ['+150', '40.0%', 'Underdog'], ['+300', '25.0%', 'Significant underdog'], ['+1000', '9.1%', 'Long shot (e.g., Grey Cup winner pre-season)']] as [odds, prob, ex]}
            <tr class="hover:bg-white/2">
              <td class="p-3 text-slate-blue font-mono font-bold">{odds}</td>
              <td class="p-3 text-white">{prob}</td>
              <td class="p-3 text-gray-500">{ex}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <div class="flex flex-wrap gap-3 mb-8">
    <a
      href="/tools/odds-calculator"
      class="px-4 py-2 rounded-xl bg-slate-blue/10 border border-slate-blue/20 text-slate-blue text-sm hover:bg-slate-blue/20 transition-colors"
      >Odds Calculator for Canadian Bets →</a
    >
    <a
      href="/tools/parlay-calculator"
      class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors"
      >Parlay Calculator Canada →</a
    >
    <a
      href="/best-sports-betting-sites-canada"
      class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors"
      >Best Sports Betting Sites Canada →</a
    >
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>

  <nav aria-label="Related guides" class="mt-8 border-t border-white/10 pt-6">
    <p class="text-xs text-text-tertiary mb-3 uppercase tracking-widest font-medium">
      Related guides
    </p>
    <div class="flex flex-wrap gap-3">
      <a
        href="/tools/odds-calculator"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Odds Calculator for Canadian Bets</a
      >
      <a
        href="/tools/parlay-calculator"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Parlay Calculator Canada</a
      >
      <a
        href="/best-sports-betting-sites-canada"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Best Sports Betting Sites Canada</a
      >
      <a
        href="/sportsbook"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Sports Betting Canada 2026</a
      >
    </div>
  </nav>
</div>
