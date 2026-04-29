<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const faqItems = [
    {
      question: 'What do American odds mean?',
      answer:
        'American odds show either how much you need to risk to win $100 on a favourite, or how much you win on a $100 stake for an underdog. Negative odds are favourites; positive odds are underdogs.',
    },
    {
      question: 'What is break-even probability on odds?',
      answer:
        'Break-even probability is the win rate you need to avoid losing money long term. For example, -110 implies about 52.4 percent, while +200 implies 33.3 percent.',
    },
    {
      question: 'How do I calculate payout from odds?',
      answer:
        'Enter the odds and stake into the calculator. The tool converts the line into profit and total payout so you can compare price, stake size, and expected return before you place a bet.',
    },
    {
      question: 'Why is -110 so common in sports betting?',
      answer:
        '-110 is the standard price for many point spreads and totals in North American markets. It reflects the bookmaker margin, which is also called vig or juice.',
    },
  ];

  const oddsReference = [
    {
      odds: '-110',
      example: '$90.91 profit / $190.91 payout',
      meaning: 'Common spread or total price in North American betting markets.',
    },
    {
      odds: '+100',
      example: '$100 profit / $200 payout',
      meaning: 'Even money: you double a winning stake.',
    },
    {
      odds: '+200',
      example: '$200 profit / $300 payout',
      meaning: 'Underdog price with a larger payout relative to risk.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Sports Betting Odds Calculator | Odds Converter 247iBET</title>
  <meta
    name="description"
    content="Free Canadian sports betting odds calculator. Convert American odds (+/-) to potential payout and profit. Works for all major sports: NHL, CFL, NBA, NFL, UFC."
  />
  <meta property="og:title" content="Sports Betting Odds Calculator | Odds Converter 247iBET" />
  <meta
    property="og:description"
    content="Free Canadian sports betting odds calculator. Convert American odds (+/-) to potential payout and profit."
  />
  <link rel="canonical" href={canonicalUrl('/tools/odds-calculator')} />
  <JsonLd {schema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Odds Calculator</li>
    </ol>
  </nav>

  <header class="mb-8">
    <div class="mb-4 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">Free betting tool</span>
    </div>
    <h1 class="page-hero-title text-3xl md:text-4xl mb-3">Sports Betting Odds Calculator</h1>
    <p class="page-hero-subtitle mt-3 max-w-2xl text-base">
      Enter American odds (e.g., <span class="odds">-110</span> or <span class="odds">+200</span>)
      and your stake to instantly calculate potential profit and total payout. Works for all major
      Canadian sports.
    </p>
  </header>

  <AffiliateDisclosure />

  <section class="navy-card rounded-2xl border border-white/10 p-6 md:p-8 mb-8">
    <h2 class="text-xl font-bold mb-4">Quick answer</h2>
    <p class="text-sm text-gray-400 font-sans leading-relaxed">
      Negative American odds tell you how much you must risk to win $100; positive odds tell you how
      much you win on a $100 stake. Use this calculator to convert the line into a payout number,
      then compare that result with the break-even rate implied by the price.
    </p>
    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
      <div class="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div class="text-xs font-mono text-slate-blue uppercase tracking-[0.25em] mb-1">
          Break-even
        </div>
        <div class="text-white font-bold stat">-110 = 52.4%</div>
        <div class="text-gray-500 mt-1">
          You need to win more than 52.4% of the time to beat the line.
        </div>
      </div>
      <div class="rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div class="text-xs font-mono text-slate-blue uppercase tracking-[0.25em] mb-1">
          Underdog
        </div>
        <div class="text-white font-bold stat">+200 = 33.3%</div>
        <div class="text-gray-500 mt-1">
          A lower win rate can still be profitable if the payout is large enough.
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Calculator Placeholder -->
  <div class="navy-card rounded-2xl p-8 text-center mb-8">
    <div class="text-slate-blue text-4xl mb-4">🧮</div>
    <p class="text-gray-400 font-sans text-sm">
      Interactive odds calculator — implement as Svelte component in Phase 2.
    </p>
  </div>

  <section class="navy-card mt-10 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-xl font-bold mb-4">How to Read American Odds</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400 font-sans">
      <div>
        <h3 class="text-white font-bold mb-2">Negative Odds (Favourite)</h3>
        <p>
          Negative odds (e.g., <strong class="text-white">-150</strong>) represent the favourite.
          The number indicates how much you must bet to win $100. At -150, you bet $150 to win $100
          profit ($250 total payout).
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Positive Odds (Underdog)</h3>
        <p>
          Positive odds (e.g., <strong class="text-white">+200</strong>) represent the underdog. The
          number indicates how much you win on a $100 bet. At +200, a $100 bet wins $200 profit
          ($300 total payout).
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Even Money (+100)</h3>
        <p>
          At <strong class="text-white">+100</strong> (or EVEN), a $100 bet wins $100 profit ($200 total
          payout). You double your money.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Standard Spread (-110)</h3>
        <p>
          <strong class="text-white">-110</strong> is the standard price for point spread and totals (over/under)
          bets in North American sports. You pay $110 to win $100 — the extra $10 is the bookmaker's margin
          (vig/juice).
        </p>
      </div>
    </div>
  </section>

  <section class="mt-8">
    <div class="mb-4 flex items-baseline justify-between gap-3">
      <h2 class="text-xl font-bold">Related Betting Tools</h2>
      <a href="/tools" class="view-all-link">View all tools →</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a
        href="/tools/parlay-calculator"
        class="navy-card rounded-xl border border-white/10 p-4 hover:border-slate-blue/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-sm text-white">Parlay Calculator</div>
          <div class="text-xs text-gray-500">Multi-leg bet payout estimator</div>
        </div>
        <span class="text-slate-blue" aria-hidden="true">→</span>
      </a>
      <a
        href="/best-sports-betting-sites-canada"
        class="navy-card rounded-xl border border-white/10 p-4 hover:border-slate-blue/40 hover:-translate-y-0.5 transition-all flex items-center justify-between"
      >
        <div>
          <div class="font-bold text-sm text-white">Best Sportsbooks</div>
          <div class="text-xs text-gray-500">Compare top Canadian sportsbooks</div>
        </div>
        <span class="text-slate-blue" aria-hidden="true">→</span>
      </a>
    </div>
  </section>

  <section class="navy-card mt-10 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-xl font-bold mb-4">Odds Calculator FAQ</h2>
    <div class="space-y-3">
      {#each faqItems as faq}
        <details class="rounded-xl border border-white/10 bg-white/[0.03]">
          <summary
            class="px-4 py-3 cursor-pointer text-sm font-semibold text-white list-none flex items-center justify-between gap-4"
          >
            {faq.question}
            <span class="text-slate-blue text-lg leading-none">+</span>
          </summary>
          <div
            class="px-4 pb-4 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/10"
          >
            {faq.answer}
          </div>
        </details>
      {/each}
    </div>
  </section>

  <section class="navy-card mt-8 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-xl font-bold mb-4">Odds Reference Table</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/[0.03]">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Odds</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Example on $100</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">What it means</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          {#each oddsReference as row}
            <tr>
              <td class="p-4 text-white font-bold odds">{row.odds}</td>
              <td class="p-4 text-gray-300">{row.example}</td>
              <td class="p-4 text-gray-300">{row.meaning}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</div>
