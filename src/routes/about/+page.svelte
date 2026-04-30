<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const LAST_UPDATED = '2026-04-28';
  // page
import AuthorByline from '$lib/components/AuthorByline.svelte';
</script>

<svelte:head>
  <title>About 247iBET — Canada's Online Casino &amp; Sportsbook</title>
  <meta
    name="description"
    content="Learn about 247iBET — a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live sports betting built for Canadian players."
  />
  <meta property="og:title" content="About 247iBET — Canada's Online Casino &amp; Sportsbook" />
  <meta
    property="og:description"
    content="247iBET is a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live betting."
  />
  <meta name="twitter:title" content="About 247iBET — Canada's Online Casino &amp; Sportsbook" />
  <meta
    name="twitter:description"
    content="Canadian online casino and sportsbook with fast Interac payouts."
  />
  <link rel="canonical" href={canonicalUrl('/about')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: "About 247iBET | Canada's Online Casino & Sportsbook",
      description:
        '247iBET is a Canadian online casino and sportsbook with fast Interac payouts, casino games, and live sports betting built for Canadian players.',
      url: 'https://247ibet.ca/about',
    }}
  />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 pb-20">
  <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">About Us</li>
      </ol>
    </nav>

    <header class="relative mb-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-navy-card shadow-2xl">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,148,58,0.1),transparent_50%)]"></div>
      <div class="relative z-10 p-8 md:p-14 text-center md:text-left">
        <div class="mb-8 flex justify-center md:justify-start">
          <div class="glass-regular inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10">
            <span class="live-dot" aria-hidden="true"></span>
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-white">
              Established 2024
            </p>
          </div>
        </div>

        <h1 class="page-hero-title">
          About <br />
          <span class="text-prestige-gold">247iBET</span>
        </h1>

        <p class="mt-8 mx-auto md:mx-0 max-w-2xl text-lg leading-relaxed text-text-body/90 md:text-xl">
          Canada's authoritative source for online casino games and sports betting. We specialize in fast Interac payouts, verified operator reviews, and responsible gambling advocacy.
        </p>

        <div class="mt-10">
          <AuthorByline authorId="editorial" date={LAST_UPDATED} />
        </div>
      </div>
    </header>

    <section class="mb-16">
      <h2 class="font-display text-3xl font-black uppercase tracking-tight text-white mb-8">What 247iBET Offers</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Fast Payouts</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Interac e-Transfer withdrawals processed within 1–3 business hours after KYC. Get your winnings the same day.
          </p>
        </article>

        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">500+ Games</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Slots, live dealer tables, jackpots, and classic table games built for desktop and mobile play.
          </p>
        </article>

        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Live Sports</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            NHL, NBA, CFL, UFC, and more with in-play odds and same-game parlays. Bet on your favorite teams.
          </p>
        </article>
      </div>
    </section>

    <nav class="flex flex-wrap gap-x-8 gap-y-4" aria-label="Related pages">
      <a href="/security" class="text-xs font-bold uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Security Standards</a>
      <a href="/responsible-gambling" class="text-xs font-bold uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Responsible Gambling</a>
      <a href="/guides/regulated-vs-offshore" class="text-xs font-bold uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Regulated vs Offshore</a>
      <a href="/guides/interac-e-transfer-casino" class="text-xs font-bold uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Interac Guide</a>
    </nav>
  </div>
</div>
