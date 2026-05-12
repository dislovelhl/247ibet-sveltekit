<script lang="ts">
  import { SITE } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import PolicyLayout from '$lib/components/PolicyLayout.svelte';

  const LAST_UPDATED = '2026-04-28';

  const sections = [
    { id: 'offers', title: 'What We Publish' },
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
      description:
        'Learn about 247iBET — a Canadian public web platform for casino guides, sportsbook education, Interac payment guidance, responsible-gambling resources, and safe platform handoffs.',
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
  subtitle="Canada-focused public web platform for casino guides, sportsbook education, Interac payment guidance, responsible-gambling resources, and safe handoffs to the separate gaming platform."
  lastUpdated={LAST_UPDATED}
  path="/about"
  description="Learn about {SITE.name} — a public brand and education site for Canadian iGaming guidance, responsible-gambling resources, and platform handoffs."
  {sections}
>
  <h2 id="offers">What {SITE.name} Offers</h2>
  <div class="grid gap-6 md:grid-cols-3 not-prose mb-16">
    <article
      class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5"
    >
      <div
        class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3
        class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors"
      >
        Fast Payouts
      </h3>
      <p class="mt-4 text-sm leading-relaxed text-text-body">
        Interac payment guidance explains operator approval, KYC, bonus-review, and bank-side timing
        caveats so readers know what to verify before requesting a withdrawal.
      </p>
    </article>

    <article
      class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5"
    >
      <div
        class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3
        class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors"
      >
        Casino Guides
      </h3>
      <p class="mt-4 text-sm leading-relaxed text-text-body">
        Slots, live dealer, jackpot, and table-game explainers help readers understand formats
        before verifying availability on the separate gaming platform.
      </p>
    </article>

    <article
      class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl border border-white/5"
    >
      <div
        class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20 transition-transform group-hover:scale-110"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <h3
        class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors"
      >
        Live Sports
      </h3>
      <p class="mt-4 text-sm leading-relaxed text-text-body">
        NHL, NBA, CFL, UFC, in-play, and same-game parlay education helps readers understand markets
        before verifying live availability on the separate gaming platform.
      </p>
    </article>
  </div>

  <h2 id="security">Security Standards</h2>
  <p>
    This public web layer prioritizes secure transport, safe-link practices, privacy-conscious
    content surfaces, and clear handoff boundaries. Player account, payment, identity, and
    game-fairness controls belong to the separate gaming platform and must be verified there.
  </p>

  <h2 id="responsibility">Responsible Gambling</h2>
  <p>
    At {SITE.name}, we believe gambling should always be treated as entertainment. This public site
    provides responsible-gambling resources, links to provincial support services, and reminders to
    use account-level tools such as deposit limits, session reminders, and self-exclusion where they
    are offered by the operating platform.
  </p>
</PolicyLayout>
