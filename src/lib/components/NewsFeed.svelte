<script lang="ts">
  type Category = 'All' | 'Regulation' | 'Operators' | 'Performance';

  const articles = [
    {
      title: 'Alberta iGaming launch watch enters operator-readiness phase',
      category: 'Regulation',
      href: '/guides/upcoming-alberta-sportsbooks',
      summary: 'Signals to track before commercial sportsbook and casino brands enter Alberta.',
    },
    {
      title: 'VCU AI architecture adds citation-ready market pages',
      category: 'Performance',
      href: '/news/vcu-ai-launch-2026',
      summary: 'How structured content, schema, and internal tooling support answer-engine visibility.',
    },
    {
      title: 'Ontario casino operator checks players should run first',
      category: 'Operators',
      href: '/guides/ontario-casino-operator-checks',
      summary: 'A practical checklist for verifying licence, payment rails, and responsible-play tools.',
    },
    {
      title: 'Interac withdrawal speed remains the product benchmark',
      category: 'Performance',
      href: '/fast-payouts',
      summary: 'Payout timing, KYC completion, and bonus status explain most cashout friction.',
    },
  ] satisfies Array<{ title: string; category: Exclude<Category, 'All'>; href: string; summary: string }>;

  let category = $state<Category>('All');
  const categories: Category[] = ['All', 'Regulation', 'Operators', 'Performance'];
  const filtered = $derived(category === 'All' ? articles : articles.filter((article) => article.category === category));
</script>

<section class="rounded-2xl border border-white/10 bg-navy-card p-5 md:p-8" aria-labelledby="news-feed-title">
  <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.14em] text-prestige-gold">Article feed</p>
      <h2 id="news-feed-title" class="mt-2 text-2xl font-bold text-white">Latest market updates</h2>
    </div>
    <div class="flex flex-wrap gap-2">
      {#each categories as item}
        <button
          type="button"
          class="rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold text-text-body transition hover:border-slate-blue/40 hover:text-white"
          class:border-slate-blue={category === item}
          class:text-slate-blue={category === item}
          onclick={() => (category = item)}
        >
          {item}
        </button>
      {/each}
    </div>
  </div>

  <div class="grid gap-3 md:grid-cols-2">
    {#each filtered as article}
      <a
        href={article.href}
        class="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-prestige-gold/40"
      >
        <div class="mb-3 text-xs font-black uppercase tracking-[0.12em] text-slate-blue">{article.category}</div>
        <h3 class="text-lg font-bold leading-tight text-white group-hover:text-prestige-gold">{article.title}</h3>
        <p class="mt-3 text-sm leading-6 text-text-body">{article.summary}</p>
      </a>
    {/each}
  </div>
</section>
