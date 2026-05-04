<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ArrowRight,
    BadgeCheck,
    CircleDollarSign,
    CreditCard,
    Gamepad2,
    Headphones,
    LockKeyhole,
    MonitorPlay,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Trophy,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import { useMouseParallax } from '$lib/runes.svelte';
  import FAQ from '$lib/components/FAQ.svelte';

  const LAST_UPDATED = '2026-04-28';

  const trustItems = [
    { title: '100% Canadian Focused', icon: ShieldCheck },
    { title: 'Secure & Reliable', icon: LockKeyhole },
    { title: '24/7 Customer Support', icon: Headphones },
  ];

  const featureCards = [
    {
      title: 'Instant Payouts',
      body: 'Quick deposits. Fast withdrawals. Secure and simple.',
      href: '/deposit',
      cta: 'Deposit & Withdraw',
      icon: Zap,
    },
    {
      title: '500+ Casino Games',
      body: 'Slots, table games, jackpots, and exclusive originals.',
      href: '/casino/slots',
      cta: 'Explore Games',
      icon: Trophy,
    },
    {
      title: 'NHL, CFL, NBA, UFC',
      body: 'Sportsbook with pre-game and live betting on all major sports.',
      href: '/sportsbook',
      cta: 'Visit Sportsbook',
      icon: Gamepad2,
    },
    {
      title: 'Live Dealer Tables',
      body: 'Real dealers. Real excitement. Live casino available 24/7.',
      href: '/casino/live-casino',
      cta: 'Play Live',
      icon: MonitorPlay,
    },
  ];

  const safetyStrip = [
    { title: 'Canadian Licensed', body: 'Operated with player protection', icon: BadgeCheck },
    {
      title: 'Secure & Private',
      body: 'Advanced encryption and data protection',
      icon: LockKeyhole,
    },
    { title: '24/7 Support', body: 'Our team is here when you need us', icon: Headphones },
    { title: 'Responsible Gaming', body: 'Tools and resources to play safely', icon: ShieldCheck },
    { title: 'Fast & Reliable', body: 'Quick deposits and fast withdrawals', icon: Zap },
  ];

  const categoryCards = [
    {
      title: 'Online Slots',
      body: 'Thousands of top slot games from leading providers.',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.png',
      icon: Sparkles,
    },
    {
      title: 'Live Casino',
      body: 'Live dealer roulette, blackjack and more. Real dealers. Real thrill.',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.png',
      icon: MonitorPlay,
    },
    {
      title: 'Blackjack Online',
      body: 'Classic casino action with multiple blackjack variations to enjoy.',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.png',
      icon: BadgeCheck,
    },
    {
      title: 'Roulette Online',
      body: 'European, American, French and more. All your favourite roulette tables.',
      href: '/casino/roulette',
      image: '/images/generated/casino-roulette-hero.png',
      icon: CircleDollarSign,
    },
    {
      title: 'Baccarat Online',
      body: 'Point Baccarat, no commission baccarat, and more strategic table games.',
      href: '/casino/baccarat',
      image: '/images/generated/casino-baccarat-hero.png',
      icon: CreditCard,
    },
    {
      title: 'Mobile Casino',
      body: 'Optimized for mobile. Enjoy casino on the go anytime, anywhere.',
      href: '/casino/mobile',
      image: '/images/generated/casino-premium-hero.png',
      icon: Smartphone,
    },
    {
      title: 'CAD Casino',
      body: 'Play in CAD with Canadian dollars. No FX fees, no hassle.',
      href: '/casino/cad',
      image: '/images/generated/casino-premium-hero.png',
      icon: CircleDollarSign,
    },
  ];

  const whyCards = [
    {
      title: 'CAD Native Banking',
      body: 'No currency conversion fees. Deposits and withdrawals in CAD with no FX surprises.',
      icon: CreditCard,
    },
    {
      title: 'Fast Withdrawals',
      body: 'We understand you want your winnings quickly. Most withdrawals process within 24 hours.',
      icon: Zap,
    },
    {
      title: '24/7 Support',
      body: 'Our support team is available anytime to assist with account or gaming questions.',
      icon: Headphones,
    },
  ];

  const platformStats = [
    { label: 'Casino games', value: '500+' },
    { label: 'Live dealer tables', value: 'Available 24/7' },
    { label: 'Interac e-Transfer', value: 'Deposits instant' },
    { label: 'Withdrawal speed', value: 'Typically under 24h' },
    { label: 'Support', value: '24/7 live chat' },
    { label: 'Currency', value: 'CAD native' },
    { label: 'Mobile', value: 'Desktop & mobile' },
  ];

  const faqItems = [
    {
      q: 'Are online casinos legal in Canada?',
      a: 'Online casino gaming is available to Canadians through licensed offshore operators. While each province regulates gambling differently, millions of Canadians play safely at trusted online casinos every day. 247iBET operates with player protection standards and responsible gambling tools built in.',
    },
    {
      q: 'What payment methods are available for deposits and withdrawals?',
      a: 'Interac e-Transfer is the supported banking method shown for Canadian players — deposits are fast and CAD-native, while withdrawals depend on operator approval, KYC, bonus review, and bank-side processing.',
    },
    {
      q: 'How fast are casino payouts at 247iBET?',
      a: 'Most withdrawal requests are processed within 24 hours. Interac e-Transfer payouts are among the fastest available to Canadian players, with many completing within 15–30 minutes once approved. There are no FX fees when playing in CAD.',
    },
    {
      q: 'What types of games are available?',
      a: '247iBET offers 500+ casino games including online slots, live dealer tables (roulette, blackjack, baccarat), classic table games, and exclusive originals. The full library is available on desktop and mobile, optimized for on-the-go play.',
    },
  ];

  // FAQ logic removed and handled by component

  const casinoSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Online Casino Canada',
      headline: 'Online Casino Canada: Slots, Live Games & Fast Payouts',
      description:
        'Play online casino games in Canada with 247iBET. Explore slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and fast Interac payouts.',
      url: 'https://247ibet.ca/casino',
      author: {
        '@type': 'Organization',
        name: '247iBET Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Casino', item: 'https://247ibet.ca/casino' },
      ],
    },
  ];
  import AuthorByline from '$lib/components/AuthorByline.svelte';

  const parallax = useMouseParallax(20);
