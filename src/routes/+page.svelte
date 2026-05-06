<script lang="ts">
  import { canonicalUrl } from '$lib/site';
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
  import { IBET_PROMO_SNAPSHOT, IBET_URLS } from '$lib/ibet-brand';


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
      score: '4.7',
      body: 'Interac support, approval timing, verification friction, and payout caveats.',
      icon: Zap,
    },
    {
      title: 'Casino selection',
      score: '4.5',
      body: 'Slots, live dealer, table games, jackpots, and mobile-friendly play.',
      icon: ShieldCheck,
    },
    {
      title: 'Sportsbook markets',
      score: '4.4',
      body: 'Pre-match, live betting, parlays, and major Canadian sports coverage.',
      icon: Trophy,
    },
    {
      title: 'Trust & support',
      score: '4.2',
      body: 'Licensing transparency, terms, responsible-gaming tools, and support options.',
      icon: Gift,
    },
  ];

  const comparisonRows = [
    {
      feature: 'Interac withdrawals',
      value: 'Review before depositing',
      check:
        'Confirm availability and timing after operator approval; KYC and bank delays may apply.',
    },
    {
      feature: 'Casino games',
      value: '500+ cited in review materials',
      check:
        'Verify current catalogue, providers, RTP info, live dealer coverage, and mobile performance.',
    },
    {
      feature: 'Sportsbook',
      value: 'Review markets first',
      check: 'Odds, limits, market depth, live betting rules, and parlay options.',
    },
    {
      feature: 'Bonuses',
      value: 'Terms required',
      check: 'Wagering requirement, max bet, eligible games/markets, and expiry.',
    },
    {
      feature: 'Support',
      value: 'Claimed availability varies',
      check: 'Live chat, email response time, escalation path, and account review help.',
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
      body: 'Operator reviews account status, bonus activity, and security signals.',
      status: 'Varies',
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
      title: 'Licensing transparency',
      body: 'Confirm the operator and provincial eligibility before depositing.',
      icon: ShieldCheck,
    },
    {
      title: 'Payment clarity',
      body: 'Interac timing is framed around approval, KYC, bonus review, and bank processing.',
      icon: Zap,
    },
    {
      title: 'Game catalogue',
      body: '500+ slots, live dealer titles, jackpots, and table games.',
      icon: Trophy,
    },
    {
      title: 'Bonus terms',
      body: 'Check wagering, max bet, win caps, eligible markets, and expiry before opting in.',
      icon: Sparkles,
    },
  ];

  const casinoCards = [
    {
      title: 'Slots',
      body: 'Slots, live dealer, blackjack, roulette, baccarat, and jackpots',
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
      body: 'Check terms, RTP information, and provider availability',
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
      body: 'Confirm live market rules, accepted price, and settlement terms',
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
      title: 'How to Start Betting in Canada',
      body: 'A beginner guide to sports betting.',
      href: '/guides/single-game-betting-canada',
      image: '/images/generated/sportsbook-parlay-hero.png',
      alt: 'Canadian sports betting guide card with parlays and strategy visuals.',
    },
    {
      title: 'Best Casino Games for Real Money',
      body: 'Top picks for the best real-money games.',
      href: '/casino',
      image: '/images/generated/casino-premium-hero.png',
      alt: 'Premium casino guide card with a refined dark-luxury atmosphere.',
    },
    {
      title: 'Fast Withdrawals Explained',
      body: 'Approval, KYC, and Interac timing explained.',
      href: '/deposit',
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
      q: 'Is 247iBET licensed in my province?',
      a: '247iBET is presented here as an independent guide. Confirm the legal operator, registration status, and provincial eligibility with the operator and your provincial regulator before depositing.',
    },
    {
      q: 'How fast are Interac withdrawals?',
      a: 'Interac withdrawals are typically processed within 15-30 minutes after operator approval. First withdrawals, larger payouts, KYC checks, bonus review, or bank delays may take longer.',
    },
    {
      q: 'What documents are required for verification?',
      a: 'Most operators may request government ID, proof of address, and sometimes payment or source-of-funds documentation before approving withdrawals.',
    },
    {
      q: 'Are there fees for deposits or withdrawals?',
      a: 'Fee rules depend on the operator, payment method, bank, and account status. Check the current cashier terms before depositing.',
    },
    {
      q: 'What bonus terms should I check?',
      a: 'Review wagering requirements, eligible games or markets, max bet, expiry, win caps, withdrawal limits, and whether sports or casino play contributes differently.',
    },
    {
      q: 'How do I set limits or take a break?',
      a: 'Use deposit, loss, wager, session, cooling-off, and self-exclusion tools where available. Support is also available through provincial responsible-gaming resources.',
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
      name: '247iBET',
      url: 'https://247ibet.ca',
      description:
        'Independent Canadian iGaming guide covering 247iBET casino games, sportsbook markets, Interac payout timing, bonuses, safety tools, and responsible play.',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '247iBET',
      url: 'https://247ibet.ca',
      logo: 'https://247ibet.ca/images/brand/logo.png',
    },
    homeFaqSchema,
  ];
