<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
</script>

<svelte:head>
  <title>iGaming Optimization & Performance Guide for Canada | 247iBET</title>
  <meta
    name="description"
    content="Master Next.js 15 performance, AI integration, and technical SEO for the Canadian iGaming market. Advanced optimization patterns for 247iBET."
  />
  <link rel="canonical" href={canonicalUrl('/guides/optimization')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'iGaming Optimization & Performance Guide for Canada',
      description:
        'Master performance, AI integration, and technical SEO for the Canadian iGaming market.',
      url: 'https://247ibet.ca/guides/optimization',
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Optimization</li>
    </ol>
  </nav>

  <h1 class="page-hero-title mb-4">
    iGaming Optimization & Performance Guide
  </h1>
  <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8] mb-8">
    Master performance optimization, AI integration, and technical SEO for the Canadian iGaming
    market. Advanced patterns for building fast, compliant iGaming platforms.
  </p>

  <div class="space-y-6">
    <div class="navy-card rounded-2xl p-6">
      <h2 class="text-xl font-bold text-white mb-3">Core Web Vitals for iGaming</h2>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        Optimize LCP, CLS, and FID for fast-loading casino and sportsbook pages. Target sub-2.5s LCP
        on all pillar pages, minimal layout shift on dynamic content areas, and responsive
        interaction on odds widgets.
      </p>
    </div>

    <div class="navy-card rounded-2xl p-6">
      <h2 class="text-xl font-bold text-white mb-3">Technical SEO Architecture</h2>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        Structured data (JSON-LD) for FAQPage, BreadcrumbList, and Article types. Canonical URL
        management across provincial and content variants. Sitemap automation for 126+ routes.
      </p>
    </div>

    <div class="navy-card rounded-2xl p-6">
      <h2 class="text-xl font-bold text-white mb-3">AI Search Optimization (AEO/GEO)</h2>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        Optimize for citation in ChatGPT, Claude, Gemini, and Perplexity. BLUF answer blocks,
        structured content hierarchy, and authoritative sourcing are key signals for AI
        recommendation engines.
      </p>
    </div>

    <div class="navy-card rounded-2xl p-6">
      <h2 class="text-xl font-bold text-white mb-3">Canadian Market Compliance</h2>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        AGCO and iGaming Ontario compliance for digital marketing content. Responsible gambling
        disclosures, 19+ gating, and provincial content restrictions on all regulated pages.
      </p>
    </div>
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