</script>

<svelte:head>
  <title>Online Casino Canada: Slots, Live Games & Fast Payouts | 247iBET</title>
  <meta
    name="description"
    content="Play online casino games in Canada with 247iBET. Explore slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and fast Interac payouts."
  />
  <meta
    property="og:title"
    content="Online Casino Canada: Slots, Live Games & Fast Payouts | 247iBET"
  />
  <meta
    property="og:description"
    content="Play online casino games in Canada with 247iBET. Explore slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and fast Interac payouts."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://247ibet.ca/casino" />
  <link rel="canonical" href={canonicalUrl('/casino')} />
  <JsonLd schema={casinoSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 text-white" onmousemove={parallax.handleMouseMove} role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
    <section
      class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-card shadow-2xl"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,148,58,0.15),transparent_50%),url('/images/generated/casino-premium-hero.png')] bg-cover bg-center opacity-60"
        style="transform: translate3d({parallax.x * 0.4}px, {parallax.y * 0.4}px, 0) scale(1.1);"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>

      <div class="relative z-10 px-7 py-12 md:px-16 md:py-20 glass-premium animate-float-3d mx-6 my-8 rounded-3xl border border-white/20"
           style="transform: translate3d({-parallax.x * 0.8}px, {-parallax.y * 0.8}px, 0);">
        <div class="glass-regular mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 shadow-[0_0_15px_rgba(212,148,58,0.2)]">
          <span class="live-dot" aria-hidden="true"></span>
          <p class="text-[10px] font-black uppercase tracking-[0.15em] text-white">
            Canada's #1 Rated Online Casino
          </p>
        </div>
        <div class="mb-8 flex flex-col gap-6">
          <AuthorByline date={LAST_UPDATED} />
          <h1 class="page-hero-title !tracking-tighter">
            The Future of <br />
            <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Canadian Casino</span>
          </h1>
        </div>
        
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          A high-performance gaming ecosystem. Experience 500+ premium slots, live dealer immersion, and lightning-fast CAD payouts.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary group min-w-[200px] shimmer-effect">
            Access Casino
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </SafeExternalLink>
          <a href="/casino/slots" class="hero-cta-secondary min-w-[200px] glass-thin">
            Explore Library
          </a>
        </div>

        <div class="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
          {#each trustItems as item}
            {@const Icon = item.icon}
            <div class="flex items-center gap-3 group/trust cursor-default">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-prestige-gold border border-white/10 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all">
                <Icon class="h-5 w-5" />
              </div>
              <span class="text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-prestige-gold transition-colors">{item.title}</span>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section
      class="mt-7 grid items-center gap-6 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-7 shadow-2xl lg:grid-cols-[160px_1fr_auto]"
    >
      <div
        class="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/15 bg-white/5"
      >
        <img src="/images/brand/logo.png" alt="247iBET" class="h-16 w-24 object-contain" />
      </div>
      <div>
        <h2 class="text-5xl font-black">247iBET</h2>
        <p class="mt-3 max-w-2xl text-base text-text-body">
          Canadian online casino and sports betting, ethically reviewed.
        </p>
        <div class="mt-5 flex flex-wrap gap-3">
          {#each ['Fast Deposits', 'Fair Gaming', 'Secure & Private'] as item}
            <span
              class="rounded-full border border-success/20 bg-success/8 px-3 py-1 text-xs font-black text-success"
              >{item}</span
            >
          {/each}
        </div>
      </div>
      <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary min-w-64 justify-center">
        Play Now
        <ArrowRight class="h-5 w-5" aria-hidden="true" />
      </SafeExternalLink>
    </section>

    <section class="mt-8 grid gap-4 lg:grid-cols-4">
      {#each featureCards as card}
        {@const Icon = card.icon}
        <a
          href={card.href}
          class="glass-thin group relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl p-8 text-center transition-all hover:bg-navy-raised hover:shadow-2xl"
        >
          <div
            class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-prestige-gold ring-1 ring-white/10 transition-transform group-hover:scale-110"
          >
            <Icon class="h-8 w-8" aria-hidden="true" />
          </div>
          <div>
            <h2 class="font-display text-xl font-black text-white">{card.title}</h2>
            <p class="mt-3 text-sm leading-relaxed text-text-body/80">{card.body}</p>
          </div>
          <div
            class="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold"
          >
            {card.cta}
            <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </a>
      {/each}
    </section>

    <section
      class="mt-7 grid rounded-xl border border-white/10 bg-navy-card/75 sm:grid-cols-2 lg:grid-cols-5"
    >
      {#each safetyStrip as item}
        {@const Icon = item.icon}
        <article
          class="flex gap-3 border-b border-white/8 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <Icon class="h-6 w-6 shrink-0 text-prestige-gold" aria-hidden="true" />
          <div>
            <h3 class="text-sm font-black">{item.title}</h3>
            <p class="mt-1 text-sm leading-6 text-text-body">{item.body}</p>
          </div>
        </article>
      {/each}
    </section>

    <section class="mt-16">
      <div class="mb-10 text-center">
        <h2 class="font-display text-3xl font-black md:text-4xl text-white">
          Premium <span class="text-prestige-gold">Game Hubs</span>
        </h2>
        <p class="mt-4 text-text-body italic">Explore hundreds of vetted titles across all categories</p>
      </div>
      
      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each categoryCards as card}
          {@const Icon = card.icon}
          <a
            href={card.href}
            class="glass-thin group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-6 transition-all hover:bg-navy-raised hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 hover:border-prestige-gold/30"
          >
            <div class="absolute inset-0 z-0">
              <img
                src={card.image}
                alt=""
                class="h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-black via-navy-black/60 to-transparent"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect pointer-events-none"></div>
            </div>
            
            <div class="relative z-10 flex h-full flex-col justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all group-hover:scale-110">
                <Icon class="h-6 w-6 group-hover:text-navy-black transition-colors" />
              </div>
              
              <div>
                <h3 class="font-display text-2xl font-black text-white group-hover:text-prestige-gold transition-colors !tracking-tighter">{card.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2 font-light">{card.body}</p>
                <div class="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold group-hover:text-white transition-all">
                  Enter Lobby
                  <ArrowRight class="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <section class="mt-10">
      <div class="mb-6">
        <h2 class="text-3xl font-black">Why Play Casino at 247iBET?</h2>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        {#each whyCards as card}
          {@const Icon = card.icon}
          <article class="rounded-xl border border-white/10 bg-navy-card/80 p-6">
            <Icon class="h-9 w-9 text-prestige-gold" aria-hidden="true" />
            <h3 class="mt-5 text-xl font-black">{card.title}</h3>
            <p class="mt-3 text-sm leading-6 text-text-body">{card.body}</p>
          </article>
        {/each}
      </div>
    </section>

    <FAQ items={faqItems} title="Casino FAQ" />

    <section
      class="mt-7 grid rounded-xl border border-prestige-gold/35 bg-navy-card/80 sm:grid-cols-2 lg:grid-cols-7"
    >
      {#each platformStats as item}
        <div
          class="border-b border-white/8 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <p class="text-xs uppercase tracking-[0.12em] text-text-tertiary">{item.label}</p>
          <p class="stat mt-1 text-2xl font-black text-prestige-gold">{item.value}</p>
        </div>
      {/each}
    </section>

    <section
      class="mt-7 overflow-hidden rounded-xl border border-prestige-gold/40 bg-[linear-gradient(100deg,#101827,#080d18)] p-8 shadow-2xl md:p-12"
    >
      <div class="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="mb-3 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
            Canada&apos;s go-to online casino
          </p>
          <h2 class="text-4xl font-black md:text-5xl">
            Casino games, sports markets, and Interac payouts &mdash; all in one place.
          </h2>
          <p class="mt-4 max-w-2xl text-lg leading-8 text-text-body">
            Join 247iBET for a premium Canadian gaming experience trusted by players across the
            country.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary w-full justify-center sm:w-auto sm:min-w-72"
          >
            Start Playing
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
          <a
            href="/responsible-gambling"
            class="hero-cta-secondary w-full justify-center sm:w-auto sm:min-w-72"
          >
            Safety Tools
          </a>
        </div>
      </div>
    </section>
  </div>
</div>
