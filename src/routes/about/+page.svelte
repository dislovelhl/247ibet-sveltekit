<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_UPDATED = '2026-04-28';
  
  const sections = [
    { id: 'offers', title: 'What We Offer' },
    { id: 'security', title: 'Security Standards' },
    { id: 'responsibility', title: 'Responsible Gambling' },
  ];
</script>

<svelte:head>
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'About 247iBET',
      description: 'Learn about 247iBET — a leading Canadian online casino and sportsbook with fast Interac payouts, live dealer games, and elite sports betting.',
      url: 'https://247ibet.ca/about',
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
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
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://247ibet.ca/about' },
      ],
    }}
  />
</svelte:head>

<PolicyLayout
  title="About {SITE.name}"
  subtitle="Canada's premier destination for online casino games and sports betting. We specialize in fast Interac payouts, elite gaming selection, and responsible gambling advocacy."
  lastUpdated={LAST_UPDATED}
  path="/about"
  description="Learn about {SITE.name} — a leading Canadian online casino and sportsbook with fast Interac payouts, live dealer games, and elite sports betting."
  {sections}
>
  <h2 id="offers">What {SITE.name} Offers</h2>
  <div class="grid gap-6 md:grid-cols-3 not-prose mb-16">
    <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5">
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

    <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5">
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

    <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5">
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

  <h2 id="security">Security Standards</h2>
  <p>
    We prioritize player security by maintaining industry-leading SSL encryption, robust data protection policies, and fair gaming certifications across our entire platform. Your safety and privacy are our top priorities.
  </p>

  <h2 id="responsibility">Responsible Gambling</h2>
  <p>
    At {SITE.name}, we believe gambling should always be a form of entertainment. We provide comprehensive resources and built-in tools to help you play responsibly, including deposit limits, session timers, and direct links to provincial support services.
  </p>
</PolicyLayout>

