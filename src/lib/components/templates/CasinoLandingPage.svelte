<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import type { PageData } from '$lib/content/pages';
  import { casinoFaqs } from '$lib/content/faqs';
  import { topCasinos } from '$lib/content/casinos';

  import type { Snippet } from 'svelte';

  let { page, children }: { page: PageData; children?: Snippet } = $props();

  let faqItems = $derived(page.faqsKey ? casinoFaqs[page.faqsKey] : []);
  let casinos = $derived(page.casinosKey === 'topCasinos' ? topCasinos : []);

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

  let itemListSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title.split('|')[0].trim(),
    itemListElement: casinos.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: c.url,
      description: c.description,
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
    })}
  />
  <JsonLd schema={breadcrumbSchema} />
  {#if faqItems.length > 0}
    <JsonLd schema={faqSchema} />
  {/if}
  {#if casinos.length > 0}
    <JsonLd schema={itemListSchema} />
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
    <div
      class="relative mb-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-navy-card md:h-56"
    >
      <img
        src="/images/generated/review-checklist-hero.webp"
        alt=""
        class="h-full w-full object-cover opacity-80"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
    </div>
    <div class="mb-5 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">{page.heroKicker}</span>
      <span class="status-badge status-badge--licensed">AGCO verified</span>
    </div>
    <h1 class="page-hero-title mb-4 text-[clamp(2rem,7vw,3.25rem)]">
      {page.heroTitle}
    </h1>
    <p class="page-hero-subtitle max-w-3xl text-base sm:text-lg">
      {page.heroSubtitle}
    </p>
    <p class="mt-3 text-xs text-text-tertiary">Last updated: {page.lastUpdated}</p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} ctaText="Play Now" />

  <section class="navy-card mt-16 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-2xl sm:text-3xl font-bold mb-4">What We Check to Maintain High Standards</h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400 font-sans leading-relaxed"
    >
      <div>
        <h3 class="text-white font-bold mb-2">Licensing &amp; Trust <span class="stat text-prestige-gold">(25%)</span></h3>
        <p>
          We verify provincial licences, primarily Ontario's AGCO register. If a site cannot be
          verified, we flag that directly so players can make a cleaner choice.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Payout Speed <span class="stat text-prestige-gold">(25%)</span></h3>
        <p>
          We prioritise Interac e-Transfer withdrawal times and real cashout behaviour. Fast claims
          only matter when the cashier and KYC flow actually support them.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Payment Methods <span class="stat text-prestige-gold">(20%)</span></h3>
        <p>
          Interac support is weighted heavily because it is the easiest CAD route for most Canadian
          players. We also check cards, PayPal, and e-wallet coverage.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Game Selection &amp; Fairness <span class="stat text-prestige-gold">(15%)</span></h3>
        <p>
          We check RNG certification, provider range, live dealer availability, and any
          Canadian-specific game restrictions that affect play.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Customer Support <span class="stat text-prestige-gold">(10%)</span></h3>
        <p>
          We test live chat response times, KYC help, and withdrawal support. Canadian phone support
          and bilingual options get extra credit.
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Mobile Experience <span class="stat text-prestige-gold">(5%)</span></h3>
        <p>
          We test on iOS and Android. Load speed, touch UI, and whether the app or mobile web
          experience is easier to use all matter.
        </p>
      </div>
    </div>
    <p class="mt-4 text-xs text-gray-600 font-sans">
      Scores reflect current platform checks as of {page.lastUpdated}. We may earn affiliate
      commissions —
      <a href="/about/affiliate-disclosure" class="text-slate-blue hover:underline"
        >read our disclosure</a
      >.
    </p>
    <a href="/about/how-we-test" class="view-all-link mt-4">
      How we maintain platform standards →
    </a>
  </section>

  {#if children}
    {@render children()}
  {/if}

  <section class="mt-8">
    <IBetShowcase
      variant="banner"
      ctaText="Play Now"
      contextLabel="Ontario market context · Interac payouts · 500+ casino games"
    />
  </section>

  <section class="navy-card mt-8 rounded-2xl border border-white/10 p-6 md:p-8">
    <h2 class="text-2xl sm:text-3xl font-bold mb-4">Platform Criteria at a Glance</h2>
    <div class="table-scroll-wrap -mx-6 px-6 md:mx-0 md:px-0">
      <table class="w-full min-w-[640px] text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/[0.03]">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Signal</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">What we check</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Why it matters</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5">
          <tr>
            <td class="p-4 text-white font-bold">Licensing</td>
            <td class="p-4 text-gray-300">AGCO or other recognised provincial regulation</td>
            <td class="p-4 text-gray-300">Protects players and creates a clearer complaint path.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Payout speed</td>
            <td class="p-4 text-gray-300">Interac timing — typically <span class="stat text-white">1–24h</span></td>
            <td class="p-4 text-gray-300">Fast cashout support is one of the strongest quality signals.</td>
          </tr>
          <tr>
            <td class="p-4 text-white font-bold">Banking</td>
            <td class="p-4 text-gray-300">Interac, cards, crypto, and e-wallet support</td>
            <td class="p-4 text-gray-300">Broader cashier support usually means fewer friction points for players.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  {#if faqItems.length > 0}
  <section class="mt-10 space-y-4">
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

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>

      <nav class="mt-8 flex flex-wrap gap-6" aria-label="Related pages">
        <a href="/new-online-casinos-canada" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">New Online Casinos</a>
        <a href="/casino-bonuses-canada" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Casino Bonuses</a>
        <a href="/low-wagering-casinos-canada" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Low Wagering Casinos</a>
        <a href="/fast-payouts" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Fast Payout Casinos</a>
      </nav>
    </div>
</div>
