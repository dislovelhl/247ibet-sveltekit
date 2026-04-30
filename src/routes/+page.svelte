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
    Users,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import AuthorByline from '$lib/components/AuthorByline.svelte';

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
      type: 'Welcome bonus',
      goodFor: 'New players',
      check: 'Wagering requirement, max bet, and expiry',
    },
    {
      type: 'Free spins',
      goodFor: 'Slot players',
      check: 'Eligible games, spin value, and win cap',
    },
    {
      type: 'Odds boost',
      goodFor: 'Sports bettors',
      check: 'Max stake, market eligibility, and settlement rules',
    },
    {
      type: 'Reload bonus',
      goodFor: 'Returning players',
      check: 'Deposit minimum, wagering, and expiry',
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
    {
      title: 'Responsible play',
      body: 'Set limits, take breaks, and use provincial support resources when needed.',
      icon: Users,
    },
  ];

  const casinoCards = [
    {
      title: 'Slots',
      body: 'Slots, live dealer, blackjack, roulette, baccarat, and jackpots',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.png',
    },
    {
      title: 'Live Casino',
      body: 'Best for live dealer tables and streamed casino play',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.png',
    },
    {
      title: 'Table Games',
      body: 'Best for classic casino rules and mobile table games',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.png',
    },
    {
      title: 'Jackpots',
      body: 'Check terms, RTP information, and provider availability',
      href: '/casino',
      image: '/images/generated/casino-slots-hero.png',
    },
  ];

  const sportsCards = [
    {
      title: 'Sports Betting',
      body: 'NHL, NBA, NFL, UFC, soccer, tennis, parlays, and futures',
      href: '/sportsbook',
      image: '/images/generated/sportsbook-premium-hero.png',
    },
    {
      title: 'Live Betting',
      body: 'Confirm live market rules, accepted price, and settlement terms',
      href: '/sportsbook/live-betting',
      image: '/images/generated/sportsbook-live-betting-hero.png',
    },
    {
      title: 'Hockey',
      body: 'Hockey markets for Canadian bettors',
      href: '/sportsbook/nhl',
      image: '/images/generated/sportsbook-nhl-hero.png',
    },
    {
      title: 'Basketball',
      body: 'Basketball markets, props, and parlays',
      href: '/sportsbook/nba',
      image: '/images/generated/sportsbook-nba-hero.png',
    },
  ];

  const guideCards = [
    {
      title: 'How to Start Betting in Canada',
      body: 'A beginner guide to sports betting.',
      href: '/guides/single-game-betting-canada',
      image: '/images/generated/sportsbook-parlay-hero.png',
    },
    {
      title: 'Best Casino Games for Real Money',
      body: 'Top picks for the best real-money games.',
      href: '/casino',
      image: '/images/generated/casino-premium-hero.png',
    },
    {
      title: 'Fast Withdrawals Explained',
      body: 'Approval, KYC, and Interac timing explained.',
      href: '/deposit',
      image: '/images/generated/fast-payouts-hero.png',
    },
    {
      title: 'Bankroll Management 101',
      body: 'Set budgets and limits before playing.',
      href: '/guides/strategy',
      image: '/images/generated/bonus-wagering-hero.png',
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

  let homeFaqOpenIndex = $state<number | null>(null);

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

<div class="min-h-screen bg-navy-black pt-6 text-white">
  <section class="relative overflow-hidden border-b border-prestige-gold/30">
    <div class="absolute inset-0">
      <img
        src="/images/generated/casino-premium-hero.png"
        alt=""
        loading="eager"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover opacity-70"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,#070C18_0%,rgba(7,12,24,0.9)_42%,rgba(7,12,24,0.6)_100%)] sm:bg-[linear-gradient(90deg,#070C18_0%,rgba(7,12,24,0.84)_34%,rgba(7,12,24,0.42)_100%)]"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-black to-transparent"
      ></div>
    </div>

    <div
      class="relative mx-auto grid min-h-[520px] max-w-[1720px] items-center px-4 py-12 pb-10 sm:min-h-[580px] sm:px-6 sm:py-16 lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr] lg:px-10 xl:px-16"
    >
      <div
        class="max-w-4xl rounded-2xl border border-white/10 bg-navy-black/55 p-4 shadow-2xl backdrop-blur-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0"
      >
        <p
          class="mb-4 animate-fade-in-up text-[11px] font-black uppercase tracking-[0.18em] text-prestige-gold sm:mb-5 sm:text-xs sm:tracking-[0.24em]"
        >
          Canadian iGaming Guide
        </p>
        <h1
          class="animate-fade-in-up-delay-1 font-display text-[clamp(2.35rem,11vw,6.4rem)] font-light leading-[1.02] tracking-tight text-white sm:leading-[0.98]"
        >
          247iBET Review: Casino, Sportsbook & <span class="text-prestige-gold-400"
            >Interac Payouts</span
          >
        </h1>
        <p
          class="mt-4 max-w-2xl animate-fade-in-up-delay-2 text-base leading-7 text-text-body sm:mt-6 sm:text-lg sm:leading-relaxed"
        >
          Compare 247iBET&apos;s casino categories, sportsbook markets, Interac payment flow,
          bonuses, support, and responsible-gaming tools before you visit a partner site.
        </p>
        <div class="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-prestige-gold-500"></span>
          Last updated: {LAST_UPDATED}
        </div>
        <div
          class="mt-6 flex animate-fade-in-up-delay-3 flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
        >
          <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
            Visit Partner Site
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
          <a href="/deposit" class="hero-cta-secondary"> See Payout Details </a>
        </div>
        <p
          class="mt-4 max-w-2xl rounded-lg border border-white/10 bg-navy-black/70 px-3 py-3 text-[11px] leading-5 text-text-body sm:px-4 sm:text-xs"
        >
          247iBET is an independent Canadian iGaming guide. We review casino and sportsbook options
          and may earn a commission when you click partner links. Ratings are editorial and based on
          payout speed, game selection, support, safety tools, and payment options.
        </p>
      </div>
    </div>
  </section>

  <div
    class="mx-auto max-w-[1720px] space-y-5 px-4 py-5 sm:space-y-7 sm:px-6 sm:py-7 lg:px-10 xl:px-16"
  >
    <section
      class="grid rounded-xl border border-white/5 bg-navy-card/95 shadow-2xl backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4"
    >
      {#each heroTrust as item}
        {@const Icon = item.icon}
        <div
          class="group flex items-start gap-3 border-b border-white/5 p-4 transition-colors hover:bg-white/[0.02] last:border-b-0 sm:items-center sm:gap-4 sm:p-5 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-blue-900/40 text-slate-blue-400 ring-1 ring-slate-blue-500/20 transition-transform group-hover:scale-110 group-hover:bg-slate-blue-900/60 group-hover:text-slate-blue-300 sm:h-12 sm:w-12"
          >
            <Icon class="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </div>
          <div>
            <p class="text-sm font-black tracking-wide text-white">{item.label}</p>
            <p class="mt-1 text-xs leading-relaxed text-text-body">{item.body}</p>
          </div>
        </div>
      {/each}
    </section>

    <section
      class="grid gap-5 overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-4 shadow-2xl sm:p-5 lg:grid-cols-[0.38fr_0.62fr] lg:gap-6 lg:p-7"
      aria-labelledby="home-promo-video-title"
    >
      <div class="flex flex-col justify-center">
        <p class="text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
          Watch the overview
        </p>
        <h2 id="home-promo-video-title" class="mt-3 text-3xl font-black md:text-4xl">
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
          poster="/images/generated/casino-premium-hero.png"
          aria-label="247iBET casino, sportsbook, and fast payouts overview video"
        >
          <source src="/videos/247ibet-home-promo.mp4" type="video/mp4" />
          Your browser does not support embedded video. Open the 247iBET overview video at /videos/247ibet-home-promo.mp4.
        </video>
      </div>
    </section>

    <section
      class="grid overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 lg:grid-cols-[0.42fr_0.58fr]"
    >
      <aside class="border-b border-prestige-gold/20 p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <p class="mb-3 text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
          Trust & verification
        </p>
        <h2 class="font-display text-3xl font-black sm:text-4xl">
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
        <div class="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {#each whyCards as card}
            {@const Icon = card.icon}
            <article
              class="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-prestige-gold-500/30 hover:bg-white/[0.04] sm:p-5"
            >
              <div
                class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-prestige-gold-900/30 text-prestige-gold-400 ring-1 ring-prestige-gold-500/20 group-hover:scale-110 group-hover:bg-prestige-gold-900/50 group-hover:text-prestige-gold-300"
              >
                <Icon class="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 class="font-black text-white">{card.title}</h3>
              <p class="mt-1 font-mono text-sm font-black text-prestige-gold-400">
                {card.score} / 5
              </p>
              <p class="mt-2 text-xs leading-relaxed text-text-body">{card.body}</p>
            </article>
          {/each}
        </div>

        <div class="mt-6 grid gap-3 md:hidden">
          {#each comparisonRows as row}
            <article class="rounded-xl border border-white/10 bg-black/20 p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-black text-white">{row.feature}</h3>
                <span
                  class="shrink-0 rounded-full bg-prestige-gold/10 px-3 py-1 text-[11px] font-black text-prestige-gold"
                >
                  {row.value}
                </span>
              </div>
              <p class="mt-3 text-xs leading-5 text-text-body">{row.check}</p>
            </article>
          {/each}
        </div>

        <div
          class="table-scroll-wrap mt-6 hidden overflow-x-auto rounded-xl border border-white/10 md:block"
        >
          <table class="w-full min-w-[760px] text-left text-sm">
            <thead
              class="bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
            >
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
      class="grid gap-5 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-5 sm:p-6 lg:grid-cols-[0.32fr_0.68fr]"
    >
      <div>
        <h2 class="text-3xl font-black md:text-4xl">Interac deposits and withdrawals</h2>
        <p class="mt-3 text-sm leading-6 text-text-body">
          Deposits are usually quick, while withdrawals depend on approval, verification, bonus
          terms, and bank processing.
        </p>
        <a href="/deposit" class="page-cta-primary-sm mt-5 inline-flex">Compare Payouts</a>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
        {#each processSteps as step, index}
          <article class="rounded-xl border border-white/10 bg-black/20 p-5">
            <div
              class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
            >
              {index + 1}
            </div>
            <h3 class="font-black text-prestige-gold">{step.title}</h3>
            <p class="mt-3 text-xs leading-5 text-text-body sm:min-h-[72px]">{step.body}</p>
            <span
              class="mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success"
              >{step.status}</span
            >
          </article>
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-prestige-gold/25 bg-navy-card/75 p-5 sm:p-6">
      <div
        class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-[1.5fr_repeat(5,1fr)]"
      >
        <div>
          <h2 class="text-3xl font-black md:text-4xl">Why 247iBET Stands Out</h2>
          <p class="mt-3 text-sm leading-6 text-text-body">
            A clearer review surface for players comparing safety, payments, games, bonuses, and
            support before signup.
          </p>
        </div>
        {#each standOut as item}
          {@const Icon = item.icon}
          <article class="flex gap-3">
            <Icon class="h-7 w-7 shrink-0 text-prestige-gold" aria-hidden="true" />
            <div>
              <h3 class="font-black">{item.title}</h3>
              <p class="mt-2 text-xs leading-5 text-text-body">{item.body}</p>
            </div>
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
            class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
            >Explore Casino</a
          >
        </div>
        <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {#each casinoCards as card}
            <a
              href={card.href}
              class="group overflow-hidden rounded-xl border border-prestige-gold/25 bg-black/20 transition-colors hover:border-prestige-gold/60"
            >
              <img
                src={card.image}
                alt=""
                class="h-32 w-full object-cover transition-transform group-hover:scale-105 sm:h-28"
              />
              <div class="p-4">
                <h3 class="font-black">{card.title}</h3>
                <p class="mt-1 text-xs text-text-body">{card.body}</p>
                <span class="mt-3 inline-flex text-xs font-black text-prestige-gold"
                  >Explore Casino</span
                >
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
            class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
            >Explore Sportsbook</a
          >
        </div>
        <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {#each sportsCards as card}
            <a
              href={card.href}
              class="group overflow-hidden rounded-xl border border-prestige-gold/25 bg-black/20 transition-colors hover:border-prestige-gold/60"
            >
              <img
                src={card.image}
                alt=""
                class="h-32 w-full object-cover transition-transform group-hover:scale-105 sm:h-28"
              />
              <div class="p-4">
                <h3 class="font-black">{card.title}</h3>
                <p class="mt-1 text-xs text-text-body">{card.body}</p>
                <span class="mt-3 inline-flex text-xs font-black text-prestige-gold"
                  >Explore Sportsbook</span
                >
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-prestige-gold/25 bg-navy-card/75 p-5 sm:p-6">
      <div class="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">Bonuses</p>
          <h2 class="mt-3 text-3xl font-black">Check the terms before claiming</h2>
          <p class="mt-3 text-sm leading-6 text-text-body">
            Promotions can add value only when the rules are clear. Review wagering, expiry, max
            bet, eligible games or markets, and withdrawal limits before opting in.
          </p>
          <a href="/casino-bonuses-canada" class="page-cta-primary-sm mt-5 inline-flex"
            >Check Bonus Terms</a
          >
        </div>
        <div class="grid gap-3 md:hidden">
          {#each bonusRows as row}
            <article class="rounded-xl border border-white/10 bg-black/20 p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-black text-white">{row.type}</h3>
                <span
                  class="shrink-0 rounded-full bg-prestige-gold/10 px-3 py-1 text-[11px] font-black text-prestige-gold"
                >
                  {row.goodFor}
                </span>
              </div>
              <p class="mt-3 text-xs leading-5 text-text-body">{row.check}</p>
            </article>
          {/each}
        </div>
        <div
          class="table-scroll-wrap hidden overflow-x-auto rounded-xl border border-white/10 md:block"
        >
          <table class="w-full min-w-[720px] text-left text-sm">
            <thead
              class="bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
            >
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
          class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
          >View All Guides</a
        >
      </div>
      <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
        {#each guideCards as card}
          <a
            href={card.href}
            class="group grid gap-4 rounded-xl border border-white/10 bg-black/20 p-3 transition-colors hover:border-prestige-gold/50 md:grid-cols-[116px_1fr]"
          >
            <img src={card.image} alt="" class="h-24 w-full rounded-lg object-cover md:w-[116px]" />
            <div>
              <h3 class="font-black group-hover:text-prestige-gold">{card.title}</h3>
              <p class="mt-1 text-xs leading-5 text-text-body">{card.body}</p>
              <span class="mt-2 inline-flex text-xs font-black text-prestige-gold">Read Guide</span>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="text-3xl font-black">Frequently Asked Questions</h2>
        <a
          href="/faq"
          class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
          >View All FAQs</a
        >
      </div>
      <div class="flex flex-col gap-2">
        {#each faqs as faq, i}
          <div class="rounded-lg border border-white/10">
            <button
              id="home-faq-btn-{i}"
              type="button"
              class="flex w-full items-center justify-between bg-black/20 px-4 py-4 text-left text-sm font-black text-white transition-colors hover:border-prestige-gold/50 hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold {homeFaqOpenIndex ===
              i
                ? 'rounded-t-lg'
                : 'rounded-lg'}"
              aria-expanded={homeFaqOpenIndex === i}
              aria-controls="home-faq-panel-{i}"
              onclick={() => (homeFaqOpenIndex = homeFaqOpenIndex === i ? null : i)}
            >
              {faq.q}
              <ChevronDown
                class="h-4 w-4 text-prestige-gold transition-transform duration-200 {homeFaqOpenIndex ===
                i
                  ? 'rotate-180'
                  : ''}"
                aria-hidden="true"
              />
            </button>
            <div
              id="home-faq-panel-{i}"
              role="region"
              aria-labelledby="home-faq-btn-{i}"
              hidden={homeFaqOpenIndex !== i}
              class="rounded-b-lg border-t border-white/10 bg-black/10 px-4 py-3"
            >
              <p class="text-sm leading-6 text-text-body">{faq.a}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
      <div class="grid items-center gap-6 lg:grid-cols-[0.7fr_0.3fr]">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
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

    <AuthorByline authorId="editorial" date={LAST_UPDATED} />

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
