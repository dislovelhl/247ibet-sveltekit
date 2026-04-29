<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  const faqItems = [
    {
      question: 'Does this page confirm official Alberta approval?',
      answer:
        'No. This page is an editorial launch watchlist. Official operator status should always be verified against current Alberta regulator and market information before registration.',
    },
    {
      question: 'Why are Ontario operators included here?',
      answer:
        'Ontario is the clearest comparable private-market benchmark in Canada, so Ontario operator presence can be a useful signal when estimating Alberta launch priority. It is not a licence confirmation for Alberta.',
    },
    {
      question: 'What should Alberta players check before signing up?',
      answer:
        'Check current operator access, Interac support, withdrawal handling, KYC requirements, and responsible gambling tools before funding any account.',
    },
  ];

  const watchlistOperators = [
    {
      name: '247iBET',
      focus: 'Sportsbook / Casino',
      registrationStatus: 'Active',
      statusColor: 'border-green-500/30 text-green-400',
      date: 'Available now — check current Alberta access',
      highlight:
        'Canadian casino and sportsbook with fast payouts, NHL/NBA/UFC markets, and 24/7 support.',
      provinces: ['Ontario', 'Alberta'],
    },
    {
      name: 'Other',
      focus: 'Sportsbook / Casino',
      registrationStatus: 'Ontario Active',
      statusColor: 'border-yellow-500/30 text-yellow-400',
      date: 'Alberta launch TBC — monitoring AIGC licensing',
      highlight:
        'Multiple Ontario-licensed operators are monitoring the Alberta market. Check back for updates.',
      provinces: ['Ontario'],
    },
  ];

  const relatedChecks = [
    {
      href: '/alberta',
      title: 'Alberta hub',
      description: 'Start with launch status, legal age, and province-level payment guidance.',
    },
    {
      href: '/guides/alberta-operator-readiness-index',
      title: 'Operator readiness index',
      description: 'Use our editorial readiness model to audit likely near-term launch candidates.',
    },
    {
      href: '/interac-casino-canada',
      title: 'Interac payout checks',
      description: 'Review cashier support, KYC friction, and withdrawal handling before signup.',
    },
    {
      href: '/legal-online-gambling-canada',
      title: 'Canadian legal framework',
      description: 'Analyze Alberta launch context against Ontario and other provinces.',
    },
  ];
</script>

