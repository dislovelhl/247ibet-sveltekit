<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const faqItems = [
    {
      question: 'Who can use Ontario sports betting accounts?',
      answer:
        'Ontario sports betting accounts are intended for players who are at least 19 and physically located in Ontario when they wager.',
    },
    {
      question: 'Can I bet on the NHL in Ontario?',
      answer:
        'Absolutely. NHL is one of the most popular markets in Ontario. We offer extensive pre-game and live in-play options for all NHL games.',
    },
    {
      question: 'What is the legal betting age in Ontario?',
      answer:
        'The legal age for sports betting in Ontario is 19. Age and identity checks should be complete before you expect full betting access.',
    },
  ];
</script>

<svelte:head>
  <title>Ontario Sports Betting | 247ibet</title>
  <meta
    name="description"
    content="Ontario sports betting page covering NHL, NBA, UFC, live markets, Interac deposits, and account-access checks for players in the province."
  />
  <meta property="og:title" content="Ontario Sports Betting | 247ibet" />
  <meta
    property="og:description"
    content="Ontario sports betting with live markets, Interac deposits, and secure CAD payouts."
  />
  <meta name="twitter:title" content="Ontario Sports Betting | 247ibet" />
  <meta
    name="twitter:description"
    content="Ontario sports betting with live markets, Interac deposits, and secure CAD payouts."
  />
  <link rel="canonical" href={canonicalUrl('/ontario/sports-betting')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Ontario', item: 'https://247ibet.ca/ontario' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sports Betting',
          item: 'https://247ibet.ca/ontario/sports-betting',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/ontario" class="hover:text-white">Ontario</a></li>
        <li>/</li>
        <li class="text-white">Sports Betting</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Ontario Sports Betting</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Bet on sports in Ontario with live odds, deep NHL and NBA markets, and Interac-friendly
      payment paths. Use this page to check age rules, account access, and payout expectations.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-04-02</p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <section class="mt-12 navy-card rounded-2xl border border-white/10 p-8 mb-10">
    <h2 class="text-2xl font-bold text-white mb-6">Ontario Sportsbook Setup</h2>
    <p class="text-sm text-gray-400 leading-relaxed mb-6">
      Ontario players should check age eligibility, location access, payment support, and account
      limits before moving from signup to first bet.
    </p>
    <div class="grid gap-6 md:grid-cols-3 text-sm text-gray-400">
      <div class="space-y-2">
        <h3 class="font-bold text-white uppercase tracking-tight text-xs">Account Access</h3>
        <p>
          Real-money betting is intended for players who are physically in Ontario and 19 or older.
        </p>
      </div>
      <div class="space-y-2">
        <h3 class="font-bold text-white uppercase tracking-tight text-xs">Interac &amp; CAD</h3>
        <p>
          Deposits can be quick, but withdrawals still depend on verification, approval, and
          bank-side completion.
        </p>
      </div>
      <div class="space-y-2">
        <h3 class="font-bold text-white uppercase tracking-tight text-xs">Responsible Play</h3>
        <p>
          Use limits, breaks, and self-exclusion tools before your sportsbook routine starts to feel
          automatic.
        </p>
      </div>
    </div>
  </section>

  <IBetShowcase variant="hero" showFeatures={true} ctaText="Start Betting" />

  <section class="mt-16 space-y-12">
    <div>
      <h2 class="text-2xl font-bold text-white mb-6">Sports Betting in Ontario</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <a
          href="/sportsbook"
          class="navy-card rounded-2xl border border-white/10 p-6 hover:border-prestige-gold/30 transition-colors"
        >
          <h3 class="text-lg font-bold text-white mb-3">Explore All Sports Markets</h3>
          <p class="text-sm text-gray-400 mb-4">
            Browse the full 247iBET sportsbook — NHL, NBA, UFC, parlays, and live betting for
            Canadian players.
          </p>
          <span class="text-prestige-gold text-xs font-bold uppercase">Explore Sportsbook →</span>
        </a>
        <a
          href="/interac"
          class="navy-card rounded-2xl border border-white/10 p-6 hover:border-slate-blue/30 transition-colors"
        >
          <h3 class="text-lg font-bold text-white mb-3">Interac Payments in Ontario</h3>
          <p class="text-sm text-gray-400 mb-4">
            Deposit and withdraw with Interac e-Transfer — secure CAD payments for Ontario sports
            bettors.
          </p>
          <span class="text-slate-blue text-xs font-bold uppercase">Interac Details →</span>
        </a>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <IBetShowcase
      variant="banner"
      ctaText="Join Now"
      contextLabel="Ontario Access · Live Betting · 19+"
    />
  </section>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">Ontario Sports FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
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
