<script lang="ts">
  import DesignLabClient from '$lib/components/DesignLabClient.svelte';
</script>

<svelte:head>
  <title>Design Exploration Lab | 247iBET</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <h1 class="font-display text-3xl font-normal text-[#F1F5F9] mb-4">Design Exploration Lab</h1>
  <p class="text-[#94A3B8] mb-8">
    Internal design system exploration and component testing environment.
  </p>
  <DesignLabClient />
</div>
