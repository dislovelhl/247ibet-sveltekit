<script lang="ts">
  type Operator = {
    name: string;
    method: string;
    tier: string;
    hours: number;
    kyc: 'Low' | 'Medium' | 'High';
    province: 'Ontario' | 'Alberta' | 'Canada';
  };

  const operators: Operator[] = [
    { name: '247iBET', method: 'Interac e-Transfer', tier: 'Instant - 1h', hours: 1, kyc: 'Low', province: 'Canada' },
    { name: 'Ontario FastPay', method: 'Interac e-Transfer', tier: '1h - 24h', hours: 12, kyc: 'Medium', province: 'Ontario' },
    { name: 'Prairie Casino', method: 'Interac e-Transfer', tier: '24h - 72h', hours: 48, kyc: 'Medium', province: 'Alberta' },
    { name: 'National Sportsbook', method: 'Interac e-Transfer', tier: '3 - 7 days', hours: 96, kyc: 'High', province: 'Canada' },
  ];

  let province = $state<'All' | Operator['province']>('All');
  let kycComplete = $state(true);
  let bonusCleared = $state(true);

  const filtered = $derived(
    operators
      .filter((operator) => province === 'All' || operator.province === province || operator.province === 'Canada')
      .map((operator) => {
        const delay = (kycComplete ? 0 : 24) + (bonusCleared ? 0 : 48);
        return { ...operator, projectedHours: operator.hours + delay };
      })
      .sort((a, b) => a.projectedHours - b.projectedHours),
  );

  const formatTime = (hours: number) => {
    if (hours <= 1) return 'Under 1 hour';
    if (hours < 24) return `${hours} hours`;
    const days = Math.ceil(hours / 24);
    return `${days} day${days === 1 ? '' : 's'}`;
  };
</script>

<section class="navy-card mb-8 rounded-2xl border border-white/10 p-5 md:p-8" aria-labelledby="payout-checker-title">
  <div class="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Live payout reference</p>
      <h2 id="payout-checker-title" class="mt-2 text-2xl font-bold text-white">Withdrawal speed table</h2>
    </div>
    <div class="flex flex-wrap gap-3">
      <label class="text-sm text-text-body">
        Province
        <select
          class="ml-2 rounded-lg border border-white/10 bg-navy-black px-3 py-2 text-white outline-none focus:border-slate-blue"
          bind:value={province}
        >
          <option>All</option>
          <option>Ontario</option>
          <option>Alberta</option>
          <option>Canada</option>
        </select>
      </label>
      <label class="inline-flex items-center gap-2 text-sm text-text-body">
        <input type="checkbox" class="h-4 w-4 accent-slate-blue" bind:checked={kycComplete} />
        KYC complete
      </label>
      <label class="inline-flex items-center gap-2 text-sm text-text-body">
        <input type="checkbox" class="h-4 w-4 accent-slate-blue" bind:checked={bonusCleared} />
        Bonus cleared
      </label>
    </div>
  </div>

  <div class="overflow-x-auto rounded-xl border border-white/10">
    <table class="w-full min-w-[760px] text-sm">
      <thead class="bg-white/[0.03] text-xs uppercase tracking-[0.12em] text-text-tertiary">
        <tr>
          <th class="p-4 text-left">Operator</th>
          <th class="p-4 text-left">Method</th>
          <th class="p-4 text-left">Base tier</th>
          <th class="p-4 text-left">Projected time</th>
          <th class="p-4 text-left">KYC friction</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/10">
        {#each filtered as operator}
          <tr class="bg-navy-black/30">
            <td class="p-4 font-bold text-white">{operator.name}</td>
            <td class="p-4 text-text-body">{operator.method}</td>
            <td class="p-4 text-text-body">{operator.tier}</td>
            <td class="p-4 font-mono font-bold text-slate-blue">{formatTime(operator.projectedHours)}</td>
            <td class="p-4 text-text-body">{operator.kyc}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
