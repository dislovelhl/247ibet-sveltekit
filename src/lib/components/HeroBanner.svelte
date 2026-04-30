<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import { optimizeSrcSet } from '$lib/image';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';

  const HERO_IMAGE = {
    src: '/images/generated/casino-premium-hero.png',
    alt: 'Premium Online Casino Experience — 247iBET Canada',
  };

  // Sample live odds — seeded per day so SSR/CSR match, no hydration mismatch
  function getDailyOdds() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    function sr(s: number, min: number, max: number) {
      const x = Math.sin(s) * 10000;
      return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
    }

    const formatOdds = (n: number) => (n >= 0 ? `+${n}` : `${n}`);

    return [
      {
        sport: 'NHL',
        home: 'TOR Maple Leafs',
        homeOdds: formatOdds(sr(seed * 1, -150, 130)),
        away: 'BOS Bruins',
        awayOdds: formatOdds(sr(seed * 2, -150, 130)),
        total: `O/U ${sr(seed * 3, 53, 62) / 10}`,
      },
      {
        sport: 'NBA',
        home: 'TOR Raptors',
        homeOdds: formatOdds(sr(seed * 4, -160, 140)),
        away: 'BOS Celtics',
        awayOdds: formatOdds(sr(seed * 5, -160, 140)),
        total: `O/U ${sr(seed * 6, 195, 230)}`,
      },
      {
        sport: 'UFC',
        home: 'Fighter A',
        homeOdds: formatOdds(sr(seed * 7, -200, 180)),
        away: 'Fighter B',
        awayOdds: formatOdds(sr(seed * 8, -200, 180)),
        total: `O/U 2.5 rds`,
      },
      {
        sport: 'CFL',
        home: 'TOR Argonauts',
        homeOdds: formatOdds(sr(seed * 9, -140, 120)),
        away: 'EDM Elks',
        awayOdds: formatOdds(sr(seed * 10, -140, 120)),
        total: `O/U ${sr(seed * 11, 43, 56)}`,
      },
    ];
  }

  const odds = getDailyOdds();
  const oddsDoubled = [...odds, ...odds];
</script>

<section
  class="relative mb-10 w-full overflow-hidden rounded-[1.75rem] bg-navy-black shadow-2xl group sm:mb-12 sm:rounded-3xl"
>
  <!-- Hero image -->
  <div
    class="relative w-full min-h-[430px] overflow-hidden aspect-[5/6] sm:min-h-0 sm:aspect-[16/10] lg:aspect-[21/9]"
  >
    <img
      src={HERO_IMAGE.src}
      srcset={optimizeSrcSet(HERO_IMAGE.src, [640, 960, 1280, 1672], 82)}
      sizes="(min-width: 1024px) 100vw, 100vw"
      alt={HERO_IMAGE.alt}
      fetchpriority="high"
      decoding="async"
      width="1280"
      height="549"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Dark overlay -->
    <div
      class="absolute inset-0 z-10 bg-black/52 pointer-events-none transition-opacity duration-700 group-hover:bg-black/38 sm:bg-black/44"
    ></div>

    <!-- Bottom fade — strengthened for AA contrast on subtitle copy -->
    <div
      class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-black via-navy-black/85 to-transparent pointer-events-none z-10"
    ></div>

    <!-- Content overlay -->
    <div class="absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6 md:p-10 lg:p-16">
      <div class="max-w-3xl">
        <!-- Kicker + trust badge row -->
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <div class="page-hero-kicker">
            <span
              class="text-xs font-mono font-black uppercase tracking-[0.12em] text-prestige-gold sm:text-xs sm:tracking-[0.12em]"
              >247iBET CANADA</span
            >
          </div>
        </div>

        <h1 class="page-hero-title mb-4 text-[clamp(2rem,8vw,4rem)] sm:mb-5">
          Online Casino &amp; Sportsbook —
          <span class="text-transparent bg-clip-text text-gradient-gold">Fast Interac Payouts</span>
          <span class="sr-only"> — 247iBET Canada Online Casino &amp; Sports Betting</span>
        </h1>

        <p
          class="page-hero-subtitle mb-6 max-w-lg text-sm font-light leading-relaxed drop-shadow-lg sm:mb-8 sm:text-base md:text-lg"
        >
          Play 500+ casino games and bet on your favourite sports. Fast Interac deposits and
          withdrawals, live dealer tables, and same-game parlays — built for Canadian players.
        </p>

        <div class="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:gap-4">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary group w-full sm:w-auto"
          >
            Play Now
            <ChevronRight
              class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </SafeExternalLink>
        </div>
      </div>
    </div>

    <!-- Prestige border on hover -->
    <div
      class="absolute inset-0 z-20 rounded-[1.75rem] border-[1.5px] border-prestige-gold/0 pointer-events-none transition-all duration-700 shadow-[inset_0_0_40px_rgba(212,148,58,0)] group-hover:border-prestige-gold/30 group-hover:shadow-[inset_0_0_40px_rgba(212,148,58,0.15)] sm:rounded-3xl"
    ></div>
  </div>

  <!-- Live Odds Strip -->
  <div
    class="relative border-t border-white/5 bg-navy-raised/80 overflow-hidden"
    aria-label="Sample live sports odds"
  >
    <!-- Gradient masks on edges -->
    <div
      class="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy-raised/80 to-transparent z-10 pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-raised/80 to-transparent z-10 pointer-events-none"
      aria-hidden="true"
    ></div>

    <!-- Live label -->
    <div
      class="absolute left-0 top-0 bottom-0 flex items-center pl-3 pr-4 border-r border-white/5 bg-navy-raised/90 z-20 gap-2"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" aria-hidden="true"></span>
      <span
        class="text-xs font-mono font-bold text-success uppercase tracking-[0.12em] whitespace-nowrap"
        >Live Odds</span
      >
    </div>

    <!-- Scrolling odds -->
    <div class="overflow-hidden pl-[96px]">
      <div class="odds-marquee flex gap-0 whitespace-nowrap py-2.5" aria-hidden="true">
        {#each oddsDoubled as game, i (i)}
          <span class="inline-flex items-center gap-3 px-5 border-r border-white/5 text-xs">
            <span
              class="font-mono font-bold text-prestige-gold uppercase tracking-[0.12em] text-xs"
              >{game.sport}</span
            >
            <span class="text-text-body">{game.home}</span>
            <span class="font-mono font-bold text-white">{game.homeOdds}</span>
            <span class="text-text-body">vs</span>
            <span class="text-text-body">{game.away}</span>
            <span class="font-mono font-bold text-white">{game.awayOdds}</span>
            <span class="font-mono text-text-body text-xs">{game.total}</span>
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>
