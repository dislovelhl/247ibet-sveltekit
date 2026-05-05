<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { BookOpen, Calculator, AlertTriangle, CheckCircle } from 'lucide-svelte';

  const faqItems = [
    {
      q: 'What is a good wagering requirement?',
      a: 'Anything below 20× is considered very player-friendly. The industry average in Canada is 25–40×. Requirements above 50× make it very difficult to generate withdrawable winnings. Audit the effective RTP of the bonus using: (Bonus × Slot RTP) / (Bonus × Wagering multiplier). For a 97% RTP slot at 30× wagering: $100 × 0.97 × 30 = expected loss of $2,910 to clear a $100 bonus.',
    },
    {
      q: 'Do I have to claim a bonus?',
      a: "No — bonus offers are optional at all AGCO-licensed casinos. If you prefer to play without bonus restrictions (e.g., no max bet limits, free to withdraw immediately), you can deposit and play without claiming any bonus. Look for a 'Play without bonus' or 'No bonus' option in the cashier.",
    },
    {
      q: 'Can I cancel a bonus after claiming it?',
      a: "Most AGCO-licensed casinos allow you to forfeit (cancel) a bonus through your account settings or by contacting support. Forfeiting a bonus usually means any winnings generated from that bonus are also forfeited, but your deposited funds remain intact. Check the specific casino's bonus terms.",
    },
    {
      q: 'Are wagering requirements different for sportsbook bonuses?',
      a: "Yes. Sportsbook bonuses (free bets) have different mechanics. A 'free bet' typically means the stake is not returned — only the winnings. For example, a CAD $50 free bet on a +150 selection wins CAD $75 in winnings (not $125 total). Rollover requirements on sportsbook bonuses usually require wagering the bonus amount at odds of at least -200 or better 1–3 times.",
    },
  ];

  const workedExampleRows = [
    { var: 'Bonus amount', val: 'CAD $100', note: 'Nominal Bonus Value' },
    { var: 'Wagering multiplier', val: '30×', note: 'Verified Industry Median' },
    { var: 'Total wager required', val: 'CAD $3,000', note: 'Wagering Threshold' },
    { var: 'Time limit', val: '30 days', note: 'Standard Expiry Window' },
    { var: 'Max win cap', val: 'CAD $200', note: 'Withdrawal Limit' },
  ];

  const gameContribRows = [
    { game: 'Slots (General)', contrib: '100%', note: 'Primary Playthrough Asset' },
    { game: 'Video Poker', contrib: '10–20%', note: 'Heavily Deprioritized' },
    { game: 'Blackjack', contrib: '10–20%', note: 'Low House Edge Offset' },
    { game: 'Roulette', contrib: '10–20%', note: 'Variance by Territory' },
    { game: 'Live Dealer', contrib: '5–15%', note: 'Frequent Exclusion Item' },
  ];

  const warningFlags = [
    {
      flag: 'Wagering requirement above 50×',
      why: 'Extremely difficult to clear — the expected value of the bonus becomes negligible',
    },
    {
      flag: 'No published maximum withdrawal cap',
      why: 'If missing, there may be hidden restrictions — always ask support before claiming',
    },
    {
      flag: 'All games excluded except slots',
      why: 'Limits your gameplay to a narrow category — a player-unfriendly practice',
    },
    {
      flag: 'Wagering applied to deposit + bonus',
      why: 'Some bonuses calculate wagering on (deposit + bonus) amount, not just the bonus',
    },
    {
      flag: 'Maximum bet restriction while bonus active',
      why: 'Typical: CAD $5–$10 max bet while a bonus is active. Exceeding it can void the bonus',
    },
    {
      flag: 'Expiry time under 7 days',
      why: 'Very short windows to clear wagering are designed to be difficult — especially for casual players',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';

const LAST_UPDATED = '2026-04-29';
</script>

<svelte:head>
  <title>Wagering Requirements Explained: Your Playthrough Guide | 247iBET</title>
  <meta
    name="description"
    content="Learn how wagering requirements work, how to calculate playthrough, and which offer terms reduce value most."
  />
  <meta
    property="og:title"
    content="Wagering Requirements Explained: Your Playthrough Guide | 247iBET"
  />
  <meta
    property="og:description"
    content="Learn how wagering requirements work, how to calculate playthrough, and which offer terms reduce value most."
  />
  <meta
    name="twitter:title"
    content="Wagering Requirements Explained: Your Playthrough Guide | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Learn how wagering requirements work, how to calculate playthrough, and which offer terms reduce value most."
  />
  <link rel="canonical" href={canonicalUrl('/guides/wagering-requirements-explained')} />
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
          name: 'Wagering Requirements Explained',
          item: 'https://247ibet.ca/guides/wagering-requirements-explained',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Wagering Requirements</li>
    </ol>
  </nav>

  <div
    class="navy-card rounded-3xl border border-white/10 p-8 md:p-12 mb-10 relative overflow-hidden"
  >
    <div
      aria-hidden="true"
      class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-prestige-gold/5 blur-3xl pointer-events-none"
    ></div>
    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-6">
        <div
          class="w-14 h-14 rounded-2xl bg-prestige-gold/10 border border-prestige-gold/20 flex items-center justify-center"
        >
          <BookOpen class="w-7 h-7 text-prestige-gold" aria-hidden="true" />
        </div>
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prestige-gold/10 border border-prestige-gold/20 text-prestige-gold text-[10px] font-black tracking-[0.3em] uppercase font-mono"
        >
          Institutional Audit: Logic &amp; Probability
        </div>
      </div>
      <h1
        class="text-[clamp(2.05rem,4.4vw,3.35rem)] font-bold text-white mb-5 uppercase leading-[0.95]"
      >
        Playthrough Logic <span class="text-prestige-gold">&amp; Wagering</span> Protocols
      </h1>
      <p class="text-base md:text-lg max-w-3xl font-sans text-text-body">
        Understanding the mathematical friction of casino bonus playthrough requirements — featuring
        institutional calculation formulas, game contribution variance, and verified operator
        benchmarks for Canada 2026.
      </p>
    </div>
  </div>

  <AffiliateDisclosure />

  <section class="navy-card rounded-2xl border border-white/10 p-6 md:p-8 mb-6">
    <h2 class="text-[clamp(1.45rem,2vw,1.9rem)] font-bold text-white mb-4">
      What Are Wagering Requirements?
    </h2>
    <div class="space-y-4 text-sm text-gray-400 font-sans leading-relaxed">
      <p>
        A <strong class="text-white">wagering requirement</strong> (also called a
        <strong class="text-white">playthrough requirement</strong>) is a condition attached to a
        casino bonus that requires you to wager (bet) a specified multiple of the bonus amount
        before you can withdraw any winnings generated from that bonus.
      </p>
      <p>
        They exist because casinos need to prevent players from simply withdrawing free bonus money
        without playing. They're a standard part of the online casino industry globally, including
        in Canada.
      </p>
      <div class="p-6 rounded-2xl bg-black/40 border border-white/5">
        <p class="text-xs font-black uppercase tracking-widest text-prestige-gold mb-3 font-mono">
          Institutional Formula:
        </p>
        <p class="font-sans font-black text-prestige-gold text-2xl uppercase tracking-tight">
          Gross Wager = Capital × Multiplier
        </p>
      </div>
    </div>
  </section>

  <section class="navy-card rounded-2xl border border-white/10 p-6 md:p-8 mb-6">
    <h2 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
      <Calculator class="w-4 h-4" aria-hidden="true" />
      Worked Example: CAD $100 Allocation
    </h2>
    <div class="space-y-4 text-sm text-gray-400 font-sans">
      <p>
        Let's say you receive a <strong class="text-white">CAD $100 bonus</strong> with a
        <strong class="text-white">30× wagering requirement</strong>:
      </p>
      <div class="overflow-hidden rounded-2xl border border-white/5 bg-black/40">
        <table class="w-full text-[11px] border-collapse uppercase tracking-widest">
          <thead>
            <tr class="bg-white/[0.03]">
              <th
                class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
                >Audit Metric</th
              >
              <th
                class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
                >Quantum</th
              >
              <th
                class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
                >Institutional Context</th
              >
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            {#each workedExampleRows as row}
              <tr class="hover:bg-white/[0.01]">
                <td class="px-4 py-4 text-white font-bold">{row.var}</td>
                <td class="px-4 py-4 text-prestige-gold font-sans font-black">{row.val}</td>
                <td class="px-4 py-4 text-slate-400">{row.note}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-600 italic">
        In this example: you need to bet CAD $3,000 total on eligible games within 30 days. If you
        do, you can withdraw up to CAD $200 in winnings from the bonus. Your own deposited funds are
        typically freely withdrawable at any time.
      </p>
    </div>
  </section>

  <section class="navy-card rounded-2xl border border-white/10 p-6 md:p-8 mb-6">
    <h2 class="text-[clamp(1.35rem,1.8vw,1.7rem)] font-bold text-white mb-4">
      Game Contribution Rates
    </h2>
    <p class="text-sm text-gray-400 font-sans mb-4">
      Not all games contribute equally to wagering requirements. This is critical to understand —
      playing a game with 10% contribution rate means you need to wager 10× more than on a
      100%-contribution slot.
    </p>
    <div class="overflow-hidden rounded-2xl border border-white/5 bg-black/40">
      <table class="w-full text-[11px] border-collapse uppercase tracking-widest">
        <thead>
          <tr class="bg-white/[0.03]">
            <th
              class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
              >Asset Category</th
            >
            <th
              class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
              >Efficiency</th
            >
            <th
              class="text-left px-4 py-4 text-slate-500 font-mono font-black text-[10px] tracking-[0.16em]"
              >Registry Note</th
            >
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          {#each gameContribRows as row}
            <tr class="hover:bg-white/[0.01]">
              <td class="px-4 py-4 text-white font-bold">{row.game}</td>
              <td
                class="px-4 py-4 font-sans font-black {row.contrib === '100%'
                  ? 'text-green-500'
                  : 'text-prestige-gold'}">{row.contrib}</td
              >
              <td class="px-4 py-4 text-slate-500">{row.note}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <section class="navy-card rounded-2xl border border-yellow-500/20 p-5 md:p-6 mb-8">
    <h2
      class="text-[clamp(1.3rem,1.75vw,1.65rem)] font-bold mb-3 flex items-center gap-2 text-yellow-400"
    >
      <AlertTriangle class="w-5 h-5" aria-hidden="true" />
      Warning Signs in Bonus Terms
    </h2>
    <ul class="space-y-2 text-sm text-gray-400 font-sans">
      {#each warningFlags as item}
        <li class="flex items-start gap-2">
          <AlertTriangle class="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
          <span><strong class="text-yellow-200">{item.flag}:</strong> {item.why}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-[clamp(1.45rem,2vw,1.8rem)] font-bold text-white mb-4 flex items-center gap-2">
      <CheckCircle class="w-6 h-6 text-green-400" aria-hidden="true" />
      Canadian Casinos with Player-Friendly Bonus Terms
    </h2>
    <p class="text-sm text-gray-400 font-sans mb-4">
      These operators have demonstrated consistently fair bonus terms — lower wagering requirements,
      transparent conditions, and no predatory hidden clauses in our review process.
      <span class="text-yellow-400/70 text-xs"
        >Ontario: specific bonus amounts not shown per AGCO guidelines.</span
      >
    </p>
    <IBetShowcase variant="compact" ctaText="Verified Low-Wagering Entry" />
  </section>

  <section class="space-y-4 mb-10">
    <h2 class="text-[clamp(1.45rem,2vw,1.8rem)] font-bold text-white">Wagering Requirements FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl border border-white/10 p-4 group cursor-pointer">
        <summary class="font-bold text-white list-none flex items-center justify-between gap-2">
          {faq.q}
          <svg
            class="w-4 h-4 shrink-0 text-gray-500 group-open:rotate-180 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm text-gray-400 font-sans leading-relaxed">{faq.a}</p>
      </details>
    {/each}
  </section>

  <nav aria-label="Related guides" class="mt-8">
    <ul class="flex flex-wrap gap-3">
      <li>
        <a
          href="/casino-bonuses-canada"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Casino Bonuses Canada</a
        >
      </li>
      <li>
        <a
          href="/low-wagering-casinos-canada"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Low Wagering Casinos Canada</a
        >
      </li>
      <li>
        <a
          href="/guides/interac-e-transfer-casino"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Interac e-Transfer Casino Guide</a
        >
      </li>
      <li>
        <a
          href="/guides/sports-betting-odds-explained"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Sports Betting Odds Explained</a
        >
      </li>
    </ul>
  </nav>

  <div class="text-[11px] text-slate-500 font-mono uppercase tracking-widest mb-12 mt-6">
    Institutional Registry:
    <a
      href="/no-deposit-bonus-canada"
      class="text-prestige-gold hover:underline decoration-prestige-gold/30">No Deposit Protocols</a
    >
    ·
    <a
      href="/best-online-casinos-canada"
      class="text-prestige-gold hover:underline decoration-prestige-gold/30"
      >Tier-1 Platform Audit</a
    >
    ·
    <a
      href="/guides/how-to-withdraw-casino-winnings"
      class="text-prestige-gold hover:underline decoration-prestige-gold/30"
      >Cashier Verification Flows</a
    >
  </div>


  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
