<script lang="ts">
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
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
  import { reveal, counter } from '$lib/animations';
  import OddsTicker from '$lib/components/OddsTicker.svelte';
  import PayoutProgress from '$lib/components/PayoutProgress.svelte';
  import GlintCard from '$lib/components/GlintCard.svelte';

  const LAST_UPDATED = '2026-04-29';

  const heroTrust = [
    { label: 'Interac payouts', body: 'Typically 15-30 minutes after approval', icon: Zap },
    { label: 'Casino', body: '500+ games, including slots and live dealer', icon: Trophy },
    { label: 'Sportsbook', body: 'NHL, NBA, NFL, UFC, soccer, and live betting', icon: BadgeCheck },
    {
      label: 'Safety',
      body: 'KYC, limits, self-exclusion, and support resources',
      icon: ShieldCheck,
    },
  ];

  const whyCards = [
    {
      title: 'Payments & payouts',
      body: 'Fast Interac e-Transfer deposits and withdrawals with minimal friction for all verified players.',
      icon: Zap,
    },
    {
      title: 'Casino selection',
      body: 'Premium slots, live dealer, table games, jackpots, and mobile-friendly play optimized for Canadian devices.',
      icon: ShieldCheck,
    },
    {
      title: 'Sportsbook markets',
      body: 'Comprehensive coverage of NHL, NBA, NFL, and major global sports leagues with competitive live odds.',
      icon: Trophy,
    },
    {
      title: 'Trust & support',
      body: 'Dedicated 24/7 assistance and advanced responsible-gaming tools for a safe and controlled experience.',
      icon: Gift,
    },
  ];

  const comparisonRows = [
    {
      feature: 'Interac withdrawals',
      value: 'Fast & Secure',
      check:
        'Quick processing after approval; KYC and bank-side completion times may apply.',
    },
    {
      feature: 'Casino games',
      value: '500+ Premium Games',
      check:
        'Access our extensive catalogue of slots, live dealer, table games, and mobile-optimized titles.',
    },
    {
      feature: 'Sportsbook',
      value: 'Deep Markets',
      check: 'Competitive odds, high limits, market depth, live betting, and parlay options.',
    },
    {
      feature: 'Bonuses',
      value: 'Fair Terms',
      check: 'Clear wagering requirements, game eligibility, and transparent bonus rules.',
    },
    {
      feature: 'Support',
      value: '24/7 Availability',
      check: 'Live chat, email support, and dedicated help with account and verification queries.',
    },
  ];

  const processSteps = [
    {
      title: 'Deposit',
      body: 'Choose Interac and confirm the transfer through your bank.',
      status: 'Instant to 30 minutes',
    },
    {
      title: 'Verification',
      body: 'Complete identity checks if required before larger or first withdrawals.',
      status: 'Instant to 24 hours',
    },
    {
      title: 'Withdraw',
      body: 'Standard security, bonus, and account checks before funds are released.',
      status: 'Fast Processing',
    },
    {
      title: 'Interac payout',
      body: 'Funds are sent after approval; first withdrawals or bank delays may take longer.',
      status: 'Usually 15-30 minutes',
    },
  ];

  const bonusRows = [
    {
      type: `${IBET_PROMO_SNAPSHOT[0].title}: ${IBET_PROMO_SNAPSHOT[0].headline}`,
      goodFor: 'New players',
      check: 'Confirm minimum deposit, wagering, eligible games, and when the 10 free spins expire.',
    },
    {
      type: `${IBET_PROMO_SNAPSHOT[1].title}: ${IBET_PROMO_SNAPSHOT[1].headline}`,
      goodFor: 'Returning depositors',
      check: 'Check whether the C$1000 cap is per deposit, per day, or limited to a campaign window.',
    },
    {
      type: IBET_PROMO_SNAPSHOT[2].title,
      goodFor: 'Seasonal campaign players',
      check: 'Verify qualification dates, eligible products, and any extra opt-in steps before playing.',
    },
    {
      type: 'Free spins terms',
      goodFor: 'Slot players',
      check: 'Review spin value, eligible games, win caps, and whether bonus funds stay non-withdrawable until playthrough is complete.',
    },
  ];

  const standOut = [
    {
      title: 'Full Transparency',
      body: 'Verified security and licensing for a safe Canadian iGaming experience.',
      icon: ShieldCheck,
    },
    {
      title: 'Payment Speed',
      body: 'Rapid Interac e-Transfer processing for deposits and withdrawals.',
      icon: Zap,
    },
    {
      title: 'Premium Catalogue',
      body: 'Over 500 world-class slots, live dealer tables, and jackpots.',
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
      body: 'Slots, live dealer, blackjack, roulette, baccarat, and jackpots',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.webp',
      alt: 'Luxury casino slot reels and jackpots with a dark premium interface.',
    },
    {
      title: 'Live Casino',
      body: 'Best for live dealer tables and streamed casino play',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.webp',
      alt: 'Live dealer casino table with cards, chips, and premium studio lighting.',
    },
    {
      title: 'Table Games',
      body: 'Best for classic casino rules and mobile table games',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.webp',
      alt: 'Classic blackjack table on a dark felt surface with polished chips.',
    },
    {
      title: 'Jackpots',
      body: 'Check terms, RTP information, and provider availability',
      href: '/casino',
      image: '/images/generated/casino-slots-hero.webp',
      alt: 'Luxury casino slot reels and jackpots with a dark premium interface.',
    },
  ];

  const sportsCards = [
    {
      title: 'Sports Betting',
      body: 'NHL, NBA, NFL, UFC, soccer, tennis, parlays, and futures',
      href: '/sportsbook',
      image: '/images/generated/sportsbook-premium-hero.webp',
      alt: 'Premium sportsbook dashboard showing major leagues, odds, and betting markets.',
    },
    {
      title: 'Live Betting',
      body: 'Confirm live market rules, accepted price, and settlement terms',
      href: '/sportsbook/live-betting',
      image: '/images/generated/sportsbook-live-betting-hero.webp',
      alt: 'Live betting interface with rapidly updating odds and match coverage.',
    },
    {
      title: 'Hockey',
      body: 'Hockey markets for Canadian bettors',
      href: '/sportsbook/nhl',
      image: '/images/generated/sportsbook-nhl-hero.webp',
      alt: 'Hockey betting card with rink-inspired visuals and Canadian sports context.',
    },
    {
      title: 'Basketball',
      body: 'Basketball markets, props, and parlays',
      href: '/sportsbook/nba',
      image: '/images/generated/sportsbook-nba-hero.webp',
      alt: 'Basketball betting card with props, parlays, and game-time odds.',
    },
  ];

  const guideCards = [
    {
      title: 'How to Start Betting in Canada',
      body: 'A beginner guide to sports betting.',
      href: '/guides/single-game-betting-canada',
      image: '/images/generated/sportsbook-parlay-hero.webp',
      alt: 'Canadian sports betting guide card with parlays and strategy visuals.',
    },
    {
      title: 'Best Casino Games for Real Money',
      body: 'Top picks for the best real-money games.',
      href: '/casino',
      image: '/images/generated/casino-premium-hero.webp',
      alt: 'Premium casino guide card with a refined dark-luxury atmosphere.',
    },
    {
      title: 'Fast Withdrawals Explained',
      body: 'Approval, KYC, and Interac timing explained.',
      href: '/deposit',
      image: '/images/generated/fast-payouts-hero.webp',
      alt: 'Fast payout guide card highlighting Interac timing and approval flow.',
    },
    {
      title: 'Bankroll Management 101',
      body: 'Set budgets and limits before playing.',
      href: '/guides/strategy',
      image: '/images/generated/bonus-wagering-hero.webp',
      alt: 'Bonus wagering guide card with casino terms and playthrough context.',
    },
  ];

  const faqs = [
    {
      q: 'Is 247iBET licensed in my province?',
      a: '247iBET is our elite casino and sportsbook for eligible Canadian players. We are fully committed to regulatory compliance; please confirm the legal registration status and provincial eligibility in your specific region through our current terms and your provincial regulator before signing up.',
    },
    {
      q: 'How fast are Interac withdrawals?',
      a: 'We prioritize speed. Interac withdrawals are typically processed within 15-30 minutes after our team approves the request. First withdrawals, larger payouts, KYC checks, bonus review, or bank-side delays may occasionally take longer.',
    },
    {
      q: 'What documents do you require for verification?',
      a: 'To ensure security and compliance, we may request government-issued ID, proof of address, and occasionally payment or source-of-funds documentation before approving your first withdrawal.',
    },
    {
      q: 'Are there any fees for deposits or withdrawals?',
      a: 'We strive for transparency. While most of our primary payment methods are fee-free, specific rules depend on the method, your bank, and account status. Please check our current cashier terms for full details before you deposit.',
    },
    {
      q: 'What bonus terms should I be aware of?',
      a: 'Our bonuses are designed to be fair and transparent. Always review the wagering requirements, eligible games or markets, max bet limits, and expiry dates. We clearly display these terms in the cashier before you opt in.',
    },
    {
      q: 'How can I set limits or take a break?',
      a: 'We provide robust responsible gaming tools directly in your account. You can set deposit, loss, wager, and session limits, or use cooling-off and self-exclusion tools at any time. Our support team is also available 24/7 to assist.',
    },
  ];

  const jumpLinks = [
    { href: '#why-it-stands-out', label: 'Why it stands out' },
    { href: '#interac-flow', label: 'Interac flow' },
    { href: '#casino-section', label: 'Casino' },
    { href: '#sportsbook-section', label: 'Sportsbook' },
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

  let mouseX = $state(0);
  let mouseY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX = (clientX / innerWidth - 0.5) * 20; // max 10px shift
    mouseY = (clientY / innerHeight - 0.5) * 20;
  }

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description:
        'Premier Canadian online casino and sportsbook offering 247iBET casino games, elite sports betting markets, lightning-fast Interac payouts, and secure responsible gaming.',
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
        '247iBET is Canada\'s premier online casino and sportsbook, offering fast Interac payouts, live dealer games, and player bonuses for Canadian players.',
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
      sameAs: SITE.sameAs,
      knowsAbout: [
        'Online Casino Canada',
        'Sports Betting Canada',
        'Interac Casino Payouts',
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
          description: 'Ontario\'s regulated online gambling authority',
        },
        {
          '@type': 'Organization',
          name: 'Alcohol and Gaming Commission of Ontario',
          description: 'AGCO — Ontario\'s gaming regulator',
        },
        {
          '@type': 'Organization',
          name: 'Interac',
          description: 'Canada\'s leading e-Transfer payment network for fast casino payouts',
        },
      ],
    },
    homeFaqSchema,
  ];
