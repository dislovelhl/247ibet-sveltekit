<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Best Betting Apps Canada 2026 | iOS &amp; Android | 247iBET</title>
  <meta
    name="description"
    content="Compare Canadian sports betting apps for iPhone and Android. We rate live betting UX, Interac deposits, parlay builders, and AGCO licensing."
  />
  <meta property="og:title" content="Best Betting Apps Canada 2026 | iOS &amp; Android | 247iBET" />
  <meta
    property="og:description"
    content="Compare Canadian sports betting apps for iPhone and Android. We rate live betting UX, Interac deposits, parlay builders, and AGCO licensing."
  />
  <link rel="canonical" href={canonicalUrl('/best-betting-apps-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Best Betting Apps',
          item: 'https://247ibet.ca/best-betting-apps-canada',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Best Betting Apps Canada 2026 — iOS & Android',
      description:
        'Compare Canadian sports betting apps for iPhone and Android. We rate live betting UX, Interac deposits, parlay builders, and AGCO licensing.',
      url: 'https://247ibet.ca/best-betting-apps-canada',
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
        <li class="text-white font-medium">Best Betting Apps</li>
      </ol>
    </nav>
    <div class="mb-5 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">Mobile sportsbook rankings</span>
      <span class="live-tag"><span class="live-dot"></span> Live odds tested</span>
      <span class="status-badge status-badge--licensed">AGCO licensed picks</span>
    </div>
    <h1 class="page-hero-title text-[clamp(2rem,8vw,3.75rem)] mb-4">
      Best Betting Apps Canada 2026
    </h1>
    <p class="page-hero-subtitle max-w-3xl text-base sm:text-lg">
      Field-tested mobile rankings for iOS and Android sportsbooks in Canada — evaluated on
      biometric login security, SGP builder latency, and AGCO-compliant responsible gambling tools
      for on-the-go wagering.
    </p>
    <p class="mt-3 text-xs text-text-tertiary">
      Last updated: <time datetime="2026-03-01" class="stat">2026-03-01</time>
    </p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <div class="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
    <div class="navy-card rounded-xl p-5 sm:p-6 md:p-8">
      <h2 class="mb-2 font-display text-2xl font-semibold sm:text-3xl">
        App vs Mobile Web: Which is Better?
      </h2>
      <p class="mb-5 max-w-2xl text-sm leading-relaxed text-text-tertiary">
        Both paths win on different ground — here's where each one outperforms.
      </p>
      <div class="grid grid-cols-1 gap-5 text-sm leading-relaxed text-text-body md:grid-cols-2">
        <div class="rounded-lg border border-white/5 bg-navy-raised p-4">
          <div class="mb-3 font-bold text-white">Native App (iOS / Android)</div>
          <ul class="space-y-2">
            {#each ['Faster load times (cached assets)', 'Push notifications for odds changes', 'Secure local login', 'Better live-betting latency', 'Home screen shortcut'] as p}
              <li class="flex items-start gap-2">
                <span class="mt-0.5 text-green-400" aria-hidden="true">✓</span><span>{p}</span>
              </li>
            {/each}
          </ul>
        </div>
        <div class="rounded-lg border border-white/5 bg-navy-raised p-4">
          <div class="mb-3 font-bold text-white">Mobile Web (PWA / Browser)</div>
          <ul class="space-y-2">
            {#each ['No app store download required', 'Always latest version', 'Works on any device', 'Some operators only offer mobile web', 'Can add to home screen'] as p}
              <li class="flex items-start gap-2">
                <span class="mt-0.5 text-prestige-gold" aria-hidden="true">◉</span><span>{p}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <p class="mt-4 text-xs leading-relaxed text-text-tertiary">
        For live in-play betting, native apps consistently outperform mobile web on latency and
        reliability — for casual betting, mobile web is fully sufficient.
      </p>
    </div>

    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
