<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { IBET_PROMO_SNAPSHOT } from '$lib/ibet-brand';
</script>

<svelte:head>
  <title>Current Promotional Snapshot at 247iBET Canada</title>
  <meta
    name="description"
    content="Current promotional snapshot page summarizing the latest reviewed 247iBET bonus creative, with reminders to verify wagering, expiry, and eligibility in the cashier before claiming."
  />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:title" content="Current Promotional Snapshot at 247iBET Canada" />
  <meta
    property="og:description"
    content="Current promotional snapshot page summarizing the latest reviewed 247iBET bonus creative, with reminders to verify wagering, expiry, and eligibility in the cashier before claiming."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://247ibet.ca/bonus-terms" />
  <link rel="canonical" href={canonicalUrl('/bonus-terms')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Current Promotional Snapshot',
        description: 'Latest reviewed bonus creative summarized for transparency.',
        url: 'https://247ibet.ca/bonus-terms',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Current Promotional Snapshot',
            item: 'https://247ibet.ca/bonus-terms',
          },
        ],
      },
    ]}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 z-10 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li class="text-text-tertiary">/</li>
      <li class="text-white font-medium">Bonus Terms</li>
    </ol>
  </nav>

  <article class="navy-card rounded-3xl p-8 md:p-12">
    <header class="mb-12 border-b border-white/10 pb-8">
      <h1 class="page-hero-title mb-4">
        Current <span class="text-slate-blue">Bonus Snapshot</span>
      </h1>
      <p class="text-gray-400 font-sans">Last updated: May 2026</p>
    </header>

    <div
      class="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-slate-blue marker:text-prestige-gold"
    >
      <p>
        This noindex page summarizes the latest 247iBET bonus creative we reviewed. It is published
        for transparency, not as a guaranteed inducement. Always confirm the operative rules inside
        the cashier before depositing.
      </p>

      <h2>Observed bonus offers</h2>
      <div class="not-prose grid gap-4 md:grid-cols-3">
        {#each IBET_PROMO_SNAPSHOT as promo}
          <article class="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p class="text-xs uppercase tracking-[0.16em] text-slate-blue">{promo.title}</p>
            <h3 class="mt-2 text-lg font-bold text-white">{promo.headline}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-300">{promo.summary}</p>
            <p class="mt-4 text-xs text-gray-400">{promo.period}</p>
          </article>
        {/each}
      </div>

      <h2>What still needs verification</h2>
      <ul>
        <li>Minimum deposit required to unlock each offer.</li>
        <li>Wagering or playthrough multipliers applied to bonus funds or free-spin winnings.</li>
        <li>Game and market eligibility, including whether free spins are tied to one slot title.</li>
        <li>Maximum cashout, max-bet, or bonus-abuse restrictions.</li>
        <li>Whether the every-deposit cap applies per deposit, per day, or across the campaign.</li>
      </ul>

      <h2>How to use this page</h2>
      <p>
        Treat the image-visible amounts as a current snapshot only. If the cashier shows different
        terms after registration, the cashier rules should be treated as authoritative.
      </p>
    </div>
  </article>

  <section class="sr-only" aria-label="Related legal and support resources">
    <h2>Related Resources</h2>
    <ul>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/responsible-gambling">Responsible Gambling Support</a></li>
      <li><a href="/contact">Contact and Support</a></li>
    </ul>
  </section>


</div>