</script>

<svelte:head>
  <title>247iBET Canada: Premier Casino, Sportsbook & Fast Interac Payouts</title>
  <meta
    name="description"
    content="Experience 247iBET Canada: play our premium casino games, bet on your favorite sports, and enjoy lightning-fast Interac payouts. Sign up today for the ultimate iGaming experience."
  />
  <meta
    property="og:title"
    content="247iBET Canada: Premier Casino, Sportsbook & Fast Interac Payouts"
  />
  <meta
    property="og:description"
    content="Join 247iBET Canada for premium casino games, live sports betting, and instant Interac withdrawals. Your elite iGaming destination."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={SITE.url} />
  <link rel="canonical" href={canonicalUrl('/')} />
  <JsonLd schema={homeSchema} />
</svelte:head>

<div class="min-h-dvh bg-navy-black pt-16 text-white" onmousemove={handleMouseMove} role="presentation">
  <section class="relative flex min-h-[92dvh] items-center overflow-hidden border-b border-prestige-gold/30">
    <BackgroundAtmosphere src="/images/frozen-edge-hero.webp" />

    <!-- Gold radial glow behind the content -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div class="absolute top-1/3 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-prestige-gold/4 blur-[120px]"></div>
      <div class="absolute top-0 left-0 h-[40vh] w-[40vw] rounded-full bg-slate-blue/3 blur-[100px]"></div>
    </div>

    <div
      class="relative z-10 mx-auto w-full max-w-[1720px] px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24 xl:px-16"
    >
      <!-- Left: Typography block -->
      <div
        class="glass-premium animate-float-3d rounded-3xl p-6 shadow-2xl sm:p-8 lg:p-12"
        style="transform: translate3d({-mouseX}px, {-mouseY}px, 0);"
      >
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-2">
            <p class="text-[13px] font-black uppercase tracking-[0.22em] text-prestige-gold">
              247iBET Canada
            </p>
            <span class="h-1 w-1 rounded-full bg-white/20"></span>
            <span class="font-luxury text-[11px] text-prestige-gold-400 opacity-80"
              >The expert's choice</span
            >
          </div>
          <div class="flex items-center gap-2 rounded-full bg-prestige-gold/10 px-3 py-1 ring-1 ring-prestige-gold/20">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span class="text-[10px] font-black uppercase tracking-wider text-success">
              <span use:counter={{ start: 1200, end: 1458, duration: 3000 }}>1,246</span> Players Online
            </span>
          </div>
        </div>

        <h1 class="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.88] tracking-tighter text-white">
          Canada's Elite<br />
          <span class="text-gold-foil">Casino & Sportsbook</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-text-body sm:text-lg">
          Premium casino games, live sports betting, and lightning-fast Interac payouts — built for players who expect more.
        </p>

        <div class="mt-5 flex items-center gap-2 text-xs font-medium tracking-wide text-text-tertiary">
          <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-prestige-gold-500 shadow-[0_0_8px_rgba(212,148,58,0.6)]"></span>
          Last updated: <time datetime={LAST_UPDATED}>{LAST_UPDATED}</time>
        </div>

        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group btn-magnetic">
            {IBET_CTA.register}
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </SafeExternalLink>
          <a href="/deposit" class="hero-cta-secondary btn-magnetic">{IBET_CTA.fastPayout}</a>
        </div>

        <!-- Hero stat strip inside glass card -->
        <div class="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
          <div class="text-center">
            <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">500+</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Casino Games</p>
          </div>
          <div class="text-center">
            <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">15-30<span class="text-sm">min</span></p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Interac Payouts</p>
          </div>
          <div class="text-center">
            <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-white">24/7</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Player Support</p>
          </div>
          <div class="text-center">
            <p class="text-[clamp(1.2rem,2vw,1.6rem)] font-black text-prestige-gold">50K+</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-text-tertiary">Canadian Players</p>
          </div>
        </div>
      </div>

      <!-- Right: Payout Progress (desktop only) -->
      <div class="hidden lg:flex lg:items-center lg:pl-10">
        <PayoutProgress activeStep={2} />
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
      <ChevronDown class="h-6 w-6 text-prestige-gold/50" aria-hidden="true" />
    </div>
  </section>

  <OddsTicker />

  <nav
    class="mx-auto max-w-[1720px] px-4 pt-1 sm:px-6 lg:px-10 xl:px-16"
    aria-label="Jump links"
  >
    <div class="flex gap-2 overflow-x-auto rounded-2xl border border-white/5 bg-navy-card/80 p-2 shadow-2xl snap-x snap-mandatory scroll-smooth hide-scrollbar">
      {#each jumpLinks as link}
        <a
          href={link.href}
          class="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-body transition-colors hover:border-prestige-gold/30 hover:bg-prestige-gold/10 hover:text-prestige-gold snap-start"
        >
          {link.label}
        </a>
      {/each}
    </div>
  </nav>

  <div
    class="mx-auto max-w-[1720px] space-y-5 px-4 py-5 sm:space-y-7 sm:px-6 sm:py-7 lg:px-10 xl:px-16"
  >
    <section
      id="trust-verification"
      class="grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-2xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {#each heroTrust as item, i}
        {@const Icon = item.icon}
        <GlintCard
          useReveal={true}
          style="--reveal-delay: {i * 100}ms"
          class="reveal-fade-up group relative flex items-start gap-4 bg-navy-card/95 p-5 transition-all hover:bg-navy-raised hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] sm:p-6 card-hover-lift"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold transition-all group-hover:scale-110 group-hover:bg-prestige-gold group-hover:text-navy-black group-hover:shadow-[0_0_20px_rgba(212,148,58,0.4)]"
          >
            <Icon class="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-prestige-gold/80 group-hover:text-prestige-gold">{item.label}</p>
            <p class="mt-1.5 text-sm font-medium leading-relaxed text-text-primary">{item.body}</p>
          </div>
        </GlintCard>
      {/each}
    </section>

    <section
      id="promo-video"
      use:reveal
      class="reveal-fade-up grid gap-5 overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-4 shadow-2xl sm:p-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6 lg:p-7"
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
          A quick look at our casino categories, sportsbook markets, Interac payment flow, verification
          process, support, and responsible-play tools.
        </p>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-6 w-full justify-center sm:w-fit btn-magnetic"
        >
          {IBET_CTA.primary}
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>

      <div class="overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <video
          class="aspect-video w-full bg-navy-black object-cover"
          controls
          playsinline
          preload="metadata"
          width="1280"
          height="720"
          poster="/images/generated/casino-premium-hero.webp"
          aria-label="247iBET casino, sportsbook, and fast payouts overview video"
        >
          <source src="/videos/247ibet-home-promo.mp4" type="video/mp4" />
          Your browser does not support embedded video. Open the 247iBET overview video at /videos/247ibet-home-promo.mp4.
        </video>
      </div>
    </section>

    <section
      id="why-it-stands-out"
      class="grid overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 lg:grid-cols-[0.42fr_0.58fr]"
    >
      <aside class="border-b border-prestige-gold/20 p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <p class="mb-3 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
          Trust & verification
        </p>
        <h2 class="font-display text-4xl font-black sm:text-5xl">
          Safe & Secure iGaming Experience
        </h2>
        <p class="mt-5 max-w-md text-sm leading-6 text-text-body">
          We maintain the highest standards for security, payment reliability, and
          responsible-gaming controls. Our platform ensures your data and transactions are protected
          using industry-leading encryption and verification protocols for a seamless Canadian gaming experience.
        </p>
        <ul class="mt-5 space-y-3 text-sm text-text-body">
          {#each ['Regulated and secure gaming environment', 'Verified Interac e-Transfer payouts', 'Fast KYC and identity verification', 'Dedicated 24/7 player support'] as item}
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
          We prioritize transparency and speed in every aspect of our service. From game selection to payout
          processing, our focus is on providing a premium experience for every Canadian player.
        </p>
        <div
          class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {#each whyCards as card, i}
            {@const Icon = card.icon}
            <GlintCard
              useReveal={true}
              style="--reveal-delay: {i * 100}ms"
              class="reveal-fade-up luxury-card group relative rounded-2xl p-6 transition-all hover:-translate-y-1 {i === 0 ? 'lg:col-span-2' : ''} card-hover-lift"
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
            <article class="rounded-xl border border-white/10 bg-black/20 p-4">
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
          class="table-scroll-wrap mt-6 hidden overflow-x-auto rounded-xl border border-white/10 lg:block"
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
      class="reveal-fade-up glow-gold grid gap-5 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-5 sm:p-6 lg:grid-cols-[0.32fr_0.68fr]"
    >
      <div>
        <h2 class="text-4xl font-black md:text-5xl">Interac deposits and withdrawals</h2>
        <p class="mt-3 text-sm leading-6 text-text-body">
          We process deposits instantly. Withdrawal speed depends on approval, identity verification, 
          bonus terms, and bank processing times.
        </p>
        <a href="/deposit" class="page-cta-primary-sm mt-5 inline-flex btn-magnetic">Compare Payouts</a>
      </div>
      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
      >
        {#each processSteps as step, index}
          <article use:reveal class="reveal-fade-up rounded-xl border border-white/10 bg-black/20 p-5 card-hover-lift">
            <div
              class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
            >
              {index + 1}
            </div>
            <h3 class="font-black text-prestige-gold">{step.title}</h3>
            <p class="mt-3 text-sm leading-6 text-text-body sm:min-h-[72px]">{step.body}</p>
            <span
              class="mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success"
              >{step.status}</span
            >
          </article>
        {/each}
      </div>
    </section>

    <section
      use:reveal
      class="reveal-fade-up rounded-2xl border border-white/5 bg-navy-card/50 p-4 sm:p-8"
    >
      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
      >
        <div class="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy-raised to-navy-card p-6 shadow-xl sm:col-span-2 sm:row-span-2 lg:p-10">
          <p class="font-luxury text-prestige-gold-400 mb-2 opacity-80">Unmatched Standards</p>
          <h2 class="font-display text-3xl font-black leading-tight tracking-tighter text-white md:text-5xl">
            Why 247iBET <span class="text-gold-foil">Stands Out</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-text-body">
            The premium choice for Canadian players, prioritizing security,
            lightning-fast payments, and transparent gaming terms.
          </p>          <div class="mt-8">
             <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm btn-magnetic">
                Get Started
             </SafeExternalLink>
          </div>
        </div>

        {#each standOut as item, i}
          {@const Icon = item.icon}
          <GlintCard
            useReveal={true}
            style="--reveal-delay: {(i + 2) * 100}ms"
            class="reveal-fade-up group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/80 p-6 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
          >
            <div class="relative z-10">
              <Icon class="h-8 w-8 text-prestige-gold transition-transform group-hover:scale-110" aria-hidden="true" />
              <h3 class="mt-4 font-display text-xl font-black text-white">{item.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-body">{item.body}</p>
            </div>
            <div class="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-prestige-gold/5 blur-2xl transition-all group-hover:bg-prestige-gold/10"></div>
          </GlintCard>
        {/each}
      </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-2">
      <div class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="text-3xl font-black">Casino</h2>
          <a
            href="/casino"
            class="view-all-link"
            >Explore Casino <ArrowRight class="h-3 w-3" /></a
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {#each casinoCards as card}
            <a
              href={card.href}
              class="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/50 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
            >
              <div class="relative h-36 w-full overflow-hidden sm:h-32 shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {#if card.title.includes('Live')}
                  <div class="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-navy-black/60 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-success backdrop-blur-md ring-1 ring-success/30">
                    <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    Live Now
                  </div>
                {/if}
              </div>
              <div class="p-5">
                <h3 class="font-display text-lg font-black text-white group-hover:text-prestige-gold">{card.title}</h3>
                <p class="mt-1.5 text-sm leading-relaxed text-text-body line-clamp-2">{card.body}</p>
                <div class="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold transition-colors group-hover:text-white">
                  Explore
                  <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <div class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="text-3xl font-black">Sportsbook</h2>
          <a
            href="/sportsbook"
            class="view-all-link"
            >Explore Sportsbook <ArrowRight class="h-3 w-3" /></a
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {#each sportsCards as card}
            <a
              href={card.href}
              class="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/50 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
            >
              <div class="relative h-36 w-full overflow-hidden sm:h-32 shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 12vw, (min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {#if card.title.includes('Live')}
                  <div class="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-navy-black/60 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-success backdrop-blur-md ring-1 ring-success/30">
                    <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    Live Odds
                  </div>
                {/if}
              </div>
              <div class="p-5">
                <h3 class="font-display text-lg font-black text-white group-hover:text-prestige-gold">{card.title}</h3>
                <p class="mt-1.5 text-sm leading-relaxed text-text-body line-clamp-2">{card.body}</p>
                <div class="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold transition-colors group-hover:text-white">
                  Explore
                  <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section id="bonus-terms" class="rounded-xl border border-prestige-gold/25 bg-navy-card/75 p-5 sm:p-6">
      <div class="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">Bonuses</p>
          <h2 class="mt-3 text-3xl font-black">Check the terms before claiming</h2>
          <p class="mt-3 text-sm leading-6 text-text-body">
            Promotions can add value only when the rules are clear. Review wagering, expiry, max
            bet, eligible games or markets, and withdrawal limits before opting in.
          </p>
          <a href="/casino-bonuses-canada" class="page-cta-primary-sm mt-5 inline-flex"
            >Check Bonus Terms</a
          >
        </div>
        <div class="grid gap-3 lg:hidden">
          {#each bonusRows as row}
            <article class="rounded-xl border border-white/10 bg-black/20 p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-black text-white">{row.type}</h3>
                <span
                  class="shrink-0 rounded-full bg-prestige-gold/10 px-3 py-1 text-xs font-black text-prestige-gold"
                >
                  {row.goodFor}
                </span>
              </div>
              <p class="mt-3 text-sm leading-6 text-text-body">{row.check}</p>
            </article>
          {/each}
        </div>
        <div
          class="table-scroll-wrap hidden overflow-x-auto rounded-xl border border-white/10 lg:block"
        >
          <table class="w-full min-w-[720px] text-left text-sm">
            <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
              <tr>
                <th class="px-4 py-3">Bonus type</th>
                <th class="px-4 py-3">Good for</th>
                <th class="px-4 py-3">Check before claiming</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/8">
              {#each bonusRows as row}
                <tr>
                  <td class="px-4 py-3 font-black text-white">{row.type}</td>
                  <td class="px-4 py-3 text-prestige-gold">{row.goodFor}</td>
                  <td class="px-4 py-3 text-text-body">{row.check}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="text-3xl font-black">Expert Guides</h2>
        <a
          href="/guides"
          class="view-all-link"
          >View All Guides <ArrowRight class="h-3 w-3" /></a
        >
      </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {#each guideCards as card, i}
            <GlintCard
              useReveal={true}
              style="--reveal-delay: {i * 100}ms"
              class="reveal-fade-up luxury-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-3 transition-all hover:bg-navy-raised hover:shadow-2xl card-hover-lift"
            >
              <a
                href={card.href}
                class="contents"
              >
                <div class="relative h-44 w-full shrink-0 overflow-hidden rounded-xl lg:h-32 shimmer-effect">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-navy-black/60 to-transparent"></div>
                </div>
                <div class="flex flex-col justify-between px-2 pb-2">
                  <div>
                    <h3 class="font-display text-base font-black leading-snug text-white group-hover:text-prestige-gold transition-colors">{card.title}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2">{card.body}</p>
                  </div>
                  <div class="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold transition-colors">
                    Read Guide
                    <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </GlintCard>
          {/each}
        </div>
    </section>

    <section id="faq-section" class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="text-3xl font-black">Frequently Asked Questions</h2>
        <a
          href="/faq"
          class="view-all-link"
          >View All FAQs <ArrowRight class="h-3 w-3" /></a
        >
      </div>
      <div class="flex flex-col gap-3">
        {#each faqs as faq, i}
          <div class="group overflow-hidden rounded-xl border border-white/5 bg-navy-card/50 transition-all hover:border-white/10">
            <button
              id="home-faq-btn-{i}"
              type="button"
              class="flex w-full items-center justify-between px-5 py-5 text-left text-base font-black text-white transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
              aria-expanded={homeFaqOpenIndex === i}
              aria-controls="home-faq-panel-{i}"
              onclick={() => (homeFaqOpenIndex = homeFaqOpenIndex === i ? null : i)}
            >
              <span class="max-w-[90%]">{faq.q}</span>
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-prestige-gold group-hover:text-navy-black {homeFaqOpenIndex === i ? 'rotate-180 bg-prestige-gold text-navy-black' : ''}">
                <ChevronDown
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </div>
            </button>
            <div
              id="home-faq-panel-{i}"
              role="region"
              aria-labelledby="home-faq-btn-{i}"
              hidden={homeFaqOpenIndex !== i}
              class="bg-black/20 px-5 py-5 border-t border-white/5"
            >
              <p class="text-sm leading-relaxed text-text-body">{faq.a}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
      <div class="grid items-center gap-6 lg:grid-cols-[0.7fr_0.3fr]">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
            Responsible gaming
          </p>
          <h2 class="mt-3 text-3xl font-black">Gambling should be entertainment</h2>
          <p class="mt-3 max-w-4xl text-sm leading-6 text-text-body">
            Set a budget before playing, use deposit and session limits, and take a break if
            gambling stops feeling fun. Support is available through provincial resources and
            responsible-gaming organizations.
          </p>
        </div>
        <a href="/responsible-gambling" class="page-cta-primary justify-center"
          >View Responsible Gaming Tools</a
        >
      </div>
    </section>



    <!-- Gold moment: full-bleed CTA -->
    <section
      class="overflow-hidden rounded-2xl bg-gradient-to-br from-prestige-gold-400 via-prestige-gold to-prestige-gold-600 p-8 shadow-[0_0_60px_-10px_rgba(212,148,58,0.35)] sm:p-12 md:p-16"
    >
      <div class="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black text-navy-black sm:text-5xl md:text-6xl">
            Ready to join <span class="text-navy-black/80">247iBET</span>?
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-navy-black/80 sm:text-lg sm:leading-8">
            Fast payouts, premium games, and secure sports betting are just a click away.
            Join thousands of Canadian players today.
          </p>
        </div>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-navy-black px-12 py-5 text-base font-black uppercase tracking-[0.12em] text-prestige-gold shadow-2xl transition-all hover:scale-105 hover:bg-navy-black/90 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] active:scale-100 w-full justify-center sm:w-auto sm:min-w-72"
        >
          {IBET_CTA.register}
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
