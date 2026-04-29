<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Payment Methods Guide | 247iBET Canada</title>
  <meta name="description" content="Complete guide to payment methods at 247iBET for Canadian players — Interac, deposits, withdrawals." />
  <link rel="canonical" href="https://247ibet.ca/payments/{$page.params.slug}" />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Payments</li>
    </ol>
  </nav>

  <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Payment Guide</h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Detailed payment method guide for Canadian players at 247iBET.
  </p>

  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">Payment guide content loaded from WordPress CMS. Wire up <code class="text-prestige-gold">+page.ts</code> to fetch post data.</p>
  </div>

  <div class="mt-12">
    <IBetShowcase variant="banner" ctaText="Deposit Now" contextLabel="Interac · Fast CAD deposits · 19+" />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
  </div>
</div>
