<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
</script>

<svelte:head>
  <title>Best Betting Sites in Canada 2026: Casino &amp; Sportsbook Guide | 247iBET</title>
  <meta
    name="description"
    content="Compare Canadian betting sites across casino and sportsbook categories. Rankings weigh Interac payout speed, Ontario availability, odds value, and player support."
  />
  <meta
    property="og:title"
    content="Best Betting Sites in Canada 2026: Casino &amp; Sportsbook Guide | 247iBET"
  />
  <meta
    property="og:description"
    content="Compare Canadian betting sites across casino and sportsbook categories. Rankings weigh Interac payout speed, Ontario availability, odds value, and player support."
  />
  <link rel="canonical" href={canonicalUrl('/best-betting-sites-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Best Betting Sites',
          item: 'https://247ibet.ca/best-betting-sites-canada',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Best Betting Sites Canada 2026 — Casino & Sportsbook',
      description:
        'Compare Canadian betting sites across casino and sportsbook categories. Rankings weigh Interac payout speed, Ontario availability, odds value, and player support.',
      url: 'https://247ibet.ca/best-betting-sites-canada',
      datePublished: '2026-03-01',
      dateModified: '2026-03-30',
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">Best Betting Sites</li>
      </ol>
    </nav>
    <div class="mb-5 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">All-category rankings</span>
      <span class="status-badge status-badge--licensed">AGCO &amp; Kahnawake reviewed</span>
    </div>
    <h1 class="page-hero-title text-[clamp(2rem,8vw,3.75rem)] mb-4">Best Betting Sites Canada</h1>
    <p class="page-hero-subtitle max-w-3xl text-base sm:text-lg">
      All-category rankings covering Canada's top casino and sportsbook operators — compare by
      Interac payout speed, province availability, licensing context, market depth, and player
      experience.
    </p>
    <p class="mt-3 text-xs text-text-tertiary">
      Last updated: <time datetime="2026-03-01" class="stat">2026-03-01</time>
    </p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} ctaText="Join Now" />

  <div class="navy-card rounded-xl mt-16 p-6 md:p-8">
    <h2 class="font-display text-2xl font-semibold mb-2 sm:text-3xl">
      What Matters Most on the Best Betting Sites in Canada
    </h2>
    <p class="mb-6 max-w-2xl text-sm leading-relaxed text-text-tertiary">
      The four pillars that separate a money page from a marketing page.
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-body font-sans leading-relaxed"
    >
      <div>
        <h3 class="text-white font-bold mb-2">Payout reliability</h3>
        <p>
          We prioritize sites that support Interac e-Transfer and publish realistic withdrawal
          windows. Fast-payout claims only matter when KYC, banking method, and support quality
          line up.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Licensing and safety</h3>
        <p>
          Ontario-facing rankings emphasize AGCO-regulated operators. Outside Ontario, we flag
          whether a site operates under Kahnawake or other offshore licences so Canadian players can
          judge risk clearly.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Casino + sportsbook depth</h3>
        <p>
          The strongest betting sites cover both casino and sports well — NHL and CFL market depth,
          same-game parlays, live betting, plus a casino lobby that supports CAD accounts and
          familiar banking rails.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Terms and trust signals</h3>
        <p>
          We look for transparent terms, responsible gambling controls, payment-method visibility,
          and encryption standards before we place a site near the top of any money page.
        </p>
      </div>
    </div>
  </div>

  <section class="mt-8">
    <IBetShowcase
      variant="banner"
      ctaText="Join Now"
      contextLabel="Casino + sportsbook under one account · Interac ready"
    />
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
