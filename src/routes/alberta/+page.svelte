<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  const faqItems = [
    {
      question: 'Is Alberta already fully live for private iGaming operators?',
      answer:
        'Treat Alberta as a launch-status market and verify current official operator availability before registering. The framework may be active while individual operator access still changes.',
    },
    {
      question: 'What is the legal gambling age in Alberta?',
      answer:
        'The legal age for online gambling in Alberta is 18+, the same as Manitoba and Quebec. Most other provinces, including Ontario, require players to be 19+.',
    },
    {
      question: 'Should Alberta players still check payment and payout support before signup?',
      answer:
        'Yes. Payment rails, Interac support, withdrawal handling, and KYC timing can differ by operator and launch phase.',
    },
  ];

  const benchmarkReviewCards = [
    {
      href: '/casino',
      title: '247iBET Casino',
      description:
        'Canadian casino and sportsbook — check current availability for Alberta players.',
    },
    {
      href: '/sportsbook',
      title: '247iBET Sportsbook',
      description:
        'Sports betting markets for NHL, NBA, UFC, and more. Check Alberta access status.',
    },
  ];

  const guideItems = [
    {
      href: '/guides/upcoming-alberta-sportsbooks',
      title: 'Upcoming Alberta sportsbooks',
      description:
        'Editorial launch watchlist for likely Alberta sportsbook entrants and their current market signals.',
    },
    {
      href: '/guides/alberta-operator-readiness-index',
      title: 'Operator readiness index',
      description:
        'Compare likely early operators using our editorial readiness model before you verify live access.',
    },
    {
      href: '/best-sports-betting-sites-canada',
      title: 'Canada sportsbook comparisons',
      description:
        'Use broader sportsbook comparisons for product fit, then narrow back to Alberta availability.',
    },
    {
      href: '/gambling-age-canada',
      title: 'Province age rules',
      description:
        'Use the age grid when you need Alberta-specific guidance alongside Ontario and Quebec.',
    },
  ];
</script>

<svelte:head>
  <title>Online Casino Alberta | 247iBET</title>
  <meta
    name="description"
    content="Your authority on the Alberta regulated iGaming launch. 247iBET verified tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <meta property="og:title" content="Online Casino Alberta | 247iBET" />
  <meta
    property="og:description"
    content="Your authority on the Alberta regulated iGaming launch. 247iBET verified tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <meta name="twitter:title" content="Online Casino Alberta | 247iBET" />
  <meta
    name="twitter:description"
    content="Your authority on the Alberta regulated iGaming launch. 247iBET verified tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <link rel="canonical" href={canonicalUrl('/alberta')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Alberta', item: 'https://247ibet.ca/alberta' },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li class="text-white font-medium">Alberta</li>
    </ol>
  </nav>

  <div class="mb-5 flex flex-wrap items-center gap-2">
    <span class="page-hero-kicker">Alberta launch watch</span>
    <span class="status-badge status-badge--soon">Pending 2026</span>
    <span class="status-badge status-badge--licensed">AGLC · 18+</span>
  </div>

  <div class="relative h-44 md:h-56 rounded-2xl overflow-hidden my-6">
    <img src="/images/generated/canada-market-hero.png" alt="Alberta online gambling market overview" class="h-full w-full object-cover" />
    <div
      class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/55 to-transparent"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-t from-navy-black/70 to-transparent"></div>
    <div class="absolute bottom-5 left-6 md:left-8">
      <div
        class="text-[9px] font-mono font-bold text-prestige-gold tracking-[0.22em] uppercase mb-1.5"
      >
        AGLC · 18+ · Launch Watch
      </div>
      <p class="text-lg md:text-xl font-bold text-white">Alberta Online Gambling</p>
    </div>
  </div>

  <header class="mt-4 mb-10">
    <h1 class="page-hero-title text-4xl md:text-5xl mb-4">Alberta Online Gambling</h1>
    <p class="page-hero-subtitle mt-4 max-w-3xl text-base sm:text-lg">
      Alberta launch-status hub covering legal age, payment checks, and safer signup guidance.
      Verify current official operator availability before registering.
    </p>
  </header>

  <AffiliateDisclosure />

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
      <svg
        class="w-5 h-5 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        /></svg
      >
      Alberta launch-aware guidance
    </h2>
    <p class="text-sm leading-relaxed text-gray-300 mb-4">
      Alberta is treated here as a launch-status market ahead of the July 13, 2026 go-live marker.
      Availability wording, operator lists, and payment expectations should be checked against
      current official information before any signup decision.
    </p>
    <div class="grid gap-4 md:grid-cols-3">
      <a
        href="/legal-online-gambling-canada"
        class="navy-card rounded-xl p-4 transition-colors hover:border-yellow-500/30"
      >
        <div class="font-bold text-white mb-2">Legal framework</div>
        <p class="text-sm text-gray-400 leading-relaxed">
          Review Canada and Alberta legal context before registration.
        </p>
      </a>
      <a
        href="/interac-casino-canada"
        class="navy-card rounded-xl p-4 transition-colors hover:border-yellow-500/30"
      >
        <div class="font-bold text-white mb-2">Payment rails</div>
        <p class="text-sm text-gray-400 leading-relaxed">
          Check Interac support, withdrawal handling, and cashier friction before funding.
        </p>
      </a>
      <a
        href="/responsible-gambling"
        class="navy-card rounded-xl p-4 transition-colors hover:border-yellow-500/30"
      >
        <div class="font-bold text-white mb-2">Safer play tools</div>
        <p class="text-sm text-gray-400 leading-relaxed">
          Keep age, deposit limits, and support tools visible before you play.
        </p>
      </a>
    </div>
  </section>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Alberta supporting guides</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each guideItems as item}
        <a
          href={item.href}
          class="navy-card rounded-xl p-4 transition-colors hover:border-yellow-500/30"
        >
          <div class="font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Operator review benchmarks</h2>
    <p class="text-sm text-gray-400 leading-relaxed mb-5">
      These review pages help compare likely Alberta-relevant brands or current multi-province
      options. They are not Alberta approval notices.
    </p>
    <div class="grid gap-4 md:grid-cols-2">
      {#each benchmarkReviewCards as item}
        <a
          href={item.href}
          class="navy-card rounded-xl p-4 transition-colors hover:border-yellow-500/30"
        >
          <div class="font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="space-y-4 mb-10">
    <h2 class="text-2xl font-bold">Alberta FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <nav class="mt-12 flex flex-wrap gap-x-6 gap-y-3 mb-10" aria-label="Related pages">
    <a href="/casino" class="view-all-link">Explore casino games →</a>
    <a href="/sportsbook" class="view-all-link">Explore sportsbook →</a>
    <a href="/interac" class="view-all-link">Interac payment methods →</a>
  </nav>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 18+ in Alberta. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
