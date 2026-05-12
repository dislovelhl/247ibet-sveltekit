<!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const timeline = [
    {
      year: '1985',
      event:
        'Criminal Code amended to allow parlay-only betting via provincial lotteries. Single-game betting remains illegal.',
    },
    {
      year: '2021',
      event:
        'Bill C-218 (Safe and Regulated Sports Betting Act) passes Parliament — single-game sports betting legalised in Canada. Royal Assent August 27, 2021.',
    },
    {
      year: '2022',
      event:
        'Ontario launches the first regulated private-operator online sports betting market in Canada (April 4, 2022). AGCO licences private operators under iGaming Ontario.',
    },
    {
      year: '2026',
      event:
        'Alberta expected to launch a regulated open market — 247iBET tracking operator licensing progress.',
    },
  ];

  const betTypes = [
    {
      type: 'Game Winner (Moneyline)',
      desc: 'Bet on which team wins a single game. Available for NHL, CFL, NBA, MLB, UFC, soccer, and more.',
    },
    {
      type: 'Point Spread',
      desc: 'Bet on the margin of victory. Common in basketball (NBA) and football (NFL/CFL).',
    },
    {
      type: 'Total (Over/Under)',
      desc: 'Bet on whether the combined score exceeds or falls short of a set number.',
    },
    {
      type: 'Puck Line',
      desc: "Hockey's version of the spread — favourite must win by 2+ goals (-1.5) to cover.",
    },
    { type: 'Run Line', desc: "Baseball's spread — favourite must win by 2+ runs." },
    {
      type: 'Live In-Play',
      desc: 'Single-game bets placed after the game starts. Odds update in real time based on game state.',
    },
    {
      type: 'Same-Game Parlay',
      desc: 'Multiple single-game markets combined into one bet — e.g., player props + game winner + total, all from one game.',
    },
  ];

  const faqs = [
    {
      q: 'Was single-game betting illegal in Canada before 2021?',
      a: 'Yes. The Criminal Code (s.207) previously restricted provincially-run betting to parlay-style wagers only — requiring at least two events per bet. Bill C-218, passed in 2021, removed this restriction, allowing provinces to authorise single-event sports betting.',
    },
    {
      q: 'Which provinces can I bet on single games in Canada?',
      a: 'All provinces and territories can offer single-game betting under the amended Criminal Code. Ontario has the most developed regulated market (AGCO / iGaming Ontario). Other provinces offer single-game betting through their provincial lottery corporations (e.g., ProLine+ in Ontario, Sports Select in BC/AB/MB).',
    },
    {
      q: 'What is the difference between single-game betting and parlay betting?',
      a: 'A single-game bet (moneyline, spread, total) covers one outcome from one game. A parlay combines two or more selections, and all must win for the bet to pay out — but the potential payout is multiplied. Single-game bets have better individual odds accuracy but lower maximum payouts than parlays.',
    },
    {
      q: 'Does 247iBET offer single-game sports betting in Canada?',
      a: '247iBET offers full single-game markets for Canadian players, including live in-play betting on NHL, NBA, NFL, and more. Ontario players can access both single-event and multi-event betting.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Single-Game Betting in Canada 2026: Your Guide | 247iBET</title>
  <meta
    name="description"
    content="Understand Bill C-218 and how single-game betting works in Canada, plus what legal markets look like at regulated sportsbooks."
  />
  <meta property="og:title" content="Single-Game Betting in Canada 2026: Your Guide | 247iBET" />
  <meta
    property="og:description"
    content="Understand Bill C-218 and how single-game betting works in Canada, plus what legal markets look like at regulated sportsbooks."
  />
  <meta name="twitter:title" content="Single Game Betting Canada 2026 | 247iBET" />
  <meta
    name="twitter:description"
    content="How single-game sports betting became legal in Canada under Bill C-218 and what legal markets look like in 2026."
  />
  <link rel="canonical" href={canonicalUrl('/guides/single-game-betting-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Single Game Betting Canada 2026',
      description:
        'How single-game sports betting became legal in Canada under Bill C-218 and what legal markets look like in 2026.',
      url: 'https://247ibet.ca/guides/single-game-betting-canada',
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
          name: 'Single Game Betting Canada',
          item: 'https://247ibet.ca/guides/single-game-betting-canada',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-3xl space-y-14">
  <header class="space-y-4">
    <div
      class="flex items-center gap-2 text-xs font-medium text-[#4A9EBF] uppercase tracking-widest"
    >
      Sports Betting Guide · Canada
    </div>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9]">Single Game Betting Canada</h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      How single-game sports betting became legal in Canada under Bill C-218, what bet types are
      available, and where to bet legally in 2026.
    </p>
    <p class="text-[12px] leading-5 text-[#8492A6]">
      Updated March 2026 · Interac deposits · 18+/19+
    </p>
  </header>

  <AffiliateDisclosure />

  <section aria-labelledby="timeline-heading">
    <h2 id="timeline-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Timeline — How Single-Game Betting Became Legal
    </h2>
    <div class="relative pl-4 border-l border-white/10 space-y-6">
      {#each timeline as item}
        <div class="relative">
          <div
            class="absolute -left-[21px] w-2.5 h-2.5 rounded-full bg-[#D4943A] top-1"
            aria-hidden="true"
          ></div>
          <div class="space-y-1">
            <span class="font-mono text-[#D4943A] text-sm font-bold tabular-nums">{item.year}</span>
            <p class="text-sm text-[#94A3B8] leading-relaxed">{item.event}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="types-heading">
    <h2 id="types-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Single-Game Bet Types Available in Canada
    </h2>
    <div class="space-y-3">
      {#each betTypes as b}
        <div class="navy-card rounded-lg p-4 flex items-start gap-3">
          <span class="text-[#22C55E] shrink-0 mt-0.5">✓</span>
          <div>
            <span class="font-semibold text-[#F1F5F9] text-sm">{b.type}: </span>
            <span class="text-xs text-[#94A3B8]">{b.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <IBetShowcase
    variant="hero"
    ctaText="Bet Single Games at 247iBET"
    showFeatures={true}
    contextLabel="NHL · CFL · NBA · UFC · Live in-play"
  />

  <section aria-labelledby="faq-heading">
    <h2 id="faq-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Single Game Betting Canada — FAQ
    </h2>
    <div class="space-y-3">
      {#each faqs as faq}
        <details class="navy-card rounded-xl p-4">
          <summary
            class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9] cursor-pointer"
          >
            {faq.q}
            <svg
              class="h-4 w-4 shrink-0 text-text-tertiary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
              ><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" /></svg
            >
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.a}</p>
        </details>
      {/each}
    </div>
  </section>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>

  <nav aria-label="Related pages" class="border-t border-white/8 pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related guides</p>
    <div class="flex flex-wrap gap-3">
      <a
        href="/sportsbook"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Sports Betting Canada 2026</a
      >
      <a
        href="/guides/sports-betting-odds-explained"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Sports Betting Odds Explained Canada</a
      >
      <a
        href="/legal-online-gambling-canada"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Legal Online Gambling Canada</a
      >
      <a
        href="/gambling-laws-canada"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Gambling Laws Canada Guide</a
      >
      <a
        href="/tools/parlay-calculator"
        class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
        >Parlay Calculator Canada</a
      >
    </div>
  </nav>
</div>
