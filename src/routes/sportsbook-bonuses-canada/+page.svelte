<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const LAST_UPDATED = '2026-03-30';

  const offerTypes = [
    {
      label: '🎁 Free Bets',
      desc: 'Free bet credits allow you to place wagers without risking your own funds. Winnings from free bets typically exclude the stake — a free bet win of $50 pays $50 (not $100). Ontario sportsbooks offer free bets as acquisition promotions and for specific sporting events. Odds restrictions and expiry windows apply.',
    },
    {
      label: '⚡ Odds Boosts',
      desc: 'Selected markets are offered at enhanced odds — e.g., Maple Leafs to win at +200 instead of +175. Boosts are operator-selected, typically on high-traffic markets. They represent genuine extra value for bettors who were already planning the wager. Maximum bet limits apply.',
    },
    {
      label: '🛡️ Parlay Insurance',
      desc: 'If one leg of a multi-leg parlay loses, a portion of your stake is returned as bonus credit. Typically applies to same-game parlays or accumulators of 4+ legs. Minimum odds per leg usually required. A useful risk-reduction tool for recreational parlay bettors.',
    },
  ];

  const faqItems = [
    {
      question: 'Are sportsbook bonuses legal in Ontario?',
      answer:
        "Yes. AGCO-licensed Ontario sportsbooks can offer promotions, but advertising rules restrict how bonuses can be marketed — particularly around unsolicited advertising and certain broadcast channels. Operators must comply with the AGCO's advertising standards. Bonus terms (wagering, expiry, eligible markets) must be clearly disclosed.",
    },
    {
      question: 'What is a free bet in sports betting?',
      answer:
        'A free bet is a credit that lets you place a wager without risking your own money. If the bet wins, you receive the winnings but not the stake. For example, a $25 free bet on a +150 line pays $37.50 (not $62.50). Free bets have expiry dates and eligible market restrictions — read terms before claiming.',
    },
    {
      question: 'Do Canadian sportsbook bonuses have wagering requirements?',
      answer:
        'Sports betting bonuses often have different terms than casino bonuses. Free bet credits typically require one use before winnings are withdrawable — effectively a 1x wagering requirement. Deposit match bonuses may require 5x–10x turnover on sports bets with minimum odds (e.g., -200 or higher per selection).',
    },
    {
      question: 'Are sportsbook bonuses available in provinces outside Ontario?',
      answer:
        'Ontario-licensed operators only serve Ontario residents and cannot offer promotions cross-provincially. Bettors in BC, Alberta, and other provinces may access offshore sportsbooks that operate under Kahnawake licensing and offer their own promotions.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
import AuthorByline from '$lib/components/AuthorByline.svelte';
</script>

<svelte:head>
  <title>Sportsbook Promotions Canada 2026 — Offer Credits &amp; Price Enhancements | 247iBET</title
  >
  <meta
    name="description"
    content="Compare the best sportsbook promotions in Canada for 2026. We evaluate bet credits, price enhancements, parlay insurance, and reload offers from top Canadian sportsbooks. Updated monthly."
  />
  <meta property="og:title" content="Sportsbook Promotions Canada 2026" />
  <meta
    property="og:description"
    content="Compare the best sportsbook promotions in Canada for 2026. We evaluate bet credits, price enhancements, parlay insurance, and reload offers from top Canadian sportsbooks. Updated monthly."
  />
  <link rel="canonical" href={canonicalUrl('/sportsbook-bonuses-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sportsbook Bonuses',
          item: 'https://247ibet.ca/sportsbook-bonuses-canada',
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
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">Sportsbook Bonuses</li>
      </ol>
    </nav>
    <h1 class="page-hero-title mb-4">
      Sportsbook Promotions Canada 2026
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Canadian sports betting promotions compared — bet credits, price enhancements, parlay
      insurance, and reload offers. We evaluate offer value after Ontario AGCO compliance
      requirements and break down which promotions actually benefit recreational bettors.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: {LAST_UPDATED}</p>
    <AuthorByline authorId="editorial" date={LAST_UPDATED} />
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <section class="navy-card mt-16 rounded-2xl p-6 md:p-8">
    <h2 class="text-2xl font-bold mb-6">Types of Sportsbook Offers in Canada</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
      {#each offerTypes as { label, desc }}
        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div class="text-base font-bold mb-1">{label}</div>
          <p class="text-gray-400 font-sans text-xs leading-relaxed">{desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-10 space-y-4">
    <h2 class="text-2xl font-bold">Sportsbook Bonuses Canada FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4">
        <summary
          class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9] cursor-pointer"
        >
          {faq.question}
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
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
