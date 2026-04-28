<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const categoryCards = [
    {
      path: '/casino/slots',
      pageName: 'Online Slots',
      taxonomyDescription: 'Understand RTP, compare classic and video formats, and learn how progressive jackpots change slot volatility.',
      image: '/images/hero/hero-slots-premium.png',
    },
    {
      path: '/casino/live-casino',
      pageName: 'Live Casino',
      taxonomyDescription: 'See how live blackjack, roulette, and baccarat work, and what to expect from real-dealer tables streamed in HD.',
      image: '/images/editorial/live-dealer-premium.png',
    },
    {
      path: '/casino/blackjack',
      pageName: 'Blackjack Online',
      taxonomyDescription: 'Compare classic, multi-hand, and live blackjack with a practical view of strategy basics and expected RTP ranges.',
      image: '/images/games/blackjack.jpg',
    },
    {
      path: '/casino/roulette',
      pageName: 'Roulette Online',
      taxonomyDescription: 'Compare European, French, and American roulette, with the key house-edge and live-table differences laid out clearly.',
      image: '/images/games/roulette1.jpg',
    },
    {
      path: '/casino/baccarat',
      pageName: 'Baccarat Online',
      taxonomyDescription: 'Review the core bets, understand live baccarat pacing, and keep strategy centred on the lower-edge options.',
      image: '/images/games/baccarat.jpg',
    },
    {
      path: '/casino/mobile',
      pageName: 'Mobile Casino',
      taxonomyDescription: 'Understand touch-optimised games, mobile web versus app-style access, and how PWA-style features help Canadian players.',
      image: '/images/editorial/mobile-betting-premium.png',
    },
    {
      path: '/casino/cad',
      pageName: 'CAD Casino',
      taxonomyDescription: 'Learn why a Canadian-dollar account matters, how Interac supports it, and what to check before making your first deposit.',
      image: '/images/editorial/interac-safety.png',
    },
  ];

  const faqItems = [
    {
      question: 'Are online casinos legal in Canada?',
      answer: 'Yes. Online casinos are legal in Canada, with Ontario operating a regulated private iGaming market overseen by the AGCO. 247iBET provides a trusted and secure environment for Canadian players.',
    },
    {
      question: 'Can I use Interac for casino deposits and withdrawals?',
      answer: 'Yes. Interac e-Transfer is our recommended method for both deposits and withdrawals in Canada. It offers secure, CAD-native transactions with competitive processing times.',
    },
    {
      question: 'How fast are casino payouts at 247iBET?',
      answer: 'We prioritise fast withdrawals. While exact timing depends on KYC verification and your bank, Interac withdrawals are typically processed quickly after operator approval.',
    },
    {
      question: 'What types of games are available?',
      answer: 'Our casino structure covers slots, live casino, blackjack, roulette, baccarat, mobile play, and CAD-focused banking guidance so Canadian players can move from game research into payments without leaving the 247iBET ecosystem.',
    },
  ];
</script>

<svelte:head>
  <title>Online Casino Canada: Slots, Live Games & Fast Payouts | 247iBET</title>
  <meta name="description" content="Discover the top-rated regulated online casinos in Canada. 247iBET verified benchmarks for payout speeds, licensing compliance, and institutional security." />
  <meta property="og:title" content="Online Casino Canada: Slots, Live Games & Fast Payouts | 247iBET" />
  <meta property="og:description" content="Discover the top-rated regulated online casinos in Canada. 247iBET verified benchmarks for payout speeds, licensing compliance, and institutional security." />
  <meta name="twitter:title" content="Online Casino Canada: Slots, Live Games & Fast Payouts | 247iBET" />
  <meta name="twitter:description" content="Discover the top-rated regulated online casinos in Canada. 247iBET verified benchmarks for payout speeds, licensing compliance, and institutional security." />
  <link rel="canonical" href="https://247ibet.ca/casino" />
  <script type="application/ld+json">{@html JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://247ibet.ca"},{"@type":"ListItem","position":2,"name":"Casino","item":"https://247ibet.ca/casino"}]})}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">Casino</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Play Online Casino in Canada</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">Explore a premium selection of slots, live dealer games, and classic table games. Secure your play with Interac CAD deposits and experience fast, reliable withdrawals.</p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-04-02</p>
  </header>

  <div class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">Affiliate disclosure: This page may contain affiliate links.</div>

  <div class="mb-10">
    <div class="my-6 rounded-xl border border-prestige-gold/20 bg-prestige-gold/5 p-5">
      <p class="font-bold text-white text-sm">Interac deposits are instant. Withdrawals are typically processed within 24 hours of approval. Regulated slots, blackjack, and live games are 19+ in Canada.</p>
      <p class="mt-2 text-xs text-text-tertiary leading-relaxed">Ontario play is restricted to confirmed provincial residents. Alberta launch status is pending (expected July 2026). Always verify your regional eligibility before play.</p>
    </div>
  </div>

  <IBetShowcase variant="hero" showFeatures showPros ctaText="Play Now" />

  <section class="mt-16 space-y-12">
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {#each categoryCards as cat}
        <div class="navy-card relative p-6 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10">
          {#if cat.image}
            <img src={cat.image} alt="" class="object-cover opacity-[0.13] mix-blend-luminosity pointer-events-none absolute inset-0 w-full h-full" />
          {/if}
          <div class="relative z-10">
            <h3 class="text-xl font-bold text-white mb-3">{cat.pageName}</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-6">{cat.taxonomyDescription}</p>
          </div>
          <a href={cat.path} class="relative z-10 text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">
            Explore {cat.pageName} →
          </a>
        </div>
      {/each}
    </div>

    <div class="navy-card p-8 rounded-2xl border border-white/10">
      <h2 class="text-2xl font-bold mb-6">Why Play Casino at 247iBET?</h2>
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>
            <strong class="text-white block mb-1">Interac & CAD Native</strong>
            No currency conversion fees. Deposit and withdraw using the most trusted payment rail in Canada.
          </p>
          <p>
            <strong class="text-white block mb-1">Fast Withdrawal Focus</strong>
            We understand that getting your winnings quickly is a priority. Our cashier team focuses on rapid approval cycles.
          </p>
        </div>
        <div class="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>
            <strong class="text-white block mb-1">Ontario Market Context</strong>
            We provide clear guidance on regulated play, ensuring your gaming is safe and compliant.
          </p>
          <p>
            <strong class="text-white block mb-1">24/7 Support</strong>
            Our team is available round the clock to assist with account verification, payments, and game queries.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <IBetShowcase variant="banner" ctaText="Join Now" contextLabel="Secure Interac Deposits · Fast CAD Payouts · 19+" />
  </section>

  <nav class="mt-12 flex flex-wrap gap-6" aria-label="Related pages">
    <a href="/interac" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Deposit with Interac</a>
    <a href="/fast-payouts" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Fast casino withdrawals</a>
    <a href="/sportsbook" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Explore sportsbook</a>
  </nav>

  <section class="mt-16 space-y-4">
    <h2 class="text-2xl font-bold">Casino FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card p-4 group cursor-pointer rounded-xl border border-white/10">
        <summary class="font-bold text-white list-none flex items-center justify-between gap-2">
          {faq.question}
          <svg class="w-4 h-4 shrink-0 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
    </div>
  </div>
</div>
