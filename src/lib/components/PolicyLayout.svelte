<script lang="ts">
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { fade } from 'svelte/transition';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  interface Props {
    title: string;
    subtitle?: string;
    lastUpdated: string;
    path: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    children?: import('svelte').Snippet;
    sections?: { id: string; title: string }[];
  }

  let {
    title,
    subtitle,
    lastUpdated,
    path,
    description,
    ogTitle,
    ogDescription,
    children,
    sections = [],
  }: Props = $props();

  const fullOgTitle = $derived(ogTitle || `${title} | ${SITE.name}`);
  const fullOgDescription = $derived(ogDescription || description);
</script>

<svelte:head>
  <title>{title} | {SITE.name}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={fullOgTitle} />
  <meta property="og:description" content={fullOgDescription} />
  <meta name="twitter:title" content={fullOgTitle} />
  <meta name="twitter:description" content={fullOgDescription} />
  <link rel="canonical" href={canonicalUrl(path)} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: canonicalUrl(path),
    }}
  />
</svelte:head>

<div class="min-h-screen min-h-dvh bg-navy-black pb-24 overflow-x-hidden">
  <div class="mx-auto">
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="flex min-h-[44px] items-center hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">{title}</li>
      </ol>
    </nav>

    <!-- Hero Header -->
    <header class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]">
      <BackgroundAtmosphere 
        src="/images/generated/policy-document-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>

      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 lg:p-20 md:max-w-3xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-8 flex justify-center md:justify-start">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              Official Document
            </p>
          </div>
        </div>

        <h1 class="page-hero-title lg:text-7xl !tracking-tighter">
          {title}
        </h1>

        {#if subtitle}
          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
            {subtitle}
          </p>
        {/if}

        <div class="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
          <span class="text-xs font-bold uppercase tracking-widest text-text-tertiary">
            Effective: {lastUpdated}
          </span>
        </div>
      </div>
    </header>

    <div class="grid lg:grid-cols-[1fr_360px] gap-12">
      <!-- Main Content -->
      <div class="z-10">
        <article class="material-panel rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div class="prose prose-invert prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-p:text-text-body prose-li:text-text-body max-w-none relative z-10">
            {@render children?.()}
          </div>

          <div class="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div class="flex flex-wrap gap-x-8 gap-y-4">
              <a href="/security" class="flex min-h-[44px] items-center text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Security Standards</a>
              <a href="/responsible-gambling" class="flex min-h-[44px] items-center text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Responsible Gambling</a>
              <a href="/contact" class="flex min-h-[44px] items-center text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors">Contact Support</a>
            </div>
            
            <button 
              onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              class="group flex min-h-[44px] items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold hover:text-white transition-colors"
            >
              Back to Top
              <svg class="h-4 w-4 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Sidebar / TOC -->
      <aside class="hidden lg:block">
        <div class="sticky top-24 space-y-8">
          {#if sections.length > 0}
            <section class="material-panel rounded-3xl p-8">
              <h2 class="text-sm font-black uppercase tracking-widest text-white mb-6">In this document</h2>
              <nav>
                <ul class="space-y-4">
                  {#each sections as section}
                    <li>
                      <a 
                        href="#{section.id}" 
                        class="text-xs font-bold text-text-tertiary hover:text-prestige-gold transition-colors flex items-start gap-2 group"
                      >
                        <span class="text-prestige-gold/40 group-hover:text-prestige-gold transition-colors">/</span>
                        {section.title}
                      </a>
                    </li>
                  {/each}
                </ul>
              </nav>
            </section>
          {/if}

          <section class="material-panel rounded-3xl p-8 bg-prestige-gold/5 border-prestige-gold/10">
            <h2 class="text-sm font-black uppercase tracking-widest text-white mb-6">Need Help?</h2>
            <p class="text-sm text-text-body mb-6 leading-relaxed">
              If you have questions regarding our legal documents, please contact our compliance team.
            </p>
            <a 
              href="/contact" 
              class="flex items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              Contact Us
            </a>
          </section>
        </div>
      </aside>
    </div>
  </div>
</div>

<style>
  /* Custom prose styling to match Prestige system */
  :global(.prose h2) {
    margin-top: 4rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(255 255 255 / 0.1);
    padding-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 900;
  }
  :global(.prose h3) {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-prestige-gold);
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 800;
  }
  :global(.prose p) {
    margin-bottom: 1.5rem;
    line-height: 1.625;
    font-weight: 300;
  }
  :global(.prose ul) {
    margin-bottom: 2rem;
    list-style: none;
    padding-left: 0;
  }
  :global(.prose li) {
    position: relative;
    padding-left: 1.5rem;
    font-weight: 300;
  }
  :global(.prose li + li) {
    margin-top: 0.75rem;
  }
  :global(.prose li::before) {
    content: "/";
    position: absolute;
    left: 0;
    color: var(--color-prestige-gold);
    font-weight: 700;
  }
  :global(.prose a) {
    color: var(--color-prestige-gold);
    text-decoration-line: none;
    font-weight: 600;
  }
  :global(.prose a:hover) {
    text-decoration-line: underline;
  }
</style>
