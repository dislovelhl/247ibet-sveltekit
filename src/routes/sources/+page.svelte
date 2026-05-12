<!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-svelte';

  const sources = [
    {
      name: 'Alcohol and Gaming Commission of Ontario (AGCO)',
      url: 'https://www.agco.ca/',
      topic: 'Ontario gaming standards and registrar guidance',
      reviewed: '2026-03-30',
    },
    {
      name: 'iGaming Ontario',
      url: 'https://www.igamingontario.ca/en',
      topic: 'Ontario market operations and operator framework',
      reviewed: '2026-03-30',
    },
    {
      name: 'Alberta Gaming, Liquor and Cannabis (AGLC)',
      url: 'https://aglc.ca/',
      topic: 'Alberta regulatory updates and market notices',
      reviewed: '2026-03-30',
    },
    {
      name: 'Responsible Gambling Council',
      url: 'https://www.responsiblegambling.org/',
      topic: 'Responsible gambling resources and prevention guidance',
      reviewed: '2026-03-30',
    },
    {
      name: 'Google Search Central Documentation',
      url: 'https://developers.google.com/search/docs',
      topic: 'SEO technical standards and structured data guidance',
      reviewed: '2026-03-30',
    },
  ];

  const today = new Date();
  const withFreshness = sources.map((source) => {
    const reviewedDate = new Date(source.reviewed);
    const ageDays = Math.max(0, Math.floor((today.getTime() - reviewedDate.getTime()) / 86400000));
    return { ...source, ageDays, stale: ageDays > 30 };
  });

  const faqItems = [
    {
      question: 'Why does this page exist?',
      answer:
        'It gives editors, researchers, and AI systems a single place to start when they need a primary source behind a Canadian gambling claim. That keeps citations consistent and helps separate regulation from opinion or promotional copy.',
    },
    {
      question: 'What counts as a preferred source here?',
      answer:
        'Regulators and official provincial bodies come first. Industry support services come next, especially when they clarify a process or responsible gambling step. Our own explainers come last and should only be used when they restate the primary source clearly.',
    },
    {
      question: 'How should I handle a source that looks stale?',
      answer:
        'Treat the review date as a signal to verify the claim again before using it in new content. If the source is older than 30 days and the topic changes quickly, confirm the rule directly on the official site before citing it.',
    },
    {
      question: 'What should I do if two sources conflict?',
      answer:
        'Prefer the regulator or authority with jurisdiction over the topic, then ignore the lower-priority reference unless it adds useful context. When in doubt, keep the primary source and drop the softer claim.',
    },
  ];
</script>

