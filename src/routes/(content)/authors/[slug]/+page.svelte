<script lang="ts">
  import { page } from '$app/stores';
  import { canonicalUrl } from '$lib/site';
</script>

<svelte:head>
  <title>Author | 247iBET Canada</title>
  <meta name="description" content="Expert iGaming author and analyst at 247iBET Canada." />
  <link rel="canonical" href={canonicalUrl(`/authors/${$page.params.slug}`)} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-4xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Author</li>
    </ol>
  </nav>

  <div class="navy-card rounded-2xl p-8">
    <h1 class="page-hero-title mb-4">Author Profile</h1>
    <p class="text-[#94A3B8] text-base leading-relaxed">
      Expert iGaming analyst and writer covering Canadian online casino and sports betting markets.
    </p>
    <div class="mt-6 navy-card rounded-xl p-6 text-center">
      <p class="text-text-tertiary text-sm">
        Author profile loaded from authors library. Wire up <code class="text-prestige-gold"
          >+page.ts</code
        > to fetch author by slug.
      </p>
    </div>
  </div>
</div>
