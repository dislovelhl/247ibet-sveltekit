<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  // page
</script>

<svelte:head>
  <title>How 247iBET Works: Affiliate &amp; Editorial Standards Explained</title>
  <meta
    name="description"
    content="Learn how 247iBET is funded, our affiliate partnerships, editorial independence standards, and review methodology for Canadian iGaming guides."
  />
  <link rel="canonical" href={canonicalUrl('/how-we-work')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      headline: 'How 247iBET Works',
      url: 'https://247ibet.ca/how-we-work',
      description:
        "Transparency page explaining 247iBET's affiliate partnerships and editorial standards.",
    }}
  />
</svelte:head>

<div class="min-h-dvh bg-navy-black pt-10 pb-20">
  <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">How We Work</li>
      </ol>
    </nav>

    <header class="relative mb-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-navy-card shadow-2xl">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,158,191,0.1),transparent_50%)]"></div>
      <div class="relative z-10 p-8 md:p-14">
        <div class="mb-8">
          <div class="glass-regular inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10">
            <svg class="h-3 w-3 text-prestige-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p class="text-xs font-black uppercase tracking-[0.15em] text-white">
              Transparency Report
            </p>
          </div>
        </div>

        <h1 class="page-hero-title">
          Our Editorial <br />
          <span class="text-prestige-gold">Independence</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body/90 md:text-xl">
          Integrity is the foundation of 247iBET. We are transparent about our affiliate partnerships and maintain strict editorial standards to ensure our reviews remain unbiased and player-focused.
        </p>
      </div>
    </header>

    <section class="mb-16">
      <h2 class="font-display text-3xl font-black uppercase tracking-tight text-white mb-8">Operating Standards</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Funding Transparency</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            We disclose how affiliate revenue supports the site. This transparency allows you to judge our rankings with full context.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Disclosure →</div>
        </article>

        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Editorial Independence</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Partners do not control our conclusions. Our editorial team operates independently to ensure reviews stay focused on real player value.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Standards →</div>
        </article>

        <article class="glass-thin group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Review Methodology</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            We test, verify, and update on a strict schedule. Our goal is to provide the most current information available in the Canadian market.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Process →</div>
        </article>
      </div>
    </section>

    <div class="rounded-3xl border border-white/10 bg-navy-card p-8 md:p-12">
      <h2 class="text-xl font-bold text-white mb-4">Affiliate Disclosure</h2>
      <p class="text-sm leading-relaxed text-text-tertiary">
        247iBET participates in affiliate marketing programs. When you click on links to operators and sign up, we may receive a commission at no additional cost to you. This funding allows us to maintain our high-quality editorial standards and keep the site free for all readers.
      </p>
    </div>
  </div>
</div>
