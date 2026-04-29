<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
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
      a: 'Interac e-Transfer is the primary banking method — deposits are instant and widely supported. Additional options include major credit cards and other popular e-wallets. All transactions are processed securely with advanced encryption to protect your financial data.',
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

  let openFaqIndex = $state<number | null>(null);

  function toggleFaq(i: number) {
    openFaqIndex = openFaqIndex === i ? null : i;
  }

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

<div class="min-h-screen bg-navy-black pt-6 text-white">
  <div class="mx-auto max-w-[1720px] px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
    <section
      class="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(120deg,#080d18,#101827)] p-7 shadow-2xl md:p-12"
    >
      <div
        class="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_52%_35%,rgba(212,148,58,0.32),transparent_30%),url('/images/generated/casino-premium-hero.png')] bg-cover bg-center opacity-75 lg:block"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/78 to-transparent"
      ></div>

      <div class="relative max-w-4xl">
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <p class="text-xs font-black uppercase tracking-[0.24em] text-prestige-gold">
            Canada&apos;s trusted online casino
          </p>
          <span class="live-tag"><span class="live-dot"></span> Live tables open</span>
        </div>
        <h1 class="text-[clamp(2rem,6.5vw,6.6rem)] font-black leading-[0.98] tracking-normal">
          Play Online <br />Casino in <span class="text-prestige-gold">Canada</span>
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-text-body">
          Exclusive access to thousands of slots, live dealer games, and classic table games. Secure
          your play with Interac e-Transfers and experience fast, reliable withdrawals.
        </p>
        <p class="mt-2 text-xs text-text-tertiary">Last updated: {LAST_UPDATED}</p>
        <div class="mt-8 flex flex-wrap gap-5">
          {#each trustItems as item}
            {@const Icon = item.icon}
            <div class="flex items-center gap-2 text-sm font-black text-text-body">
              <Icon class="h-5 w-5 text-prestige-gold" aria-hidden="true" />
              {item.title}
            </div>
          {/each}
        </div>

        <div
          class="mt-9 max-w-3xl rounded-xl border border-white/12 bg-navy-card/85 p-5 shadow-2xl"
        >
          <div class="flex gap-4">
            <div
              class="flex h-16 w-24 shrink-0 items-center justify-center rounded-lg bg-prestige-gold px-2 text-center text-sm font-black leading-tight text-navy-black sm:w-28 sm:text-base"
            >
              e-Transfer
            </div>
            <div>
              <p class="text-lg font-black">
                Deposits are instant. Withdrawals are typically processed within 24 hours.
              </p>
              <p class="mt-2 text-sm text-text-body">
                Regulated, safe, and trusted by players across Canada.
              </p>
            </div>
          </div>
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

    <section class="mt-7 grid gap-5 lg:grid-cols-4">
      {#each featureCards as card}
        {@const Icon = card.icon}
        <a
          href={card.href}
          class="group rounded-xl border border-prestige-gold/25 bg-navy-card/80 p-6 transition-transform hover:-translate-y-1"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-lg border border-prestige-gold/25 bg-prestige-gold/10"
          >
            <Icon class="h-7 w-7 text-prestige-gold" aria-hidden="true" />
          </div>
          <h2 class="mt-8 text-xl font-black">{card.title}</h2>
          <p class="mt-3 min-h-[72px] text-sm leading-6 text-text-body">{card.body}</p>
          <span
            class="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-prestige-gold"
          >
            {card.cta}
            <ArrowRight
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
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
            <p class="mt-1 text-xs leading-5 text-text-body">{item.body}</p>
          </div>
        </article>
      {/each}
    </section>

    <section class="mt-10">
      <div class="mb-7 flex items-center justify-center gap-6">
        <div class="h-px w-36 bg-gradient-to-r from-transparent to-prestige-gold/60"></div>
        <h2 class="text-center text-3xl font-black text-prestige-gold">
          Explore Top Casino Categories
        </h2>
        <div class="h-px w-36 bg-gradient-to-l from-transparent to-prestige-gold/60"></div>
      </div>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {#each categoryCards as card}
          {@const Icon = card.icon}
          <a
            href={card.href}
            class="group grid gap-5 rounded-xl border border-white/10 bg-navy-card/80 p-5 transition-colors hover:border-prestige-gold/35 sm:grid-cols-[86px_1fr]"
          >
            <div
              class="relative h-24 overflow-hidden rounded-lg border border-prestige-gold/25 bg-black/25"
            >
<img
                 src={card.image}
                 alt={card.title + ' casino games'}
                 class="h-full w-full object-cover opacity-75 transition-transform group-hover:scale-105"
               />
              <Icon class="absolute left-3 top-3 h-7 w-7 text-prestige-gold" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-lg font-black">{card.title}</h3>
              <p class="mt-2 min-h-[48px] text-sm leading-6 text-text-body">{card.body}</p>
              <span
                class="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-prestige-gold"
              >
                Explore {card.title.replace('Online', '').trim()}
                <ArrowRight class="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <section class="mt-10">
      <div class="mb-6 flex items-center justify-center gap-6">
        <div class="h-px w-32 bg-gradient-to-r from-transparent to-prestige-gold/60"></div>
        <h2 class="text-center text-3xl font-black text-prestige-gold">
          Why Play Casino at 247iBET?
        </h2>
        <div class="h-px w-32 bg-gradient-to-l from-transparent to-prestige-gold/60"></div>
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

    <section class="mt-10 rounded-xl border border-white/10 bg-navy-card/80 p-6">
      <h2 class="text-2xl font-black">Casino FAQ</h2>
      <div class="mt-5 divide-y divide-white/8">
        {#each faqItems as item, i}
          <div>
            <button
              id="faq-btn-{i}"
              type="button"
              class="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
              aria-expanded={openFaqIndex === i}
              aria-controls="faq-panel-{i}"
              onclick={() => toggleFaq(i)}
            >
              <span class="text-base font-black text-white">{item.q}</span>
              <ChevronDown
                class="h-5 w-5 shrink-0 text-prestige-gold transition-transform duration-200 {openFaqIndex ===
                i
                  ? 'rotate-180'
                  : ''}"
                aria-hidden="true"
              />
            </button>
            <div
              id="faq-panel-{i}"
              role="region"
              aria-labelledby="faq-btn-{i}"
              hidden={openFaqIndex !== i}
            >
              <p class="pb-5 text-sm leading-6 text-text-body">{item.a}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section
      class="mt-7 grid rounded-xl border border-prestige-gold/35 bg-navy-card/80 sm:grid-cols-2 lg:grid-cols-7"
    >
      {#each platformStats as item}
        <div
          class="border-b border-white/8 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <p class="text-xs uppercase tracking-[0.16em] text-text-tertiary">{item.label}</p>
          <p class="stat mt-1 text-2xl font-black text-prestige-gold">{item.value}</p>
        </div>
      {/each}
    </section>

    <section
      class="mt-7 overflow-hidden rounded-xl border border-prestige-gold/40 bg-[linear-gradient(100deg,#101827,#080d18)] p-8 shadow-2xl md:p-12"
    >
      <div class="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="mb-3 text-xs font-black uppercase tracking-[0.2em] text-prestige-gold">
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
