<script lang="ts">
  import { Trophy, Zap, BookOpen } from 'lucide-svelte';
  import { IBET_URLS, IBET_CTA } from '$lib/ibet-brand';
  import { tilt, magnetic } from '$lib/utils/motion';

  interface Card {
    title: string;
    body: string;
    href: string;
    image: string;
    alt: string;
  }

  let { casinoCards, sportsCards } = $props<{ casinoCards: Card[], sportsCards: Card[] }>();
</script>

<section 
  id="gaming-hub"
  class="perspective-container relative mx-auto max-w-[1720px] px-4 py-8 sm:px-6 lg:px-10 xl:px-16"
>
  <div class="bento-grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
    <!-- Featured Casino Tile -->
    <div 
      use:tilt={10}
      class="bento-tile tilt-card bento-tile--featured group md:col-span-2 md:row-span-2 lg:col-span-3"
    >
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/lobby/casino-featured.webp" 
          alt="Live Casino Lobby"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-black via-navy-black/40 to-transparent"></div>
      </div>
      
      <div class="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
        <div class="mb-4 flex items-center gap-2">
          <span class="flex h-2 w-2 animate-pulse rounded-full bg-prestige-gold shadow-[0_0_8px_var(--color-prestige-gold)]"></span>
          <span class="text-[13px] font-black uppercase tracking-[0.2em] text-prestige-gold">Live Now</span>
        </div>
        <h2 class="text-3xl font-black tracking-tight text-white sm:text-4xl">Casino Lobby</h2>
        <p class="mt-2 max-w-md text-sm leading-relaxed text-white/70">
          Experience world-class live dealer tables and 500+ premium slots.
        </p>
        <div class="mt-6 flex flex-wrap gap-4">
          <a 
            use:magnetic={15}
            href={IBET_URLS.register} 
            class="btn-magnetic rounded-full bg-prestige-gold px-8 py-3 text-sm font-black uppercase tracking-widest text-navy-black transition-all hover:scale-105 hover:bg-white hover:shadow-gold-glow"
          >
            {IBET_CTA.register}
          </a>
          <a href="/casino" class="view-all-link">Explore All</a>
        </div>
      </div>
    </div>

    <!-- Sportsbook Tile -->
    <div 
      use:tilt={8}
      class="bento-tile tilt-card group md:col-span-2 lg:col-span-3"
    >
      <div class="absolute inset-0 z-0 bg-[#0A1121]">
         <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(74,158,191,0.15),transparent)]"></div>
      </div>
      <div class="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div class="flex items-center justify-between">
          <Trophy class="h-8 w-8 text-prestige-gold" />
          <div class="flex gap-1">
            <span class="rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-white/40">NHL</span>
            <span class="rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-white/40">NBA</span>
            <span class="rounded-md bg-white/5 px-2 py-1 text-xs font-bold text-white/40">NFL</span>
          </div>
        </div>
        <div class="mt-auto">
          <h2 class="text-2xl font-black tracking-tight text-white">Sports Betting</h2>
          <p class="mt-1 text-sm text-white/60">Competitive odds on every major league.</p>
          <div class="mt-4 flex items-center gap-4">
            <a 
              use:magnetic={10}
              href={IBET_URLS.register} 
              class="btn-magnetic text-sm font-black uppercase tracking-widest text-white hover:text-prestige-gold transition-colors"
            >
              {IBET_CTA.sports}
            </a>
            <a href="/sportsbook" class="view-all-link">Odds Board</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Payments/Interac Tile (Horizontal) -->
    <div 
      use:tilt={5}
      class="bento-tile tilt-card group lg:col-span-3"
    >
       <div class="absolute inset-0 z-0 bg-[#4A9EBF]/5"></div>
       <div class="relative z-10 flex items-center justify-between p-6">
          <div>
            <span class="text-xs font-black uppercase tracking-widest text-[#4A9EBF]">Banking</span>
            <h3 class="text-xl font-black text-white">Fast Payouts</h3>
            <p class="text-xs text-white/50">Interac 15-30 mins</p>
          </div>
          <Zap class="h-10 w-10 text-[#4A9EBF] opacity-50 group-hover:opacity-100 transition-opacity" />
       </div>
    </div>

    <!-- Guides/News Tile -->
    <div 
      use:tilt={5}
      class="bento-tile tilt-card group md:col-span-2 lg:col-span-3"
    >
       <div class="relative z-10 flex h-full flex-col p-6">
          <div class="mb-auto flex items-center justify-between">
            <span class="text-xs font-black uppercase tracking-widest text-white/40">Editorial</span>
            <BookOpen class="h-5 w-5 text-white/20" />
          </div>
          <div class="mt-4">
            <h3 class="text-lg font-black text-white">Betting Guides</h3>
            <p class="mt-1 text-xs text-white/50">Master the game with our expert strategies.</p>
            <a href="/guides" class="view-all-link mt-3 block">Read Now</a>
          </div>
       </div>
    </div>
  </div>
</section>
