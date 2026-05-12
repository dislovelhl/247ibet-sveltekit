<script lang="ts">
  import { onMount } from 'svelte';
  import { Zap } from 'lucide-svelte';

  const initialOdds = [
    { match: 'Man City vs Arsenal', pick: 'Man City', odds: '2.10', trend: 'up' },
    { match: 'Oilers vs Panthers', pick: 'Oilers', odds: '1.92', trend: 'down' },
    { match: 'Nadal vs Alcaraz', pick: 'Nadal', odds: '3.40', trend: 'stable' },
    { match: 'Leafs vs Bruins', pick: 'Over 5.5', odds: '1.88', trend: 'up' },
    { match: 'UFC: Jones vs Miocic', pick: 'Jones', odds: '1.55', trend: 'stable' },
  ];

  let odds = $state(initialOdds);

  onMount(() => {
    const interval = setInterval(() => {
      odds = odds.map(o => {
        if (Math.random() > 0.8) {
          const change = (Math.random() - 0.5) * 0.05;
          const newValue = Math.max(1.01, parseFloat(o.odds) + change).toFixed(2);
          return {
            ...o,
            odds: newValue,
            trend: newValue > o.odds ? 'up' : newValue < o.odds ? 'down' : 'stable'
          };
        }
        return o;
      });
    }, 3000);

    return () => clearInterval(interval);
  });
</script>

<div class="w-full bg-navy-black/40 border-y border-white/5 backdrop-blur-md overflow-hidden h-12 flex items-center">
  <div class="flex items-center px-4 border-r border-white/10 h-full bg-prestige-gold/5 shrink-0">
    <Zap class="w-4 h-4 text-prestige-gold mr-2" />
    <span class="text-xs font-black uppercase tracking-widest text-prestige-gold whitespace-nowrap">Live Odds Ticker</span>
  </div>
  
  <div class="relative flex-1 overflow-hidden h-full">
    <div class="odds-marquee flex items-center gap-12 px-6 h-full whitespace-nowrap">
      {#each [...odds, ...odds] as item}
        <div class="flex items-center gap-3">
          <span class="text-[11px] font-bold text-text-tertiary uppercase">{item.match}</span>
          <span class="text-[11px] font-medium text-white/60">{item.pick}</span>
          <span class="font-mono text-sm font-black {item.trend === 'up' ? 'text-success' : item.trend === 'down' ? 'text-error' : 'text-prestige-gold'} transition-colors duration-500">
            {item.odds}
            {#if item.trend === 'up'}
              <span class="text-xs ml-0.5">↑</span>
            {:else if item.trend === 'down'}
              <span class="text-xs ml-0.5">↓</span>
            {/if}
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .odds-marquee {
    display: flex;
    width: max-content;
    animation: ticker-scroll 40s linear infinite;
  }

  @keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .odds-marquee:hover {
    animation-play-state: paused;
  }
</style>
