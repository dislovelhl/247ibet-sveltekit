<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import type { PageData } from '$lib/content/pages';
  import { casinoFaqs } from '$lib/content/faqs'; // Can be reused or make a sportsbookFaqs
  import type { Snippet } from 'svelte';

  let { page, children }: { page: PageData; children?: Snippet } = $props();

  let faqItems = $derived(page.faqsKey ? casinoFaqs[page.faqsKey] : []);

  let breadcrumbSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.title.split('|')[0].trim(),
        item: `https://247ibet.ca/${page.slug}`,
      },
    ],
  });

  let faqSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  });
</script>

<svelte:head>
  <title>{page.title}</title>
  <meta name="description" content={page.description} />
  <meta property="og:title" content={page.title} />
  <meta property="og:description" content={page.description} />
  <link rel="canonical" href={canonicalUrl(`/${page.slug}`)} />
  <JsonLd
    schema={articleSchema({
      headline: page.title,
      description: page.description,
      url: canonicalUrl(`/${page.slug}`),
      datePublished: page.lastUpdated,
      dateModified: page.lastUpdated,
    })}
  />
  <JsonLd schema={breadcrumbSchema} />
  {#if faqItems.length > 0}
    <JsonLd schema={faqSchema} />
  {/if}
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">{page.title.split('Canada')[0].trim()}</li>
      </ol>
    </nav>
    <div class="mb-5 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">{page.heroKicker}</span>
      <span class="live-tag"><span class="live-dot"></span> Live odds tested</span>
      <span class="status-badge status-badge--licensed">AGCO licensed picks</span>
    </div>
    <h1 class="page-hero-title mb-4 text-[clamp(2rem,8vw,3.75rem)]">
      {page.heroTitle}
    </h1>
    <p class="page-hero-subtitle max-w-3xl text-base sm:text-lg">
      {page.heroSubtitle}
    </p>
    <p class="mt-3 text-xs text-text-tertiary">
      Last updated: <time datetime={page.lastUpdated} class="stat">{page.lastUpdated}</time>
    </p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <div class="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
    {#if children}
      {@render children()}
    {/if}

    {#if faqItems.length > 0}
    <section class="space-y-4">
      <h2 class="text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
      {#each faqItems as faq}
        <details class="navy-card rounded-xl p-4">
          <summary
            class="flex list-none items-center justify-between gap-2 font-bold text-text-primary cursor-pointer"
          >
            {faq.question}
            <svg
              class="h-4 w-4 shrink-0 text-text-tertiary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
              ><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" /></svg
            >
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-text-body">{faq.answer}</p>
        </details>
      {/each}
    </section>
    {/if}

    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
