<script lang="ts">
  let odds = $state(-110);
  let stake = $state(100);

  const normalizedStake = $derived(Math.max(0, Number(stake) || 0));
  const normalizedOdds = $derived(Number(odds) || 0);
  const decimalOdds = $derived(
    normalizedOdds > 0 ? 1 + normalizedOdds / 100 : normalizedOdds < 0 ? 1 + 100 / Math.abs(normalizedOdds) : 0,
  );
  const profit = $derived(normalizedStake * Math.max(0, decimalOdds - 1));
  const payout = $derived(normalizedStake + profit);
  const breakEven = $derived(decimalOdds > 0 ? 100 / decimalOdds : 0);

  const presets = [-200, -150, -110, 100, 150, 200, 300];
</script>

<section class="navy-card mb-8 rounded-2xl border border-white/10 p-5 md:p-8" aria-labelledby="odds-calculator-title">
  <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Live calculator</p>
      <h2 id="odds-calculator-title" class="mt-2 text-2xl font-bold text-white">Odds payout estimator</h2>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each presets as preset}
        <button
          type="button"
          class="rounded-full border border-white/10 px-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-bold text-text-body transition hover:border-prestige-gold/50 hover:text-white"
          class:border-prestige-gold={odds === preset}
          class:text-prestige-gold={odds === preset}
          onclick={() => (odds = preset)}
        >
          {preset > 0 ? `+${preset}` : preset}
        </button>
      {/each}
    </div>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <label class="block rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">American odds</span>
      <input
        class="mt-3 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-3 font-mono text-lg text-white outline-none focus:border-slate-blue"
        type="number"
        bind:value={odds}
      />
    </label>
    <label class="block rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Stake (CAD)</span>
      <input
        class="mt-3 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-3 font-mono text-lg text-white outline-none focus:border-slate-blue"
        type="number"
        min="0"
        step="5"
        bind:value={stake}
      />
    </label>
  </div>

  <div class="mt-5 grid gap-3 sm:grid-cols-3">
    <div class="rounded-xl border border-success/20 bg-success/8 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-success">Profit</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">${profit.toFixed(2)}</p>
    </div>
    <div class="rounded-xl border border-slate-blue/20 bg-slate-blue/10 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-slate-blue">Total payout</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">${payout.toFixed(2)}</p>
    </div>
    <div class="rounded-xl border border-prestige-gold/20 bg-prestige-gold/10 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">Break-even</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">{breakEven.toFixed(1)}%</p>
    </div>
  </div>
</section>
