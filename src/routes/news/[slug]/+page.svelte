<script lang="ts">
  import { page } from '$app/stores';
  import { canonicalUrl } from '$lib/site';
</script>

<svelte:head>
  <title>News | 247iBET Canada</title>
  <meta
    name="description"
    content="Latest iGaming news and updates for Canadian players from 247iBET."
  />
  <link rel="canonical" href={canonicalUrl(`/news/${$page.params.slug}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/news" class="hover:text-white">News</a></li>
      <li>/</li>
      <li class="text-white font-medium">Article</li>
    </ol>
  </nav>

  <article class="navy-card rounded-2xl p-8">
    <h1 class="page-hero-title mb-4">News Article</h1>
    <div class="navy-card rounded-xl p-6 text-center mt-6">
      <p class="text-text-tertiary text-sm">
        Article content loaded from WordPress CMS. Wire up <code class="text-prestige-gold"
          >+page.ts</code
        > to fetch post by slug.
      </p>
    </div>
  </article>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
