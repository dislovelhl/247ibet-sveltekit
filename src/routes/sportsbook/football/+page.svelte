<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'football',
    path: '/sportsbook/football',
    title: 'Football Betting Canada | 247iBET Canada',
    heading: 'Football Betting in Canada',
    breadcrumbLabel: 'Football Betting',
    metaDescription:
      'Understand football betting in Canada with NFL coverage, spreads, totals, props, futures, and Super Bowl markets at 247iBET.',
    keywords: 'football betting Canada, NFL betting Canada, Super Bowl betting',
    heroSubheading:
      'Compare NFL spreads, totals, props, and futures, with live markets and Super Bowl betting tracked through the full football season in Canada.',
    heroImage: '/images/generated/sportsbook-football-hero.webp',
    overviewTitle: 'Football betting coverage in Canada',
    overviewIntro:
      'For many Canadian bettors, football betting means the NFL first. Weekly menu depth, injury reporting, and futures markets all shape how the board behaves from September through the Super Bowl.',
    overviewCards: [
      {
        title: 'NFL weekly board',
        body: 'Regular-season Sundays, primetime games, and playoff weekends usually carry the deepest football menu, including sides, totals, and alternate lines.',
      },
      {
        title: 'Common bet types',
        body: 'Spread, moneyline, totals, player props, and futures are the main football markets bettors compare throughout the season.',
      },
      {
        title: 'Super Bowl futures and props',
        body: 'Conference winners, playoff brackets, and Super Bowl markets become more central as the season progresses and the postseason field takes shape.',
      },
    ],
    marketTitle: 'What moves football odds',
    marketCards: [
      {
        title: 'Quarterback availability',
        body: 'Injury reports and backup quarterback news can move both side and total prices quickly because football scoring is so position-sensitive.',
      },
      {
        title: 'Weather and totals',
        body: 'Wind, rain, and cold-weather spots can materially influence totals and selected prop prices, especially later in the season.',
      },
      {
        title: 'Live betting pace',
        body: 'Possession changes, red-zone efficiency, and clock management make live football betting more segmented than sports with continuous flow.',
      },
    ],
    infoPanelTitle: 'Football betting is information-driven',
    infoPanelBody:
      'Football pricing is heavily shaped by official status reports, weather, and matchup data. This page stays focused on those market drivers rather than promotional framing.',
    infoPanelPoints: [
      'Monitor final injury reports and inactive lists before comparing pre-game lines or props.',
      'Weather can affect totals more than headlines suggest, especially in outdoor late-season games.',
      'Super Bowl props may look simple, but they are still high-volume markets that require the same discipline as regular-season bets.',
    ],
    infoPanelAccent: 'gold',
    faqItems: [
      {
        question: 'What are the main football bets at 247iBET?',
        answer:
          'Spread, moneyline, totals, player props, and futures are the main football betting markets. Super Bowl and conference futures grow in importance later in the year.',
      },
      {
        question: 'Can I bet on the NFL in Canada?',
        answer:
          'Yes. NFL games are part of the standard football board for Canadian bettors, including regular season, playoffs, and the Super Bowl.',
      },
      {
        question: 'Why do football totals move around weather?',
        answer:
          'Wind, rain, and cold can change passing efficiency, kick distance, and overall scoring environment, which is why totals often adjust when weather forecasts firm up.',
      },
      {
        question: 'Are live football markets available?',
        answer:
          'Yes. Live football markets are usually available around each drive and major scoring event, with side and total prices updating as game state changes.',
      },
    ],
    relatedLinks: [
      {
        href: '/sportsbook',
        label: 'Return to Sportsbook',
        description: 'Go back to the main sportsbook pillar for the full Canada-wide overview.',
        accent: 'gold',
      },
      {
        href: '/interac',
        label: 'Interac Funding Guide',
        description:
          'Review CAD deposit and withdrawal flow details for Canadian betting accounts.',
        accent: 'blue',
      },
      {
        href: '/sportsbook/live-betting',
        label: 'Live Betting Guide',
        description:
          'See how in-play football markets reopen around drives, red-zone trips, and late-game clock management.',
        accent: 'neutral',
      },
      {
        href: '/sportsbook/parlays',
        label: 'Parlay Betting Guide',
        description:
          'Review how same-game and multi-game parlays fit into football bet-slip building.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Compare top-rated Canadian sports betting sites side by side.',
        accent: 'gold',
      },
      {
        href: '/tools/odds-calculator',
        label: 'Odds Calculator',
        description: 'Convert odds and calculate payouts for football markets.',
        accent: 'blue',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description: 'Learn decimal, American, and fractional odds formats.',
        accent: 'neutral',
      },
    ],
    ctaContextLabel: 'Football · NFL · Super Bowl futures · 19+',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sportsbook',
        item: 'https://247ibet.ca/sportsbook',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.breadcrumbLabel,
        item: 'https://247ibet.ca' + page.path,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
