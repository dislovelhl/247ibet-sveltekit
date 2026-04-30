<script lang="ts">
  import { Trophy, Star, ArrowRight } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  const primaryHubs = [
    {
      guideHref: '/casino',
      playHref: IBET_URLS.casino,
      icon: Trophy,
      label: 'Online Casino',
      description:
        'Play premium online casino games — 500+ certified slots, live dealer tables, and fast Interac payouts.',
      stat: '500+ games',
      iconColor: 'text-prestige-gold',
      iconBg: 'bg-prestige-gold/10',
      guideText: 'View Games',
      playText: 'Open Lobby',
      featured: true,
    },
    {
      guideHref: '/sportsbook',
      playHref: IBET_URLS.register,
      icon: Star,
      label: 'Sports Betting',
      description:
        'Bet on your favorite sports — NHL, UFC, NBA with live in-play and same-game parlays.',
      stat: 'Live betting',
      iconColor: 'text-prestige-gold',
      iconBg: 'bg-prestige-gold/10',
      guideText: 'View Odds',
      playText: 'Start Sportsbook',
      featured: false,
    },
  ] as const;

  const secondaryHubs = [
    { href: '/fast-payouts', label: 'Fast Payouts', stat: 'Rapid cashout' },
    { href: '/interac', label: 'Interac Payments', stat: 'CAD native' },
    { href: '/best-betting-apps-canada', label: 'Mobile Betting', stat: 'iOS & Android' },
    { href: '/ontario', label: 'Ontario Hub', stat: 'Available now' },
  ] as const;
</script>

<section aria-labelledby="intent-hubs-heading" class="min-h-[600px]">
  <div class="flex items-baseline gap-4 mb-8">
    <h2
      id="intent-hubs-heading"
      class="page-hub-title text-xl md:text-2xl text-gradient-slate uppercase tracking-[0.12em]"
    >
      Casino &amp; Sports Betting
    </h2>
    <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {#each primaryHubs as hub}
      <div
        class="group md:col-span-2 navy-card specular-edge flex flex-col gap-5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 {hub.featured
          ? 'min-h-[340px] hover:shadow-[0_0_50px_rgba(212,148,58,0.2)] border-prestige-gold/20'
          : 'min-h-[300px] hover:shadow-[0_0_40px_rgba(212,148,58,0.1)]'}"
      >
        <div class="p-6 md:p-7 flex flex-col gap-4 flex-1">
          <div class="flex items-start justify-between">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 {hub.iconBg} border border-white/10 shadow-lg"
            >
              <hub.icon
                class="w-7 h-7 {hub.iconColor}"
                aria-hidden="true"
              />
            </div>
            <div class="flex items-center gap-2">
              {#if hub.featured}
                <span
                  class="px-2.5 py-1 rounded bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-xs font-bold tracking-widest uppercase"
                >
                  Featured
                </span>
              {/if}
              <span
                class="font-mono text-xs text-text-tertiary bg-navy-raised px-3 py-1.5 rounded-md tabular-nums border border-white/5"
              >
                {hub.stat}
              </span>
            </div>
          </div>

          <div class="flex-1">
            <h3
              class="page-hub-title text-2xl text-text-primary mb-3 group-hover:text-gradient-gold transition-all duration-300"
            >
              {hub.label}
            </h3>
            <p
              class="page-hub-subtitle text-sm group-hover:text-text-primary/80 max-w-sm transition-colors duration-300"
            >
              {hub.description}
            </p>
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
            <a
              href={hub.guideHref}
              class="page-cta-secondary-sm flex-1 text-center group/link whitespace-nowrap flex items-center justify-center gap-1"
            >
              {hub.guideText}
              <ArrowRight class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <nav aria-label="Quick destinations" class="mt-10 border-t border-white/5 pt-6">
    <p class="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
      Quick destinations
    </p>
    <ul class="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4">
      {#each secondaryHubs as hub}
        <li>
          <a
            href={hub.href}
            class="group/strip flex items-baseline justify-between gap-3 border-b border-white/0 py-1 text-sm text-text-primary transition-colors hover:border-prestige-gold/30 hover:text-prestige-gold"
          >
            <span class="flex items-baseline gap-2">
              <span class="font-medium">{hub.label}</span>
              <span class="font-mono text-xs uppercase tracking-wider text-text-tertiary"
                >{hub.stat}</span
              >
            </span>
            <ArrowRight
              class="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-60 transition-all group-hover/strip:translate-x-0 group-hover/strip:opacity-100"
              aria-hidden="true"
            />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</section>