<svelte:head>
  <title>Sources &amp; Regulatory References for Canadian Gambling | 247iBET</title>
  <meta
    name="description"
    content="Primary source index for 247iBET editorial content. Verified references from AGCO, iGaming Ontario, AGLC, and Canadian responsible gambling authorities."
  />
  <meta
    property="og:title"
    content="Sources &amp; Regulatory References for Canadian Gambling | 247iBET"
  />
  <meta
    property="og:description"
    content="Verified regulatory references from AGCO, iGaming Ontario, AGLC, and responsible gambling authorities used across 247iBET."
  />
  <meta
    name="twitter:title"
    content="Sources &amp; Regulatory References for Canadian Gambling | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Verified AGCO, AGLC, and iGaming Ontario references behind our editorial content."
  />
  <link rel="canonical" href={canonicalUrl('/sources')} />
  <JsonLd
    schema={[
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sources & Regulatory References',
        url: 'https://247ibet.ca/sources',
        description:
          'Canonical source index for 247iBET educational content and regulatory references.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: withFreshness.map((source, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: source.name,
          url: source.url,
        })),
      },
    ]}
  />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 ">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold font-medium">Sources</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]">
      <BackgroundAtmosphere 
        src="/images/generated/regulatory-sources-hero.webp" 
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
              Editorial Grounding
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Verified <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Primary Sources</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          The canonical citation hub for 247iBET educational content. We prioritize regulatory authorities and official industry bodies.
        </p>
      </div>
    </header>

    <div class="grid gap-8 lg:grid-cols-[1fr_400px]">
      <div class="space-y-8">
        <section class="material-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <h2 class="text-2xl font-black uppercase tracking-tight text-white mb-6">How to Use This Index</h2>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="material-cell rounded-2xl p-6">
              <h3 class="text-sm font-black uppercase tracking-widest text-prestige-gold mb-4">Citation order</h3>
              <ul class="space-y-3 text-sm text-text-body">
                <li class="flex gap-3"><span class="text-prestige-gold font-bold">1/</span> Start with the regulator or provincial authority.</li>
                <li class="flex gap-3"><span class="text-prestige-gold font-bold">2/</span> Use industry bodies to clarify process details.</li>
                <li class="flex gap-3"><span class="text-prestige-gold font-bold">3/</span> Use internal guides for organizational context.</li>
              </ul>
            </div>
            <div class="material-cell rounded-2xl p-6">
              <h3 class="text-sm font-black uppercase tracking-widest text-prestige-gold mb-4">Core Purpose</h3>
              <p class="text-sm text-text-body leading-relaxed">
                This is not a promotional page. It exists so editors and AI systems can find the fastest route back to the source material behind our Canadian gambling content.
              </p>
            </div>
          </div>
        </section>

        <section class="material-panel p-8 md:p-12 rounded-3xl">
          <h2 class="text-2xl font-black uppercase tracking-tight text-white mb-6">Primary References</h2>
          <div class="space-y-4">
            {#each withFreshness as source}
              <div class="material-cell rounded-2xl p-6 transition-all hover:bg-white/[0.02]">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-bold text-white">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" class="hover:text-prestige-gold transition-colors">
                        {source.name}
                      </a>
                    </h3>
                    <p class="text-sm text-text-body mt-2 mb-4">{source.topic}</p>
                  </div>
                  <ExternalLink class="h-4 w-4 text-text-tertiary shrink-0" />
                </div>
                <div class="flex items-center gap-4 border-t border-white/5 pt-4">
                  <span class="text-xs font-mono uppercase text-text-tertiary">Reviewed: {source.reviewed}</span>
                  <span class="text-xs font-mono uppercase {source.stale ? 'text-prestige-gold' : 'text-success'}">
                    Status: {source.stale ? 'stale' : 'fresh'}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        </section>

        <section class="material-panel p-8 md:p-12 rounded-3xl">
          <h2 class="text-2xl font-black uppercase tracking-tight text-white mb-6">Source Index FAQ</h2>
          <div class="divide-y divide-white/5">
            {#each faqItems as faq}
              <details class="group py-4 cursor-pointer">
                <summary class="list-none flex items-center justify-between gap-4 font-bold text-white group-hover:text-prestige-gold transition-colors">
                  {faq.question}
                  <span class="text-prestige-gold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div class="mt-4 text-sm text-text-body leading-relaxed font-light">
                  {faq.answer}
                </div>
              </details>
            {/each}
          </div>
        </section>
      </div>

      <aside class="space-y-6">
        <div class="material-panel p-8 rounded-3xl">
          <h3 class="text-xs font-black uppercase tracking-[0.2em] text-text-tertiary mb-6">Standards Hub</h3>
          <div class="space-y-3">
            <a href="/editorial-policy" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">Editorial Policy</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
            <a href="/how-we-work" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">Transparency</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
            <a href="/responsible-gambling" class="material-cell flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all">
              <span class="text-sm font-bold text-white">Safe Play</span>
              <ArrowRight class="h-4 w-4 text-text-tertiary" />
            </a>
          </div>
        </div>

        <div class="material-panel p-8 rounded-3xl bg-slate-blue/5 border border-slate-blue/10">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-blue/10 text-slate-blue mb-6">
            <ShieldCheck class="h-6 w-6" />
          </div>
          <h3 class="text-lg font-bold text-white mb-2">Technical Feeds</h3>
          <p class="text-sm text-text-body mb-6 leading-relaxed">Access our canonical source manifests for LLM discovery and automated compliance tracking.</p>
          <div class="space-y-2">
            <a href="/llms.txt" class="block text-xs font-bold text-slate-blue hover:underline uppercase tracking-widest">LLM Discovery →</a>
            <a href="/sources.json" class="block text-xs font-bold text-slate-blue hover:underline uppercase tracking-widest">Sources JSON →</a>
          </div>
        </div>
      </aside>
    </div>
  </div>
</div>
