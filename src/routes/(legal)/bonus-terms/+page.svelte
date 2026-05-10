<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    IBET_EVENT_CREATIVE_SNAPSHOT,
    IBET_PROMO_SNAPSHOT,
    IBET_SPORTSBOOK_CREATIVE_SNAPSHOT,
  } from '$lib/ibet-brand';
  import { reveal } from '$lib/animations';
</script>

<svelte:head>
  <title>Bonus Terms Creative Snapshot | 247iBET Canada</title>
  <meta
    name="description"
    content="Reviewed bonus and campaign creative snapshot for 247iBET, grouped by offer type with reminders to verify wagering, expiry, eligibility, and cashier rules before claiming."
  />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:title" content="Bonus Terms Creative Snapshot | 247iBET Canada" />
  <meta
    property="og:description"
    content="Reviewed bonus and campaign creative snapshot for 247iBET, grouped by offer type with reminders to verify wagering, expiry, eligibility, and cashier rules before claiming."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://247ibet.ca/bonus-terms" />
  <link rel="canonical" href={canonicalUrl('/bonus-terms')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Bonus Terms Creative Snapshot',
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
            name: 'Bonus Terms Creative Snapshot',
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

  <article class="navy-card rounded-3xl p-8 md:p-12 reveal-fade-up" use:reveal>
    <nav aria-label="Bonus terms table of contents" class="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p class="text-xs font-black uppercase tracking-[0.14em] text-slate-blue">On this page</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <a href="#observed-bonus-offers" class="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:text-white">Observed bonus offers</a>
        <a href="#sportsbook-tie-ins" class="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:text-white">Sportsbook tie-ins</a>
        <a href="#event-creatives" class="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:text-white">Event creatives</a>
        <a href="#needs-verification" class="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:text-white">Needs verification</a>
      </div>
    </nav>
    <header class="mb-12 border-b border-white/10 pb-8">
      <h1 class="page-hero-title mb-4">
        Current <span class="text-slate-blue">Bonus Snapshot</span>
      </h1>
      <p class="text-gray-400 font-sans">Last updated: <time datetime="2026-05-06">May 2026</time></p>
    </header>

    <div
      class="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-slate-blue marker:text-prestige-gold"
    >
      <p>
        This noindex page archives all reviewed 247iBET-related creatives we were given: direct bonus
        images, combat-sports tie-ins, and event-style artwork. It is published for transparency, not
        as a guaranteed inducement. Always confirm the operative rules inside the cashier before
        depositing.
      </p>

      <h2 id="observed-bonus-offers">Observed bonus offers</h2>
      <div class="not-prose grid gap-6" data-reveal-stagger="true">
        {#each IBET_PROMO_SNAPSHOT as promo}
          <article use:reveal class="overflow-hidden rounded-2xl border border-white/10 bg-black/20 reveal-scale-in card-hover-lift">
            <img src={promo.image} alt={promo.alt} class="h-auto w-full border-b border-white/10 object-cover" loading="lazy" decoding="async" />
            <div class="p-5">
              <p class="text-xs uppercase tracking-[0.16em] text-slate-blue">{promo.title}</p>
              <h3 class="mt-2 text-lg font-bold text-white">{promo.headline}</h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-300">{promo.summary}</p>
              <p class="mt-4 text-xs text-gray-400">{promo.period}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                {#each promo.observedText as line}
                  <span class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">{line}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>

      <h2 id="sportsbook-tie-ins">Sportsbook and combat-sports tie-ins</h2>
      <div class="not-prose grid gap-6 md:grid-cols-2">
        {#each IBET_SPORTSBOOK_CREATIVE_SNAPSHOT as creative}
          <article use:reveal class="overflow-hidden rounded-2xl border border-white/10 bg-black/20 reveal-scale-in card-hover-lift">
            <img src={creative.image} alt={creative.alt} class="h-auto w-full border-b border-white/10 object-cover" loading="lazy" decoding="async" />
            <div class="p-5">
              <p class="text-xs uppercase tracking-[0.16em] text-slate-blue">{creative.title}</p>
              <h3 class="mt-2 text-lg font-bold text-white">{creative.headline}</h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-300">{creative.summary}</p>
              <p class="mt-4 text-xs text-gray-400">{creative.period}</p>
            </div>
          </article>
        {/each}
      </div>

      <h2 id="event-creatives">Event-style creatives included for completeness</h2>
      <div class="not-prose grid gap-6 md:grid-cols-2">
        {#each IBET_EVENT_CREATIVE_SNAPSHOT as creative}
          <article use:reveal class="overflow-hidden rounded-2xl border border-white/10 bg-black/20 reveal-scale-in card-hover-lift">
            <img src={creative.image} alt={creative.alt} class="h-auto w-full border-b border-white/10 object-cover" loading="lazy" decoding="async" />
            <div class="p-5">
              <p class="text-xs uppercase tracking-[0.16em] text-slate-blue">{creative.title}</p>
              <h3 class="mt-2 text-lg font-bold text-white">{creative.headline}</h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-300">{creative.summary}</p>
              <p class="mt-4 text-xs text-gray-400">{creative.period}</p>
            </div>
          </article>
        {/each}
      </div>

      <h2 id="needs-verification">What still needs verification</h2>
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