</script>

<svelte:head>
  <title>{page.title}</title>
  <meta name="description" content={page.metaDescription} />
  <meta property="og:title" content={page.title} />
  <meta property="og:description" content={page.metaDescription} />
  <link rel="canonical" href={canonicalUrl(page.path)} />
  <JsonLd
    schema={articleSchema({
      headline: page.title,
      description: page.metaDescription,
      url: canonicalUrl(page.path),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={breadcrumbSchema} />
  <JsonLd schema={faqSchema} />
</svelte:head>

<div class="container mx-auto max-w-5xl px-4  pb-20 sm:px-6 lg:px-8">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/sportsbook" class="hover:text-white">Sportsbook</a></li>
        <li>/</li>
        <li class="text-white font-medium">{page.breadcrumbLabel}</li>
      </ol>
    </nav>
    <div
      class="relative mb-6 h-48 overflow-hidden rounded-2xl border border-white/10 bg-navy-card md:h-60"
    >
      <img src={page.heroImage} alt={page.title + " — online betting in Canada"} class="h-full w-full object-cover opacity-80" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
      <div
        class="absolute bottom-5 left-6 text-[9px] font-mono font-bold uppercase tracking-[0.22em] text-prestige-gold md:left-8"
      >
        {page.breadcrumbLabel}
      </div>
    </div>
    <h1 class="page-hero-title mb-4">{page.heading}</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">{page.heroSubheading}</p>
  </header>

  <section class="mt-10">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">{page.overviewTitle}</h2>
    <p class="mt-3 max-w-3xl text-base leading-relaxed text-[#94A3B8]">{page.overviewIntro}</p>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each page.overviewCards as card}
        <div class="navy-card rounded-2xl p-5">
          <p class="font-bold text-white text-sm">{card.title}</p>
          <p class="mt-2 text-sm text-text-tertiary leading-relaxed">{card.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mt-14">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">{page.marketTitle}</h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each page.marketCards as card}
        <div class="navy-card rounded-2xl p-5">
          <p class="font-bold text-white text-sm">{card.title}</p>
          <p class="mt-2 text-sm text-text-tertiary leading-relaxed">{card.body}</p>
        </div>
      {/each}
    </div>
  </section>

  <div
    class="mt-12 rounded-xl border {page.infoPanelAccent === 'gold'
      ? 'border-prestige-gold/20 bg-prestige-gold/5'
      : 'border-slate-blue/20 bg-slate-blue/5'} p-6"
  >
    <h2 class="text-lg font-bold text-white mb-3">{page.infoPanelTitle}</h2>
    <p class="text-sm text-text-tertiary leading-relaxed mb-4">{page.infoPanelBody}</p>
    <ul class="space-y-2">
      {#each page.infoPanelPoints as point}
        <li class="flex items-start gap-2 text-sm text-text-tertiary">
          <span class="text-prestige-gold mt-0.5">•</span>
          <span>{point}</span>
        </li>
      {/each}
    </ul>
  </div>

  <section class="mt-12">
    <div class="flex flex-wrap gap-4">
      {#each page.relatedLinks as link}
        <a
          href={link.href}
          class="{link.accent === 'gold'
            ? 'text-prestige-gold'
            : link.accent === 'blue'
              ? 'text-slate-blue'
              : 'text-text-tertiary'} font-bold text-sm hover:underline uppercase tracking-wider"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </section>

  <section class="mt-14 space-y-4">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">FAQ</h2>
    {#each page.faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary transition-transform group-open:rotate-180"
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

  <div class="mt-14">
    <IBetShowcase variant="banner" ctaText="Bet Now" contextLabel={page.ctaContextLabel} />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
