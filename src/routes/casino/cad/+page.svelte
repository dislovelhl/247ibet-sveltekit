<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { CheckCircle2 } from 'lucide-svelte';

  const pageName = 'CAD Casino';

  const intro = {
    eyebrow: 'CAD casino Canada',
    title: 'Why Canadian-dollar accounts remove friction',
    body: 'When your casino balance, deposits, and withdrawals all stay in CAD, you can read your bankroll accurately without mentally adjusting for exchange rates. That clarity becomes even more useful when you want to move funds in and out through familiar local banking methods.',
  };

  const cards = [
    {
      title: 'No Conversion Layer',
      body: 'A CAD balance helps you avoid hidden foreign-exchange drift between deposit, play, and withdrawal activity.',
    },
    {
      title: 'CAD Deposits and Withdrawals',
      body: 'Keeping the same currency on both sides of the cashier makes it easier to track bankroll movement and expected payout amounts.',
    },
    {
      title: 'Interac Integration',
      body: 'Interac remains the most familiar local banking rail for many Canadian players because it is already tied to their bank account and local currency.',
    },
  ];

  const leftRail = {
    title: 'Why CAD support matters',
    items: [
      'A Canadian-dollar balance makes bankroll planning simpler because your deposit amount, game stakes, and withdrawal request all stay in the same currency.',
      'You avoid extra ambiguity around exchange-rate movement, especially if you deposit and cash out at different times.',
      'CAD support pairs naturally with Interac e-Transfer, the Canadian payment rail highlighted on 247iBET.',
    ],
  };

  const rightRail = {
    title: 'What to verify before you deposit',
    items: [
      'Check Interac cashier minimums, maximums, and any verification steps before assuming a transfer will stay fast in every case.',
      'Use banking details that match your verified account name to avoid avoidable review delays when you request a withdrawal.',
      'Quick withdrawals depend on completed KYC, payment-method fit, and operator approval, not on marketing language alone.',
    ],
  };

  const heroCtaText = 'Play in CAD';
  const bannerContextLabel = 'CAD bankrolls · Interac-first banking · Clear local pricing';

  const faqTitle = 'CAD Casino FAQ';
  const faqItems = [
    {
      question: 'Why is a CAD casino account better for Canadian players?',
      answer:
        'It keeps deposits, balances, and withdrawals in the same currency you already use every day. That makes bankroll tracking clearer and reduces the chance of avoidable conversion costs.',
    },
    {
      question: 'Does CAD support mean withdrawals are guaranteed to be instant?',
      answer:
        'No. CAD support removes currency friction, but withdrawal timing still depends on account verification, Interac handling, and operator approval. It is better to think in terms of smoother banking rather than guaranteed speed.',
    },
    {
      question: 'Is Interac the best fit for a CAD casino account?',
      answer:
        'For many Canadian players, yes. Interac is familiar, bank-linked, and already built around Canadian dollars, which makes it one of the cleanest options for local deposits and withdrawals.',
    },
    {
      question: 'What should I check before depositing into a CAD casino account?',
      answer:
        'Review the cashier minimums, verification requirements, and whether your preferred withdrawal method matches your deposit setup. Those details shape how smooth the full banking cycle will be later.',
    },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>CAD Casino Canada | Play in Canadian Dollars | 247iBET Canada</title>
  <meta
    name="description"
    content="Play casino in Canadian dollars at 247iBET. Understand how CAD deposits and withdrawals work, why avoiding conversion fees matters, and how Interac fits into a local banking setup."
  />
  <meta
    property="og:title"
    content="CAD Casino Canada | Play in Canadian Dollars | 247iBET Canada"
  />
  <meta
    property="og:description"
    content="Play casino in Canadian dollars at 247iBET. Understand how CAD deposits and withdrawals work, why avoiding conversion fees matters, and how Interac fits into a local banking setup."
  />
  <meta
    name="twitter:title"
    content="CAD Casino Canada | Play in Canadian Dollars | 247iBET Canada"
  />
  <meta
    name="twitter:description"
    content="Play casino in Canadian dollars at 247iBET. Understand how CAD deposits and withdrawals work, why avoiding conversion fees matters, and how Interac fits into a local banking setup."
  />
  <link rel="canonical" href={canonicalUrl('/casino/cad')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Casino', item: 'https://247ibet.ca/casino' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CAD Casino',
          item: 'https://247ibet.ca/casino/cad',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/casino" class="hover:text-white">Casino</a></li>
      <li>/</li>
      <li class="text-white font-medium">{pageName}</li>
    </ol>
  </nav>

  <div class="rounded-2xl overflow-hidden mb-8 bg-navy-card border border-white/10 px-6 py-5">
    <div
      class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5"
    >
      {intro.eyebrow}
    </div>
    <p class="text-xl md:text-2xl font-bold text-white">{pageName}</p>
  </div>

  <header class="mb-10">
    <h1 class="page-hero-title mb-4">
      Play Casino in Canadian Dollars
    </h1>
    <p class="text-base text-text-body leading-relaxed max-w-3xl">
      A CAD casino account keeps deposits, wagering, and withdrawals in the same currency Canadian
      players already use. That means clearer bankroll tracking, fewer foreign-exchange surprises,
      and a smoother path when you pair the cashier with Interac.
    </p>
  </header>

  <AffiliateDisclosure />

  <section class="navy-card mt-12 rounded-2xl border border-white/10 p-6 md:p-8">
    <div
      class="mb-4 inline-flex items-center rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-prestige-gold"
    >
      {intro.eyebrow}
    </div>
    <h2 class="text-2xl font-bold text-white">{intro.title}</h2>
    <p class="mt-4 text-base leading-relaxed text-gray-400">{intro.body}</p>
  </section>

  <section class="mt-12">
    <ul class="divide-y divide-white/10">
      {#each cards as card}
        <li class="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-10 md:py-7">
          <h3 class="text-xl font-bold text-white">{card.title}</h3>
          <p class="text-sm leading-relaxed text-gray-400">{card.body}</p>
        </li>
      {/each}
    </ul>
  </section>

  <section class="mt-12 grid gap-6 md:grid-cols-2">
    <div class="navy-card rounded-2xl border border-white/10 p-6 md:p-8">
      <h2 class="text-2xl font-bold text-white">{leftRail.title}</h2>
      <ul class="mt-6 space-y-4">
        {#each leftRail.items as item}
          <li class="flex gap-3 text-sm leading-relaxed text-gray-400">
            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navy-card rounded-2xl border border-white/10 p-6 md:p-8">
      <h2 class="text-2xl font-bold text-white">{rightRail.title}</h2>
      <ul class="mt-6 space-y-4">
        {#each rightRail.items as item}
          <li class="flex gap-3 text-sm leading-relaxed text-gray-400">
            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-slate-blue" aria-hidden="true" />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <nav class="mt-12 flex flex-wrap gap-6" aria-label="Related pages">
    <a
      href="/casino"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Back to Online Casino Canada</a
    >
    <a
      href="/interac"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Deposit with Interac</a
    >
    <a
      href="/best-online-casinos-canada"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Best Online Casinos</a
    >
    <a
      href="/guides/how-to-choose-online-casino"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >How to Choose a Casino</a
    >
    <a
      href="/fast-payouts"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Fast Payouts</a
    >
  </nav>

  <section class="mt-12">
    <IBetShowcase variant="banner" ctaText={heroCtaText} contextLabel={bannerContextLabel} />
  </section>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold text-white">{faqTitle}</h2>
    {#each faqItems as faq}
      <details class="navy-card group cursor-pointer rounded-xl border border-white/10 p-4">
        <summary class="list-none flex items-center justify-between gap-2 font-bold text-white">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
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
