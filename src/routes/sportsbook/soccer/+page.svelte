<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'soccer',
    path: '/sportsbook/soccer',
    title: 'Soccer Betting Canada | 247iBET Canada',
    heading: 'Soccer Betting in Canada',
    breadcrumbLabel: 'Soccer Betting',
    metaDescription:
      'See how soccer betting works in Canada across the Premier League, Champions League, MLS, World Cup, live markets, and core bet types at 247iBET.',
    keywords: 'soccer betting Canada, football betting Canada, Premier League betting',
    heroSubheading:
      'Follow Premier League, Champions League, MLS, and World Cup markets with match result, total, live, and selected team or player betting options.',
    heroImage: '/images/generated/sportsbook-soccer-hero.webp',
    overviewTitle: 'Major soccer markets available to Canadians',
    overviewIntro:
      'Soccer betting spans domestic leagues, continental tournaments, and international competitions. Settlement rules can differ depending on whether the market is for 90 minutes or extra time.',
    overviewCards: [
      {
        title: 'Top leagues and tournaments',
        body: 'Premier League, Champions League, MLS, major European leagues, and global tournaments such as the World Cup usually headline the soccer board.',
      },
      {
        title: 'Core bet types',
        body: 'Match result, totals, both teams to score, double chance, and selected handicaps are among the most common soccer betting markets.',
      },
      {
        title: 'Live match markets',
        body: 'In-play boards expand around goals, cards, corners, and late pressure, especially in high-liquidity competitions and knockout matches.',
      },
    ],
    marketTitle: 'Soccer betting details worth checking',
    marketCards: [
      {
        title: '90 minutes vs extra time',
        body: 'Many soccer markets settle on regulation time only, so knockout matches need extra attention before assuming extra time or penalties are included.',
      },
      {
        title: 'League-by-league depth',
        body: 'Premier League and Champions League fixtures usually carry deeper market menus than lower-visibility domestic leagues.',
      },
      {
        title: 'Live tempo shifts',
        body: 'Red cards, early goals, and late substitutions can move live totals and match-result prices sharply, especially in knockout ties.',
      },
    ],
    infoPanelTitle: 'Soccer settlement rules deserve extra attention',
    infoPanelBody:
      'The most useful soccer betting habit is checking the market definition. Match result, qualification, and totals can settle very differently depending on the competition.',
    infoPanelPoints: [
      'Confirm whether the market is settled over 90 minutes, extra time, or qualification before placing a knockout-stage ticket.',
      'Both teams to score and totals markets can move sharply after an early goal because the match state changes immediately.',
      'Major tournaments and top leagues usually offer the best live depth, but smaller domestic matches may have lighter menus.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'What leagues can I bet on for soccer in Canada?',
        answer:
          'Canadian bettors typically see major coverage for the Premier League, Champions League, MLS, top European leagues, and major international tournaments such as the World Cup.',
      },
      {
        question: 'What is the standard soccer match result market?',
        answer:
          'The standard match result market is the 1X2 market: home win, draw, or away win, usually settled after 90 minutes plus stoppage time unless the market says otherwise.',
      },
      {
        question: 'Can I bet live on soccer matches?',
        answer:
          'Yes. Live soccer markets often cover match result, totals, next goal, cards, and corners, although menu depth varies by competition.',
      },
      {
        question: 'Do soccer bets include extra time?',
        answer:
          'Not always. Many standard soccer markets settle on regulation time only, so knockout matches require careful reading of the market description.',
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
          'See how in-play soccer markets react to goals, cards, and late match-state changes.',
        accent: 'neutral',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description:
          'Review pricing formats before comparing match result, totals, and selected handicap markets.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Compare top Canadian sportsbooks for soccer betting markets.',
        accent: 'gold',
      },
      {
        href: '/tools/odds-calculator',
        label: 'Odds Calculator',
        description: 'Convert soccer odds between decimal, fractional, and American formats.',
        accent: 'blue',
      },
    ],
    ctaContextLabel: 'Soccer · EPL · Champions League · 19+',
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

<div class="container mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
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
