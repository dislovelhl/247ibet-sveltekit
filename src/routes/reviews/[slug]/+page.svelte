<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { page } from '$app/stores';
  import { canonicalUrl } from '$lib/site';
</script>

<svelte:head>
  <title>Casino Review | 247iBET Canada</title>
  <meta
    name="description"
    content="Expert casino and sportsbook operator review for Canadian players."
  />
  <link rel="canonical" href={canonicalUrl(`/reviews/${$page.params.slug}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs leading-5 text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/casino" class="hover:text-white">Casino</a></li>
      <li>/</li>
      <li class="text-white font-medium">Review</li>
    </ol>
  </nav>

  <h1 class="page-hero-title mb-4">Operator Review</h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Detailed operator review for Canadian players — covering payout speed, Interac support, game
    library, and compliance status.
  </p>

  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">
      Full review content is loaded dynamically. Wire up <code class="text-prestige-gold"
        >+page.ts</code
      > to fetch operator data.
    </p>
  </div>

  <div class="mt-12">
    <IBetShowcase
      variant="banner"
      ctaText="Play at 247iBET"
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
