<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'cfl',
    path: '/sportsbook/cfl',
    title: 'CFL Betting Canada | 247iBET Canada',
    heading: 'CFL Betting in Canada',
    breadcrumbLabel: 'CFL Betting',
    metaDescription:
      'Explore CFL betting in Canada with team coverage, Grey Cup futures, common bet types, and Canadian football rules that affect pricing at 247iBET.',
    keywords: 'CFL betting Canada, Canadian football betting, Grey Cup betting',
    heroSubheading:
      'Bet on Canadian football with regular-season team coverage, Grey Cup futures, and market notes shaped by CFL-specific rules such as three downs and the rouge.',
    heroImage: '/images/generated/sportsbook-football-hero.webp',
    overviewTitle: 'CFL betting coverage',
    overviewIntro:
      'CFL betting is built around Canadian football, not a copy of the NFL board. The rules and scoring details change how totals, spreads, and late-game situations are priced.',
    overviewCards: [
      {
        title: 'Teams and weekly slates',
        body: 'Canadian bettors follow all nine CFL clubs across regular season and playoff schedules, with added focus on divisional races late in the year.',
      },
      {
        title: 'Grey Cup futures',
        body: 'Futures stay relevant from preseason to the playoffs, especially when quarterback availability or divisional strength starts reshaping the board.',
      },
      {
        title: 'Common CFL bet types',
        body: 'Moneyline, spread, totals, selected player props, and futures are the main CFL betting markets most bettors compare each week.',
      },
    ],
    marketTitle: 'Canadian football specifics that matter',
    marketCards: [
      {
        title: 'Three-down football',
        body: 'Fewer downs change field position decisions and can influence live totals, comeback math, and late-game pacing compared with four-down football.',
      },
      {
        title: 'Wider field and motion',
        body: 'The larger field and pre-snap motion affect offensive spacing, which can shape totals and team-prop expectations differently from the NFL.',
      },
      {
        title: 'Single point scoring',
        body: 'The rouge can affect totals and live endgame scenarios, so CFL bettors should understand how one-point scoring fits settlement expectations.',
      },
    ],
    infoPanelTitle: 'CFL betting starts with understanding the rules',
    infoPanelBody:
      "Canadian football markets reward readers who understand the sport's scoring and pacing differences. This page keeps the emphasis on structure, not hype.",
    infoPanelPoints: [
      'Do not map NFL assumptions directly onto the CFL without checking how three downs alter pace and possession value.',
      'Grey Cup futures can move hard around quarterback changes because the league is smaller and roster depth is thinner.',
      'Totals and live endgame prices can behave differently when the rouge is still in play late in the game.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'What are the most common CFL bets in Canada?',
        answer:
          'Moneyline, spread, totals, Grey Cup futures, and selected player props are the most common CFL betting markets available to Canadian bettors.',
      },
      {
        question: 'Why is CFL betting different from NFL betting?',
        answer:
          'The CFL uses three downs, a wider field, different motion rules, and single-point scoring on certain plays. Those differences affect pace, totals, and live game management.',
      },
      {
        question: 'Can I bet on Grey Cup futures all season?',
        answer:
          'Grey Cup futures are usually available for most of the season, with price changes reflecting injuries, standings, and playoff qualification.',
      },
      {
        question: 'Does the rouge matter for CFL totals betting?',
        answer:
          'Yes. The single point can affect final totals and late-game scoring scenarios, so it is part of the rule set bettors should understand before staking CFL markets.',
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
        href: '/sportsbook/football',
        label: 'Football Betting Guide',
        description:
          'Compare CFL market structure with broader football betting coverage centered on NFL boards.',
        accent: 'neutral',
      },
      {
        href: '/guides/single-game-betting-canada',
        label: 'Single-Game Betting Guide',
        description:
          'Review how Canadian single-event wagering works before comparing weekly CFL lines.',
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
        description: 'Convert odds formats and calculate implied probability for CFL lines.',
        accent: 'blue',
      },
    ],
    ctaContextLabel: 'CFL · Grey Cup futures · three-down football · 19+',
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
