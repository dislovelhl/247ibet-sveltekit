<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/state';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights';
  import Navbar from '$lib/components/Navbar.svelte';
  import SEOFooter from '$lib/components/SEOFooter.svelte';
  import AgeGate from '$lib/components/AgeGate.svelte';
  import StickyMobileCTA from '$lib/components/StickyMobileCTA.svelte';

  onMount(() => {
    inject({ mode: 'production' });
    injectSpeedInsights();
  });

  let { children } = $props();
</script>

<AgeGate />

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-prestige-gold focus:text-navy-black focus:font-bold focus:rounded-full"
>
  Skip to Content
</a>

<div class="min-h-screen flex flex-col relative overflow-hidden">
  <Navbar />
  <main id="main-content" class="flex-grow">
    {#key page.url.pathname}
      <div in:fade={{ duration: 120 }}>
        {@render children()}
      </div>
    {/key}
  </main>
  <SEOFooter />
</div>

<StickyMobileCTA />
