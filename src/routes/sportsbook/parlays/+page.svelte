<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import { articleSchema } from '$lib/json-ld';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { canonicalUrl } from '$lib/site';

  const page = {
    slug: 'parlays',
    path: '/sportsbook/parlays',
    title: 'Parlay Betting Canada | 247iBET Canada',
    heading: 'Parlay Betting in Canada',
    breadcrumbLabel: 'Parlay Betting',
    metaDescription:
      'Learn how parlay betting works in Canada, including same-game parlays, parlay odds, calculator use, strategy basics, and the higher risk involved.',
    keywords: 'parlay betting Canada, same game parlay Canada, parlay calculator',
    heroSubheading:
      'Understand how parlays stack multiple selections, how same-game parlays differ from multi-game tickets, and why risk rises with every added leg.',
    heroImage: '/images/generated/sportsbook-parlay-hero.png',
    overviewTitle: 'Parlay betting basics for Canadians',
    overviewIntro:
      'Parlays remain popular because they combine multiple prices into one ticket. That convenience comes with extra volatility, so the structure matters as much as the payout math.',
    overviewCards: [
      {
        title: 'How a standard parlay works',
        body: 'A parlay combines two or more selections on one bet slip. Every leg needs to win for the ticket to cash, although voided legs can reduce the final price.',
      },
      {
        title: 'Same-game parlays',
        body: 'Same-game parlay builders let bettors combine markets from one event, such as side, total, and selected props, subject to correlation rules set by the sportsbook.',
      },
      {
        title: 'Odds multiplication',
        body: 'Parlay odds grow because you are stacking outcomes together. The same mechanic that boosts price also increases the chance that one miss ends the ticket.',
      },
    ],
    marketTitle: 'Strategy and risk controls',
    marketCards: [
      {
        title: 'Use a calculator first',
        body: 'A parlay calculator helps translate the combined price into potential return and implied probability before you lock in a multi-leg ticket.',
      },
      {
        title: 'Correlation rules vary',
        body: 'Sportsbooks may block or reprice combinations that are closely related, especially inside same-game parlays where multiple outcomes move together.',
      },
      {
        title: 'Stake sizing matters',
        body: 'Because parlays are higher-risk than single bets, many bettors keep stake sizes smaller and treat them differently from straight wagers.',
      },
    ],
    infoPanelTitle: 'Parlays carry higher risk than single bets',
    infoPanelBody:
      'This page treats parlays as a higher-variance format. It explains mechanics and risk clearly rather than positioning parlays as a shortcut to easy returns.',
    infoPanelPoints: [
      'Each added leg lowers the probability that the full ticket wins, even when the combined odds look attractive.',
      'Same-game parlays can feel simple to build, but correlation rules and shifting prices still affect what the ticket is worth.',
      'Consider comparing a parlay ticket against single bets before deciding whether the extra variance fits your bankroll.',
    ],
    infoPanelAccent: 'gold',
    faqItems: [
      {
        question: 'What is the difference between a parlay and a same-game parlay?',
        answer:
          "A regular parlay can include selections from multiple events. A same-game parlay combines multiple outcomes from one game, subject to the sportsbook's correlation rules.",
      },
      {
        question: 'Why do parlays have higher payouts?',
        answer:
          'The price increases because every leg must win. That higher payout potential comes directly from the higher risk of stacking outcomes together.',
      },
      {
        question: 'Should I use a parlay calculator?',
        answer:
          'Yes. A calculator helps you check the combined odds, expected return, and implied probability before you submit the ticket.',
      },
      {
        question: 'Are parlays riskier than single bets?',
        answer:
          'Yes. Parlays are more volatile because one losing leg defeats the full ticket, which is why they are generally treated as a higher-risk format than single bets.',
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
          'See how live markets differ from pre-game parlays and when cash-out may appear on eligible tickets.',
        accent: 'neutral',
      },
      {
        href: '/tools/parlay-calculator',
        label: 'Parlay Calculator',
        description:
          'Run your combined odds through the onsite calculator before building the full slip.',
        accent: 'neutral',
      },
      {
        href: '/best-sports-betting-sites-canada',
        label: 'Best Sportsbooks',
        description: 'Find sportsbooks with the best parlay features for Canadian bettors.',
        accent: 'gold',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description: 'Understand how parlay odds multiply across each leg.',
        accent: 'neutral',
      },
    ],
    ctaContextLabel: 'Parlays · same-game parlay · calculator · 19+',
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

<div class="container mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
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
      <img
        src={page.heroImage}
        alt={page.title + ' — online betting in Canada'}
        class="h-full w-full object-cover opacity-80"
      />
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
    <IBetShowcase
      variant="banner"
      ctaText="Check Availability"
      contextLabel={page.ctaContextLabel}
    />
  </div>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
