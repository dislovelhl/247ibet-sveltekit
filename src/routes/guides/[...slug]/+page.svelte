<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Guide | 247iBET Canada</title>
  <meta name="description" content="Expert iGaming guide for Canadian players from 247iBET." />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Guide</li>
    </ol>
  </nav>

  <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">iGaming Guide</h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Expert guidance for Canadian online casino and sports betting players.
  </p>

  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">Guide content loaded from WordPress CMS. Wire up <code class="text-prestige-gold">+page.ts</code> to fetch guide post by slug.</p>
  </div>

  <div class="mt-12">
    <IBetShowcase variant="banner" ctaText="Play at 247iBET" contextLabel="Fast payouts · Interac · 19+" />
  </div>
</div>
