<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
    CreditCard,
    Gift,
    Headphones,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    Star,
    Trophy,
    Users,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import AuthorByline from '$lib/components/AuthorByline.svelte';

  const LAST_UPDATED = '2026-04-29';

  const heroTrust = [
    { label: 'Fast Payouts', body: 'Interac withdrawals in under 24h', icon: Zap },
    { label: 'Secure & Private', body: 'Bank-grade security', icon: LockKeyhole },
    { label: '1000+ Casino Games', body: 'Slots, live casino & more', icon: Trophy },
    { label: '30+ Sports Covered', body: 'NHL, NBA, NFL & more', icon: BadgeCheck },
    { label: '24/7 Support', body: 'Real people, real help', icon: Headphones },
    { label: 'Responsible Gaming', body: 'Play safe, play smart', icon: ShieldCheck },
  ];

  const whyCards = [
    {
      title: 'Fast Payouts',
      body: 'Withdrawals are processed quickly so you can access winnings faster.',
      icon: Zap,
    },
    {
      title: 'Trusted & Secure',
      body: 'Bank-level security, KYC checks, and Canadian player standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Top Betting Markets',
      body: 'Hockey, football, basketball, soccer, UFC, and live in-play action.',
      icon: Trophy,
    },
    {
      title: 'Great Rewards',
      body: 'Exclusive promotions, odds boosts, reload bonuses, and VIP perks.',
      icon: Gift,
    },
  ];

  const comparisonRows = [
    {
      name: '247iBET',
      rating: '4.8',
      payout: '15 min – 24h',
      live: 'Yes',
      offers: 'High',
      best: 'Overall Experience',
    },
    {
      name: 'Industry Average',
      rating: '4.1',
      payout: '1–24h',
      live: 'Yes',
      offers: 'Medium',
      best: 'General Play',
    },
    // TODO: Add 3-5 real competitor listings with verified data
    // {
    //   name: 'Operator A',
    //   rating: '4.5',
    //   payout: 'Under 24h',
    //   live: 'Yes',
    //   offers: 'Medium',
    //   best: 'Live Betting',
    // },
  ];

  const processSteps = [
    {
      title: 'Deposit',
      body: 'Choose e-Transfer at checkout and send funds directly from your bank.',
      status: 'Instant',
    },
    {
      title: 'Play',
      body: 'Your balance is credited instantly. Start betting or playing right away.',
      status: 'Instant',
    },
    {
      title: 'Withdraw',
      body: 'Request your payout after account and bonus review.',
      status: '15 min – 24h',
    },
    {
      title: 'Enjoy',
      body: 'Receive winnings after approval — typically within 24 hours.',
      status: 'Varies',
    },
  ];

  const standOut = [
    { title: 'Fast Withdrawals', body: 'Most Interac withdrawals processed under 24h.', icon: Zap },
    { title: '24/7 Live Support', body: 'Real people, anytime you need help.', icon: Headphones },
    {
      title: 'Huge Game Selection',
      body: '1000+ slots, live casino, and table games.',
      icon: Trophy,
    },
    {
      title: 'Best Odds Guaranteed',
      body: 'Competitive odds across major sports.',
      icon: Sparkles,
    },
    { title: 'Safe & Responsible', body: 'Tools to help you play safely.', icon: Users },
  ];

  const casinoCards = [
    {
      title: 'Slots',
      body: 'New releases & classics',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.png',
    },
    {
      title: 'Live Casino',
      body: 'Real dealers, real action',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.png',
    },
    {
      title: 'Table Games',
      body: 'Blackjack, roulette & more',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.png',
    },
    {
      title: 'Jackpots',
      body: 'Progressive prize pools',
      href: '/casino',
      image: '/images/generated/casino-slots-hero.png',
    },
  ];

  const sportsCards = [
    {
      title: 'Sports Betting',
      body: 'Pre-match & live markets',
      href: '/sportsbook',
      image: '/images/generated/sportsbook-premium-hero.png',
    },
    {
      title: 'Live Betting',
      body: 'Bet while it happens',
      href: '/sportsbook/live-betting',
      image: '/images/generated/sportsbook-live-betting-hero.png',
    },
    {
      title: 'Hockey',
      body: 'NHL & more',
      href: '/sportsbook/nhl',
      image: '/images/generated/sportsbook-nhl-hero.png',
    },
    {
      title: 'Basketball',
      body: 'NBA & more',
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
      body: 'Everything you need to know about fast payouts.',
      href: '/deposit',
      image: '/images/generated/fast-payouts-hero.png',
    },
    {
      title: 'Bankroll Management 101',
      body: 'Strategies to get the most from your bankroll.',
      href: '/guides/strategy',
      image: '/images/generated/bonus-wagering-hero.png',
    },
  ];

  const faqs = [
    {
      q: 'How fast are withdrawals?',
      a: 'Interac e-Transfer withdrawals are typically processed within 15–30 minutes after operator approval. First withdrawals may take longer due to KYC verification.',
    },
    {
      q: 'Do you offer a welcome bonus?',
      a: 'Yes — new players can access welcome offers after registration. Bonus details are shown in your account after signup. Always read the wagering requirements before claiming.',
    },
    {
      q: 'Is 247iBET safe and secure?',
      a: 'Yes. 247iBET uses bank-grade encryption, follows KYC verification standards, and operates with player protection measures including deposit limits and self-exclusion tools.',
    },
    {
      q: 'What documents are required to verify my account?',
      a: 'You will need a government-issued photo ID (passport or driver\'s licence) and a proof of address (utility bill or bank statement dated within 90 days).',
    },
    {
      q: 'What sports can I bet on?',
      a: 'NHL, CFL, NBA, NFL, UFC, Premier League soccer, and more — with pre-game, live in-play, and same-game parlay markets.',
    },
    {
      q: 'How do I contact support?',
      a: 'Live chat is available 24/7. You can also reach us via email or the contact form on our Contact page.',
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
        'Canadian online casino and sportsbook guide covering fast Interac payouts, casino games, betting markets, and responsible play.',
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
  <title>247iBET - Online Casino, Sportsbook & Fast Interac Payouts</title>
  <meta
    name="description"
    content="Join 247iBET for Canadian online casino games, sportsbook markets, fast Interac payouts, and 24/7 support."
  />
  <meta property="og:title" content="247iBET - Online Casino, Sportsbook & Fast Interac Payouts" />
  <meta
    property="og:description"
    content="Join 247iBET for Canadian online casino games, sportsbook markets, fast Interac payouts, and 24/7 support."
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
        class="absolute inset-0 bg-[linear-gradient(90deg,#070C18_0%,rgba(7,12,24,0.84)_34%,rgba(7,12,24,0.42)_100%)]"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-black to-transparent"
      ></div>
    </div>

    <div
      class="relative mx-auto grid min-h-[620px] max-w-[1720px] items-center px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 xl:px-16"
    >
      <div class="max-w-4xl">
        <p
          class="mb-5 animate-fade-in-up text-xs font-black uppercase tracking-[0.24em] text-prestige-gold"
        >
          Canada&apos;s trusted betting destination
        </p>
        <h1
          class="animate-fade-in-up-delay-1 text-[clamp(2rem,7vw,6.4rem)] font-black leading-[0.98] tracking-normal"
        >
          Online Casino &amp; Sportsbook + <span class="text-prestige-gold">Fast Payouts</span>
        </h1>
        <p class="mt-6 max-w-2xl animate-fade-in-up-delay-2 text-lg leading-8 text-text-body">
          Play your favourite casino games and bet on the biggest sports markets with secure
          deposits, fast Interac withdrawals, and 24/7 Canadian support.
        </p>
        <p class="mt-2 text-xs text-text-tertiary">Last updated: {LAST_UPDATED}</p>
        <div class="mt-8 flex animate-fade-in-up-delay-3 flex-col gap-4 sm:flex-row">
          <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
            Join 247iBET Now
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
          <a href="/sportsbook" class="hero-cta-secondary"> Explore Sportsbook </a>
        </div>
      </div>
    </div>
  </section>

  <div class="mx-auto max-w-[1720px] space-y-7 px-4 py-7 sm:px-6 lg:px-10 xl:px-16">
    <section
      class="grid rounded-xl border border-white/10 bg-navy-card/90 shadow-2xl sm:grid-cols-2 lg:grid-cols-6"
    >
      {#each heroTrust as item}
        {@const Icon = item.icon}
        <div
          class="flex items-center gap-3 border-b border-white/10 p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <Icon class="h-7 w-7 shrink-0 text-prestige-gold" aria-hidden="true" />
          <div>
            <p class="text-sm font-black">{item.label}</p>
            <p class="mt-1 text-xs text-text-body">{item.body}</p>
          </div>
        </div>
      {/each}
    </section>

    <section
      class="grid gap-6 overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-5 shadow-2xl lg:grid-cols-[0.38fr_0.62fr] lg:p-7"
      aria-labelledby="home-promo-video-title"
    >
      <div class="flex flex-col justify-center">
        <p class="text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
          Watch the overview
        </p>
        <h2 id="home-promo-video-title" class="mt-3 text-3xl font-black md:text-4xl">
          See the 247iBET experience in 30 seconds
        </h2>
        <p class="mt-4 text-sm leading-6 text-text-body">
          A quick look at the casino, sportsbook, fast payout flow, support, and responsible-play
          tools built for Canadian players.
        </p>
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary mt-6 w-full justify-center sm:w-fit">
          Join 247iBET Now
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
          Your browser does not support embedded video. Open the 247iBET overview video at
          /videos/247ibet-home-promo.mp4.
        </video>
      </div>
    </section>

    <section
      class="grid overflow-hidden rounded-xl border border-prestige-gold/30 bg-navy-card/80 lg:grid-cols-[0.42fr_0.58fr]"
    >
      <aside class="border-b border-prestige-gold/20 p-7 lg:border-b-0 lg:border-r">
        <p class="mb-3 text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
          Our recommended platform
        </p>
        <h2 class="font-display text-5xl font-black">247iBET</h2>
        <div class="mt-3 flex items-center gap-2 text-prestige-gold">
          {#each [1, 2, 3, 4, 5] as _star}
            <Star class="h-5 w-5 fill-prestige-gold" aria-hidden="true" />
          {/each}
          <span class="text-sm font-black text-white">4.8/5 Player Rating</span>
        </div>
        <p class="mt-5 max-w-md text-sm leading-6 text-text-body">
          Canada&apos;s all-in-one destination for betting and gaming with fast, secure payouts.
        </p>
        <ul class="mt-5 space-y-2 text-sm text-text-body">
          {#each ['Instant deposits & fast withdrawals', 'Competitive odds & best markets', 'Huge casino library & live dealers', 'Exclusive boosts & daily promotions', 'Live chat support, 24/7'] as item}
            <li class="flex gap-2">
              <BadgeCheck class="mt-0.5 h-4 w-4 text-success" aria-hidden="true" />
              {item}
            </li>
          {/each}
        </ul>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary mt-7 w-full justify-center"
        >
          Join 247iBET Now
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </aside>

      <div class="p-7">
        <h2 class="text-2xl font-black">Why Canadian Players Choose 247iBET</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {#each whyCards as card}
            {@const Icon = card.icon}
            <article class="rounded-xl border border-white/10 bg-white/[0.035] p-5">
              <Icon class="h-7 w-7 text-prestige-gold" aria-hidden="true" />
              <h3 class="mt-4 font-black">{card.title}</h3>
              <p class="mt-2 text-xs leading-5 text-text-body">{card.body}</p>
            </article>
          {/each}
        </div>

        <div class="table-scroll-wrap mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table class="w-full min-w-[760px] text-left text-sm">
            <thead
              class="bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
            >
              <tr>
                <th class="px-4 py-3">Bookmaker</th>
                <th class="px-4 py-3">Rating</th>
                <th class="px-4 py-3">Payout Speed</th>
                <th class="px-4 py-3">Live Betting</th>
                <th class="px-4 py-3">Bonus Offers</th>
                <th class="px-4 py-3">Best For</th>
                <th class="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/8">
              {#each comparisonRows as row}
                <tr>
                  <td class="px-4 py-3 font-black text-white">{row.name}</td>
                  <td class="px-4 py-3 text-prestige-gold">{row.rating} ★★★★★</td>
                  <td class="px-4 py-3 text-success">{row.payout}</td>
                  <td class="px-4 py-3 text-text-body">{row.live}</td>
                  <td class="px-4 py-3 text-prestige-gold">{row.offers}</td>
                  <td class="px-4 py-3 text-text-body">{row.best}</td>
                  <td class="px-4 py-3 text-right"
                    ><SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm"
                      >Play Now</SafeExternalLink
                    ></td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section
      class="grid gap-5 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-6 lg:grid-cols-[0.24fr_0.76fr]"
    >
      <div>
        <h2 class="text-3xl font-black">Deposit &amp; Withdraw</h2>
        <p class="mt-3 text-sm leading-6 text-text-body">Simple. Secure. Lightning fast.</p>
        <a href="/deposit" class="page-cta-primary-sm mt-5 inline-flex">Learn More</a>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {#each processSteps as step, index}
          <article class="rounded-xl border border-white/10 bg-black/20 p-5">
            <div
              class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
            >
              {index + 1}
            </div>
            <h3 class="font-black text-prestige-gold">{step.title}</h3>
            <p class="mt-3 min-h-[72px] text-xs leading-5 text-text-body">{step.body}</p>
            <span
              class="mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success"
              >{step.status}</span
            >
          </article>
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-prestige-gold/25 bg-navy-card/75 p-6">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-[0.25fr_repeat(5,1fr)]">
        <div>
          <h2 class="text-3xl font-black">Why 247iBET Stands Out</h2>
          <p class="mt-3 text-sm leading-6 text-text-body">
            Built for Canadian players who want one premium account.
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
        <div class="mb-4 flex items-end justify-between">
          <h2 class="text-3xl font-black">Casino</h2>
          <a
            href="/casino"
            class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
            >View All Casino</a
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {#each casinoCards as card}
            <a
              href={card.href}
              class="group overflow-hidden rounded-xl border border-prestige-gold/25 bg-black/20 transition-colors hover:border-prestige-gold/60"
            >
              <img
                src={card.image}
                alt=""
                class="h-28 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div class="p-4">
                <h3 class="font-black">{card.title}</h3>
                <p class="mt-1 text-xs text-text-body">{card.body}</p>
                <span class="mt-3 inline-flex text-xs font-black text-prestige-gold">Play Now</span>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <div class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
        <div class="mb-4 flex items-end justify-between">
          <h2 class="text-3xl font-black">Sportsbook</h2>
          <a
            href="/sportsbook"
            class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
            >View All Sports</a
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {#each sportsCards as card}
            <a
              href={card.href}
              class="group overflow-hidden rounded-xl border border-prestige-gold/25 bg-black/20 transition-colors hover:border-prestige-gold/60"
            >
              <img
                src={card.image}
                alt=""
                class="h-28 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div class="p-4">
                <h3 class="font-black">{card.title}</h3>
                <p class="mt-1 text-xs text-text-body">{card.body}</p>
                <span class="mt-3 inline-flex text-xs font-black text-prestige-gold">Bet Now</span>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <article class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
        <CreditCard class="h-10 w-10 text-prestige-gold" aria-hidden="true" />
        <h2 class="mt-4 text-xl font-black">Payment Methods</h2>
        <p class="mt-2 text-sm text-text-body">Fast bank transfers, cards, and more.</p>
      </article>
      <article class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
        <Gift class="h-10 w-10 text-prestige-gold" aria-hidden="true" />
        <h2 class="mt-4 text-xl font-black">Promotions</h2>
        <p class="mt-2 text-sm text-text-body">Exclusive offers for Canadian players.</p>
      </article>
      <article class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
        <Zap class="h-10 w-10 text-prestige-gold" aria-hidden="true" />
        <h2 class="mt-4 text-xl font-black">Odds Boosts</h2>
        <p class="mt-2 text-sm text-text-body">Enhanced odds on popular markets.</p>
      </article>
      <article class="rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6">
        <Users class="h-10 w-10 text-prestige-gold" aria-hidden="true" />
        <h2 class="mt-4 text-xl font-black">Refer a Friend</h2>
        <p class="mt-2 text-sm text-text-body">Earn when your friends join and play.</p>
      </article>
    </section>

    <section class="rounded-xl border border-white/10 bg-navy-card/80 p-5">
      <div class="mb-4 flex items-end justify-between">
        <h2 class="text-3xl font-black">Expert Guides</h2>
        <a
          href="/guides"
          class="text-xs font-black uppercase tracking-[0.18em] text-prestige-gold transition-colors hover:text-white"
          >View All Guides</a
        >
      </div>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
      <div class="mb-4 flex items-end justify-between">
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

    <AuthorByline authorId="editorial" date={LAST_UPDATED} />

    <section
      class="overflow-hidden rounded-xl border border-prestige-gold/40 bg-[linear-gradient(100deg,#101827,#080d18)] p-8 shadow-2xl md:p-12"
    >
      <div class="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-4xl font-black md:text-5xl">
            Ready to Open Your <span class="text-prestige-gold">247iBET</span> Account?
          </h2>
          <p class="mt-4 max-w-2xl text-lg leading-8 text-text-body">
            Join thousands of Canadian players enjoying fast payouts, top odds, and a premium gaming
            experience.
          </p>
        </div>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="hero-cta-primary w-full justify-center sm:w-auto sm:min-w-72"
        >
          Join 247iBET Now
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
