<script lang="ts">
  const surfaces = ['Navy card', 'Glass thin', 'Prestige accent'] as const;
  const densities = ['Compact', 'Comfortable', 'Spacious'] as const;

  let surface = $state<(typeof surfaces)[number]>('Navy card');
  let density = $state<(typeof densities)[number]>('Comfortable');
  let showGrid = $state(true);

  const paddingClass = $derived(
    density === 'Compact' ? 'p-4' : density === 'Spacious' ? 'p-8' : 'p-6',
  );
  const surfaceClass = $derived(
    surface === 'Glass thin'
      ? 'glass-thin'
      : surface === 'Prestige accent'
        ? 'border-prestige-gold/30 bg-prestige-gold/10'
        : 'bg-navy-card',
  );
</script>

<section class="navy-card rounded-2xl border border-white/10 p-5 md:p-8" aria-labelledby="design-lab-title">
  <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Interactive lab</p>
      <h2 id="design-lab-title" class="mt-2 text-2xl font-bold text-white">Component surface preview</h2>
    </div>
    <label class="inline-flex items-center gap-2 text-sm text-text-body">
      <input type="checkbox" class="h-4 w-4 accent-slate-blue" bind:checked={showGrid} />
      Show grid
    </label>
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-4">
      <label class="block">
        <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Surface</span>
        <select class="mt-2 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-3 text-white" bind:value={surface}>
          {#each surfaces as item}
            <option>{item}</option>
          {/each}
        </select>
      </label>
      <label class="block">
        <span class="text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">Density</span>
        <select class="mt-2 w-full rounded-lg border border-white/10 bg-navy-black px-3 py-3 text-white" bind:value={density}>
          {#each densities as item}
            <option>{item}</option>
          {/each}
        </select>
      </label>
    </div>

    <div class="rounded-xl border border-white/10 {surfaceClass} {paddingClass}">
      <div class:grid={showGrid} class:gap-3={showGrid} class:grid-cols-2={showGrid}>
        <div class="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p class="text-xs font-black uppercase tracking-[0.12em] text-slate-blue">Preview</p>
          <p class="mt-2 font-bold text-white">{surface}</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">Density</p>
          <p class="mt-2 font-bold text-white">{density}</p>
        </div>
      </div>
    </div>
  </div>
</section>
