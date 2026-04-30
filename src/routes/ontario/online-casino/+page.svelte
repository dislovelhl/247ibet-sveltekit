<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const faqItems = [
    {
      question: 'Who can use an Ontario online casino account?',
      answer:
        'Ontario online casino accounts are intended for players who are at least 19 and physically located in Ontario when they play.',
    },
    {
      question: 'What should I confirm before I deposit?',
      answer:
        'Check Interac support, document requirements, current account-access rules, and how withdrawals are handled after verification.',
    },
    {
      question: 'Does Interac work for Ontario casino accounts?',
      answer:
        'Yes. Interac e-Transfer is one of the most reliable and widely used payment methods for Ontario players, supporting both CAD deposits and withdrawals.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Ontario Online Casino Games | 247ibet</title>
  <meta
    name="description"
    content="Ontario online casino page covering slots, live dealer games, Interac payments, and account-access checks for players in the province."
  />
  <meta property="og:title" content="Ontario Online Casino Games | 247ibet" />
  <meta
    property="og:description"
    content="Ontario online casino access with slots, live dealer games, and fast Interac CAD payouts."
  />
  <meta name="twitter:title" content="Ontario Online Casino Games | 247ibet" />
  <meta
    name="twitter:description"
    content="Ontario online casino access with slots, live dealer games, and fast Interac CAD payouts."
  />
  <link rel="canonical" href={canonicalUrl('/ontario/online-casino')} />
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
          name: 'Online Casino',
          item: 'https://247ibet.ca/ontario/online-casino',
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
        <li class="text-white">Online Casino</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">
      Ontario Online Casino Games
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Access Ontario casino gaming with slots, live dealer blackjack, and Interac-friendly payments.
      Use this page to check age rules, account access, and the path from deposit to withdrawal.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-04-02</p>
  </header>

  <AffiliateDisclosure />

  <section class="mt-12 navy-card rounded-2xl border border-white/10 p-8 mb-10">
    <h2 class="text-2xl font-bold text-white mb-6">Ontario Casino Setup</h2>
    <div class="grid gap-8 md:grid-cols-2 text-sm text-gray-400 leading-relaxed">
      <div class="space-y-4">
        <p>
          <strong class="text-white">Account Access:</strong> Ontario online casino play is built for
          players who are at least 19 and physically located in the province when they sign in and play.
        </p>
        <p>
          <strong class="text-white">Location Check:</strong> Expect location confirmation as part of
          the real-money flow before you move from browsing to depositing and playing.
        </p>
      </div>
      <div class="space-y-4">
        <p>
          <strong class="text-white">Secure CAD Payments:</strong> Interac e-Transfer remains the cleanest
          CAD route for deposits and withdrawals once your account is verified.
        </p>
        <p>
          <strong class="text-white">Player Controls:</strong> Deposit limits, breaks, and self-exclusion
          options should be easy to reach from the account area before you increase spend.
        </p>
      </div>
    </div>
  </section>

  <IBetShowcase
    variant="hero"
    showFeatures={true}
    showPros={true}
    ctaText="View Ontario Promotions"
  />

  <section class="mt-16 space-y-12">
    <div>
      <h2 class="text-2xl font-bold text-white mb-6">Casino Gaming in Ontario</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <a
          href="/casino"
          class="navy-card rounded-2xl border border-white/10 p-6 hover:border-prestige-gold/30 transition-colors"
        >
          <h3 class="text-lg font-bold text-white mb-3">Explore All Casino Games</h3>
          <p class="text-sm text-gray-400 mb-4">
            Browse the full 247iBET casino — slots, live dealer, table games, and more for Canadian
            players.
          </p>
          <span class="text-prestige-gold text-xs font-bold uppercase">Explore Casino →</span>
        </a>
        <a
          href="/interac"
          class="navy-card rounded-2xl border border-white/10 p-6 hover:border-slate-blue/30 transition-colors"
        >
          <h3 class="text-lg font-bold text-white mb-3">Interac Payments in Ontario</h3>
          <p class="text-sm text-gray-400 mb-4">
            Deposit and withdraw with Interac e-Transfer — the fastest CAD payment path for Ontario
            players.
          </p>
          <span class="text-slate-blue text-xs font-bold uppercase">Interac Details →</span>
        </a>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <IBetShowcase
      variant="banner"
      ctaText="Play Now"
      contextLabel="Ontario Access · Interac CAD · 19+"
    />
  </section>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">Ontario Casino FAQ</h2>
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
