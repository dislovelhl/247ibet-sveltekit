<script lang="ts">
  import { ArrowRight, ChevronDown, Dice5, Trophy, Wallet, Zap } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import PayoutProgress from '$lib/components/PayoutProgress.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  interface Props {
    lastUpdated: string;
  }

  let { lastUpdated }: Props = $props();

  const productPaths = [
    { href: '/casino', label: 'Casino', icon: Dice5 },
    { href: '/sportsbook', label: 'Sportsbook', icon: Trophy },
    { href: '/interac', label: 'Interac', icon: Wallet },
    { href: '/fast-payouts', label: 'Fast Payouts', icon: Zap },
  ];
</script>

<section
  class="relative flex min-h-[85vh] items-center overflow-hidden border-b border-prestige-gold/30"
  aria-label={`247iBET Canada homepage hero. Last updated ${lastUpdated}`}
>
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
      <div class="mb-8 flex flex-wrap items-center gap-3">
        <p class="text-[13px] font-black uppercase tracking-[0.32em] text-prestige-gold">
          247iBET Canada
        </p>
        <span class="h-1 w-1 rounded-full bg-prestige-gold/40"></span>
        <span class="text-[11px] font-medium uppercase tracking-[0.22em] text-text-tertiary">
          Casino · Sportsbook · Interac
        </span>
      </div>

      <h1 class="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-black leading-[0.88] tracking-[-0.035em] text-white">
        Canada's iGaming,<br />
        <span class="text-gradient-gold">built for you.</span>
      </h1>

      <p class="mt-7 max-w-xl text-base leading-relaxed text-text-body sm:text-lg font-medium opacity-90">
        Premium casino, sportsbook, and Interac e-Transfer payouts &mdash; one brand, one Canadian account.
      </p>

      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group h-14 px-8 text-base btn-magnetic shadow-[0_20px_40px_-10px_rgba(212,148,58,0.4)]">
          Open an Account
          <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-2" aria-hidden="true" />
        </SafeExternalLink>
        <a href="/interac" class="hero-cta-secondary h-14 px-8 text-base flex items-center justify-center font-black uppercase tracking-widest border-white/10 hover:bg-white/5 transition-all btn-magnetic">
          How payouts work
        </a>
      </div>

      <!-- Four product paths -->
      <nav
        class="mt-10 grid grid-cols-2 gap-2 border-t border-white/5 pt-8 sm:grid-cols-4 sm:gap-3"
        aria-label="Product paths"
      >
        {#each productPaths as path}
          {@const Icon = path.icon}
          <a
            href={path.href}
            class="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-3 transition-all hover:border-prestige-gold/30 hover:bg-prestige-gold/5 sm:flex-col sm:items-start sm:gap-2 sm:px-4 sm:py-4"
          >
            <Icon class="h-5 w-5 text-prestige-gold/80 transition-colors group-hover:text-prestige-gold" aria-hidden="true" />
            <span class="text-sm font-black tracking-tight text-white sm:text-[15px]">{path.label}</span>
          </a>
        {/each}
      </nav>
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
