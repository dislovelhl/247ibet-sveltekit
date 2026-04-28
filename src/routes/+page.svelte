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

  <!--
    Vertical rhythm: tighter top (hero already heavy), wider gaps between
    intro/hub/guide blocks to give the eye rest. ReadyToPlay owns its own
    margin so it sits closer to the footer.
  -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-10 space-y-16 md:space-y-24">
    <HomeIntro />
    <IBetShowcase />
    <IntentHubs />
    <GuideHighlights />
    <ReadyToPlay />
  </div>
</div>
