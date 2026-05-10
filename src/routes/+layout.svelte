<script lang="ts">
  import '../app.css';
  import { dev } from '$app/environment';
  import { fade } from 'svelte/transition';
  import { page } from '$app/state';
  import { inject } from '@vercel/analytics';
  import { SITE, ogImageUrl } from '$lib/site';
  import Navbar from '$lib/components/Navbar.svelte';
  import BottomNav from '$lib/components/BottomNav.svelte';
  import SEOFooter from '$lib/components/SEOFooter.svelte';
  import Atmosphere from '$lib/components/Atmosphere.svelte';

  $effect(() => {
    inject({ mode: dev ? 'development' : 'production' });
  });

  let { children } = $props();
</script>

<svelte:head>
  <meta name="author" content="247iBET Editorial Team" />
  <meta property="og:image" content={ogImageUrl()} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{SITE.name} — {SITE.tagline}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={ogImageUrl()} />
  <link rel="preconnect" href="https://boapi.ibet247.ca" />
  <link rel="dns-prefetch" href="https://boapi.ibet247.ca" />
</svelte:head>

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-prestige-gold focus:text-navy-black focus:font-bold focus:rounded-full"
>
  Skip to Content
</a>

<Navbar />
<Atmosphere />
<div
  class="relative flex min-h-dvh flex-col overflow-x-hidden md:pb-0"
>
  <main
    id="main-content"
    class="flex-grow pt-[calc(4rem+env(safe-area-inset-top,0px))] lg:pt-[calc(8.5rem+env(safe-area-inset-top,0px))]"
  >
    {#key page.url.pathname}
      <div in:fade={{ duration: 120 }}>
        {@render children()}
      </div>
    {/key}
  </main>
  <SEOFooter />
</div>

<BottomNav />
