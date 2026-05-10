<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';

  let { handleMouseMove } = $props<{ handleMouseMove?: (e: MouseEvent) => void }>();
</script>

<div class="min-h-screen bg-navy-black pt-16 text-white" onmousemove={handleMouseMove} role="presentation">
  <section class="relative flex min-h-[92dvh] items-center overflow-hidden border-b border-prestige-gold/30">
    <BackgroundAtmosphere src="/images/frozen-edge-hero.webp" />

    <!-- Gold radial glow behind the content -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div class="absolute top-1/3 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-prestige-gold/4 blur-[120px]"></div>
      <div class="absolute top-0 left-0 h-[40vh] w-[40vw] rounded-full bg-slate-blue/3 blur-[100px]"></div>
    </div>

    <div
      class="relative z-10 mx-auto w-full max-w-[1720px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16"
    >
      <div class="flex flex-col items-center text-center">
        <div class="mb-5 flex flex-wrap items-center justify-center gap-3">
          <div class="flex items-center gap-2">
            <p class="text-[13px] font-black uppercase tracking-[0.22em] text-prestige-gold">
              247iBET Canada
            </p>
            <span class="h-1 w-1 rounded-full bg-white/20"></span>
            <span class="font-luxury text-[12px] text-prestige-gold-400 opacity-80"
              >The expert's choice</span
            >
          </div>
          <div class="flex items-center gap-2 rounded-full bg-prestige-gold/10 px-3 py-1 ring-1 ring-prestige-gold/20">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span class="text-[12px] font-black uppercase tracking-wider text-success">Verified</span>
          </div>
        </div>

        <div class="reveal-fade-up flex flex-col items-center">
          <h1 class="font-black tracking-tighter text-white text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Canada's Elite<br />
            <span class="text-prestige-gold">Sportsbook & Casino</span>
          </h1>
          <p class="mt-8 max-w-2xl text-lg text-text-body md:text-xl font-light leading-relaxed">
            The definitive destination for high-stakes wagering. Interac payouts in minutes, premium live dealers, and world-class sports markets.
          </p>
        </div>

        <div class="reveal-fade-up mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" style="--reveal-delay: 200ms">
          <SafeExternalLink 
            href={IBET_URLS.register} 
            class="page-cta-primary-lg w-full sm:w-auto min-w-[240px] justify-center"
          >
            Join 247iBET Now
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
          <a 
            href="/casino" 
            class="page-cta-outline-lg w-full sm:w-auto min-w-[240px] justify-center"
          >
            Explore Lobby
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
