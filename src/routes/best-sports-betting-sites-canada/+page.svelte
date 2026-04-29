<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import AuthorByline from '$lib/components/AuthorByline.svelte';

  const LAST_UPDATED = '2026-03-30';

  const sportItems = [
    {
      sport: '🏒 NHL',
      note: 'All major sportsbooks cover NHL. The difference is puck-line depth, live market speed, and player props.',
    },
    {
      sport: '🏈 CFL',
      note: 'Canadian Football League coverage is uneven. Better books keep props, futures, and live markets easy to use.',
    },
    {
      sport: '🏀 NBA',
      note: 'NBA coverage is broad. Same-game parlay quality and live pricing usually separate the stronger apps.',
    },
    {
      sport: '🏈 NFL',
      note: 'NFL is heavily covered. Look for player props, live betting, and clear odds presentation.',
    },
    {
      sport: '🥊 UFC/MMA',
      note: 'Method-of-victory and round props matter most here. Wider MMA menus are easier to bet from.',
    },
    {
      sport: '⚽ Soccer',
      note: 'Premier League and Champions League coverage is standard. Better books make live betting and price changes easier to follow.',
    },
  ];

  const faqItems = [
    {
      question: 'Is single-game sports betting legal in Canada?',
      answer:
        'Yes. Bill C-218 (Safe and Regulated Sports Betting Act) came into force in August 2021, legalizing single-event sports betting across Canada. Previously only parlay-style bets were permitted via provincial lotteries.',
    },
    {
      question: 'Which sportsbooks are available in Ontario vs other provinces?',
      answer:
        'Ontario has the most restrictive regulated market. Some operators are available only in Ontario while others operate under Kahnawake licensing and serve multiple provinces. Always verify availability for your province before registering.',
    },
    {
      question: 'Can I bet on CFL games in Canada?',
      answer:
        'Yes. CFL betting is available at major Canadian sportsbooks. Many operators offer deep CFL markets including game props, player props, and futures.',
    },
    {
      question: 'Do Canadian sportsbooks pay out winnings in CAD?',
      answer:
        'Ontario-regulated operators generally transact in Canadian dollars. Offshore or Kahnawake-serving operators also often offer CAD accounts. Always confirm account currency at registration to avoid conversion fees.',
    },
  ];
</script>

<svelte:head>
  <title
    >Best Sports Betting Sites Canada 2026: Features, Licensing &amp; User Experience | 247iBET</title
  >
  <meta
    name="description"
    content="Compare Canadian sportsbooks by NHL, CFL, NBA, and UFC market depth, Interac funding, province availability, and live-betting quality."
  />
  <meta
    property="og:title"
    content="Best Sports Betting Sites Canada 2026: Features, Licensing &amp; User Experience | 247iBET"
  />
  <meta
    property="og:description"
    content="Canadian sportsbooks for NHL, CFL, NBA, UFC, and more."
  />
  <link rel="canonical" href={canonicalUrl('/best-sports-betting-sites-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Best Sportsbooks',
          item: 'https://247ibet.ca/best-sports-betting-sites-canada',
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

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white font-medium">Best Sportsbooks</li>
      </ol>
    </nav>
    <div class="mb-5 flex flex-wrap items-center gap-2">
      <span class="page-hero-kicker">Canadian sportsbook rankings — 2026</span>
      <span class="status-badge status-badge--licensed">AGCO verified</span>
      <span class="live-tag"><span class="live-dot"></span> Live markets open</span>
    </div>
    <h1 class="page-hero-title mb-4 text-[clamp(2rem,7vw,3.25rem)]">
      Best Sports Betting Sites Canada
    </h1>
    <p class="page-hero-subtitle max-w-3xl text-base sm:text-lg">
      Canada's strongest sportsbook options — compared on market depth, Interac efficiency, and
      live-betting reliability. Pick the platform that fits how you bet.
    </p>
    <p class="mt-3 text-xs text-text-tertiary">Last updated: {LAST_UPDATED}</p>
  </header>

  <AffiliateDisclosure />

  <IBetShowcase variant="hero" showFeatures={true} showPros={true} />

  <section class="navy-card mt-16 rounded-2xl p-6 md:p-8">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6">Canadian Sports Coverage — What Matters Most</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
      {#each sportItems as { sport, note }}
        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <div class="text-base font-bold mb-1">{sport}</div>
          <p class="text-gray-400 font-sans text-xs leading-relaxed">{note}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-10 space-y-4">
    <h2 class="text-2xl sm:text-3xl font-bold">Sports Betting Canada FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4">
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

  <div class="mt-16">
    <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
      Play responsibly. 19+ only. <a
        href="/responsible-gambling"
        class="text-slate-blue hover:underline">Responsible gambling resources</a
      >.
    </div>
      <AuthorByline authorId="editorial" date={LAST_UPDATED} />

      <nav class="mt-8 flex flex-wrap gap-6" aria-label="Related pages">
        <a href="/sportsbook-bonuses-canada" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Sportsbook Bonuses</a>
        <a href="/free-bets-canada" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Free Bets Canada</a>
        <a href="/guides/sports-betting-odds-explained" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Betting Odds Explained</a>
        <a href="/tools/odds-calculator" class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider">Odds Calculator</a>
      </nav>
    </div>
</div>