</script>

<svelte:head>
  <title>247iBET Review Canada: Casino, Sportsbook, Interac Payouts &amp; Bonuses</title>
  <meta
    name="description"
    content="Independent 247iBET review for Canadian players: compare casino games, sportsbook markets, Interac payout timing, bonuses, verification, and responsible-gaming tools."
  />
  <meta
    property="og:title"
    content="247iBET Review Canada: Casino, Sportsbook, Interac Payouts & Bonuses"
  />
  <meta
    property="og:description"
    content="Compare 247iBET casino games, sportsbook markets, Interac payout timing, bonuses, support, and responsible-gaming tools before creating an account."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://247ibet.ca" />
  <link rel="canonical" href={canonicalUrl('/')} />
  <JsonLd schema={homeSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 text-white" onmousemove={handleMouseMove} role="presentation">
  <section class="relative overflow-hidden border-b border-prestige-gold/30">
    <div class="absolute inset-0">
      <img
        src="/images/generated/casino-premium-hero.png"
        alt="247iBET casino and sportsbook overview background"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover opacity-70"
        style="transform: translate3d({mouseX * 0.5}px, {mouseY * 0.5}px, 0) scale(1.1);"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,#070C18_0%,rgba(7,12,24,0.9)_42%,rgba(7,12,24,0.6)_100%)] sm:bg-[linear-gradient(90deg,#070C18_0%,rgba(7,12,24,0.84)_34%,rgba(7,12,24,0.42)_100%)]"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-black to-transparent"
      ></div>
    </div>

    <div
      class="relative mx-auto grid min-h-[560px] max-w-[1720px] items-center px-4 py-12 pb-10 sm:min-h-[620px] sm:px-6 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-16"
    >
      <div
        class="glass-premium animate-float-3d max-w-3xl rounded-3xl p-6 shadow-2xl sm:p-8 lg:p-12"
        style="transform: translate3d({-mouseX}px, {-mouseY}px, 0);"
      >
        <div class="mb-6 flex items-center gap-3">
          <p
            class="animate-fade-in-up text-[13px] font-black uppercase tracking-[0.2em] text-prestige-gold"
          >
            Canadian iGaming Guide
          </p>
          <div class="flex items-center gap-2 rounded-full bg-prestige-gold/10 px-3 py-1 ring-1 ring-prestige-gold/20">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span class="text-[10px] font-black uppercase tracking-wider text-success">Live Status: Verified</span>
          </div>
        </div>
        <h1
          class="page-hero-title animate-fade-in-up-delay-1 !tracking-tighter"
        >
          247iBET Review: Casino, Sportsbook & <span class="text-prestige-gold-400"
            >Interac Payouts</span
          >
        </h1>
        <p
          class="mt-6 max-w-xl animate-fade-in-up-delay-2 text-base leading-relaxed text-text-body sm:text-lg"
        >
          <span class="hidden sm:inline">Compare 247iBET&apos;s casino categories, sportsbook markets, Interac payment flow,
          bonuses, support, and responsible-gaming tools before you visit a partner site.</span>
          <span class="sm:hidden">Expert Canadian review of casino categories, sportsbook markets, and Interac payout timing.</span>
        </p>
        <div class="mt-5 flex items-center gap-2 text-xs font-medium tracking-wide text-text-tertiary">
          <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-prestige-gold-500 shadow-[0_0_8px_rgba(212,148,58,0.6)]"></span>
          Last updated: <time datetime={LAST_UPDATED}>{LAST_UPDATED}</time>
        </div>
        <div
          class="mt-8 flex animate-fade-in-up-delay-3 flex-col gap-4 sm:flex-row"
        >
          <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group shimmer-effect">
            Visit Partner Site
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </SafeExternalLink>
          <a href="/deposit" class="hero-cta-secondary glass-thin"> See Payout Details </a>
        </div>
        <p
          class="mt-8 max-w-2xl rounded-xl border border-white/5 bg-white/[0.03] px-4 py-4 text-[13px] leading-relaxed text-text-body/80"
        >
          247iBET is an independent Canadian iGaming guide. We review casino and sportsbook options
          and may earn a commission when you click partner links. Ratings are editorial and based on
          payout speed, game selection, support, safety tools, and payment options.
        </p>
      </div>
    </div>
  </section>

  <nav
    class="mx-auto max-w-[1720px] px-4 pt-1 sm:px-6 lg:px-10 xl:px-16"
    aria-label="Jump links"
  >
    <div class="flex gap-2 overflow-x-auto rounded-2xl border border-white/5 bg-navy-card/80 p-2 shadow-2xl">
      {#each jumpLinks as link}
        <a
          href={link.href}
          class="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-body transition-colors hover:border-prestige-gold/30 hover:bg-prestige-gold/10 hover:text-prestige-gold"
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
      {#each heroTrust as item}
        {@const Icon = item.icon}
        <div
          class="group relative flex items-start gap-4 bg-navy-card/95 p-5 transition-all hover:bg-navy-raised hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] sm:p-6"
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
          <div class="absolute inset-0 border border-white/0 transition-colors group-hover:border-prestige-gold/10 rounded-2xl"></div>
        </div>
      {/each}
    </section>

    <section
      id="promo-video"
      class="grid gap-5 overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-4 shadow-2xl sm:p-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6 lg:p-7"
      aria-labelledby="home-promo-video-title"
    >
      <div class="flex flex-col justify-center">
        <p class="text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
          Watch the overview
        </p>
        <h2 id="home-promo-video-title" class="mt-3 text-4xl font-black md:text-5xl">
          Review the 247iBET experience in 30 seconds
        </h2>
        <p class="mt-4 text-sm leading-6 text-text-body">
          A quick look at casino categories, sportsbook markets, Interac payment flow, verification
          notes, support, and responsible-play tools for Canadian players.
        </p>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-6 w-full justify-center sm:w-fit"
        >
          Visit Partner Site
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
          poster="/images/generated/casino-premium-hero.png"
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
          Is 247iBET safe for Canadian players?
        </h2>
        <p
          class="mt-4 font-mono text-sm font-black uppercase tracking-[0.16em] text-slate-blue-400"
        >
          Editorial rating: <span class="text-white">4.6</span> / 5
        </p>
        <p class="mt-5 max-w-md text-sm leading-6 text-text-body">
          We review each operator for licensing transparency, payment reliability, game-selection
          claims, customer support, bonus terms, and responsible-gaming controls. Before depositing,
          confirm that the operator is available in your province and that your account, payment
          method, and identity details match your legal information.
        </p>
        <ul class="mt-5 space-y-3 text-sm text-text-body">
          {#each ['247iBET is an independent guide, not itself a licensed gaming operator', 'Verify operator licensing with the operator and provincial regulator', 'Interac timing depends on approval, KYC, bonus review, and bank processing', 'Last reviewed: April 2026'] as item}
            <li class="flex gap-3">
              <BadgeCheck class="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
              <span>{item}</span>
            </li>
          {/each}
        </ul>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-8 w-full justify-center"
        >
          Visit Partner Site
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </aside>

      <div class="p-5 sm:p-7">
        <h2 class="text-2xl font-black">247iBET rating methodology</h2>
        <p class="mt-3 max-w-3xl text-sm leading-6 text-text-body">
          Ratings are editorial estimates based on publicly available information and stated
          operator terms. They are not guarantees of licensing status, payout speed, bonus
          eligibility, or account approval.
        </p>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each whyCards as card, i}
            {@const Icon = card.icon}
            <article
              class="luxury-card group relative rounded-2xl p-6 transition-all hover:-translate-y-1 {i === 0 ? 'lg:col-span-2' : ''}"
            >
              <div class="flex items-start justify-between gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl bg-prestige-gold/10 text-prestige-gold transition-all group-hover:bg-prestige-gold group-hover:text-navy-black"
                >
                  <Icon class="h-6 w-6" aria-hidden="true" />
                </div>
                <div class="text-right">
                   <span class="font-mono text-2xl font-black text-prestige-gold leading-none">{card.score}</span>
                   <div class="mt-1 flex justify-end gap-0.5">
                    {#each Array(5) as _, starIdx}
                      <span class="h-1 w-3 rounded-full {starIdx < Math.floor(Number(card.score)) ? 'bg-prestige-gold' : 'bg-white/10'}"></span>
                    {/each}
                  </div>
                </div>
              </div>
              <h3 class="mt-6 font-display text-xl font-black text-white">{card.title}</h3>
              <p class="mt-3 text-sm leading-relaxed text-text-body">{card.body}</p>
            </article>
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
                <th class="px-4 py-3">Review note</th>
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
      class="grid gap-5 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-5 sm:p-6 lg:grid-cols-[0.32fr_0.68fr]"
    >
      <div>
        <h2 class="text-4xl font-black md:text-5xl">Interac deposits and withdrawals</h2>
        <p class="mt-3 text-sm leading-6 text-text-body">
          Deposits are usually quick, while withdrawals depend on approval, verification, bonus
          terms, and bank processing.
        </p>
        <a href="/deposit" class="page-cta-primary-sm mt-5 inline-flex">Compare Payouts</a>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {#each processSteps as step, index}
          <article class="rounded-xl border border-white/10 bg-black/20 p-5">
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

    <section class="rounded-2xl border border-white/5 bg-navy-card/50 p-4 sm:p-8">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        <div class="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy-raised to-navy-card p-6 shadow-xl sm:col-span-2 sm:row-span-2 lg:p-10">
          <h2 class="font-display text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Why 247iBET <span class="text-prestige-gold">Stands Out</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-text-body">
            A clearer review surface for players comparing safety, payments, games, bonuses, and
            support before signup. We prioritize transparency and speed.
          </p>
          <div class="mt-8">
             <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm">
                Get Started
             </SafeExternalLink>
          </div>
        </div>

        {#each standOut as item}
          {@const Icon = item.icon}
          <article
            class="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/80 p-6 transition-all hover:bg-navy-raised hover:shadow-2xl shimmer-effect"
          >
            <div class="relative z-10">
              <Icon class="h-8 w-8 text-prestige-gold transition-transform group-hover:scale-110" aria-hidden="true" />
              <h3 class="mt-4 font-display text-xl font-black text-white">{item.title}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-body">{item.body}</p>
            </div>
            <div class="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-prestige-gold/5 blur-2xl transition-all group-hover:bg-prestige-gold/10"></div>
          </article>
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
              class="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/50 transition-all hover:bg-navy-raised hover:shadow-2xl"
            >
              <div class="relative h-36 w-full overflow-hidden sm:h-32 shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
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
              class="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-card/50 transition-all hover:bg-navy-raised hover:shadow-2xl"
            >
              <div class="relative h-36 w-full overflow-hidden sm:h-32 shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
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
          {#each guideCards as card}
            <a
              href={card.href}
              class="luxury-card group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-3 transition-all hover:bg-navy-raised hover:shadow-2xl"
            >
              <div class="relative h-44 w-full shrink-0 overflow-hidden rounded-xl lg:h-32 shimmer-effect">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
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



    <section
      class="overflow-hidden rounded-xl border border-prestige-gold/40 bg-[linear-gradient(100deg,#101827,#080d18)] p-5 shadow-2xl sm:p-8 md:p-12"
    >
      <div class="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black sm:text-4xl md:text-5xl">
            Ready to compare <span class="text-prestige-gold">247iBET</span>?
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-text-body sm:text-lg sm:leading-8">
            Review payment terms, bonus conditions, verification requirements, and
            responsible-gaming tools before creating an account.
          </p>
        </div>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary w-full justify-center sm:w-auto sm:min-w-72"
        >
          Visit Partner Site
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
