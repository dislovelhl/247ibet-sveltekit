<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { CircleCheckBig, Gauge, MapPin, ShieldCheck } from 'lucide-svelte';

  const faqItems = [
    {
      question: 'Is this readiness index an official regulator score?',
      answer:
        'No. This is an editorial readiness model that groups public launch signals, current operator footprint, and payment relevance. It is not an official Alberta regulator score.',
    },
    {
      question: 'What does a higher readiness score mean?',
      answer:
        'A higher score means the operator appears more likely to matter early in Alberta based on our current watch criteria. It does not confirm launch approval, licensing, or immediate access.',
    },
    {
      question: 'Why track readiness if the market is not fully stable yet?',
      answer:
        'Readiness tracking helps players and internal teams prioritise which operators to verify first. The final signup decision should still depend on current live-market checks.',
    },
  ];

  const relatedItems = [
    {
      href: '/guides/upcoming-alberta-sportsbooks',
      title: 'Upcoming Alberta sportsbooks',
      description: 'Use the launch watchlist to see which brands are most likely to matter first.',
    },
    {
      href: '/alberta',
      title: 'Alberta hub',
      description: 'Province-level launch context, legal age, and payment checks.',
    },
    {
      href: '/best-sports-betting-sites-canada',
      title: 'Sportsbook comparison',
      description:
        'Cross-check Alberta candidates against the broader Canadian sportsbook framework.',
    },
    {
      href: '/responsible-gambling',
      title: 'Responsible gambling',
      description: 'Keep limit-setting and support tools in view before opening any new account.',
    },
  ];
</script>

<svelte:head>
  <title>Alberta Operator Readiness Index 2026: Your Guide to Safe iGaming | 247iBET</title>
  <meta
    name="description"
    content="Audit Alberta-facing operators with an editorial readiness model based on launch signals, market fit, and payment relevance."
  />
  <meta
    property="og:title"
    content="Alberta Operator Readiness Index 2026: Your Guide to Safe iGaming | 247iBET"
  />
  <meta
    property="og:description"
    content="Editorial readiness index for operators targeting the Alberta iGaming market."
  />
  <meta
    name="twitter:title"
    content="Alberta Operator Readiness Index 2026: Your Guide to Safe iGaming | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Editorial readiness index for operators targeting the Alberta iGaming market."
  />
  <link rel="canonical" href="https://247ibet.ca/guides/alberta-operator-readiness-index" />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://247ibet.ca/guides' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Alberta Operator Readiness Index',
          item: 'https://247ibet.ca/guides/alberta-operator-readiness-index',
        },
      ],
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-6xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/guides" class="hover:text-white">Guides</a></li>
        <li>/</li>
        <li class="text-white">Alberta Operator Readiness Index</li>
      </ol>
    </nav>
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">
      Alberta Operator Readiness Index
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      This index is an editorial scoring layer to help prioritise which operators to verify first.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: 2026-04-02</p>
    <div class="flex flex-wrap gap-4 mt-4 text-xs text-text-tertiary">
      <span class="flex items-center gap-1"
        ><Gauge class="w-3 h-3" aria-hidden="true" /> Model type: Editorial readiness index</span
      >
      <span class="flex items-center gap-1"
        ><MapPin class="w-3 h-3" aria-hidden="true" /> Province: Alberta</span
      >
      <span class="flex items-center gap-1"
        ><ShieldCheck class="w-3 h-3" aria-hidden="true" /> Verification required: Before signup</span
      >
    </div>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <div class="navy-card rounded-2xl p-8 md:p-10 mb-10">
    <h2
      class="text-xs font-black text-prestige-gold mb-8 uppercase tracking-[0.2em] font-mono flex items-center gap-2"
    >
      <Gauge class="w-4 h-4" aria-hidden="true" /> Editorial Logic: How to read the Index
    </h2>
    <div class="grid gap-6 md:grid-cols-3 text-sm text-text-body">
      <div
        class="rounded-2xl border border-white/5 bg-black/40 p-6 group hover:border-prestige-gold/30 transition-colors"
      >
        <div
          class="font-sans font-black text-white mb-3 uppercase tracking-tight italic group-hover:text-prestige-gold transition-colors"
        >
          Institutional Context
        </div>
        <p class="leading-relaxed opacity-70 italic font-medium">
          This model estimates early-market relevance. It does not replace official Alberta platform
          verification.
        </p>
      </div>
      <div
        class="rounded-2xl border border-white/5 bg-black/40 p-6 group hover:border-prestige-gold/30 transition-colors"
      >
        <div
          class="font-sans font-black text-white mb-3 uppercase tracking-tight italic group-hover:text-prestige-gold transition-colors"
        >
          Priority Ranking
        </div>
        <p class="leading-relaxed opacity-70 italic font-medium">
          Use the scores to decide which brands deserve first-pass audits for payments, KYC, and
          launch logic.
        </p>
      </div>
      <div
        class="rounded-2xl border border-white/5 bg-black/40 p-6 group hover:border-prestige-gold/30 transition-colors"
      >
        <div
          class="font-sans font-black text-white mb-3 uppercase tracking-tight italic group-hover:text-prestige-gold transition-colors"
        >
          Live Verification
        </div>
        <p class="leading-relaxed opacity-70 italic font-medium">
          Even high-readiness operators must be confirmed against current registry status before
          engagement.
        </p>
      </div>
    </div>
  </div>

  <div class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Related Alberta resources</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each relatedItems as item}
        <a
          href={item.href}
          class="rounded-2xl border border-white/5 bg-black/40 p-6 transition-all hover:border-prestige-gold/40 group"
        >
          <div
            class="font-sans font-black text-white mb-2 uppercase tracking-tight italic group-hover:text-prestige-gold transition-colors"
          >
            {item.title}
          </div>
          <p class="text-sm text-text-body font-sans leading-relaxed opacity-60 font-medium italic">
            {item.description}
          </p>
        </a>
      {/each}
    </div>
  </div>

  <section class="space-y-4 mb-10">
    <h2 class="text-2xl font-bold text-white">Alberta readiness FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="font-bold text-white list-none flex items-center justify-between gap-2">
          {faq.question}
          <svg
            class="w-4 h-4 shrink-0 text-gray-500 group-open:rotate-180 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm text-gray-400 font-sans leading-relaxed">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <section class="rounded-2xl border border-white/5 bg-black/40 p-8 mb-10 relative overflow-hidden">
    <div class="flex items-start gap-4">
      <CircleCheckBig class="w-6 h-6 text-prestige-gold shrink-0" aria-hidden="true" />
      <p class="text-base text-text-body leading-relaxed font-sans italic font-medium">
        The safest workflow is still: <span class="text-white font-bold"
          >track, verify, then play</span
        >. Use this readiness index to prioritise platforms, then confirm current registry status
        and cashier support before settlement.
      </p>
    </div>
  </section>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>

  <nav aria-label="Related Alberta operator resources" class="mt-8">
    <ul class="flex flex-wrap gap-3">
      <li>
        <a
          href="/guides/upcoming-alberta-sportsbooks"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Upcoming Alberta sportsbooks</a
        >
      </li>
      <li>
        <a
          href="/alberta"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Alberta online gambling hub</a
        >
      </li>
      <li>
        <a
          href="/best-sports-betting-sites-canada"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Best sports betting sites Canada</a
        >
      </li>
      <li>
        <a
          href="/responsible-gambling"
          class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
          >Responsible gambling Canada</a
        >
      </li>
    </ul>
  </nav>
</div>
