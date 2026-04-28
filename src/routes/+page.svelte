<script lang="ts">
  import HeroBanner from '$lib/components/HeroBanner.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import HomeIntro from '$lib/components/HomeIntro.svelte';
  import IntentHubs from '$lib/components/IntentHubs.svelte';
  import GuideHighlights from '$lib/components/GuideHighlights.svelte';
  import ReadyToPlay from '$lib/components/ReadyToPlay.svelte';
</script>

<svelte:head>
  <title>247iBET — Canada's Regulated iGaming Authority</title>
  <meta
    name="description"
    content="Canada's trusted guide to regulated online casinos and sports betting in Ontario and Alberta."
  />
</svelte:head>

<div class="flex flex-col">
  <HeroBanner />

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
    <IBetShowcase />
    <HomeIntro />
    <IntentHubs />
    <GuideHighlights />
    <ReadyToPlay />
  </div>
</div>
