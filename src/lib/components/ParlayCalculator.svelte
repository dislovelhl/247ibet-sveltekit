<script lang="ts">
  type Leg = {
    id: number;
    label: string;
    odds: number;
  };

  let stake = $state(25);
  let nextId = $state(4);
  let legs = $state<Leg[]>([
    { id: 1, label: 'Leg 1', odds: -110 },
    { id: 2, label: 'Leg 2', odds: -110 },
    { id: 3, label: 'Leg 3', odds: 150 },
  ]);

  const toDecimal = (line: number) => (line > 0 ? 1 + line / 100 : line < 0 ? 1 + 100 / Math.abs(line) : 1);
  const combinedDecimal = $derived(legs.reduce((total, leg) => total * toDecimal(Number(leg.odds) || 0), 1));
  const payout = $derived(Math.max(0, Number(stake) || 0) * combinedDecimal);
  const profit = $derived(payout - Math.max(0, Number(stake) || 0));
  const impliedProbability = $derived(combinedDecimal > 0 ? 100 / combinedDecimal : 0);

  function addLeg() {
    legs = [...legs, { id: nextId, label: `Leg ${nextId}`, odds: -110 }];
    nextId += 1;
  }

  function removeLeg(id: number) {
    if (legs.length > 2) {
      legs = legs.filter((leg) => leg.id !== id);
    }
  }
</script>

<section class="navy-card mb-8 rounded-2xl border border-white/10 p-5 md:p-8" aria-labelledby="parlay-calculator-title">
  <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Parlay builder</p>
      <h2 id="parlay-calculator-title" class="mt-2 text-2xl font-bold text-white">Multi-leg payout estimator</h2>
    </div>
    <button
      type="button"
      class="rounded-lg border border-slate-blue/30 bg-slate-blue/10 px-4 py-2 text-sm font-bold text-slate-blue transition hover:bg-slate-blue hover:text-white"
      onclick={addLeg}
    >
      Add leg
    </button>
  </div>

  <label class="mb-4 block max-w-xs rounded-xl border border-white/10 bg-white/[0.03] p-4">
    <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Stake (CAD)</span>
    <input
      class="mt-3 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-3 font-mono text-lg text-white outline-none focus:border-slate-blue"
      type="number"
      min="0"
      step="5"
      bind:value={stake}
    />
  </label>

  <div class="space-y-3">
    {#each legs as leg, index (leg.id)}
      <div class="grid gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[1fr_180px_auto] sm:items-center">
        <label>
          <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Selection</span>
          <input
            class="mt-2 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-2 text-sm text-white outline-none focus:border-slate-blue"
            bind:value={leg.label}
          />
        </label>
        <label>
          <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Odds</span>
          <input
            class="mt-2 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-2 font-mono text-sm text-white outline-none focus:border-slate-blue"
            type="number"
            bind:value={leg.odds}
          />
        </label>
        <button
          type="button"
          class="rounded-lg border border-white/10 px-3 py-2 text-sm font-bold text-text-body transition hover:border-red-400/40 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={legs.length <= 2}
          onclick={() => removeLeg(leg.id)}
          aria-label={`Remove leg ${index + 1}`}
        >
          Remove
        </button>
      </div>
    {/each}
  </div>

  <div class="mt-5 grid gap-3 sm:grid-cols-3">
    <div class="rounded-xl border border-slate-blue/20 bg-slate-blue/10 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-slate-blue">Combined decimal</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">{combinedDecimal.toFixed(2)}</p>
    </div>
    <div class="rounded-xl border border-success/20 bg-success/8 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-success">Projected profit</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">${profit.toFixed(2)}</p>
    </div>
    <div class="rounded-xl border border-prestige-gold/20 bg-prestige-gold/10 p-4">
      <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">Implied chance</p>
      <p class="mt-2 font-mono text-2xl font-bold text-white">{impliedProbability.toFixed(1)}%</p>
    </div>
  </div>

  <p class="mt-4 text-sm leading-6 text-text-tertiary">
    Total return: <span class="font-mono font-bold text-white">${payout.toFixed(2)}</span>
  </p>
</section>