<svelte:head>
  <title>Upcoming Alberta Sportsbooks 2026 | Launch Watchlist | 247iBET</title>
  <meta
    name="description"
    content="Track upcoming Alberta sportsbooks with launch-watch context, payment checks, and links to current market verification resources."
  />
  <meta
    property="og:title"
    content="Upcoming Alberta Sportsbooks 2026 | Launch Watchlist | 247iBET"
  />
  <meta
    property="og:description"
    content="Editorial launch watchlist for sportsbooks targeting Alberta, with payment and verification context."
  />
  <meta name="twitter:title" content="Upcoming Alberta Sportsbooks 2026 | 247iBET" />
  <meta
    name="twitter:description"
    content="Editorial launch watchlist for sportsbooks targeting Alberta, with payment and verification context."
  />
  <link rel="canonical" href="https://247ibet.ca/guides/upcoming-alberta-sportsbooks" />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Upcoming Alberta Sportsbooks 2026',
      description:
        'Editorial launch watchlist for sportsbooks targeting Alberta, with payment and verification context.',
      url: 'https://247ibet.ca/guides/upcoming-alberta-sportsbooks',
      datePublished: '2026-04-02',
      dateModified: '2026-04-02',
    }}
  />
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
          name: 'Upcoming Alberta Sportsbooks',
          item: 'https://247ibet.ca/guides/upcoming-alberta-sportsbooks',
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
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Upcoming Alberta Sportsbooks</li>
    </ol>
  </nav>

  <header class="mb-10">
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">
      Upcoming Alberta Sportsbooks
    </h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Alberta's regulated private-operator iGaming market is expected to launch under the Alberta
      iGaming Corporation (AiGC). This page is a launch watchlist, not an official approval
      registry.
    </p>
    <div class="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#94A3B8]">
      <span class="bg-navy-raised px-3 py-1.5 rounded">Province: Alberta</span>
      <span class="bg-navy-raised px-3 py-1.5 rounded">Go-live: TBC 2026</span>
      <span class="bg-navy-raised px-3 py-1.5 rounded">Use case: Editorial launch watchlist</span>
    </div>
    <p class="mt-3 text-xs text-text-tertiary">Last updated: April 2, 2026</p>
  </header>

  <div
    class="my-4 rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary"
  >
    Affiliate disclosure: This page may contain affiliate links.
  </div>

  <section class="navy-card rounded-2xl border border-yellow-500/20 p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold text-white mb-4">How to use this watchlist</h2>
    <div class="grid gap-4 md:grid-cols-3 text-sm text-gray-300">
      <div class="rounded-xl border border-white/10 bg-black/20 p-4">
        <div class="font-bold text-white mb-2">Treat status as editorial</div>
        <p class="leading-relaxed">
          These entries reflect our public-market watchlist and operator positioning, not an
          official Alberta approval notice.
        </p>
      </div>
      <div class="rounded-xl border border-white/10 bg-black/20 p-4">
        <div class="font-bold text-white mb-2">Check payments early</div>
        <p class="leading-relaxed">
          Launch timing matters less if the cashier still adds friction. Review Interac, KYC, and
          payout handling before signup.
        </p>
      </div>
      <div class="rounded-xl border border-white/10 bg-black/20 p-4">
        <div class="font-bold text-white mb-2">Verify market status live</div>
        <p class="leading-relaxed">
          Use this guide to narrow the field, then confirm current Alberta access against live
          operator and regulator information.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold text-white mb-5">Alberta sportsbook launch watchlist</h2>
    <div class="grid gap-4 lg:grid-cols-2">
      {#each watchlistOperators as entry}
        <article class="navy-card rounded-2xl border border-white/10 bg-black/20 p-5">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 class="text-lg font-bold text-white">{entry.name}</h3>
              <p class="text-xs font-mono uppercase tracking-wider text-gray-500">
                Focus: {entry.focus}
              </p>
            </div>
            <span
              class="rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-wider {entry.statusColor}"
              >{entry.registrationStatus}</span
            >
          </div>
          <div class="space-y-2 text-sm text-gray-300">
            <p><span class="font-semibold text-white">Current launch marker:</span> {entry.date}</p>
            <p><span class="font-semibold text-white">Why it matters:</span> {entry.highlight}</p>
            <p>
              <span class="font-semibold text-white">Province watch:</span>
              {entry.provinces.join(', ')}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="navy-card rounded-2xl border border-white/10 p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold text-white mb-4">Related Alberta checks</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each relatedChecks as item}
        <a
          href={item.href}
          class="navy-card rounded-xl border border-white/10 bg-black/20 p-4 transition-colors hover:border-slate-blue/30 block"
        >
          <div class="font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="space-y-4 mb-10">
    <h2 class="text-2xl font-bold text-white mb-5">Upcoming Alberta sportsbooks FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl border border-white/10 p-4">
        <summary
          class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9] cursor-pointer"
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
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <div
    class="navy-card rounded-2xl border border-white/10 bg-black/20 p-5 mb-8 flex items-start gap-3"
  >
    <span class="text-yellow-400 shrink-0 mt-0.5">⏱</span>
    <p class="text-sm text-gray-300 leading-relaxed">
      Launch timing, cashier support, and operator access can move independently. Re-check current
      status before you treat any launch-watch entry as live market access.
    </p>
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>

  <nav aria-label="Related Alberta sportsbook resources" class="mt-8 border-t border-white/10 pt-6">
    <p class="text-xs text-text-tertiary mb-3 uppercase tracking-widest font-medium">
      Related guides
    </p>
    <div class="flex flex-wrap gap-3">
      <a
        href="/alberta"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Alberta online gambling hub</a
      >
      <a
        href="/guides/alberta-operator-readiness-index"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Alberta operator readiness index</a
      >
      <a
        href="/interac-casino-canada"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Interac casino Canada guide</a
      >
      <a
        href="/legal-online-gambling-canada"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Legal online gambling Canada</a
      >
    </div>
  </nav>
</div>
