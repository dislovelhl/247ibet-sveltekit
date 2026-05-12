<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
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

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 ">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">How We Work</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]">
      <BackgroundAtmosphere 
        src="/images/generated/transparency-report-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              Transparency Report
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Our Editorial <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Independence</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Integrity is the foundation of 247iBET. We are transparent about our affiliate partnerships and maintain strict editorial standards.
        </p>
      </div>
    </header>

    <section class="mb-16">
      <h2 class="font-display text-3xl font-black uppercase tracking-tight text-white mb-8">Operating Standards</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="glass-liquid group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Funding Transparency</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            We disclose how affiliate revenue supports the site. This transparency allows you to judge our rankings with full context.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Disclosure →</div>
        </article>

        <article class="glass-liquid group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Editorial Independence</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Partners do not control our conclusions. Our editorial team operates independently to ensure reviews stay focused on real player value.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Standards →</div>
        </article>

        <article class="glass-liquid group rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl">
          <h3 class="font-display text-xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Review Methodology</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            We test, verify, and update on a strict schedule. Our goal is to provide the most current information available in the Canadian market.
          </p>
          <div class="mt-6 text-xs font-black uppercase tracking-widest text-slate-blue">Process →</div>
        </article>
      </div>
    </section>

    <div class="material-panel p-8 md:p-12 rounded-3xl">
      <h2 class="text-xl font-bold text-white mb-4">Affiliate Disclosure</h2>
      <p class="text-sm leading-relaxed text-text-tertiary">
        247iBET participates in affiliate marketing programs. When you click on links to operators and sign up, we may receive a commission at no additional cost to you. This funding allows us to maintain our high-quality editorial standards and keep the site free for all readers.
      </p>
    </div>
  </div>
</div>
