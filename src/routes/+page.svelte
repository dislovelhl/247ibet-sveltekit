<script lang="ts">
  import { SITE, canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ArrowRight,
    BadgeCheck,
    Gift,
    ShieldCheck,
    Sparkles,
    Trophy,
    Zap,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_CTA, IBET_PROMO_SNAPSHOT, IBET_URLS } from '$lib/ibet-brand';
  import OddsTicker from '$lib/components/OddsTicker.svelte';
  import GlintCard from '$lib/components/GlintCard.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import JumpLinks from '$lib/components/JumpLinks.svelte';
  import TrustVerification from '$lib/components/TrustVerification.svelte';
  import PromoVideo from '$lib/components/PromoVideo.svelte';
  import InteracFlow from '$lib/components/InteracFlow.svelte';
  import StandsOut from '$lib/components/StandsOut.svelte';
  import CasinoSportsGrid from '$lib/components/CasinoSportsGrid.svelte';
import { tilt, magnetic } from '$lib/utils/motion';
  import BonusSection from '$lib/components/BonusSection.svelte';
  import GuideSection from '$lib/components/GuideSection.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import ResponsibleGaming from '$lib/components/ResponsibleGaming.svelte';


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
    { href: '#gaming-hub', label: 'Casino & Sports' },
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

<div class="on-scroll-reveal">
  <HeroSection />

  <OddsTicker />

  <JumpLinks links={jumpLinks} />

  <div class="container mx-auto space-y-5 py-5 sm:space-y-7 sm:py-7">
    <TrustVerification items={heroTrust} />

    <PromoVideo 
      title="Explore the 247iBET experience in 30 seconds" 
      description="A quick look at our casino categories, sportsbook markets, Interac payment flow, verification process, support, and responsible-play tools." 
    />

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
        <div use:magnetic={15} class="mt-8">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary w-full justify-center btn-magnetic"
          >
            {IBET_CTA.register}
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </SafeExternalLink>
        </div>
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
            <div use:tilt={8} class="contents">
              <GlintCard
                useReveal={true}
                style="--reveal-delay: {i * 100}ms"
                class="reveal-fade-up luxury-card tilt-card group relative rounded-2xl p-6 transition-all hover:-translate-y-1 {i === 0 ? 'lg:col-span-2' : ''} card-hover-lift"
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
            </div>
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
                <th scope="col" class="px-4 py-3">Feature</th>
                <th scope="col" class="px-4 py-3">Our Standards</th>
                <th scope="col" class="px-4 py-3">What to check</th>
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

    <InteracFlow steps={processSteps} />

    <StandsOut items={standOut} />
  </div>

  <div class="container mx-auto pb-spacing-24 pt-spacing-12">
  <div class="grid gap-spacing-8">
    <CasinoSportsGrid {casinoCards} {sportsCards} />


      <BonusSection {bonusRows} />

      <GuideSection guides={guideCards} />

      <div class="rounded-xl border border-white/10 bg-navy-card/80 p-spacing-6">
        <div class="mb-spacing-4 flex flex-col gap-spacing-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 class="text-3xl font-black">Help Center</h2>
          <a href="/faq" class="view-all-link" aria-label="View all frequently asked questions">
            View All FAQs <ArrowRight class="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
        <FAQ items={faqs} title={undefined} />
      </div>

      <ResponsibleGaming />



    <section
      class="overflow-hidden rounded-2xl bg-gradient-to-br from-prestige-gold-400 via-prestige-gold to-prestige-gold-600 p-spacing-8 shadow-[0_0_60px_-10px_rgba(212,148,58,0.35)] sm:p-spacing-12 md:p-spacing-16"
    >
      <div class="grid items-center gap-spacing-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black text-navy-black sm:text-5xl md:text-6xl">
            Ready to join <span class="text-navy-black/80">247iBET</span>?
          </h2>
          <p class="mt-spacing-4 max-w-2xl text-base leading-7 text-navy-black/80 sm:text-lg sm:leading-8">
            Fast payouts, premium games, and secure sports betting are just a click away.
            Join thousands of Canadian players today.
          </p>
        </div>
        <SafeExternalLink
          href={IBET_URLS.register}
          class="inline-flex min-h-[56px] items-center justify-center gap-spacing-2 rounded-full bg-navy-black px-spacing-12 py-spacing-5 text-base font-black uppercase tracking-[0.12em] text-prestige-gold shadow-2xl transition-all hover:scale-105 hover:bg-navy-black/90 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] active:scale-100 w-full justify-center sm:w-auto sm:min-w-72"
        >
          {IBET_CTA.register}
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
</div>
