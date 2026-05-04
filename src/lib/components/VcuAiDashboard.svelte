<script lang="ts">
  const markets = [
    { label: 'Ontario', regulator: 'AGCO / iGaming Ontario', status: 'Active', score: 94, operators: 49 },
    { label: 'Alberta', regulator: 'AGLC / AiGC', status: 'Launch watch', score: 72, operators: 0 },
    { label: 'Canada', regulator: 'Provincial markets', status: 'Mixed', score: 81, operators: 80 },
  ];

  const signals = [
    { label: 'Interac payout pressure', value: 'High', detail: 'Fast withdrawal UX remains a primary player filter.' },
    { label: 'Compliance visibility', value: 'Medium', detail: 'Ontario has clearer operator data than emerging provincial markets.' },
    { label: 'Mobile product quality', value: 'High', detail: 'Players compare app speed, KYC flow, and responsible-gaming controls.' },
  ];

  let selectedMarket = $state(markets[0]);
  const activeSignals = $derived(
    signals.map((signal, index) => ({
      ...signal,
      weight: Math.max(35, selectedMarket.score - index * 12),
    })),
  );
</script>

<section class="mx-auto mb-16 max-w-5xl rounded-2xl border border-white/10 bg-navy-card/90 p-5 shadow-2xl md:p-8" aria-labelledby="vcu-dashboard-title">
  <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Market console</p>
      <h2 id="vcu-dashboard-title" class="mt-2 text-2xl font-bold text-white">Canadian iGaming intelligence</h2>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each markets as market}
        <button
          type="button"
          class="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-text-body transition hover:border-slate-blue/40 hover:text-white"
          class:border-slate-blue={selectedMarket.label === market.label}
          class:text-slate-blue={selectedMarket.label === market.label}
          onclick={() => (selectedMarket = market)}
        >
          {market.label}
        </button>
      {/each}
    </div>
  </div>

  <div class="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
    <div class="rounded-xl border border-white/10 bg-navy-black/50 p-5">
      <p class="text-sm text-text-tertiary">{selectedMarket.regulator}</p>
      <div class="mt-4 flex items-end justify-between gap-4">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Market score</p>
          <p class="mt-2 font-mono text-5xl font-bold text-white">{selectedMarket.score}</p>
        </div>
        <span class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-prestige-gold">
          {selectedMarket.status}
        </span>
      </div>
      <div class="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div class="h-full rounded-full bg-slate-blue" style={`width: ${selectedMarket.score}%`}></div>
      </div>
      <p class="mt-4 text-sm text-text-body">Tracked operators: <span class="font-mono text-white">{selectedMarket.operators}</span></p>
    </div>

    <div class="space-y-3">
      {#each activeSignals as signal}
        <div class="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div class="flex items-center justify-between gap-4">
            <h3 class="font-bold text-white">{signal.label}</h3>
            <span class="font-mono text-sm font-bold text-slate-blue">{signal.value}</span>
          </div>
          <p class="mt-2 text-sm leading-6 text-text-body">{signal.detail}</p>
          <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div class="h-full rounded-full bg-prestige-gold" style={`width: ${signal.weight}%`}></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
