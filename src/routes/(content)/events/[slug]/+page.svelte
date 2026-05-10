<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { page } from '$app/stores';
  import { canonicalUrl } from '$lib/site';
</script>

<svelte:head>
  <title>Sports Betting Event | 247iBET Canada</title>
  <meta
    name="description"
    content="Sports betting event guide for Canadian players — odds, markets, and betting tips from 247iBET."
  />
  <link rel="canonical" href={canonicalUrl(`/events/${$page.params.slug}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/sportsbook" class="hover:text-white">Sportsbook</a></li>
      <li>/</li>
      <li class="text-white font-medium">Event</li>
    </ol>
  </nav>

  <h1 class="page-hero-title mb-4">Betting Event Guide</h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Comprehensive betting guide for this event — odds, markets, and tips for Canadian players.
  </p>

  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">
      Event content loaded from WordPress CMS. Wire up <code class="text-prestige-gold"
        >+page.ts</code
      > to fetch event data.
    </p>
  </div>

  <div class="mt-12">
    <IBetShowcase
      variant="banner"
      ctaText="Bet Now"
      contextLabel="Live betting · Fast payouts · 19+"
    />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
