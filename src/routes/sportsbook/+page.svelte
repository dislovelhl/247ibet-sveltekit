<script lang="ts">
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    Activity,
    ArrowRight,
    BadgeCheck,
    BarChart3,
    CircleDollarSign,
    CreditCard,
    Dumbbell,
    Flame,
    Goal,
    GraduationCap,
    Headphones,
    Landmark,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    Star,
    Trophy,
    WalletCards,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_DISCLAIMER, IBET_URLS } from '$lib/ibet-brand';
  import { SITE, canonicalUrl } from '$lib/site';
  import { reveal } from '$lib/animations';

  const page = {
    title: 'Canadian Sportsbook: Odds, Parlays & Live Betting | 247iBET',
    description:
      'The premier Canadian sportsbook for NHL, CFL, NBA, UFC, and more. Enjoy live odds, fast Interac funding, same-game parlays, and elite betting tools.',
    canonical: canonicalUrl('/sportsbook'),
  };

  const sideNav = [
    { href: '#offers', label: 'Offers' },
    { href: '#live', label: 'Live Betting' },
    { href: '#guides', label: 'Betting Guides' },
    { href: '#payments', label: 'Payments' },
    { href: '#support', label: 'Help Center' },
  ];

  const quickSports = [
    { href: '/sportsbook/football', label: 'Football' },
    { href: '/sportsbook/nhl', label: 'NHL' },
    { href: '/sportsbook/nba', label: 'NBA' },
    { href: '/sportsbook/ufc', label: 'UFC / MMA' },
    { href: '/sportsbook/soccer', label: 'Soccer' },
    { href: '/sportsbook/parlays', label: 'Parlays' },
  ];

  const heroOffers = [
    {
      eyebrow: 'New Player Offer',
      headline: 'Elite Starter Offer',
      body: 'Get started with our premium sports welcome package. Access Canadian-focused markets and live odds instantly.',
      cta: 'Review Offer',
    },
    {
      eyebrow: 'Odds Boost',
      headline: 'Enhanced Prices',
      body: 'Enjoy boosted prices on marquee NHL, NBA, soccer, UFC, and football events every single day.',
      cta: 'Bet Now',
    },
    {
      eyebrow: 'Parlay Specials',
      headline: 'Same-Game Parlays',
      body: 'Maximize your potential with our weekly sports promotions and featured parlay specials.',
      cta: 'View Offers',
    },
  ];

  const trustStrip = [
    { label: 'Elite Markets', detail: 'Best odds across all sports', icon: BadgeCheck },
    { label: 'Trusted and Secure', detail: 'Encrypted account security', icon: LockKeyhole },
    { label: 'Fair Promotions', detail: 'Transparent bonus terms', icon: Sparkles },
    { label: 'Interac Payments', detail: 'Fast deposits and withdrawals', icon: Zap },
  ];

  const sportsbookRows = [
    {
      name: '247iBET',
      welcome: 'Site offer',
      boosts: 'Daily boosts',
      payout: 'Fast',
      rating: 'Featured',
      highlight: true,
    },
    {
      name: 'Other',
      welcome: 'Market dependent',
      boosts: 'Varies',
      payout: 'Standard',
      rating: 'Standard',
      highlight: false,
    },
  ];

  const topOdds = [
    { match: 'Man City vs Arsenal', pick: 'Man City', ibet: '2.10', other: '2.05' },
    { match: 'Liverpool vs Chelsea', pick: 'Liverpool', ibet: '2.15', other: '2.10' },
    { match: 'Man United vs Newcastle', pick: 'Draw', ibet: '3.50', other: '3.40' },
    { match: 'Oilers vs Maple Leafs', pick: 'Over 5.5', ibet: '1.92', other: '1.88' },
  ];

  const liveRows = [
    { event: 'Real Madrid vs Barcelona', score: '1-0', ibet: '1.80', other: '1.75' },
    { event: 'N. Djokovic vs C. Alcaraz', score: '4-3', ibet: '1.86', other: '1.91' },
    { event: 'Denver Nuggets vs Boston Celtics', score: 'Q3', ibet: '1.45', other: '1.40' },
  ];

  const offerCards = [
    {
      brand: '247iBET',
      amount: 'Site offer',
      detail: 'Sportsbook + casino account',
      cta: 'Play now',
    },
    { brand: 'Other', amount: 'Market offer', detail: 'Sports and live markets', cta: 'Compare' },
  ];

  const boosts = [
    {
      boost: 'Man City to win',
      event: 'vs Arsenal',
      old: '1.85',
      boosted: '2.10',
      book: '247iBET',
    },
    { boost: 'Liverpool to win', event: 'vs Chelsea', old: '1.90', boosted: '2.15', book: 'Other' },
    {
      boost: 'Both teams to score',
      event: 'Real Madrid vs Barcelona',
      old: '1.70',
      boosted: '2.00',
      book: 'Other',
    },
    {
      boost: 'Over 2.5 goals',
      event: 'Man United vs Newcastle',
      old: '1.80',
      boosted: '2.05',
      book: 'Other',
    },
  ];

  const guideCards = [
    {
      href: '/guides/sports-betting-odds-explained',
      title: 'Betting Strategy',
      body: 'Understand odds, implied probability, and price comparison.',
      icon: GraduationCap,
    },
    {
      href: '/guides/single-game-betting-canada',
      title: 'How to Bet',
      body: 'Learn the bet slip flow from market selection to confirmation.',
      icon: CircleDollarSign,
    },
    {
      href: '/sportsbook/parlays',
      title: 'Parlay Builder',
      body: 'Compare parlay risk, legs, pricing, and same-game formats.',
      icon: Trophy,
    },
    {
      href: '/sportsbook/live-betting',
      title: 'Live Betting',
      body: 'Know market suspensions, cash-out limits, and in-play timing.',
      icon: Activity,
    },
  ];

  const sportsRows = [
    { sport: 'Football', events: '1,246', market: 'Match result', ibet: '2.10', other: '2.05' },
    { sport: 'NHL', events: '318', market: 'Moneyline', ibet: '1.92', other: '1.88' },
    { sport: 'Tennis', events: '156', market: 'Match winner', ibet: '1.66', other: '1.61' },
    { sport: 'Basketball', events: '89', market: 'Spread', ibet: '1.45', other: '1.40' },
    { sport: 'UFC / MMA', events: '32', market: 'Fight winner', ibet: '1.70', other: '1.65' },
  ];

  const paymentMethods = [
    'VISA',
    'Mastercard',
    'Apple Pay',
    'Google Pay',
    'PayPal',
    'Skrill',
    'Neteller',
  ];

  const newsCards = [
    {
      href: '/news',
      title: 'Champions League Semi-Final Preview',
      body: 'Key odds, team news, and market angles for the week ahead.',
      meta: '2 hours ago',
    },
    {
      href: '/sportsbook/live-betting',
      title: 'Premier League Title Race Heats Up',
      body: 'Live betting windows to watch as the season reaches its final run.',
      meta: '5 hours ago',
    },
    {
      href: '/sportsbook/parlays',
      title: 'Top 5 Betting Tips This Weekend',
      body: 'A practical checklist for comparing prices before kickoff.',
      meta: '1 day ago',
    },
  ];

  const leagueRows = [
    {
      league: 'Premier League',
      matches: '380',
      market: 'Outright winner',
      ibet: '2.25',
      other: '2.20',
    },
    {
      league: 'Champions League',
      matches: '125',
      market: 'Outright winner',
      ibet: '4.00',
      other: '3.75',
    },
    { league: 'La Liga', matches: '240', market: 'Outright winner', ibet: '2.80', other: '2.70' },
    { league: 'Serie A', matches: '230', market: 'Outright winner', ibet: '3.00', other: '2.90' },
    {
      league: 'Bundesliga',
      matches: '204',
      market: 'Outright winner',
      ibet: '2.40',
      other: '2.30',
    },
  ];

  const statTools = [
    {
      href: '/tools/odds-calculator',
      label: 'Odds Calculator',
      body: 'Convert odds and implied probability.',
      icon: BarChart3,
    },
    {
      href: '/tools/parlay-calculator',
      label: 'Parlay Calculator',
      body: 'Price multi-leg tickets before betting.',
      icon: Activity,
    },
    {
      href: '/tools/payout-time-checker',
      label: 'Payout Checker',
      body: 'Estimate withdrawal timing by method.',
      icon: WalletCards,
    },
    {
      href: '/responsible-gambling',
      label: 'Player Safety',
      body: 'Limits, cooling-off, and support resources.',
      icon: ShieldCheck,
    },
  ];

  const supportCards = [
    {
      href: '/guides/sports-betting-odds-explained',
      title: 'How to bet',
      body: 'Learn odds, bet slips, and market settlement.',
      icon: GraduationCap,
    },
    {
      href: '/deposit',
      title: 'Deposits and withdrawals',
      body: 'Review deposit and withdrawal options.',
      icon: CreditCard,
    },
    {
      href: '/security',
      title: 'Account verification',
      body: 'Understand identity checks and secure login.',
      icon: LockKeyhole,
    },
    {
      href: '/responsible-gambling',
      title: 'Responsible gambling',
      body: 'Play safer with limits and support.',
      icon: Headphones,
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Sportsbook', item: page.canonical },
    ],
  };

  let mouseX = $state(0);
  let mouseY = $state(0);

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX = (clientX / innerWidth - 0.5) * 20;
    mouseY = (clientY / innerHeight - 0.5) * 20;
  }
