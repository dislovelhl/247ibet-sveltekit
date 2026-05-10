<script lang="ts">
  interface BonusRow {
    type: string;
    goodFor: string;
    check: string;
  }

  let { bonusRows } = $props<{ bonusRows: BonusRow[] }>();
</script>

<section id="bonus-terms" class="rounded-xl border border-prestige-gold/25 bg-navy-card/75 p-spacing-6">
  <div class="grid gap-spacing-6 lg:grid-cols-[0.28fr_0.72fr]">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">Bonuses</p>
      <h2 class="mt-spacing-3 text-3xl font-black">Check the terms before claiming</h2>
      <p class="mt-spacing-3 text-sm leading-6 text-text-body">
        Promotions can add value only when the rules are clear. Review wagering, expiry, max
        bet, eligible games or markets, and withdrawal limits before opting in.
      </p>
      <a href="/casino-bonuses-canada" class="page-cta-primary-sm mt-spacing-5 inline-flex"
        >Check Bonus Terms</a
      >
    </div>
    <div class="grid gap-3 lg:hidden">
      {#each bonusRows as row}
        <article class="rounded-xl border border-white/10 bg-black/20 p-spacing-4">
          <div class="flex items-start justify-between gap-spacing-3">
            <h3 class="font-black text-white">{row.type}</h3>
            <span
              class="shrink-0 rounded-full bg-prestige-gold/10 px-spacing-3 py-spacing-1 text-xs font-black text-prestige-gold"
            >
              {row.goodFor}
            </span>
          </div>
          <p class="mt-spacing-3 text-sm leading-6 text-text-body">{row.check}</p>
        </article>
      {/each}
    </div>
    <div
      class="table-scroll-wrap hidden overflow-x-auto rounded-xl border border-white/10 lg:block"
    >
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
          <tr>
            <th scope="col" class="px-4 py-3">Bonus type</th>
            <th scope="col" class="px-4 py-3">Good for</th>
            <th scope="col" class="px-4 py-3">Check before claiming</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/8">
          {#each bonusRows as row}
            <tr>
              <td class="px-4 py-3 font-black text-white">{row.type}</td>
              <td class="px-4 py-3 text-prestige-gold">{row.goodFor}</td>
              <td class="px-4 py-3 text-text-body">{row.check}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>
