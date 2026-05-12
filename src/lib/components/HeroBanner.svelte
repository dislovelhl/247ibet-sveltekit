<script lang="ts">
  import { ArrowRight, ChevronDown } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_CTA, IBET_URLS } from '$lib/ibet-brand';
  import PayoutProgress from '$lib/components/PayoutProgress.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  interface Props {
    lastUpdated: string;
  }

  let { lastUpdated }: Props = $props();
</script>

<section class="relative flex min-h-[85vh] items-center overflow-hidden border-b border-prestige-gold/30">
  <BackgroundAtmosphere src="/images/frozen-edge-hero.webp" />

  <!-- Gold radial glow behind the content -->
  <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
    <div class="absolute top-1/3 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-prestige-gold/4 blur-[120px]"></div>
    <div class="absolute top-0 left-0 h-[40vh] w-[40vw] rounded-full bg-slate-blue/3 blur-[100px]"></div>
  </div>

  <div
    class="relative z-10 mx-auto w-full max-w-[1720px] px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-40 lg:pb-24 xl:px-16"
  >
    <!-- Left: Typography block -->
    <div
      class="glass-liquid animate-float-3d rounded-3xl p-6 shadow-2xl sm:p-8 lg:p-12"
      style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
    >
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <div class="flex items-center gap-2">
          <p class="text-[13px] font-black uppercase tracking-[0.22em] text-prestige-gold">
            247iBET Canada
          </p>
          <span class="h-1 w-1 rounded-full bg-white/20"></span>
          <span class="text-luxury tracking-boutique text-[11px] text-prestige-gold-400 opacity-80"
            >Editorial guide</span
          >
        </div>
        <div class="flex items-center gap-2 rounded-full bg-prestige-gold/10 px-3 py-1 ring-1 ring-prestige-gold/20">
          <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span class="text-xs font-black uppercase tracking-wider text-success">
              Updated guidance for Canadian players
            </span>
        </div>
      </div>

      <h1 class="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.88] tracking-tighter text-white">
        Canada\'s iGaming<br />
        <span class="text-gold-foil">Guide & Reviews</span>
      </h1>

      <p class="mt-6 max-w-xl text-base leading-relaxed text-text-body sm:text-lg">
        Casino reviews, sportsbook guidance, and Interac payout education for Canadian players who want clearer operator comparisons.
      </p>

      <div class="mt-5 flex items-center gap-2 text-xs font-medium tracking-wide text-text-tertiary">
        <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-prestige-gold-500 shadow-[0_0_8px_rgba(212,148,58,0.6)]"></span>
        Last updated: <time datetime={lastUpdated}>{lastUpdated}</time>
      </div>

      <div class="mt-7 flex flex-col gap-3 sm:flex-row">
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group btn-magnetic">
          {IBET_CTA.register}
          <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </SafeExternalLink>
        <a href="/deposit" class="hero-cta-secondary btn-magnetic">{IBET_CTA.fastPayout}</a>
      </div>

      <!-- Hero stat strip inside glass card -->
      <div class="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
        <div class="text-center">
          <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">500+</p>
          <p class="text-xs font-bold uppercase tracking-wider text-text-tertiary">Casino Games</p>
        </div>
        <div class="text-center">
          <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">Varies</p>
          <p class="text-xs font-bold uppercase tracking-wider text-text-tertiary">Interac timing after approval</p>
        </div>
        <div class="text-center">
          <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">24/7</p>
          <p class="text-xs font-bold uppercase tracking-wider text-text-tertiary">Player Support</p>
        </div>
        <div class="text-center">
          <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-prestige-gold">CA</p>
          <p class="text-xs font-bold uppercase tracking-wider text-text-tertiary">Market coverage focus</p>
        </div>
      </div>
    </div>

    <!-- Right: Payout Progress (desktop only) -->
    <div class="hidden lg:flex lg:items-center lg:pl-10">
      <PayoutProgress activeStep={2} />
    </div>
  </div>

  <!-- Scroll hint -->
  <div class="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
    <ChevronDown class="h-6 w-6 text-prestige-gold/50" aria-hidden="true" />
  </div>
</section>
