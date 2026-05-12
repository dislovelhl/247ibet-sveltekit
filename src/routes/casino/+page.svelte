<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
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
  import { globalParallax } from '$lib/runes.svelte';
  import { reveal } from '$lib/animations';
  import FAQ from '$lib/components/FAQ.svelte';
  import TiltCard from '$lib/components/TiltCard.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';

  const trustItems = [
    { title: '100% Canadian Focused', icon: ShieldCheck },
    { title: 'Secure & Reliable', icon: LockKeyhole },
    { title: 'Support Pathways', icon: Headphones },
  ];

  const featureCards = [
    {
      title: 'Interac Payouts',
      body: 'Deposit and withdrawal timing depends on operator approval, verification, bonus review, and bank-side completion.',
      href: '/deposit',
      cta: 'View Payout Details',
      icon: Zap,
    },
    {
      title: 'Casino Game Guides',
      body: 'Educational guides for slots, table games, jackpots, and live-dealer categories.',
      href: '/casino/slots',
      cta: 'Explore Games',
      icon: Trophy,
    },
    {
      title: 'Sportsbook Guide',
      body: 'Educational coverage of pre-game and live-betting markets across NHL, CFL, NBA, UFC, and more.',
      href: '/sportsbook',
      cta: 'Explore Guide',
      icon: Gamepad2,
    },
    {
      title: 'Live Dealer Tables',
      body: 'Learn how live-dealer tables work and verify current availability on the separate gaming platform.',
      href: '/casino/live-casino',
      cta: 'Explore Live Guide',
      icon: MonitorPlay,
    },
  ];

  const safetyStrip = [
    {
      title: 'Verify Licensing',
      body: 'Verify current operator status against official provincial regulator sources',
      icon: BadgeCheck,
    },
    {
      title: 'Secure & Private',
      body: 'Use operators with clear security, privacy, and account-protection controls',
      icon: LockKeyhole,
    },
    {
      title: 'Support Guidance',
      body: 'Support and escalation pathways are explained before platform handoff',
      icon: Headphones,
    },
    {
      title: 'Responsible Gaming',
      body: 'Tools and resources to help you play safely',
      icon: ShieldCheck,
    },
    {
      title: 'Interac Banking',
      body: 'Fast and reliable CAD banking for deposits and withdrawals',
      icon: Zap,
    },
  ];

  const categoryCards = [
    {
      title: 'Online Slots',
      body: 'Thousands of top slot games from leading providers.',
      href: '/casino/slots',
      image: '/images/generated/casino-slots-hero.webp',
      icon: Sparkles,
    },
    {
      title: 'Live Casino',
      body: 'Live dealer roulette, blackjack, and more — verify current provider availability before playing.',
      href: '/casino/live-casino',
      image: '/images/generated/casino-live-hero.webp',
      icon: MonitorPlay,
    },
    {
      title: 'Blackjack Online',
      body: 'Classic casino action with multiple blackjack variations to enjoy.',
      href: '/casino/blackjack',
      image: '/images/generated/casino-blackjack-hero.webp',
      icon: BadgeCheck,
    },
    {
      title: 'Roulette Online',
      body: 'European, American, French, and other roulette variants explained for comparison.',
      href: '/casino/roulette',
      image: '/images/generated/casino-roulette-hero.webp',
      icon: CircleDollarSign,
    },
    {
      title: 'Baccarat Online',
      body: 'Point Baccarat, no commission baccarat, and more strategic table games.',
      href: '/casino/baccarat',
      image: '/images/generated/casino-baccarat-hero.webp',
      icon: CreditCard,
    },
    {
      title: 'Mobile Casino',
      body: 'Optimized for mobile. Enjoy casino on the go anytime, anywhere.',
      href: '/casino/mobile',
      image: '/images/generated/casino-premium-hero.webp',
      icon: Smartphone,
    },
    {
      title: 'CAD Casino',
      body: 'Play in CAD with Canadian dollars. No FX fees, no hassle.',
      href: '/casino/cad',
      image: '/images/generated/casino-premium-hero.webp',
      icon: CircleDollarSign,
    },
  ];

  const whyCards = [
    {
      title: 'CAD Native Banking',
      body: 'CAD banking guidance explains how to avoid unnecessary FX friction before depositing.',
      icon: CreditCard,
    },
    {
      title: 'Interac Banking',
      body: 'CAD-native deposits via Interac. Withdrawal timing depends on approval, KYC, bonus review, and bank-side processing.',
      icon: Zap,
    },
    {
      title: 'Support Guidance',
      body: 'Use official operator support for account issues; this site explains escalation and safety paths.',
      icon: Headphones,
    },
  ];

  const platformStats = [
    { label: 'Casino guides', value: 'Category coverage' },
    { label: 'Live dealer', value: 'Verify availability' },
    { label: 'Interac e-Transfer', value: 'Timing varies' },
    { label: 'Withdrawal timing', value: 'Approval dependent' },
    { label: 'Support', value: 'Operator-owned' },
    { label: 'Currency', value: 'CAD native' },
    { label: 'Mobile', value: 'Desktop & mobile' },
  ];

  const faqItems = [
    {
      q: 'Are online casinos legal in Canada?',
      a: 'Access depends on province, operator registration, and current platform availability. Verify official regulator sources before opening an account.',
    },
    {
      q: 'What payment methods are available for deposits and withdrawals?',
      a: 'Interac e-Transfer is a common CAD banking method for Canadian players. Deposit and withdrawal timing depends on operator approval, account checks, and bank-side completion.',
    },
    {
      q: 'How fast are casino payouts?',
      a: 'Withdrawal timing depends on account status, identity verification, bonus review, operator approval, and bank processing. Verify live cashier terms before relying on timing estimates.',
    },
    {
      q: 'What types of games are available?',
      a: 'Availability depends on the separate gaming platform or operator you choose. Use public guides to compare slots, live dealer tables, roulette, blackjack, baccarat, and mobile compatibility before handoff.',
    },
  ];

  // FAQ logic removed and handled by component

  const casinoSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Online Casino Canada',
      headline: 'Online Casino Canada: Slots, Live Games & Payout Guidance',
      description:
        'Explore online casino game categories in Canada with 247iBET public guides: slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and payout caveats.',
      url: 'https://247ibet.ca/casino',
      author: {
        '@type': 'Organization',
        name: '247iBET',
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
</script>

<svelte:head>
  <title>Online Casino Canada: Slots, Live Games & Payout Guidance | 247iBET</title>
  <meta
    name="description"
    content="Explore online casino game categories in Canada with 247iBET public guides: slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and payout caveats."
  />
  <meta
    property="og:title"
    content="Online Casino Canada: Slots, Live Games & Payout Guidance | 247iBET"
  />
  <meta
    property="og:description"
    content="Explore online casino game categories in Canada with 247iBET public guides: slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and payout caveats."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://247ibet.ca/casino" />
  <link rel="canonical" href={canonicalUrl('/casino')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Online Casino Canada: Slots, Live Games & Payout Guidance | 247iBET',
      description:
        'Explore online casino game categories in Canada with 247iBET public guides: slots, live dealer tables, blackjack, roulette, baccarat, CAD banking, and payout caveats.',
      url: canonicalUrl('/casino'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={casinoSchema} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }}
  />
</svelte:head>

<div class="min-h-dvh bg-navy-black pb-20 text-white" role="presentation">
  <div class="mx-auto w-full">
    <nav aria-label="Breadcrumb" class="mx-auto max-w-[1720px] px-4 pt-1 sm:px-6 lg:px-10 xl:px-16">
      <ol class="flex gap-2 text-xs font-black uppercase tracking-[0.12em] text-text-tertiary">
        <li><a href="/" class="hover:text-prestige-gold transition-colors">Home</a></li>
        <li>/</li>
        <li class="text-text-body">Casino</li>
      </ol>
    </nav>

    <section class="material-panel relative overflow-hidden rounded-[2.5rem] shadow-2xl">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,148,58,0.15),transparent_50%),url('/images/generated/casino-premium-hero.webp')] bg-cover bg-center opacity-60"
        style="transform: translate3d({globalParallax.x * 0.4}px, {globalParallax.y *
          0.4}px, 0) scale(1.1);"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/60 to-transparent"
      ></div>

      <div
        class="material-panel relative z-10 mx-4 my-6 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-8 md:p-14"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-8 flex flex-col gap-6">
          <h1 class="page-hero-title !tracking-tighter">
            The Future of <br />
            <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]"
              >Canadian Casino</span
            >
          </h1>
        </div>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          Explore public casino category guides, live-dealer education, and Interac payment caveats
          before verifying current availability on the separate gaming platform.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary group min-w-[200px] shimmer-effect btn-magnetic"
          >
            Access Casino
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </SafeExternalLink>
          <a href="/casino/slots" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            Explore Library
          </a>
        </div>

        <div class="material-group mt-12 grid gap-2 p-2 sm:grid-cols-3">
          {#each trustItems as item}
            {@const Icon = item.icon}
            <div
              class="material-cell flex cursor-default items-center gap-3 rounded-2xl p-3 group/trust"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-prestige-gold border border-white/10 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all"
              >
                <Icon class="h-5 w-5" />
              </div>
              <span
                class="text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-prestige-gold transition-colors"
                >{item.title}</span
              >
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section
      class="material-panel mt-7 grid items-center gap-6 p-5 shadow-2xl sm:p-7 lg:grid-cols-[160px_1fr_auto]"
    >
      <div class="material-cell flex h-28 w-28 items-center justify-center rounded-2xl">
        <img src="/images/brand/logo.png" alt="247iBET" class="h-16 w-24 object-contain" />
      </div>
      <div>
        <h2 class="text-5xl font-black">247iBET</h2>
        <p class="mt-3 max-w-2xl text-base text-text-body">
          Canadian online casino and sports betting, ethically reviewed.
        </p>
        <div class="mt-5 flex flex-wrap gap-3">
          {#each ['Payment caveats', 'Fair-play checks', 'Security reminders'] as item}
            <span class="floating-chrome px-3 py-1 text-xs font-black text-success">{item}</span>
          {/each}
        </div>
      </div>
      <SafeExternalLink
        href={IBET_URLS.register}
        class="hero-cta-primary min-w-64 justify-center btn-magnetic"
      >
        Visit Platform
        <ArrowRight class="h-5 w-5" aria-hidden="true" />
      </SafeExternalLink>
    </section>

    <section
      use:reveal
      data-reveal-stagger="true"
      class="material-group mt-8 grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-4"
    >
      {#each featureCards as card}
        {@const Icon = card.icon}
        <a
          href={card.href}
          use:reveal
          class="material-cell reveal-fade-up group relative flex flex-col items-center gap-6 overflow-hidden rounded-[22px] p-8 text-center transition-all hover:shadow-2xl card-hover-lift"
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
            class="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold"
          >
            {card.cta}
            <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </a>
      {/each}
    </section>

    <section class="material-group mt-7 grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-5">
      {#each safetyStrip as item}
        {@const Icon = item.icon}
        <article class="material-cell flex gap-3 rounded-[20px] p-5">
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
        <p class="mt-4 text-text-body italic">
          Explore hundreds of vetted titles across all categories
        </p>
      </div>

      <div
        use:reveal
        data-reveal-stagger="true"
        class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {#each categoryCards as card}
          {@const Icon = card.icon}
          <div class="reveal-fade-up h-full" use:reveal>
            <TiltCard>
              <a
                href={card.href}
                class="material-cell group relative block h-full aspect-[4/5] overflow-hidden rounded-[2.5rem] p-6 transition-all hover:border-prestige-gold/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] card-hover-lift"
              >
                <div class="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt=""
                    class="h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-navy-black via-navy-black/60 to-transparent"
                  ></div>
                  <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect pointer-events-none"
                  ></div>
                </div>

                <div class="relative z-10 flex h-full flex-col justify-between">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all group-hover:scale-110"
                  >
                    <Icon class="h-6 w-6 group-hover:text-navy-black transition-colors" />
                  </div>

                  <div>
                    <h3
                      class="font-display text-2xl font-black text-white group-hover:text-prestige-gold transition-colors !tracking-tighter"
                    >
                      {card.title}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-text-body line-clamp-2 font-light">
                      {card.body}
                    </p>
                    <div
                      class="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-prestige-gold group-hover:text-white transition-all"
                    >
                      Read Guide
                      <ArrowRight class="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          </div>
        {/each}
      </div>
    </section>

    <section class="mt-10">
      <div class="mb-6">
        <h2 class="text-3xl font-black">Why Use 247iBET Casino Guides?</h2>
      </div>
      <div class="material-group grid gap-2 p-2 md:grid-cols-3">
        {#each whyCards as card}
          {@const Icon = card.icon}
          <article class="material-cell rounded-[20px] p-6 card-hover-lift">
            <Icon class="h-9 w-9 text-prestige-gold" aria-hidden="true" />
            <h3 class="mt-5 text-xl font-black">{card.title}</h3>
            <p class="mt-3 text-sm leading-6 text-text-body">{card.body}</p>
          </article>
        {/each}
      </div>
    </section>

    <FAQ items={faqItems} title="Casino FAQ" />

    <section class="material-group mt-7 grid gap-2 p-2 sm:grid-cols-2 lg:grid-cols-7">
      {#each platformStats as item}
        <div class="material-cell rounded-[20px] p-5">
          <p class="text-xs uppercase tracking-[0.12em] text-text-tertiary">{item.label}</p>
          <p class="stat mt-1 text-2xl font-black text-prestige-gold">{item.value}</p>
        </div>
      {/each}
    </section>

    <section class="material-panel mt-7 overflow-hidden p-8 shadow-2xl md:p-12">
      <div class="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="mb-3 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold">
            Canadian casino guide
          </p>
          <h2 class="text-4xl font-black md:text-5xl">
            Casino categories, sports-market education, and Interac payout caveats — all in one
            place.
          </h2>
          <p class="mt-4 max-w-2xl text-lg leading-8 text-text-body">
            Use 247iBET as a public guide, then verify eligibility, licensing, and platform terms
            before playing.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary w-full justify-center sm:w-auto sm:min-w-72 btn-magnetic"
          >
            Visit Platform
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
          <a
            href="/responsible-gambling"
            class="hero-cta-secondary w-full justify-center sm:w-auto sm:min-w-72"
          >
            Responsible Gambling Resources
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-10 max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <AffiliateDisclosure variant="inline" />
    </section>
  </div>
</div>
