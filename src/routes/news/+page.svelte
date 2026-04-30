<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  const coverageAreas = [
    {
      topic: 'Regulation',
      stories: 'Ontario policy, Alberta launch updates',
      why: 'Tracks the rules that shape the market.',
    },
    {
      topic: 'Operators',
      stories: 'Launches, shutdowns, and product changes',
      why: 'Helps readers understand which brands are changing.',
    },
    {
      topic: 'Performance',
      stories: 'Payout speed, mobile UX, market signals',
      why: 'Connects technical shifts with player experience.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Canadian iGaming News & Market Intelligence Hub 2026',
    description:
      'Stay updated with the latest Canadian iGaming news, regulatory changes in Alberta and Ontario, and technical analysis of the 2026 betting landscape.',
    url: 'https://247ibet.ca/news',
  };
</script>

<svelte:head>
  <title>Canadian iGaming News &amp; Market Intelligence | 247iBET</title>
  <meta
    name="description"
    content="Stay updated with the latest Canadian iGaming news, regulatory changes in Alberta and Ontario, and technical analysis of the 2026 betting landscape."
  />
  <meta property="og:title" content="Canadian iGaming News & Market Intelligence | 247iBET" />
  <meta
    property="og:description"
    content="Stay updated with the latest Canadian iGaming news, regulatory changes in Alberta and Ontario, and technical analysis of the 2026 betting landscape."
  />
  <meta property="og:type" content="article" />
  <link rel="canonical" href={canonicalUrl('/news')} />
  <JsonLd schema={articleSchema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
  <div class="max-w-6xl mx-auto space-y-16">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">NEWS</li>
      </ol>
    </nav>

    <div class="text-center space-y-6 max-w-3xl mx-auto">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-blue/10 border border-slate-blue/30 text-slate-blue text-xs font-bold tracking-widest uppercase mb-4"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          /></svg
        >
        Market Intelligence Hub v4.2
      </div>
      <h1 class="page-hero-title italic">
        Latest <span class="text-slate-blue">Intelligence</span>
      </h1>
      <p class="text-gray-400 text-xl font-sans leading-relaxed">
        Real-time updates on the Alberta launch, Ontario market performance, and technical shifts in
        Canadian iGaming security.
      </p>
    </div>

    <div class="navy-card p-6 md:p-8">
      <h2 class="text-2xl font-bold mb-4">News Coverage Areas</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/10 bg-white/[0.03]">
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Coverage</th>
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs"
                >Typical stories</th
              >
              <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Why it matters</th
              >
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            {#each coverageAreas as area}
              <tr>
                <td class="p-4 text-white font-bold">{area.topic}</td>
                <td class="p-4 text-gray-300">{area.stories}</td>
                <td class="p-4 text-gray-300">{area.why}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Game Lobby placeholder — wire to Svelte component in Phase 2 -->
    <div class="navy-card rounded-2xl p-8 text-center">
      <div class="text-slate-blue text-4xl mb-4">📰</div>
      <p class="text-gray-400 font-sans text-sm">
        News article feed — implement as Svelte component in Phase 2.
      </p>
      <p class="text-gray-600 font-sans text-xs mt-2">
        Will display latest iGaming news articles with filtering by category.
      </p>
    </div>
  </div>
</div>
