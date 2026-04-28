<script lang="ts">
  import { Zap, Trophy, CreditCard, Smartphone, Star, MapPin, ArrowRight } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';

  const primaryHubs = [
    {
      guideHref: '/casino',
      playHref: IBET_URLS.casino,
      icon: Trophy,
      label: 'Online Casino',
      description: 'Play premium online casino games — 500+ certified slots, live dealer tables, and fast Interac payouts.',
      stat: '500+ games',
      iconColor: 'text-slate-blue',
      iconBg: 'bg-slate-blue/10',
      image: '/images/editorial/casino-premium.png',
      guideText: 'View Games',
      playText: 'Play Now',
      featured: true,
    },
    {
      guideHref: '/sportsbook',
      playHref: IBET_URLS.register,
      icon: Star,
      label: 'Sports Betting',
      description: 'Bet on your favorite sports — NHL, UFC, NBA with live in-play and same-game parlays.',
      stat: 'Live betting',
      iconColor: 'text-prestige-gold',
      iconBg: 'bg-prestige-gold/10',
      image: '/images/editorial/sports-premium.png',
      guideText: 'View Odds',
      playText: 'Enter Sportsbook',
      featured: false,
    },
  ] as const;

  const secondaryHubs = [
    {
      guideHref: '/fast-payouts',
      playHref: IBET_URLS.deposit,
      icon: Zap,
      label: 'Fast Payouts',
      description: 'Experience fast payouts for all games — rapid secure withdrawals.',
      stat: 'Rapid cashout',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
      image: '/images/editorial/fast-payouts.png',
      guideText: 'Learn More',
      playText: 'Fast Deposit',
    },
    {
      guideHref: '/interac',
      playHref: IBET_URLS.deposit,
      icon: CreditCard,
      label: 'Interac Payments',
      description: 'Deposit and withdraw with Interac — secure, seamless, and instant confirmation.',
      stat: 'CAD Native',
      iconColor: 'text-slate-blue',
      iconBg: 'bg-slate-blue/10',
      image: '/images/editorial/interac-safety.png',
      guideText: 'Learn More',
      playText: 'Interac Deposit',
    },
    {
      guideHref: '/best-betting-apps-canada',
      playHref: IBET_URLS.register,
      icon: Smartphone,
      label: 'Mobile Betting',
      description: 'Full casino + sportsbook on iOS and Android — optimised for action.',
      stat: 'iOS & Android',
      iconColor: 'text-slate-blue',
      iconBg: 'bg-slate-blue/10',
      image: '/images/editorial/mobile-betting-premium.png',
      guideText: 'Learn More',
      playText: 'Play on Mobile',
    },
    {
      guideHref: '/ontario',
      playHref: IBET_URLS.register,
      icon: MapPin,
      label: 'Ontario Hub',
      description: '247iBET is available for Ontario players — fast Interac payouts and full casino + sportsbook access.',
      stat: 'Ontario Available',
      iconColor: 'text-success',
      iconBg: 'bg-success/10',
      image: '/images/editorial/ontario-market.png',
      guideText: 'Ontario Guide',
      playText: 'Play in Ontario',
    },
  ] as const;
</script>

<section aria-labelledby="intent-hubs-heading" class="min-h-[600px]">
  <div class="flex items-baseline gap-4 mb-8">
    <h2
      id="intent-hubs-heading"
      class="page-hub-title text-xl md:text-2xl text-gradient-slate uppercase tracking-[0.18em]"
    >
      Casino &amp; Sports Betting
    </h2>
    <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {#each primaryHubs as hub}
      <div
        class="group md:col-span-2 navy-card specular-edge flex flex-col gap-5 overflow-hidden relative transition-transform duration-300 hover:-translate-y-1 {hub.featured ? 'min-h-[420px] hover:shadow-[0_0_50px_rgba(212,148,58,0.2)] border-prestige-gold/20' : 'min-h-[360px] hover:shadow-[0_0_40px_rgba(212,148,58,0.1)]'}"
      >
        <div class="p-6 md:p-8 flex flex-col gap-5 flex-1 relative z-10">
          <div class="flex items-start justify-between">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 {hub.iconBg} border border-white/10 shadow-lg">
              <svelte:component this={hub.icon} class="w-7 h-7 {hub.iconColor} drop-shadow-[0_0_8px_rgba(74,158,191,0.3)]" aria-hidden="true" />
            </div>
            <div class="flex items-center gap-2">
              {#if hub.featured}
                <span class="px-2.5 py-1 rounded bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-[9px] font-bold tracking-widest uppercase">
                  Featured
                </span>
              {/if}
              <span class="font-mono text-xs text-text-tertiary bg-navy-raised px-3 py-1.5 rounded-md tabular-nums border border-white/5">
                {hub.stat}
              </span>
            </div>
          </div>

          <div class="flex-1">
            <h3 class="page-hub-title text-2xl text-text-primary mb-3 group-hover:text-gradient-gold transition-all duration-300">
              {hub.label}
            </h3>
            <p class="page-hub-subtitle text-sm group-hover:text-text-primary/80 max-w-sm transition-colors duration-300">{hub.description}</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mt-auto">
            <a
              href={hub.playHref}
              target="_blank"
              rel="noopener noreferrer"
              class="page-cta-primary-sm flex-1 text-center whitespace-nowrap"
            >
              {hub.playText}
            </a>
            <a href={hub.guideHref} class="page-cta-secondary-sm flex-1 text-center group/link whitespace-nowrap flex items-center justify-center gap-1">
              {hub.guideText} <ArrowRight class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div class="absolute inset-0 pointer-events-none z-0">
          <img src={hub.image} alt="" aria-hidden="true" class="object-cover w-full h-full opacity-20 mix-blend-screen group-hover:opacity-40 transition-opacity duration-300" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-black/90 via-navy-black/40 to-transparent"></div>
        </div>
      </div>
    {/each}

    {#each secondaryHubs as hub}
      <div class="group col-span-1 navy-card flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-navy-border-active overflow-hidden relative">
        <div class="p-5 flex flex-col gap-4 flex-1 relative z-10">
          <div class="flex items-start justify-between">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 {hub.iconBg} border border-white/5">
              <svelte:component this={hub.icon} class="w-5 h-5 {hub.iconColor}" aria-hidden="true" />
            </div>
            <span class="font-mono text-[10px] text-text-tertiary bg-black/40 px-2 py-1 rounded-sm tabular-nums">
              {hub.stat}
            </span>
          </div>

          <div class="flex-1">
            <h3 class="page-hub-title text-base text-white mb-2">{hub.label}</h3>
            <p class="page-hub-subtitle text-xs group-hover:text-text-body transition-colors duration-300">{hub.description}</p>
          </div>

          <div class="flex flex-col gap-2 mt-auto">
            <a href={hub.guideHref} class="page-cta-primary-sm w-full text-center">{hub.guideText}</a>
            <a
              href={hub.playHref}
              target="_blank"
              rel="noopener noreferrer"
              class="page-cta-secondary-sm text-center group/link flex items-center justify-center gap-1"
            >
              {hub.playText} <ArrowRight class="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div class="absolute inset-0 pointer-events-none z-0">
          <img src={hub.image} alt="" aria-hidden="true" class="object-cover w-full h-full opacity-10 mix-blend-screen group-hover:opacity-20 transition-opacity duration-300" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A101C] via-[#0A101C]/80 to-transparent"></div>
        </div>
      </div>
    {/each}
  </div>
</section>
