<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const page = {
    slug: 'mobile',
    path: '/sportsbook/mobile',
    title: 'Sports Betting App Canada | 247iBET Canada',
    heading: 'Sports Betting on Mobile in Canada',
    breadcrumbLabel: 'Mobile Sports Betting',
    metaDescription:
      'Review the sports betting app experience in Canada with mobile sportsbook flow, live odds, push alerts, and device support expectations at 247iBET.',
    keywords: 'sports betting app Canada, mobile sportsbook Canada, bet on phone',
    heroSubheading:
      'See what a strong mobile sportsbook experience should deliver on phone: fast navigation, readable live odds, account access, and current-device support for Canadian bettors.',
    overviewTitle: 'What matters on a mobile sportsbook',
    overviewIntro:
      'Mobile betting is less about marketing labels and more about usability. Canadian bettors need a phone experience that handles live pricing, deposits, and ticket review without extra friction.',
    overviewCards: [
      {
        title: 'Phone-first betting flow',
        body: 'A good mobile sportsbook keeps markets readable, the bet slip easy to update, and account actions simple to complete on smaller screens.',
      },
      {
        title: 'Live betting on mobile',
        body: 'In-play usage is often mobile-first, so line clarity, quick navigation, and stable refresh behaviour matter more than decorative UI.',
      },
      {
        title: 'Alerts and account updates',
        body: 'Push or in-app style notifications can help with score changes, ticket status, and account prompts, though exact alert settings depend on the platform flow.',
      },
    ],
    marketTitle: 'Device and experience checks',
    marketCards: [
      {
        title: 'Current device support',
        body: 'Canadian bettors typically expect smooth access on current iPhone and Android devices, with browser-based access and responsive layouts handled cleanly.',
      },
      {
        title: 'Cashier on mobile',
        body: 'Deposits, verification prompts, and withdrawal requests need to stay usable on mobile, especially when Interac is part of the funding flow.',
      },
      {
        title: 'Confirmation speed',
        body: 'Accepted-price confirmation and readable ticket review matter even more on phones because live odds can change during submission.',
      },
    ],
    infoPanelTitle: 'Mobile quality is mostly execution quality',
    infoPanelBody:
      'A "sports betting app" page should set expectations correctly: mobile betting is about usability, screen flow, and account clarity, not about promising a native feature set that may vary by device or region.',
    infoPanelPoints: [
      'Check the live bet slip carefully on mobile because in-play prices can move before the ticket is accepted.',
      'Account verification and deposit steps should remain readable on smaller screens, especially when switching between banking and sportsbook views.',
      'Current-device support matters more than surface polish if you are using mobile as your primary betting workflow.',
    ],
    infoPanelAccent: 'blue',
    faqItems: [
      {
        question: 'Can I place sports bets on my phone in Canada?',
        answer:
          'Yes. Canadian bettors commonly use their phones for sportsbook access, especially for live betting, account review, and quick bet-slip management.',
      },
      {
        question: 'What should a mobile sportsbook do well?',
        answer:
          'The essentials are readable odds, a stable bet slip, clear account actions, and current-device support. Those factors matter more than promotional extras.',
      },
      {
        question: 'Is live betting important on mobile?',
        answer:
          'Yes. Many bettors use mobile primarily for live betting because it is always available, but confirmation speed and connection stability still matter.',
      },
      {
        question: 'Does mobile betting still use Interac and account verification?',
        answer:
          'Yes. Mobile sportsbook flow still needs to handle deposits, verification prompts, and withdrawals clearly, especially for Canadian players using Interac.',
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
        description: 'Review CAD deposit and withdrawal flow details for Canadian betting accounts.',
        accent: 'blue',
      },
      {
        href: '/sportsbook/live-betting',
        label: 'Live Betting Guide',
        description: 'Understand the in-play flow that many bettors use most often on mobile devices.',
        accent: 'neutral',
      },
      {
        href: '/guides/sports-betting-odds-explained',
        label: 'Odds Explained',
        description: 'Review how pricing formats read on mobile screens before comparing lines across markets.',
        accent: 'neutral',
      },
    ],
    ctaContextLabel: 'Mobile sportsbook · live odds · current devices · 19+',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      { '@type': 'ListItem', position: 2, name: 'Sportsbook', item: 'https://247ibet.ca/sportsbook' },
      { '@type': 'ListItem', position: 3, name: page.breadcrumbLabel, item: 'https://247ibet.ca' + page.path },
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
  <link rel="canonical" href={"https://247ibet.ca" + page.path} />
  <script type="application/ld+json">{@html JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">{@html JSON.stringify(faqSchema)}</script>
</svelte:head>

<div class="container mx-auto max-w-5xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
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

  <div class="mt-12 rounded-xl border {page.infoPanelAccent === 'gold' ? 'border-prestige-gold/20 bg-prestige-gold/5' : 'border-slate-blue/20 bg-slate-blue/5'} p-6">
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
          class="{link.accent === 'gold' ? 'text-prestige-gold' : link.accent === 'blue' ? 'text-slate-blue' : 'text-text-tertiary'} font-bold text-sm hover:underline uppercase tracking-wider"
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
          <svg class="h-4 w-4 shrink-0 text-text-tertiary transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
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
    Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
  </div>
</div>
