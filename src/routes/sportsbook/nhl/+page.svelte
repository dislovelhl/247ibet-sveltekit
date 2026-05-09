<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'nhl',
    path: '/sportsbook/nhl',
    title: 'NHL Betting Canada | 247iBET Canada',
    heading: 'NHL Betting in Canada',
    breadcrumbLabel: 'NHL Betting',
    metaDescription:
      'Understand NHL betting in Canada with Canadian team coverage, puck lines, totals, live in-play markets, and Stanley Cup futures at 247iBET.',
    keywords: 'NHL betting Canada, hockey betting Canada, NHL odds Canada',
    heroSubheading:
      'Track Canadian teams, compare puck line and total markets, and follow live NHL odds throughout the regular season, playoffs, and Stanley Cup futures board.',
    heroImage: '/images/generated/sportsbook-nhl-hero.png',
    overviewTitle: 'Canadian NHL betting coverage',
    overviewIntro:
      'NHL betting pages need to match how Canadian fans actually follow hockey: national broadcasts, rivalry games, playoff races, and futures that stay open for months.',
    overviewCards: [
      {
        title: 'Canadian teams in focus',
        body: 'Leafs, Canadiens, Oilers, Canucks, Flames, Jets, and Senators typically anchor weekly interest across national and regional NHL boards.',
      },
      {
        title: 'Core NHL bet types',
        body: 'Moneyline, puck line, totals, and player props such as shots, points, and saves are the markets most bettors compare before puck drop.',
      },
      {
        title: 'Season-long futures',
        body: 'Stanley Cup, conference, and division futures stay relevant from opening night through the playoffs, especially when odds shorten around trade deadline moves.',
      },
    ],
    marketTitle: 'Markets and timing to watch',
    marketCards: [
      {
        title: 'Puck line vs moneyline',
        body: 'Favorites often come with tighter moneyline prices, while puck line markets trade price for extra margin risk on a low-scoring sport.',
      },
      {
        title: 'Live in-play swings',
        body: 'Goals, penalties, goalie pulls, and power-play situations can move NHL live odds quickly late in periods and especially in the third.',
      },
      {
        title: 'Prop depth by slate',
        body: 'National TV games and playoff matchups usually carry deeper prop menus than smaller weekday slates, so market depth can vary by matchup.',
      },
    ],
    infoPanelTitle: 'Ontario-facing NHL content needs neutral framing',
    infoPanelBody:
      'This page keeps the copy informational. It explains market structure, timing, and risk without bonus-led or inducement-style language.',
    infoPanelPoints: [
      'Check whether the posted line settles including overtime and shootouts before placing a moneyline bet.',
      'Stanley Cup futures stay open for months, so bankroll planning matters more than short-term variance.',
      'Live prices can change after every goal or major penalty, so always confirm the accepted odds before submission.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'What are the main NHL bets Canadians use most often?',
        answer:
          'Moneyline, puck line, totals, and player props are the most common NHL markets. Futures such as Stanley Cup and division winners stay active for much longer horizons.',
      },
      {
        question: 'Can I bet on Canadian NHL teams at 247iBET?',
        answer:
          'Yes. Canadian clubs like the Maple Leafs, Canadiens, Oilers, Canucks, Flames, Jets, and Senators are part of the standard NHL board with pre-game and live markets.',
      },
      {
        question: 'How does live NHL betting differ from pre-game betting?',
        answer:
          'Live betting updates the price based on the score, time remaining, penalties, and game state. The trade-off is that markets move faster and can suspend during key moments.',
      },
      {
        question: 'Are Stanley Cup futures available all season?',
        answer:
          'Stanley Cup futures are usually available from preseason through the playoffs, although pricing changes materially around injuries, trades, and playoff qualification.',
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
          'See how in-play odds shift during hockey games and when markets tend to reopen.',
        accent: 'neutral',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description:
          'Brush up on decimal, American, and implied probability formats before comparing NHL prices.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Compare top-rated Canadian sports betting sites for hockey.',
        accent: 'gold',
      },
      {
        href: '/tools/odds-calculator',
        label: 'Odds Calculator',
        description: 'Convert NHL odds and calculate hockey parlay payouts.',
        accent: 'blue',
      },
    ],
    ctaContextLabel: 'NHL · puck line · player props · 19+',
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
