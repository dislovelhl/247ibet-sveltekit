<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { IBET_CTA, IBET_URLS } from '$lib/ibet-brand';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { reveal } from '$lib/animations';

  let { title, description } = $props<{ title: string; description: string }>();
</script>

<section
  id="promo-video"
  use:reveal
  class="reveal-fade-up grid gap-5 overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-4 shadow-2xl sm:p-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6 lg:p-7"
  aria-labelledby="home-promo-video-title"
>
  <div class="flex flex-col justify-center">
    <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
      Watch the overview
    </p>
    <h2 id="home-promo-video-title" class="mt-3 text-4xl font-black md:text-5xl">
      {title}
    </h2>
    <p class="mt-4 text-sm leading-6 text-text-body">
      {description}
    </p>
    <SafeExternalLink
      href={IBET_URLS.register}
      class="hero-cta-primary mt-6 w-full justify-center sm:w-fit btn-magnetic"
    >
      {IBET_CTA.primary}
      <ArrowRight class="h-5 w-5" aria-hidden="true" />
    </SafeExternalLink>
  </div>

  <div class="overflow-hidden rounded-xl border border-white/10 bg-black/30">
    <video
      class="aspect-video w-full bg-navy-black object-cover"
      controls
      playsinline
      preload="metadata"
      width="1280"
      height="720"
      poster="/images/generated/casino-premium-hero.webp"
      aria-label="247iBET casino, sportsbook, and fast payouts overview video"
    >
      <source src="/videos/247ibet-home-promo.mp4" type="video/mp4" />
      <track kind="captions" src="/videos/captions.vtt" srclang="en" label="English" default />
      Your browser does not support embedded video. Open the 247iBET overview video at /videos/247ibet-home-promo.mp4.
    </video>
  </div>
</section>