</script>

<svelte:head>
  <title>{page.title}</title>
  <meta name="description" content={page.description} />
  <meta
    name="keywords"
    content="sports betting Canada, Canadian sportsbook, live betting Canada, NHL odds, CFL betting, UFC betting, Interac sportsbook, betting guide Canada"
  />
  <meta property="og:title" content={page.title} />
  <meta property="og:description" content={page.description} />
  <link rel="canonical" href={page.canonical} />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 pb-20" onmousemove={handleMouseMove} role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <div class="grid gap-6 lg:grid-cols-[210px_minmax(0,1fr)]">
      <aside class="hidden lg:block">
        <div class="sticky top-28 space-y-6 rounded-[2rem] border border-white/10 glass-premium p-5 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)]">
          <a
            href="/"
            class="group flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-white/5"
          >
            <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-prestige-gold/10 text-prestige-gold border border-prestige-gold/20 transition-all group-hover:bg-prestige-gold group-hover:text-navy-black group-hover:scale-110">
              <Landmark class="h-4 w-4" aria-hidden="true" />
            </div>
            Home
          </a>
          <nav aria-label="Sportsbook page sections" class="space-y-1.5 border-t border-white/10 pt-6">
            {#each sideNav as item}
              <a
                href={item.href}
                class="flex items-center rounded-xl px-4 py-2.5 text-xs font-black text-text-body transition-all hover:bg-white/5 hover:text-white hover:text-prestige-gold"
              >
                {item.label}
              </a>
            {/each}
          </nav>
          <div class="border-t border-white/10 pt-6">
            <p class="px-4 pb-3 font-display text-[10px] font-black uppercase tracking-[0.2em] text-prestige-gold">
              Popular Sports
            </p>
            <div class="space-y-1.5">
              {#each quickSports as sport}
                <a
                  href={sport.href}
                  class="group flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-bold text-text-body transition-all hover:bg-white/5 hover:text-white"
                >
                  <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-blue/10 text-slate-blue border border-slate-blue/20 transition-all group-hover:bg-slate-blue group-hover:text-white group-hover:scale-110">
                    <Dumbbell class="h-3 w-3" aria-hidden="true" />
                  </div>
                  {sport.label}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </aside>

      <main class="min-w-0 space-y-5">
        <section
          class="relative min-w-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-navy-card shadow-2xl"
        >
          <img
            src="/images/generated/sportsbook-premium-hero.png"
            alt=""
            class="absolute inset-0 h-full w-full object-cover opacity-40"
            style="transform: translate3d({mouseX * 0.4}px, {mouseY * 0.4}px, 0) scale(1.1);"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"
          ></div>
          
          <div class="relative z-10 p-8 md:p-14 glass-premium animate-float-3d mx-6 my-8 rounded-3xl border border-white/20 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)]"
               style="transform: translate3d({-mouseX * 0.8}px, {-mouseY * 0.8}px, 0);">
            <div class="flex flex-wrap items-center gap-3 mb-8">
              <div class="glass-regular inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10 shadow-lg">
                <span class="live-dot" aria-hidden="true"></span>
                <p class="text-[10px] font-black uppercase tracking-[0.15em] text-white">
                  Live Markets Open
                </p>
              </div>
              <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
                Canadian Sportsbook Hub
              </p>
            </div>
            
            <h1 class="page-hero-title !tracking-tighter">
              The Arena of <br />
              <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Performance</span>
            </h1>
            
            <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
              Real-time odds. Deep Canadian markets. Lightning-fast Interac funding. Your strategic edge in the betting landscape starts here.
            </p>

            <div class="mt-10 flex flex-col gap-4 sm:flex-row">
              <SafeExternalLink
                href={IBET_URLS.register}
                class="hero-cta-primary group min-w-[220px] shimmer-effect btn-magnetic"
              >
                Access Sportsbook
                <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </SafeExternalLink>
              <a
                href="#odds"
                class="hero-cta-secondary min-w-[220px] glass-thin"
              >
                Compare Odds
              </a>
            </div>
            <p class="mt-6 max-w-2xl text-[10px] uppercase tracking-wider leading-relaxed text-text-tertiary/60">
              {IBET_DISCLAIMER}
            </p>
          </div>
        </section>

        <div id="offers" use:reveal data-reveal-stagger="true" class="grid gap-4 sm:grid-cols-3">
          {#each heroOffers as offer}
            <article
              use:reveal
              class="reveal-fade-up glass-thin group relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl p-8 text-center transition-all hover:bg-navy-raised hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 hover:border-prestige-gold/30 card-hover-lift"
            >              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect pointer-events-none"></div>
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-prestige-gold ring-1 ring-white/10 transition-all group-hover:bg-prestige-gold group-hover:text-navy-black group-hover:scale-110">
                <Flame class="h-6 w-6" />
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-text-tertiary">
                  {offer.eyebrow}
                </p>
                <h2 class="mt-3 font-display text-2xl font-black uppercase leading-tight text-white group-hover:text-prestige-gold transition-colors !tracking-tighter">
                  {offer.headline}
                </h2>
                <p class="mt-4 text-sm leading-relaxed text-text-body/80 font-light">
                  {offer.body}
                </p>
              </div>
              <SafeExternalLink
                href={IBET_URLS.register}
                class="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold/60 group-hover:text-prestige-gold transition-all"
              >
                {offer.cta}
                <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </SafeExternalLink>
            </article>
          {/each}
        </div>

          <div
            class="mt-5 grid rounded-lg border border-white/8 bg-black/25 sm:grid-cols-2 lg:grid-cols-4"
          >
            {#each trustStrip as item}
              {@const TrustIcon = item.icon}
              <div
                class="flex items-center gap-3 border-white/8 p-4 sm:border-r sm:last:border-r-0"
              >
                <TrustIcon class="h-5 w-5 shrink-0 text-prestige-gold" aria-hidden="true" />
                <div>
                  <p class="text-sm font-bold text-white">{item.label}</p>
                  <p class="text-xs text-text-tertiary">{item.detail}</p>
                </div>
              </div>
            {/each}
          </div>

        <section id="bookmakers" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 class="page-hub-title text-2xl">Best Sportsbooks</h2>
              <p class="mt-1 text-sm text-text-tertiary">
                Compare top betting sites, feature depth, payout speed, and market coverage.
              </p>
            </div>
            <a
              href="/best-sports-betting-sites-canada"
              class="text-xs font-bold uppercase tracking-[0.12em] text-prestige-gold hover:text-prestige-gold-light"
              >View full review</a
            >
          </div>
          <div class="overflow-x-auto rounded-lg border border-white/8">
            <table class="min-w-[760px] w-full text-left text-sm">
              <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <tr>
                  <th class="px-4 py-3">Bookmaker</th>
                  <th class="px-4 py-3">Welcome</th>
                  <th class="px-4 py-3">Boosts</th>
                  <th class="px-4 py-3">Payout speed</th>
                  <th class="px-4 py-3">Rating</th>
                  <th class="px-4 py-3 text-right">Visit</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/8">
                {#each sportsbookRows as row}
                  <tr class={row.highlight ? 'bg-prestige-gold/[0.045]' : ''}>
                    <td class="px-4 py-4">
                      <span class="font-display text-lg font-semibold text-white">{row.name}</span>
                    </td>
                    <td class="px-4 py-4 text-text-body">{row.welcome}</td>
                    <td class="px-4 py-4 text-text-body">{row.boosts}</td>
                    <td class="px-4 py-4 text-text-body">{row.payout}</td>
                    <td class="px-4 py-4">
                      <span
                        class="inline-flex items-center gap-1 {row.highlight
                          ? 'text-prestige-gold'
                          : 'text-text-tertiary'}"
                      >
                        <Star
                          class="h-3.5 w-3.5 {row.highlight
                            ? 'fill-prestige-gold'
                            : 'fill-none stroke-current'}"
                          aria-hidden="true"
                        />
                        <span class="font-mono text-xs">{row.rating}</span>
                      </span>
                    </td>
                    <td class="px-4 py-4 text-right">
                      <SafeExternalLink href={IBET_URLS.register} class="page-cta-primary-sm"
                        >Visit site</SafeExternalLink
                      >
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </section>

        <section id="odds" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <div class="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 class="page-hub-title text-2xl">Top Sports Betting Odds</h2>
              <p class="mt-1 text-sm text-text-tertiary">
                Compare featured odds across popular pre-game markets.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each ['Football', 'NHL', 'NBA', 'UFC / MMA'] as tab, index}
                <span
                  class="rounded-lg border px-3 py-2 text-xs font-bold {index === 0
                    ? 'border-prestige-gold/40 bg-prestige-gold/10 text-prestige-gold'
                    : 'border-white/10 bg-white/[0.03] text-text-body'}">{tab}</span
                >
              {/each}
            </div>
          </div>
          <div class="overflow-x-auto rounded-lg border border-white/8">
            <table class="min-w-[760px] w-full text-left text-sm">
              <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <tr>
                  <th class="px-4 py-3">Match</th>
                  <th class="px-4 py-3">Market</th>
                  <th class="px-4 py-3">247iBET</th>
                  <th class="px-4 py-3">Other</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/8">
                {#each topOdds as row}
                  <tr>
                    <td class="px-4 py-3 font-semibold text-white">{row.match}</td>
                    <td class="px-4 py-3 text-text-body">{row.pick}</td>
                    <td class="odds px-4 py-3 text-prestige-gold">{row.ibet}</td>
                    <td class="odds px-4 py-3 text-text-body">{row.other}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </section>

        <section id="live" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span class="live-tag"><span class="live-dot"></span> Live betting</span>
              <h2 class="page-hub-title mt-2 text-2xl">In-Play Event Board</h2>
              <p class="mt-1 text-sm text-text-tertiary">
                Live prices move quickly. Always confirm the accepted odds before placing a bet.
              </p>
            </div>
            <a
              href="/sportsbook/live-betting"
              class="text-xs font-bold uppercase tracking-[0.12em] text-prestige-gold hover:text-prestige-gold-light"
              >View live guide</a
            >
          </div>
          <div class="overflow-x-auto rounded-lg border border-white/8">
            <table class="min-w-[760px] w-full text-left text-sm">
              <thead class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <tr>
                  <th class="px-4 py-3">Event</th>
                  <th class="px-4 py-3">Score</th>
                  <th class="px-4 py-3">247iBET</th>
                  <th class="px-4 py-3">Other</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/8">
                {#each liveRows as row}
                  <tr>
                    <td class="px-4 py-3 font-semibold text-white">{row.event}</td>
                    <td class="odds px-4 py-3 text-success">{row.score}</td>
                    <td class="odds px-4 py-3 text-prestige-gold">{row.ibet}</td>
                    <td class="odds px-4 py-3 text-text-body">{row.other}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </section>

        <section class="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Sportsbook Offers</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Compare featured promos and account-level value before choosing where to play.
            </p>
            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              {#each offerCards as offer}
                <article use:reveal class="rounded-lg border border-white/10 bg-white/[0.03] p-4 reveal-fade-up card-hover-lift">
                  <p class="font-display text-xl font-semibold text-white">{offer.brand}</p>
                  <p class="mt-2 text-2xl font-black text-prestige-gold">{offer.amount}</p>
                  <p class="mt-1 min-h-[38px] text-sm leading-6 text-text-tertiary">
                    {offer.detail}
                  </p>
                  <SafeExternalLink
                    href={IBET_URLS.register}
                    class="page-cta-secondary-sm mt-4 w-full">{offer.cta}</SafeExternalLink
                  >
                </article>
              {/each}
            </div>
          </div>

          <div class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Odds Boosts</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Track enhanced prices and compare the boosted value against the old line.
            </p>
            <div class="mt-4 overflow-x-auto rounded-lg border border-white/8">
              <table class="min-w-[620px] w-full text-left text-sm">
                <thead
                  class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary"
                >
                  <tr>
                    <th class="px-4 py-3">Boost</th>
                    <th class="px-4 py-3">Event</th>
                    <th class="px-4 py-3">Old</th>
                    <th class="px-4 py-3">Boosted</th>
                    <th class="px-4 py-3">Book</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/8">
                  {#each boosts as row}
                    <tr>
                      <td class="px-4 py-3 font-semibold text-white">{row.boost}</td>
                      <td class="px-4 py-3 text-text-body">{row.event}</td>
                      <td class="odds px-4 py-3 text-text-tertiary">{row.old}</td>
                      <td class="odds px-4 py-3 font-bold text-prestige-gold">{row.boosted}</td>
                      <td class="px-4 py-3 text-text-body">{row.book}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="guides" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <h2 class="page-hub-title text-2xl">Betting Guides</h2>
          <p class="mt-1 text-sm text-text-tertiary">
            Expert guides and practical tools to help you understand each market before betting.
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" use:reveal data-reveal-stagger="true">
            {#each guideCards as guide}
              {@const GuideIcon = guide.icon}
              <a
                href={guide.href}
                use:reveal
                class="reveal-fade-up group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-prestige-gold/35 card-hover-lift"
              >
                <GuideIcon class="h-6 w-6 text-prestige-gold" aria-hidden="true" />
                <h3 class="mt-3 text-base font-bold text-white">{guide.title}</h3>
                <p class="mt-2 min-h-[58px] text-sm leading-6 text-text-tertiary">
                  {guide.body}
                </p>
                <span
                  class="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold"
                >
                  Read more
                  <ArrowRight
                    class="h-3 w-3 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            {/each}
          </div>
        </section>

        <section class="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Top Sports</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Explore betting markets for all major sports.
            </p>
            <div class="mt-4 overflow-x-auto rounded-lg border border-white/8">
              <table class="min-w-[700px] w-full text-left text-sm">
                <thead
                  class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary"
                >
                  <tr>
                    <th class="px-4 py-3">Sport</th>
                    <th class="px-4 py-3">Events</th>
                    <th class="px-4 py-3">Top market</th>
                    <th class="px-4 py-3">247iBET</th>
                    <th class="px-4 py-3">Other</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/8">
                  {#each sportsRows as row}
                    <tr>
                      <td class="px-4 py-3 font-semibold text-white">{row.sport}</td>
                      <td class="stat px-4 py-3 text-text-body">{row.events}</td>
                      <td class="px-4 py-3 text-text-body">{row.market}</td>
                      <td class="odds px-4 py-3 text-prestige-gold">{row.ibet}</td>
                      <td class="odds px-4 py-3 text-text-body">{row.other}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>

          <div id="payments" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Payment Methods</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Fast, secure, and familiar ways to fund a Canadian betting account.
            </p>
            <div class="mt-4 grid grid-cols-2 gap-3">
              {#each paymentMethods as method}
                <div class="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center">
                  <WalletCards class="mx-auto mb-2 h-5 w-5 text-text-body" aria-hidden="true" />
                  <p class="text-sm font-bold text-white">{method}</p>
                  <p class="mt-1 text-xs uppercase tracking-[0.12em] text-text-tertiary">
                    Payment option
                  </p>
                </div>
              {/each}
            </div>
          </div>
        </section>

        <section class="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <div class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Latest News</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Stay up to date with betting previews and market explainers.
            </p>
            <div class="mt-4 space-y-3">
              {#each newsCards as news}
                <a
                  href={news.href}
                  class="group grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 sm:grid-cols-[92px_1fr]"
                >
                  <div
                    class="flex h-20 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-slate-blue/25 to-prestige-gold/10"
                  >
                    <Goal class="h-8 w-8 text-white/75" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 class="font-bold text-white group-hover:text-prestige-gold">
                      {news.title}
                    </h3>
                    <p class="mt-1 text-sm leading-6 text-text-tertiary">{news.body}</p>
                    <p
                      class="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary"
                    >
                      {news.meta}
                    </p>
                  </div>
                </a>
              {/each}
            </div>
          </div>

          <div class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
            <h2 class="page-hub-title text-2xl">Football Leagues</h2>
            <p class="mt-1 text-sm text-text-tertiary">
              Bet on major football leagues and outright competition markets.
            </p>
            <div class="mt-4 overflow-x-auto rounded-lg border border-white/8">
              <table class="min-w-[680px] w-full text-left text-sm">
                <thead
                  class="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-text-tertiary"
                >
                  <tr>
                    <th class="px-4 py-3">League</th>
                    <th class="px-4 py-3">Matches</th>
                    <th class="px-4 py-3">Top market</th>
                    <th class="px-4 py-3">247iBET</th>
                    <th class="px-4 py-3">Other</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/8">
                  {#each leagueRows as row}
                    <tr>
                      <td class="px-4 py-3 font-semibold text-white">{row.league}</td>
                      <td class="stat px-4 py-3 text-text-body">{row.matches}</td>
                      <td class="px-4 py-3 text-text-body">{row.market}</td>
                      <td class="odds px-4 py-3 text-prestige-gold">{row.ibet}</td>
                      <td class="odds px-4 py-3 text-text-body">{row.other}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <h2 class="page-hub-title text-2xl">Statistics Center</h2>
          <p class="mt-1 text-sm text-text-tertiary">
            Use odds, payout, and player-safety tools before placing a bet.
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {#each statTools as tool}
              {@const ToolIcon = tool.icon}
              <a
                href={tool.href}
                class="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-slate-blue/40"
              >
                <ToolIcon class="h-6 w-6 text-slate-blue" aria-hidden="true" />
                <h3 class="mt-3 text-sm font-bold text-white">{tool.label}</h3>
                <p class="mt-2 text-sm leading-6 text-text-tertiary">{tool.body}</p>
              </a>
            {/each}
          </div>
        </section>

        <section id="support" class="navy-card navy-card--flat rounded-xl p-4 sm:p-5">
          <h2 class="page-hub-title text-2xl">Help Center</h2>
          <p class="mt-1 text-sm text-text-tertiary">
            Need help? Start with the most common sportsbook support topics.
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {#each supportCards as card}
              {@const SupportIcon = card.icon}
              <a
                href={card.href}
                class="rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-prestige-gold/35"
              >
                <SupportIcon class="h-6 w-6 text-prestige-gold" aria-hidden="true" />
                <h3 class="mt-3 text-sm font-bold text-white">{card.title}</h3>
                <p class="mt-2 text-sm leading-6 text-text-tertiary">{card.body}</p>
                <span
                  class="mt-3 inline-block text-xs font-black uppercase tracking-[0.12em] text-text-body"
                  >Read more</span
                >
              </a>
            {/each}
          </div>
        </section>

        <section
          class="rounded-xl border border-prestige-gold/20 bg-prestige-gold/[0.055] p-5 text-center"
        >
          <Flame class="mx-auto h-7 w-7 text-prestige-gold" aria-hidden="true" />
          <h2 class="page-hub-title mt-3 text-3xl">Ready for the sportsbook?</h2>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-body">
            Review the market, confirm the odds, set your limits, and use the 247iBET sportsbook hub
            as your starting point.
          </p>
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary mt-5 w-full justify-center sm:w-auto sm:min-w-72 btn-magnetic"
          >
            Enter sportsbook
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </SafeExternalLink>
        </section>
      </main>
    </div>

  </div>
</div>
