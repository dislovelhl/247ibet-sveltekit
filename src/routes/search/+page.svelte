<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { getFeaturedSearchItems, searchItems } from '$lib/search-index.js';

  let query = $state('');
  const trimmedQuery = $derived(query.trim());
  const results = $derived(trimmedQuery ? searchItems(trimmedQuery, 12) : []);
  const featuredItems = getFeaturedSearchItems(6);
</script>

<svelte:head>
  <title>Search — Find Casinos, Reviews &amp; Guides | 247iBET</title>
  <meta
    name="description"
    content="Search 247iBET for operator reviews, betting guides, casino bonuses, tools, and Canadian iGaming news."
  />
  <meta property="og:title" content="Search — Find Casinos, Reviews & Guides | 247iBET" />
  <meta
    property="og:description"
    content="Search 247iBET for operator reviews, betting guides, casino bonuses, tools, and Canadian iGaming news."
  />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href={canonicalUrl('/search')} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Search</li>
    </ol>
  </nav>

  <header class="mb-8">
    <div class="text-[10px] font-mono text-slate-blue uppercase tracking-[0.3em] mb-3">
      Full-Text Search
    </div>
    <h1 class="text-3xl md:text-4xl font-black text-white mb-3">Search 247iBET</h1>
    <p class="text-gray-400 font-sans text-base max-w-2xl">
      Find operator reviews, Canadian betting guides, bonus offers, and iGaming news.
    </p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure · Last updated: 2026-03-30 · Reviewed by: 247iBET Editorial Team
  </div>

  <div class="navy-card rounded-2xl p-5 md:p-6">
    <label for="site-search" class="block text-sm font-semibold text-white mb-2">Search query</label
    >
    <input
      id="site-search"
      bind:value={query}
      type="search"
      autocomplete="off"
      placeholder="Search Interac, bonuses, odds, Ontario..."
      class="w-full rounded-lg border border-white/10 bg-navy-black px-4 py-3 text-base text-white outline-none transition focus:border-slate-blue focus:ring-2 focus:ring-slate-blue/30"
    />

    <div class="mt-6">
      {#if trimmedQuery && results.length === 0}
        <p class="text-sm text-text-tertiary">
          No matches found. Try a broader term such as casino, Interac, odds, or Ontario.
        </p>
      {:else}
        <div class="mb-3 flex items-center justify-between gap-3">
          <h2 class="text-lg font-bold text-white">
            {trimmedQuery ? 'Search results' : 'Featured searches'}
          </h2>
          <span class="font-mono text-xs uppercase text-text-tertiary">
            {trimmedQuery ? `${results.length} found` : `${featuredItems.length} picks`}
          </span>
        </div>

        <div class="grid gap-3">
          {#each trimmedQuery ? results : featuredItems as item}
            <a
              href={item.href}
              class="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-slate-blue/70 hover:bg-white/[0.06]"
            >
              <div class="mb-2 flex items-center justify-between gap-3">
                <h3 class="text-base font-bold text-white group-hover:text-slate-blue">
                  {item.title}
                </h3>
                <span
                  class="shrink-0 rounded border border-white/10 px-2 py-1 font-mono text-[10px] uppercase text-prestige-gold"
                >
                  {item.category}
                </span>
              </div>
              <p class="text-sm leading-6 text-gray-400">{item.description}</p>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
