<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import { reveal } from '$lib/animations';
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
      title: '247iBET Casino Guide',
      description:
        'Canadian casino guide coverage — check current operator availability for Alberta players.',
    },
    {
      href: '/sportsbook',
      title: '247iBET Sportsbook Guide',
      description:
        'Sports-betting market education for NHL, NBA, UFC, and more. Check Alberta access status.',
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
    content="Alberta regulated iGaming launch guide with official-source tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <meta property="og:title" content="Online Casino Alberta | 247iBET" />
  <meta
    property="og:description"
    content="Alberta regulated iGaming launch guide with official-source tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <meta name="twitter:title" content="Online Casino Alberta | 247iBET" />
  <meta
    name="twitter:description"
    content="Alberta regulated iGaming launch guide with official-source tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators."
  />
  <link rel="canonical" href={canonicalUrl('/alberta')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Online Casino Alberta | 247iBET',
      description:
        'Alberta regulated iGaming launch guide with official-source tracking of AGLC licensing, legal sportsbooks, and upcoming casino operators.',
      url: canonicalUrl('/alberta'),
      datePublished: '2026-04-27',
    })}
  />
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

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol
        class="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text-tertiary"
      >
        <li><a href="/" class="hover:text-prestige-gold transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">Alberta</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-12 overflow-hidden rounded-[2.5rem] shadow-2xl">
      <img
        src="/images/generated/canada-market-hero.png"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-40"
        style="transform: translate3d({globalParallax.x * 0.4}px, {globalParallax.y *
          0.4}px, 0) scale(1.1);"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"
      ></div>

      <div
        class="material-panel relative z-10 mx-4 my-6 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-8 md:p-14"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="flex flex-wrap items-center gap-3 mb-8">
          <div class="floating-chrome inline-flex items-center gap-2 px-4 py-1.5 shadow-lg">
            <span class="live-dot" aria-hidden="true"></span>
            <p class="text-xs font-black uppercase tracking-[0.15em] text-white">Launch Watch</p>
          </div>
          <div class="floating-chrome px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              AGLC · 18+ · Pending 2026
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Alberta <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]"
            >Market Tracker</span
          >
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          Tracking the Alberta regulated iGaming launch. Verified guidance on legal age, AGLC
          licensing, and upcoming casino operators for Alberta players.
        </p>
      </div>
    </header>

    <AffiliateDisclosure />

    <section
      class="material-panel mb-16 rounded-[2rem] p-8 md:p-12 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] relative overflow-hidden"
      use:reveal
    >
      <div class="absolute inset-0 opacity-20 shimmer-effect pointer-events-none"></div>
      <div class="flex items-center gap-4 mb-8">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold border border-prestige-gold/20 shadow-lg group-hover:scale-110 transition-transform"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div>
          <h2 class="font-display text-2xl font-black uppercase text-white !tracking-tighter">
            Alberta Launch Guidance
          </h2>
          <p class="text-xs font-black uppercase tracking-widest text-prestige-gold">
            Important markers for the 2026 go-live
          </p>
        </div>
      </div>

      <p class="text-lg leading-relaxed text-text-body/90 mb-10 max-w-4xl">
        Alberta is a launch-status market ahead of the July 13, 2026 go-live marker. Availability
        wording, operator lists, and payment expectations should be checked against current official
        information.
      </p>

      <div class="material-group grid gap-2 p-2 md:grid-cols-3">
        <a
          href="/legal-online-gambling-canada"
          class="material-cell group rounded-2xl p-6 transition-all hover:bg-navy-raised hover:border-prestige-gold/30"
        >
          <h3 class="font-bold text-white group-hover:text-prestige-gold transition-colors mb-3">
            Legal Framework
          </h3>
          <p class="text-sm text-text-tertiary leading-relaxed">
            Review Canada and Alberta legal context before registration.
          </p>
        </a>
        <a
          href="/interac-casino-canada"
          class="material-cell group rounded-2xl p-6 transition-all hover:bg-navy-raised hover:border-prestige-gold/30"
        >
          <h3 class="font-bold text-white group-hover:text-prestige-gold transition-colors mb-3">
            Payment Rails
          </h3>
          <p class="text-sm text-text-tertiary leading-relaxed">
            Check Interac support, withdrawal handling, and cashier friction.
          </p>
        </a>
        <a
          href="/responsible-gambling"
          class="material-cell group rounded-2xl p-6 transition-all hover:bg-navy-raised hover:border-prestige-gold/30"
        >
          <h3 class="font-bold text-white group-hover:text-prestige-gold transition-colors mb-3">
            Safer Play
          </h3>
          <p class="text-sm text-text-tertiary leading-relaxed">
            Keep age, deposit limits, and support tools visible.
          </p>
        </a>
      </div>
    </section>

    <section class="material-panel rounded-2xl p-6 md:p-8 mb-10 reveal-fade-up" use:reveal>
      <h2 class="text-2xl font-bold mb-4">Alberta supporting guides</h2>
      <div class="material-group grid gap-2 p-2 md:grid-cols-2">
        {#each guideItems as item}
          <a
            href={item.href}
            class="material-cell rounded-2xl p-4 transition-colors hover:border-yellow-500/30"
          >
            <div class="font-bold text-white mb-2">{item.title}</div>
            <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <section class="material-panel rounded-2xl p-6 md:p-8 mb-10 reveal-fade-up" use:reveal>
      <h2 class="text-2xl font-bold mb-4">Platform performance benchmarks</h2>
      <p class="text-sm text-gray-400 leading-relaxed mb-5">
        These benchmarks highlight public-web evaluation standards across different provincial
        contexts. They are based on our commitment to secure and transparent iGaming.
      </p>
      <div class="material-group grid gap-2 p-2 md:grid-cols-2">
        {#each benchmarkReviewCards as item}
          <a
            href={item.href}
            class="material-cell rounded-2xl p-4 transition-colors hover:border-yellow-500/30"
          >
            <div class="font-bold text-white mb-2">{item.title}</div>
            <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
          </a>
        {/each}
      </div>
    </section>

    <FAQ items={faqItems.map((f) => ({ q: f.question, a: f.answer }))} title="Alberta FAQ" />

    <nav
      class="segmented-chrome mt-12 flex flex-wrap gap-x-6 gap-y-3 mb-10 rounded-2xl p-4"
      aria-label="Related pages"
    >
      <a href="/casino" class="view-all-link floating-chrome px-4 py-2">Explore casino games →</a>
      <a href="/sportsbook" class="view-all-link floating-chrome px-4 py-2">Explore sportsbook →</a>
      <a href="/interac" class="view-all-link floating-chrome px-4 py-2"
        >Interac payment methods →</a
      >
    </nav>

    <div class="material-panel mt-8 p-4 text-xs text-text-tertiary">
      Play responsibly. 18+ in Alberta. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
  </div>
</div>
