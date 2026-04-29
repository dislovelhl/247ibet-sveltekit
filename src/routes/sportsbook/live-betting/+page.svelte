<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const page = {
    slug: 'live-betting',
    path: '/sportsbook/live-betting',
    title: 'Live Betting Canada | 247iBET Canada',
    heading: 'Live In-Play Betting in Canada',
    breadcrumbLabel: 'Live Betting',
    metaDescription:
      'See how live betting works in Canada, including in-play odds movement, sports coverage, cash-out availability, and mobile execution at 247iBET.',
    keywords: 'live betting Canada, in-play betting Canada, live odds Canada',
    heroSubheading:
      'Understand how live odds update during games, where in-play markets are deepest, and how cash-out and mobile execution fit into a live betting workflow.',
    heroImage: '/images/generated/sportsbook-live-betting-hero.png',
    overviewTitle: 'How live betting works',
    overviewIntro:
      'Live or in-play betting updates the market after the event starts. The biggest difference from pre-game betting is speed: odds move with the score, time, and momentum of the event.',
    overviewCards: [
      {
        title: 'Sports covered live',
        body: 'NHL, NBA, football, soccer, tennis, and UFC are among the sports where in-play boards usually stay active with multiple betting windows.',
      },
      {
        title: 'Odds movement',
        body: 'Live prices react to score changes, possession, penalties, timeouts, injuries, and other game-state inputs. The exact speed varies by sport and feed.',
      },
      {
        title: 'Cash-out availability',
        body: 'Some tickets may show partial or full cash-out options, but availability depends on the market, current game state, and sportsbook rules.',
      },
    ],
    marketTitle: 'Execution details that matter',
    marketCards: [
      {
        title: 'Market suspension',
        body: 'Live markets can pause during high-impact moments such as goals, touchdowns, red cards, or review situations while the board recalculates.',
      },
      {
        title: 'Mobile-first usage',
        body: 'Many bettors place live wagers on their phones, so bet-slip speed, readable pricing, and reliable connectivity become part of the experience.',
      },
      {
        title: 'Line confirmation',
        body: 'Because the number can move during submission, it is important to confirm the accepted line and not assume the first displayed price will hold.',
      },
    ],
    infoPanelTitle: 'Live betting rewards discipline, not speed alone',
    infoPanelBody:
      'Live markets can feel reactive, but the better framework is still process-driven: understand suspension rules, accepted prices, and whether cash-out is even available on the ticket.',
    infoPanelPoints: [
      'Do not assume every sport has continuous live markets; some reopen only during defined breaks in play.',
      "Cash-out is a feature, not a guarantee. When it appears, the price reflects the sportsbook's live valuation of the ticket.",
      'On mobile, stable connectivity matters because in-play prices can move before the wager is fully confirmed.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'What is the difference between live betting and pre-game betting?',
        answer:
          'Pre-game betting locks a price before the event starts. Live betting updates the odds during the event based on the current score, time remaining, and other game-state changes.',
      },
      {
        question: 'Can I use cash-out on live bets?',
        answer:
          'Sometimes. Cash-out availability depends on the market, the sport, and the current game state, so it may appear for some tickets and not others.',
      },
      {
        question: 'Which sports usually have the deepest live markets?',
        answer:
          'NHL, NBA, football, soccer, and UFC often have the most active live boards, although market depth still varies by league, event size, and feed quality.',
      },
      {
        question: 'Is live betting easier on mobile?',
        answer:
          'Many bettors prefer mobile for live betting because it is fast and always available, but stable connection quality is still essential when odds are moving quickly.',
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
        href: '/sportsbook/mobile',
        label: 'Mobile Sports Betting',
        description:
          'Review the phone-first betting flow, device support, and live betting usability on smaller screens.',
        accent: 'neutral',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description:
          'Learn how live pricing translates into implied probability before comparing in-play numbers.',
        accent: 'neutral',
      },
    ],
    ctaContextLabel: 'Live in-play · cash-out · mobile flow · 19+',
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
  <link rel="canonical" href={'https://247ibet.ca' + page.path} />
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
      <img src={page.heroImage} alt="" class="h-full w-full object-cover opacity-80" />
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
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">{page.heading}</h1>
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
