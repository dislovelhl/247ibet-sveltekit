<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'ufc',
    path: '/sportsbook/ufc',
    title: 'UFC Betting Canada | 247iBET Canada',
    heading: 'UFC Betting in Canada',
    breadcrumbLabel: 'UFC Betting',
    metaDescription:
      'Learn how UFC betting works in Canada with fight night coverage, method-of-victory markets, round betting, props, and live odds at 247iBET.',
    keywords: 'UFC betting Canada, MMA betting Canada, UFC odds Canada',
    heroSubheading:
      'Follow fight nights and major PPV cards with method-of-victory, round, and prop markets, plus live UFC odds that move as the fight develops.',
    heroImage: '/images/generated/sportsbook-ufc-hero.webp',
    overviewTitle: 'How UFC betting is structured',
    overviewIntro:
      'MMA betting behaves differently from team sports because the menu is built around the matchup, the method of finish, and how quickly the market reacts during fight week.',
    overviewCards: [
      {
        title: 'Fight nights and PPV events',
        body: 'Regular UFC Fight Night cards and major PPV events usually share the same core markets, but headline title fights often receive deeper prop coverage.',
      },
      {
        title: 'Method and round markets',
        body: 'Method of victory, exact round, and fight-to-go-the-distance markets are central to MMA betting because price can swing heavily by style matchup.',
      },
      {
        title: 'Live betting windows',
        body: 'Live UFC markets reopen between rounds and can stay active during selected grappling or striking sequences, depending on feed speed and suspension rules.',
      },
    ],
    marketTitle: 'Where UFC prices move the most',
    marketCards: [
      {
        title: 'Fight week information',
        body: 'Official weigh-ins, short-notice replacements, and camp updates can shift a line more than narrative-driven social media chatter.',
      },
      {
        title: 'Round-by-round adjustments',
        body: 'A dominant first round can flip the live price, but markets still account for cardio, finishing upside, and championship-round experience.',
      },
      {
        title: 'PPV prop depth',
        body: 'Main-card PPV bouts usually carry more props than prelims, including round combinations and fighter-specific performance angles.',
      },
    ],
    infoPanelTitle: 'Fight-week discipline matters more than hype',
    infoPanelBody:
      'UFC markets reward bettors who separate official information from noise. We keep this page grounded in market types, event structure, and risk instead of promotional claims.',
    infoPanelPoints: [
      'Use official weigh-in and replacement news as inputs, not social clips or rumor accounts.',
      'Method-of-victory markets are higher variance than straight winner markets because they need a specific finish path.',
      'Live betting pace depends on broadcast delay and market suspension, so not every moment will be continuously available.',
    ],
    infoPanelAccent: 'gold',
    faqItems: [
      {
        question: 'What UFC bet types are most common in Canada?',
        answer:
          'Fight winner, method of victory, round betting, total rounds, and selected fighter props are the most common UFC markets. Major PPV cards usually have the deepest menu.',
      },
      {
        question: 'Can I bet live during UFC events?',
        answer:
          'Live betting is usually available during UFC cards, especially between rounds. Some in-round windows may suspend during high-action moments or feed changes.',
      },
      {
        question: 'What does method of victory mean in UFC betting?',
        answer:
          'Method of victory asks you to predict how a fighter wins, such as by knockout, submission, or decision. It is more specific, and therefore usually more volatile, than betting the winner only.',
      },
      {
        question: 'Do PPV fights have more UFC props than Fight Night cards?',
        answer:
          'Often, yes. Main-card PPV fights and title bouts usually carry deeper prop menus because they attract more betting volume and market attention.',
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
          'See how in-play market timing works across UFC, hockey, basketball, and football boards.',
        accent: 'neutral',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description:
          'Review price formats and implied probability before comparing fight winner and prop markets.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Compare top Canadian sportsbooks for UFC and MMA betting.',
        accent: 'gold',
      },
      {
        href: '/tools/odds-calculator',
        label: 'Odds Calculator',
        description: 'Calculate UFC fight odds and multi-fight parlay payouts.',
        accent: 'blue',
      },
    ],
    ctaContextLabel: 'UFC · PPV cards · method props · 19+',
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
