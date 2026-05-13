<script lang="ts">
  import { fade } from 'svelte/transition';
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
    Gift,
    ShieldCheck,
    Sparkles,
    Trophy,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_CTA, IBET_PROMO_SNAPSHOT, IBET_URLS } from '$lib/ibet-brand';
  import { reveal } from '$lib/animations';
  import OddsTicker from '$lib/components/OddsTicker.svelte';
  import GlintCard from '$lib/components/GlintCard.svelte';
  import HeroBanner from '$lib/components/HeroBanner.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { organizationSchema } from '$lib/json-ld';

  const LAST_UPDATED = '2026-04-29';

  const heroTrust = [
    {
      label: 'Interac payouts',
      body: 'Often completed after operator approval; timing varies by review and bank processing',
      image: '/images/generated/elite-assets-set.png',
      position: '0% 0%',
    },
    {
      label: 'Casino',
      body: 'Game-category guides for slots, live dealer, and table games',
      image: '/images/generated/elite-assets-set.png',
      position: '100% 0%',
    },
    {
      label: 'Sportsbook',
      body: 'Market education for NHL, NBA, NFL, UFC, soccer, and live betting',
      image: '/images/generated/elite-assets-set.png',
      position: '0% 100%',
    },
    {
      label: 'Safety',
      body: 'KYC, limits, self-exclusion, and support resources',
      image: '/images/generated/elite-assets-set.png',
      position: '100% 100%',
    },
  ];

  const whyCards = [
    {
      title: 'Payments & payouts',
      body: 'Interac deposit and withdrawal guidance with approval, KYC, and bank-processing caveats clearly explained.',
      icon: Zap,
    },
    {
      title: 'Casino selection',
      body: 'Educational coverage of slots, live dealer, table games, jackpots, and mobile-friendly casino experiences.',
      icon: ShieldCheck,
    },
    {
      title: 'Sportsbook markets',
      body: 'Educational coverage of NHL, NBA, NFL, and major global sports leagues, including how live odds and market depth work.',
      icon: Trophy,
    },
    {
      title: 'Trust & support',
      body: 'Support pathways, responsible-gambling resources, and account-control concepts clearly explained before platform handoff.',
      icon: Gift,
    },
  ];

  const comparisonRows = [
    {
      feature: 'Interac withdrawals',
      value: 'Timing Varies',
      check: 'Operator approval, KYC, bonus review, and bank-side completion times may apply.',
    },
    {
      feature: 'Casino games',
      value: 'Game Guides',
      check:
        'Explore educational coverage of slots, live dealer, table games, and mobile-optimized play categories.',
    },
    {
      feature: 'Sportsbook',
      value: 'Deep Markets',
      check:
        'Learn how odds, limits, market depth, live betting, and parlay options should be checked before wagering.',
    },
    {
      feature: 'Bonuses',
      value: 'Fair Terms',
      check: 'Clear wagering requirements, game eligibility, and transparent bonus rules.',
    },
    {
      feature: 'Support',
      value: 'Support Routes',
      check:
        'Use official operator support for account issues; use this site for public guidance and routing context.',
    },
  ];

  const processSteps = [
    {
      title: 'Deposit',
      body: 'Choose Interac and confirm the transfer through your bank.',
      status: 'Usually prompt',
    },
    {
      title: 'Verification',
      body: 'Complete identity checks if required before larger or first withdrawals.',
      status: 'Review dependent',
    },
    {
      title: 'Withdraw',
      body: 'Standard security, bonus, and account checks before funds are released.',
      status: 'Review dependent',
    },
    {
      title: 'Interac payout',
      body: 'Funds are sent after approval; first withdrawals or bank delays may take longer.',
      status: 'Timing varies',
    },
  ];

  const bonusRows = [
    {
      type: `${IBET_PROMO_SNAPSHOT[0].title}: ${IBET_PROMO_SNAPSHOT[0].headline}`,
      goodFor: 'New players',
      check:
        'Confirm minimum deposit, wagering, eligible games, expiry, and current eligibility before opting in.',
    },
    {
      type: `${IBET_PROMO_SNAPSHOT[1].title}: ${IBET_PROMO_SNAPSHOT[1].headline}`,
      goodFor: 'Returning depositors',
      check:
        'Check whether any current cap is per deposit, per day, or limited to a campaign window.',
    },
    {
      type: IBET_PROMO_SNAPSHOT[2].title,
      goodFor: 'Seasonal campaign players',
      check:
        'Verify qualification dates, eligible products, and any extra opt-in steps before playing.',
    },
    {
      type: 'Free spins terms',
      goodFor: 'Slot players',
      check:
        'Review spin value, eligible games, win caps, and whether bonus funds stay non-withdrawable until playthrough is complete.',
    },
  ];

  const standOut = [
    {
      title: 'Full Transparency',
      body: 'Editorial checks on payout terms, safer-play tools, and regulated-market disclosures for Canadian readers.',
      icon: ShieldCheck,
    },
    {
      title: 'Payment Speed',
      body: 'Interac e-Transfer timing education with approval, KYC, and bank-side caveats.',
      icon: Zap,
    },
    {
      title: 'Casino Category Coverage',
      body: 'Guides for slots, live dealer tables, jackpots, and provider availability checks.',
      icon: Trophy,
    },
    {
      title: 'Fair Bonus Terms',
      body: 'Clear and transparent rules on wagering, win caps, and eligibility.',
      icon: Sparkles,
    },
  ];

  const casinoCards = [
    {
      title: 'Slots',
      body: 'Themed reels, megaways, and jackpot slots.',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.png',
      alt: 'Luxury casino slot reels and jackpots with a dark premium interface.',
    },
    {
      title: 'Live Casino',
      body: 'Best for live dealer tables and streamed casino play',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.png',
      alt: 'Live dealer casino table with cards, chips, and premium studio lighting.',
    },
    {
      title: 'Table Games',
      body: 'Best for classic casino rules and mobile table games',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.png',
      alt: 'Classic blackjack table on a dark felt surface with polished chips.',
    },
    {
      title: 'Jackpots',
      body: 'RTP info and provider availability.',
      href: '/casino',
      image: '/images/generated/casino-slots-hero.png',
      alt: 'Luxury casino slot reels and jackpots with a dark premium interface.',
    },
  ];

  const sportsCards = [
    {
      title: 'Sports Betting',
      body: 'NHL, NBA, NFL, UFC, soccer, tennis, parlays, and futures',
      href: '/sportsbook',
      image: '/images/generated/sportsbook-premium-hero.png',
      alt: 'Premium sportsbook dashboard showing major leagues, odds, and betting markets.',
    },
    {
      title: 'Live Betting',
      body: 'Live market rules, accepted price, and settlement.',
      href: '/sportsbook/live-betting',
      image: '/images/generated/sportsbook-live-betting-hero.png',
      alt: 'Live betting interface with rapidly updating odds and match coverage.',
    },
    {
      title: 'Hockey',
      body: 'Hockey markets for Canadian bettors',
      href: '/sportsbook/nhl',
      image: '/images/generated/sportsbook-nhl-hero.png',
      alt: 'Hockey betting card with rink-inspired visuals and Canadian sports context.',
    },
    {
      title: 'Basketball',
      body: 'Basketball markets, props, and parlays',
      href: '/sportsbook/nba',
      image: '/images/generated/sportsbook-nba-hero.png',
      alt: 'Basketball betting card with props, parlays, and game-time odds.',
    },
  ];

  const guideCards = [
    {
      title: 'How Signup Handoffs Work in Canada',
      body: 'Eligibility, verification, and market checks.',
      href: '/guides/single-game-betting-canada',
      image: '/images/generated/sportsbook-parlay-hero.png',
      alt: 'Canadian sports betting guide card with parlays and strategy visuals.',
    },
    {
      title: 'Casino Game Categories Explained',
      body: 'Learn the major casino categories before verifying availability.',
      href: '/casino',
      image: '/images/generated/casino-premium-hero.png',
      alt: 'Premium casino guide card with a refined dark-luxury atmosphere.',
    },
    {
      title: 'Fast Withdrawals Explained',
      body: 'Approval, KYC, and Interac timing explained.',
      href: '/fast-payouts',
      image: '/images/generated/fast-payouts-hero.png',
      alt: 'Fast payout guide card highlighting Interac timing and approval flow.',
    },
    {
      title: 'Bankroll Management 101',
      body: 'Set budgets and limits before playing.',
      href: '/guides/strategy',
      image: '/images/generated/bonus-wagering-hero.png',
      alt: 'Bonus wagering guide card with casino terms and playthrough context.',
    },
  ];

  const faqs = [
    {
      q: 'How do I check operator licensing in my province?',
      a: "This site is an independent Canadian iGaming guide. Readers should confirm any operator's registration status, product availability, and provincial eligibility directly with the operator and the relevant regulator before signing up.",
    },
    {
      q: 'How fast are Interac withdrawals?',
      a: 'Interac withdrawals are often completed after operator approval, but timing varies. First withdrawals, larger payouts, KYC checks, bonus review, and bank-side delays can all extend the timeline.',
    },
    {
      q: 'What documents do you require for verification?',
      a: 'Operators may request government-issued ID, proof of address, payment evidence, or source-of-funds documentation before approving withdrawals. Exact requirements belong to the separate gaming platform.',
    },
    {
      q: 'Are there any fees for deposits or withdrawals?',
      a: "Payment fees and limits depend on the operator, method, bank, and account status. Check the separate gaming platform's live cashier terms before depositing.",
    },
    {
      q: 'What bonus terms should I be aware of?',
      a: 'Always review wagering requirements, eligible games or markets, max bet limits, expiry dates, and jurisdiction rules in the live cashier before opting in.',
    },
    {
      q: 'How can I set limits or take a break?',
      a: 'Responsible-gambling tools such as deposit limits, loss limits, session limits, cooling-off, and self-exclusion belong to the separate operating platform. This public site links to education and support resources.',
    },
  ];

  const jumpLinks = [
    { href: '#interac-flow', label: 'How payouts work' },
    { href: '#bonus-terms', label: 'Bonus terms' },
    { href: '#faq-section', label: 'FAQ' },
  ];

  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  let homeFaqOpenIndex = $state<number | null>(null);

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description:
        '247iBET is a Canadian iGaming brand covering casino, sportsbook, and Interac e-Transfer payout expectations.',
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/images/brand/logo.png`,
      description:
        '247iBET is a Canadian iGaming brand covering casino, sportsbook, and Interac e-Transfer payout information for Canadian audiences.',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
      sameAs: SITE.sameAs,
      knowsAbout: [
        'Online Casino Canada',
        'Sports Betting Canada',
        'Interac Casino Payment Methods',
        'Live Dealer Casino',
        'Casino Bonuses Canada',
        'Sports Betting Odds',
        'Responsible Gambling',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'French'],
      },
      mentions: [
        {
          '@type': 'Organization',
          name: 'iGaming Ontario',
          description: "Ontario's regulated online gambling authority",
        },
        {
          '@type': 'Organization',
          name: 'Alcohol and Gaming Commission of Ontario',
          description: "AGCO — Ontario's gaming regulator",
        },
        {
          '@type': 'Organization',
          name: 'Interac',
          description: "Canada's e-Transfer payment network referenced in payment-method guides",
        },
      ],
    },
    homeFaqSchema,
  ];
</script>

<svelte:head>
  <title>247iBET Canada — Casino, Sportsbook & Interac Payouts</title>
  <meta
    name="description"
    content="247iBET is Canada's premium iGaming brand: casino, sportsbook, and Interac e-Transfer payouts. 19+ to play (18+ in select provinces)."
  />
  <meta
    property="og:title"
    content="247iBET Canada — Casino, Sportsbook & Interac Payouts"
  />
  <meta
    property="og:description"
    content="Canada's premium iGaming brand: casino, sportsbook, and Interac e-Transfer payouts."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE.url} />
  <link rel="canonical" href={canonicalUrl('/')} />
  <JsonLd schema={homeSchema} />
  <JsonLd schema={organizationSchema()} />
</svelte:head>

<div class="min-h-screen bg-navy-black text-white no-shell-pad" role="presentation">
  <HeroBanner lastUpdated={LAST_UPDATED} />

  <OddsTicker />

  <nav class="mx-auto max-w-[1720px] px-4 pt-1 sm:px-6 lg:px-10 xl:px-16" aria-label="Jump links">
    <AffiliateDisclosure variant="inline" />
    <div
      class="segmented-chrome flex gap-2 overflow-x-auto rounded-[24px] p-1.5 snap-x snap-mandatory scroll-smooth hide-scrollbar"
    >
      {#each jumpLinks as link}
        <a
          href={link.href}
          class="segmented-item shrink-0 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-body transition-colors hover:border-prestige-gold/30 hover:bg-prestige-gold/10 hover:text-prestige-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/60 snap-start"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </nav>

  <div
    class="mx-auto max-w-[1720px] space-y-4 px-4 pb-12 sm:space-y-6 sm:px-6 sm:pb-20 lg:px-10 xl:px-16"
  >
    <section
      id="trust-verification"
      class="material-group grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {#each heroTrust as item, i}
        <GlintCard
          useReveal={true}
          style="--reveal-delay: {i * 100}ms"
          class="material-cell reveal-fade-up group relative flex flex-col gap-5 overflow-hidden rounded-[32px] p-6 transition-all hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] card-hover-lift"
        >
          <div
            class="relative h-32 w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10"
          >
            <div 
              class="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-125"
              style="background-image: url({item.image}); background-position: {item.position}; background-size: 200% 200%;"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div>
            <p
              class="text-[11px] font-black uppercase tracking-[0.2em] text-prestige-gold transition-colors group-hover:text-white"
            >
              {item.label}
            </p>
            <p class="mt-2 text-sm font-medium leading-relaxed text-text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              {item.body}
            </p>
          </div>
          <!-- Corner accent -->
          <div class="absolute -right-2 -bottom-2 h-12 w-12 rounded-full bg-prestige-gold/5 blur-xl group-hover:bg-prestige-gold/20 transition-all"></div>
        </GlintCard>
      {/each}
    </section>

    <section
      id="promo-video"
      use:reveal
      class="material-panel reveal-fade-up grid gap-5 overflow-hidden p-4 sm:p-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6 lg:p-7"
      aria-labelledby="home-promo-video-title"
    >
      <div class="flex flex-col justify-center">
        <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
          Watch the overview
        </p>
        <h2 id="home-promo-video-title" class="mt-3 text-4xl font-black md:text-5xl">
          Explore the 247iBET experience in 30 seconds
        </h2>
        <p class="mt-4 text-sm leading-6 text-text-body">
          A quick look at public casino categories, sportsbook education, Interac payment
          expectations, verification caveats, support, and responsible-play tools.
        </p>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-6 w-full justify-center sm:w-fit btn-magnetic"
        >
          {IBET_CTA.primary}
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>

      <div class="material-cell overflow-hidden rounded-[22px] bg-black/30">
        <video
          class="aspect-video w-full bg-navy-black object-cover"
          controls
          playsinline
          preload="metadata"
          width="1280"
          height="720"
          poster="/images/generated/casino-premium-hero.png"
          aria-label="247iBET casino guide, sportsbook education, and payment guidance overview video"
        >
          <source src="/videos/247ibet-home-promo.mp4" type="video/mp4" />
          Your browser does not support embedded video. Open the 247iBET overview video at /videos/247ibet-home-promo.mp4.
        </video>
      </div>
    </section>

    <section
      id="why-it-stands-out"
      class="material-panel grid overflow-hidden lg:grid-cols-[0.42fr_0.58fr]"
    >
      <aside class="border-b soft-separator p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <p class="mb-3 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
          Trust & verification
        </p>
        <h2 class="font-display text-4xl font-black sm:text-5xl">
          Editorial checks for Canadian iGaming readers
        </h2>
        <p class="mt-5 max-w-md text-sm leading-6 text-text-body">
          We focus on clear payment and withdrawal caveats, safer-play tools, and regulated-market context so
          readers can evaluate operators with more confidence. Use this guide as research support,
          then verify operator terms, approval flows, and provincial eligibility before depositing.
        </p>
        <ul class="mt-5 space-y-3 text-sm text-text-body">
          {#each ['Educational coverage of regulated-market topics', 'Interac payment guidance with approval caveats', 'Verification steps explained before first withdrawal', 'Responsible-gambling and support resources highlighted'] as item}
            <li class="flex gap-3">
              <BadgeCheck class="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              <span>{item}</span>
            </li>
          {/each}
        </ul>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-8 w-full justify-center btn-magnetic"
        >
          {IBET_CTA.register}
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </aside>

      <div class="p-5 sm:p-7">
        <h2 class="text-2xl font-black">Our commitment to players</h2>
        <p class="mt-3 max-w-3xl text-sm leading-6 text-text-body">
          We prioritize transparent guidance across game categories, payout caveats, safer-play
          resources, and operator handoff points for Canadian players.
        </p>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each whyCards as card, i}
            {@const Icon = card.icon}
            <GlintCard
              useReveal={true}
              style="--reveal-delay: {i * 100}ms"
              class="reveal-fade-up luxury-card group relative rounded-2xl p-6 transition-all hover:-translate-y-1 {i ===
              0
                ? 'lg:col-span-2'
                : ''} card-hover-lift"
            >
              <div class="flex items-start justify-between gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-prestige-gold/10 text-prestige-gold transition-all group-hover:bg-prestige-gold group-hover:text-navy-black"
                >
                  <Icon class="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <h3 class="mt-6 font-display text-xl font-black text-white">{card.title}</h3>
              <p class="mt-3 text-sm leading-relaxed text-text-body">{card.body}</p>
            </GlintCard>
          {/each}
        </div>

        <div class="mt-6 grid gap-3 lg:hidden">
          {#each comparisonRows as row}
            <article class="material-cell rounded-2xl p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-black text-white">{row.feature}</h3>
                <span
                  class="shrink-0 rounded-full bg-prestige-gold/10 px-3 py-1 text-xs font-black text-prestige-gold"
                >
                  {row.value}
                </span>
              </div>
              <p class="mt-3 text-sm leading-6 text-text-body">{row.check}</p>
            </article>
          {/each}
        </div>

        <div
          class="material-cell table-scroll-wrap mt-6 hidden overflow-x-auto rounded-2xl lg:block"
        >
          <table class="w-full min-w-[760px] text-left text-sm">
            <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
              <tr>
                <th class="px-4 py-3">Feature</th>
                <th class="px-4 py-3">Our Standards</th>
                <th class="px-4 py-3">What to check</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/8">
              {#each comparisonRows as row}
                <tr>
                  <td class="px-4 py-3 font-black text-white">{row.feature}</td>
                  <td class="px-4 py-3 text-prestige-gold">{row.value}</td>
                  <td class="px-4 py-3 text-text-body">{row.check}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section
      id="interac-flow"
      use:reveal
      class="material-panel reveal-fade-up glow-gold grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.3fr_0.7fr]"
    >
      <div class="flex flex-col justify-center">
        <div class="mb-6 h-20 w-20 overflow-hidden rounded-3xl bg-prestige-gold/10 p-2 ring-1 ring-prestige-gold/20">
          <div 
            class="h-full w-full bg-cover bg-no-repeat"
            style="background-image: url('/images/generated/elite-assets-set.png'); background-position: 0% 0%; background-size: 200% 200%;"
          ></div>
        </div>
        <h2 class="font-display text-4xl font-black md:text-5xl tracking-tight">Interac<br/><span class="text-gradient-gold">Payout Flow</span></h2>
        <p class="mt-4 text-base leading-relaxed text-text-body">
          The standard Interac e-Transfer lifecycle &mdash; from initial deposit through KYC review to bank-side processing.
        </p>
        <div class="mt-8 flex gap-4">
          <a href="/interac" class="page-cta-primary-sm btn-magnetic">View Interac Flow</a>
        </div>
      </div>
      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2"
      >
        {#each processSteps as step, index}
          <article use:reveal class="material-cell reveal-fade-up group relative overflow-hidden rounded-[32px] p-6 transition-all hover:bg-white/[0.03] card-hover-lift">
            <div
              class="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-prestige-gold text-base font-black text-navy-black shadow-[0_0_20px_rgba(212,148,58,0.4)] group-hover:scale-110 transition-transform"
            >
              {index + 1}
            </div>
            <h3 class="text-xl font-black text-white group-hover:text-prestige-gold transition-colors">{step.title}</h3>
            <p class="mt-3 text-sm leading-relaxed text-text-body sm:min-h-[60px]">{step.body}</p>
            <div class="mt-6 flex items-center gap-2">
              <span
                class="inline-flex rounded-full bg-success/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-success ring-1 ring-success/20"
              >
                {step.status}
              </span>
            </div>
            <!-- Decorative path line -->
            {#if index < 3}
               <div class="absolute right-0 top-1/2 hidden h-px w-12 bg-gradient-to-r from-prestige-gold/20 to-transparent lg:block"></div>
            {/if}
          </article>
        {/each}
      </div>
    </section>

    <section use:reveal class="material-group reveal-fade-up p-6 sm:p-10">
      <div class="mb-12 text-center lg:text-left">
        <p class="font-luxury text-prestige-gold-400 mb-2 opacity-80 text-xl tracking-[0.2em] uppercase">Unmatched Standards</p>
        <h2 class="font-display text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight tracking-tighter text-white">
          Why 247iBET <span class="text-gradient-gold">Stands Out</span>
        </h2>
      </div>

      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
      >
        <!-- Large Primary Card -->
        <div
          class="material-cell group relative flex flex-col justify-end overflow-hidden rounded-[40px] p-8 sm:col-span-2 sm:row-span-2 lg:p-12 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-all card-hover-lift"
        >
          <div class="absolute inset-0 z-0">
             <div class="absolute inset-0 bg-gradient-to-t from-navy-black via-navy-black/40 to-transparent z-10"></div>
             <div 
               class="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
               style="background-image: url('/images/generated/elite-hero-abstract.png'); opacity: 0.4;"
             ></div>
          </div>
          <div class="relative z-20">
            <h3 class="text-3xl font-black text-white md:text-5xl leading-[1.1]">The Definitive <br/>Canadian Authority</h3>
            <p class="mt-6 text-lg leading-relaxed text-text-body max-w-lg">
              A research-first guide for Canadian players, prioritizing transparent payout caveats,
              safer-play tools, and clearer operator comparison points.
            </p>
            <div class="mt-10">
              <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm btn-magnetic h-14 px-8">
                Explore The Guide
              </SafeExternalLink>
            </div>
          </div>
        </div>

        {#each standOut as item, i}
          {@const Icon = item.icon}
          <GlintCard
            useReveal={true}
            style="--reveal-delay: {(i + 2) * 100}ms"
            class="material-cell reveal-fade-up group relative overflow-hidden rounded-[32px] p-8 transition-all hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] card-hover-lift"
          >
            <div class="relative z-10">
              <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all">
                <Icon
                  class="h-7 w-7 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <h3 class="font-display text-2xl font-black text-white tracking-tight">{item.title}</h3>
              <p class="mt-4 text-sm leading-relaxed text-text-body opacity-80 group-hover:opacity-100 transition-opacity">{item.body}</p>
            </div>
            <!-- Dynamic Glow -->
            <div
              class="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-prestige-gold/5 blur-3xl transition-all group-hover:bg-prestige-gold/20"
            ></div>
          </GlintCard>
        {/each}
      </div>
    </section>

    <section class="grid gap-8 xl:grid-cols-2">
      <div class="material-panel relative overflow-hidden p-6 sm:p-10">
        <div class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-prestige-gold/5 blur-[80px]" aria-hidden="true"></div>
        <div class="relative z-10 mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="font-luxury text-prestige-gold-400 mb-1 text-xs tracking-[0.2em] uppercase">Elite Categories</p>
            <h2 class="font-display text-4xl font-black text-white tracking-tight">Casino</h2>
          </div>
          <a href="/casino" class="view-all-link h-10 px-4 ring-1 ring-white/10 hover:ring-prestige-gold/30">Explore Suite <ArrowRight class="h-4 w-4" /></a>
        </div>
        <div class="relative z-10 grid gap-5 sm:grid-cols-2">
          {#each casinoCards as card}
            <a
              href={card.href}
              class="material-cell group relative overflow-hidden rounded-[32px] transition-all hover:bg-white/[0.03] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] card-hover-lift"
            >
              <div class="relative h-44 w-full overflow-hidden sm:h-40">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
                {#if card.title.includes('Live')}
                  <div
                    class="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-navy-black/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-success backdrop-blur-md ring-1 ring-success/30"
                  >
                    <span
                      class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    ></span>
                    Live Now
                  </div>
                {/if}
              </div>
              <div class="p-6">
                <h3
                  class="font-display text-xl font-black text-white group-hover:text-prestige-gold transition-colors"
                >
                  {card.title}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {card.body}
                </p>
                <div
                  class="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-prestige-gold/60 transition-colors group-hover:text-prestige-gold"
                >
                  Enter Lounge
                  <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <div class="material-panel relative overflow-hidden p-6 sm:p-10">
        <div class="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-prestige-gold/5 blur-[80px]" aria-hidden="true"></div>
        <div class="relative z-10 mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="font-luxury text-prestige-gold-400 mb-1 text-xs tracking-[0.2em] uppercase">Premium Markets</p>
            <h2 class="font-display text-4xl font-black text-white tracking-tight">Sportsbook</h2>
          </div>
          <a href="/sportsbook" class="view-all-link h-10 px-4 ring-1 ring-white/10 hover:ring-prestige-gold/30">Explore Markets <ArrowRight class="h-4 w-4" /></a>
        </div>
        <div class="relative z-10 grid gap-5 sm:grid-cols-2">
          {#each sportsCards as card}
            <a
              href={card.href}
              class="material-cell group relative overflow-hidden rounded-[32px] transition-all hover:bg-white/[0.03] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] card-hover-lift"
            >
              <div class="relative h-44 w-full overflow-hidden sm:h-40">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
                {#if card.title.includes('Live')}
                  <div
                    class="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-navy-black/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-success backdrop-blur-md ring-1 ring-success/30"
                  >
                    <span
                      class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    ></span>
                    Live Odds
                  </div>
                {/if}
              </div>
              <div class="p-6">
                <h3
                  class="font-display text-xl font-black text-white group-hover:text-prestige-gold transition-colors"
                >
                  {card.title}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {card.body}
                </p>
                <div
                  class="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-prestige-gold/60 transition-colors group-hover:text-prestige-gold"
                >
                  View Markets
                  <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section id="bonus-terms" class="material-panel relative overflow-hidden p-8 sm:p-12">
      <!-- Background glow -->
      <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-prestige-gold/10 blur-[100px]" aria-hidden="true"></div>
      
      <div class="relative z-10 grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
        <div class="flex flex-col justify-center">
          <p class="font-luxury text-prestige-gold-400 mb-4 text-sm tracking-[0.2em] uppercase">Market Transparency</p>
          <h2 class="font-display text-4xl font-black md:text-5xl tracking-tight leading-[0.95] text-white">
            Master the <br/><span class="text-gradient-gold">Bonus Landscape</span>
          </h2>
          <p class="mt-6 text-base leading-relaxed text-text-body">
            Promotions add value only when the rules are clear. Our education clarifies wagering, expiry, and eligibility before you commit.
          </p>
          <div class="mt-10">
            <a href="/casino-bonuses-canada" class="page-cta-primary-sm btn-magnetic h-14 px-8">Check Bonus Terms</a>
          </div>
        </div>

        <div class="grid gap-4">
           <div class="material-cell table-scroll-wrap hidden overflow-x-auto rounded-[32px] lg:block border border-white/5">
            <table class="w-full min-w-[720px] text-left text-sm">
              <thead class="bg-white/[0.04] text-[10px] font-black uppercase tracking-[0.2em] text-text-tertiary">
                <tr>
                  <th class="px-6 py-5">Bonus Category</th>
                  <th class="px-6 py-5">Target Player</th>
                  <th class="px-6 py-5">Elite Check</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                {#each bonusRows as row}
                  <tr class="group transition-colors hover:bg-white/[0.02]">
                    <td class="px-6 py-5 font-black text-white">{row.type}</td>
                    <td class="px-6 py-5">
                      <span class="inline-flex rounded-full bg-prestige-gold/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-prestige-gold ring-1 ring-prestige-gold/20">
                        {row.goodFor}
                      </span>
                    </td>
                    <td class="px-6 py-5 text-text-body leading-relaxed">{row.check}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

          <div class="grid gap-4 lg:hidden">
            {#each bonusRows as row}
              <article class="material-cell rounded-[24px] p-6 border border-white/5">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 class="font-black text-white text-lg">{row.type}</h3>
                  <span class="inline-flex rounded-full bg-prestige-gold/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-prestige-gold ring-1 ring-prestige-gold/20">
                    {row.goodFor}
                  </span>
                </div>
                <p class="text-sm leading-relaxed text-text-body">{row.check}</p>
              </article>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section class="material-panel relative overflow-hidden p-6 sm:p-8 lg:p-10" data-reveal="true">
      <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-prestige-gold/5 blur-[100px]" aria-hidden="true"></div>
      
      <div class="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="font-luxury text-prestige-gold-400 mb-2 text-sm tracking-[0.2em] uppercase">Knowledge Base</p>
          <h2 class="font-display text-3xl font-black md:text-4xl tracking-tight text-white">Expert Guides</h2>
        </div>
        <a href="/guides" class="view-all-link btn-magnetic h-11 px-6">View All Knowledge <ArrowRight class="ml-2 h-4 w-4" /></a>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Main Featured Guide -->
        <div class="group relative col-span-1 flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-navy-raised/50 shadow-2xl transition-all hover:bg-navy-raised hover:shadow-prestige-gold/5 lg:col-span-2 lg:row-span-2" data-reveal="true">
          <a href={guideCards[0].href} class="flex h-full flex-col">
            <div class="relative h-64 w-full shrink-0 overflow-hidden lg:h-full">
              <img
                src={guideCards[0].image}
                alt={guideCards[0].alt}
                width="1200"
                height="800"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-black via-navy-black/40 to-transparent"></div>
              
              <div class="absolute bottom-0 left-0 p-6 sm:p-8">
                <div class="mb-3 inline-flex rounded-full bg-prestige-gold/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-prestige-gold backdrop-blur-md ring-1 ring-prestige-gold/30">
                  Featured Guide
                </div>
                <h3 class="font-display text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                  {guideCards[0].title}
                </h3>
                <p class="mt-4 max-w-xl text-base text-text-body opacity-80 line-clamp-2">
                  {guideCards[0].body}
                </p>
                <div class="mt-6 flex items-center gap-3 font-mono text-xs font-black uppercase tracking-widest text-prestige-gold transition-colors">
                  Dive Deep <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Secondary Guides -->
        {#each guideCards.slice(1) as card, i}
          <div 
            class="group material-cell relative flex flex-col overflow-hidden rounded-[28px] border border-white/5 p-2 transition-all hover:border-white/10 hover:bg-white/[0.02]"
            data-reveal="true"
            data-reveal-delay={200 + (i * 100)}
          >
            <a href={card.href} class="flex h-full flex-col">
              <div class="relative h-40 w-full shrink-0 overflow-hidden rounded-[22px] shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="400"
                  height="250"
                  loading="lazy"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-black/80 to-transparent"></div>
              </div>
              <div class="flex flex-grow flex-col justify-between p-4">
                <div>
                  <h3 class="font-display text-lg font-black leading-tight text-white transition-colors group-hover:text-prestige-gold">
                    {card.title}
                  </h3>
                  <p class="mt-2 text-xs leading-relaxed text-text-body line-clamp-2 opacity-70">
                    {card.body}
                  </p>
                </div>
                <div class="mt-4 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-prestige-gold/80 transition-colors group-hover:text-prestige-gold">
                  Explore <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </section>

    <section id="faq-section" class="material-panel relative overflow-hidden p-6 sm:p-8 lg:p-10" data-reveal="true">
      <div class="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-prestige-gold/5 blur-[100px]" aria-hidden="true"></div>
      
      <div class="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="font-luxury text-prestige-gold-400 mb-2 text-sm tracking-[0.2em] uppercase">Support & Clarity</p>
          <h2 class="font-display text-3xl font-black md:text-4xl tracking-tight text-white">General Inquiry</h2>
        </div>
        <a href="/faq" class="view-all-link btn-magnetic h-11 px-6">Full FAQ Archive <ArrowRight class="ml-2 h-4 w-4" /></a>
      </div>

      <div class="relative z-10 flex flex-col gap-3">
        {#each faqs as faq, i}
          <div
            class="material-cell group overflow-hidden rounded-[24px] border border-white/5 transition-all hover:border-white/10 hover:bg-white/[0.01]"
            data-reveal="true"
            data-reveal-delay={100 + (i * 50)}
          >
            <button
              id="home-faq-btn-{i}"
              type="button"
              class="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
              aria-expanded={homeFaqOpenIndex === i}
              aria-controls="home-faq-panel-{i}"
              onclick={() => (homeFaqOpenIndex = homeFaqOpenIndex === i ? null : i)}
            >
              <span class="max-w-[90%] font-display text-base font-black text-white sm:text-lg">{faq.q}</span>
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-tertiary transition-all group-hover:border-prestige-gold/30 group-hover:text-prestige-gold {homeFaqOpenIndex ===
                i
                   ? 'rotate-180 border-prestige-gold/50 bg-prestige-gold text-navy-black'
                  : ''}"
              >
                <ChevronDown class="h-5 w-5" aria-hidden="true" />
              </div>
            </button>
            {#if homeFaqOpenIndex === i}
              <div
                id="home-faq-panel-{i}"
                role="region"
                aria-labelledby="home-faq-btn-{i}"
                class="border-t border-white/5 bg-black/[0.15] px-6 py-6"
                transition:fade={{ duration: 200 }}
              >
                <p class="max-w-4xl text-sm leading-relaxed text-text-body sm:text-base">{faq.a}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <section class="material-panel relative overflow-hidden p-8 sm:p-12 lg:p-16" data-reveal="true">
      <div class="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-success/10 blur-[120px]" aria-hidden="true"></div>
      <div class="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-success/5 blur-[100px]" aria-hidden="true"></div>
      
      <div class="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div class="max-w-3xl">
          <div class="mb-8 flex items-center gap-4">
             <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-success/15 text-success shadow-[0_0_20px_rgba(34,197,94,0.2)] ring-1 ring-success/30">
                <ShieldCheck class="h-6 w-6" />
             </div>
             <div class="h-px w-12 bg-success/20"></div>
             <p class="font-mono text-xs font-black uppercase tracking-[0.3em] text-success/80">
               Editorial Standard
             </p>
          </div>
          
          <h2 class="font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            Gambling should remain<br/><span class="text-success text-shadow-sm">Entertainment</span>
          </h2>
          
          <div class="mt-8 grid gap-6 sm:grid-cols-2">
            <div class="space-y-2">
              <p class="text-sm font-black uppercase tracking-widest text-white/40">The Approach</p>
              <p class="text-base leading-relaxed text-text-body">Set your budget, use session limits, and take breaks. Account-level safety controls live on the gaming platform.</p>
            </div>
            <div class="space-y-2">
              <p class="text-sm font-black uppercase tracking-widest text-white/40">The Resources</p>
              <p class="text-base leading-relaxed text-text-body">Support is available through provincial resources like CAMH and ConnexOntario 24/7.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-6">
          <a href="/responsible-gambling" class="page-cta-primary min-h-[64px] min-w-[240px] justify-center px-10 text-lg btn-magnetic shadow-[0_20px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/10"
            >Access Support Tools</a
          >
          <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-tertiary">
            <span class="h-1 w-1 rounded-full bg-success"></span>
            CAMH · ConnexOntario
          </div>
        </div>
      </div>
    </section>

    <!-- Gold moment: full-bleed CTA -->
    <section
      class="glass-premium relative overflow-hidden rounded-[48px] border border-white/20 p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] sm:p-16 md:p-24"
      data-reveal="true"
    >
      <!-- Background elite visual -->
      <div class="absolute inset-0 z-0 opacity-20 mix-blend-soft-light">
         <div class="h-full w-full bg-repeat" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M0 0h40L0 40z&quot; fill=&quot;%23FFF&quot; fill-opacity=&quot;.05&quot;/%3E%3C/svg%3E')"></div>
      </div>
      <div class="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-prestige-gold/20 blur-[160px]" aria-hidden="true"></div>
      <div class="absolute -left-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-navy-raised/40 blur-[160px]" aria-hidden="true"></div>
      
      <div class="relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="max-w-3xl">
          <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span class="flex h-2 w-2 animate-pulse rounded-full bg-prestige-gold shadow-[0_0_8px_rgba(212,148,58,0.8)]"></span>
            <span class="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-prestige-gold">Platform cutover active</span>
          </div>
          
          <h2 class="font-display text-5xl font-black text-white sm:text-7xl md:text-8xl leading-[0.85] tracking-tighter">
            Elite iGaming<br /><span class="text-gradient-gold">Starts Here.</span>
          </h2>
          <p class="mt-10 max-w-xl text-lg leading-relaxed text-text-body sm:text-xl font-medium opacity-80">
            Explore public guides, verify eligibility, and use the separate gaming platform only
            after checking current terms and responsible-play controls.
          </p>
        </div>

        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <SafeExternalLink
              href={IBET_URLS.register}
              class="page-cta-primary min-h-[80px] w-full justify-center gap-4 rounded-[32px] text-xl font-black shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {IBET_CTA.register}
              <ArrowRight class="h-6 w-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
            </SafeExternalLink>
            
            <p class="text-center font-mono text-xs uppercase tracking-widest text-text-tertiary">
              Strictly 18+/19+ · Terms & Conditions Apply
            </p>
          </div>

          <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 opacity-60">
            <div class="text-center">
              <p class="font-display text-xl font-black text-white">Interac</p>
              <p class="text-xs font-bold uppercase tracking-widest text-text-tertiary">e-Transfer</p>
            </div>
            <div class="text-center">
              <p class="font-display text-xl font-black text-white">CA</p>
              <p class="text-xs font-bold uppercase tracking-widest text-text-tertiary">Built for Canada</p>
            </div>
            <div class="text-center">
              <p class="font-display text-xl font-black text-white">19+</p>
              <p class="text-xs font-bold uppercase tracking-widest text-text-tertiary">Age-gated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
