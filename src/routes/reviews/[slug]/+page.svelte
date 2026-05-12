<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { page } from '$app/stores';
  import { canonicalUrl } from '$lib/site';
</script>

<svelte:head>
  <title>Elite Features & Platform Standards | 247iBET Canada</title>
  <meta
    name="description"
    content="Explore 247iBET guidance: casino categories, sportsbook education, Interac payout caveats, and security-aware platform handoffs."
  />
  <link rel="canonical" href={canonicalUrl(`/reviews/${$page.params.slug}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs leading-5 text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/casino" class="hover:text-white">Casino</a></li>
      <li>/</li>
      <li class="text-white font-medium">Features</li>
    </ol>
  </nav>

  <h1 class="page-hero-title mb-4">Platform Standards & Features</h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Discover 247iBET guidance for Canadian readers — from Interac payout caveats to payouts to our
    curated library of premium casino games.
  </p>

  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">
      Feature details are loaded dynamically. Wire up <code class="text-prestige-gold"
        >+page.ts</code
      > to fetch platform data.
    </p>
  </div>

  <div class="mt-12">
    <IBetShowcase
      variant="banner"
      ctaText="Visit Platform"
      contextLabel="Fast CAD payouts · Interac deposits · 19+"
    />
  </div>

  <div
    class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs leading-5 text-text-tertiary"
  >
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
