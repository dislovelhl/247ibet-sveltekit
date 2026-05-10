<script lang="ts">
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { fade } from 'svelte/transition';

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

<div class="min-h-dvh bg-navy-black pt-10 pb-24 overflow-x-hidden" in:fade={{ duration: 400 }}>
  <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="rounded-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li aria-current="page" class="text-prestige-gold">{title}</li>
      </ol>
    </nav>

    <!-- Hero Header -->
    <header class="relative mb-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-navy-card shadow-2xl">
      <!-- Animated Background elements -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,148,58,0.1),transparent_50%)]"></div>
      <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-prestige-gold/5 blur-[100px]"></div>
      <div class="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-slate-blue/5 blur-[100px]"></div>

      <div class="relative z-10 p-8 md:p-14 lg:p-20 text-center md:text-left">
        <div class="mb-8 flex justify-center md:justify-start">
          <div class="glass-regular inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10">
            <span class="live-dot" aria-hidden="true"></span>
            <p class="text-xs font-black uppercase tracking-[0.15em] text-white">
              Official Document
            </p>
          </div>
        </div>

        <h1 class="page-hero-title lg:text-7xl">
          {title}
        </h1>

        {#if subtitle}
          <p class="mt-8 mx-auto md:mx-0 max-w-2xl text-lg leading-relaxed text-text-body/90 md:text-xl">
            {subtitle}
          </p>
        {/if}

        <div class="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
          <div class="h-4 w-px bg-white/10 hidden sm:block"></div>
          <span class="text-xs font-bold uppercase tracking-widest text-text-tertiary">
            Effective: {lastUpdated}
          </span>
        </div>
      </div>
    </header>

    <div class="grid lg:grid-cols-[1fr_300px] gap-12">
      <!-- Main Content -->
      <div class="z-10">
        <article class="glass-thin rounded-[2rem] p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden">
           <!-- Subtle shimmer background -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
          
          <div class="prose prose-invert prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-p:text-text-body prose-li:text-text-body max-w-none relative z-10">
            {@render children?.()}
          </div>

          <div class="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div class="flex flex-wrap gap-x-8 gap-y-4">
              <a href="/security" class="rounded-sm text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors focus-visible:text-prestige-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60">Security Standards</a>
              <a href="/responsible-gambling" class="rounded-sm text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors focus-visible:text-prestige-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60">Responsible Gambling</a>
              <a href="/contact" class="rounded-sm text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-prestige-gold transition-colors focus-visible:text-prestige-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60">Contact Support</a>
            </div>
            
            <button 
              type="button"
              onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              class="group flex items-center gap-2 rounded-sm text-xs font-black uppercase tracking-widest text-prestige-gold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60"
            >
              Back to Top
              <svg class="h-4 w-4 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <section class="glass-regular rounded-3xl p-8 border border-white/10">
              <h2 class="text-xs font-black uppercase tracking-widest text-white mb-6">In this document</h2>
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

          <section class="navy-card rounded-3xl p-8 border border-white/10">
            <h2 class="text-xs font-black uppercase tracking-widest text-white mb-6">Need Help?</h2>
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
  }
  :global(.prose h3) {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-prestige-gold);
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  :global(.prose p) {
    margin-bottom: 1.5rem;
    line-height: 1.625;
  }
  :global(.prose ul) {
    margin-bottom: 2rem;
    list-style: none;
    padding-left: 0;
  }
  :global(.prose li) {
    position: relative;
    padding-left: 1.5rem;
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
    color: var(--color-slate-blue);
    text-decoration-line: none;
    text-decoration-color: color-mix(in srgb, var(--color-prestige-gold) 50%, transparent);
  }
  :global(.prose a:hover) {
    text-decoration-line: underline;
  }
</style>
