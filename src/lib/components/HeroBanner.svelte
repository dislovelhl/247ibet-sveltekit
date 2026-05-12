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
  <BackgroundAtmosphere src="/images/generated/elite-hero-abstract.png" intensity={0.8} parallaxMultiplier={0.2} />

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
      class="glass-liquid animate-float-3d rounded-[40px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] sm:p-10 lg:p-16"
      style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0); border: 1px solid rgba(255, 255, 255, 0.08); background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%); backdrop-filter: blur(24px) saturate(180%);"
    >
      <div class="mb-8 flex flex-wrap items-center gap-4">
        <div class="flex items-center gap-2">
          <p class="text-[14px] font-black uppercase tracking-[0.3em] text-prestige-gold">
            247iBET Canada
          </p>
          <span class="h-1.5 w-1.5 rounded-full bg-prestige-gold/30"></span>
          <span class="text-luxury tracking-[0.18em] text-[12px] text-prestige-gold-300 opacity-90"
            >The Elite Standard</span
          >
        </div>
        <div class="flex items-center gap-2 rounded-full bg-success/5 px-4 py-1.5 ring-1 ring-success/20 backdrop-blur-sm">
          <span class="h-2 w-2 animate-pulse rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
            <span class="text-[11px] font-black uppercase tracking-wider text-success">
              Verified 2026 Guidance
            </span>
        </div>
      </div>

      <h1 class="font-display text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.82] tracking-[-0.04em] text-white">
        Canada\'s Elite<br />
        <span class="text-gradient-gold">iGaming Authority</span>
      </h1>

      <p class="mt-8 max-w-xl text-lg leading-relaxed text-text-body sm:text-xl font-medium opacity-90">
        The definitive guide to casino excellence, sportsbook precision, and Interac payout transparency.
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row">
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group h-16 px-10 text-lg btn-magnetic shadow-[0_20px_40px_-10px_rgba(212,148,58,0.4)]">
          {IBET_CTA.register}
          <ArrowRight class="h-6 w-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
        </SafeExternalLink>
        <a href="/deposit" class="hero-cta-secondary h-16 px-10 text-lg flex items-center justify-center font-black uppercase tracking-widest border-white/10 hover:bg-white/5 transition-all btn-magnetic">
          {IBET_CTA.fastPayout}
        </a>
      </div>

      <!-- Hero stat strip with glass dividers -->
      <div class="mt-12 grid grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
        <div class="relative px-2">
          <p class="text-3xl font-black text-white tracking-tighter">500+</p>
          <p class="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-text-tertiary">Premium Games</p>
        </div>
        <div class="relative px-2 border-l border-white/5">
          <p class="text-3xl font-black text-white tracking-tighter">Instant</p>
          <p class="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-text-tertiary">Interac Target</p>
        </div>
        <div class="relative px-2 border-l border-white/5">
          <p class="text-3xl font-black text-white tracking-tighter">24/7</p>
          <p class="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-text-tertiary">Elite Support</p>
        </div>
        <div class="relative px-2 border-l border-white/5">
          <p class="text-3xl font-black text-prestige-gold tracking-tighter">100%</p>
          <p class="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-text-tertiary">CA Focused</p>
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
