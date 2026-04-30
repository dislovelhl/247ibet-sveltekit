<script lang="ts">
  import { MapPin, Wallet, BookOpen, Clock, Shield, Calculator, ArrowRight } from 'lucide-svelte';

  const highlights = [
    {
      href: '/guides/interac-e-transfer-casino',
      icon: Wallet,
      iconColor: 'text-prestige-gold',
      title: 'Interac Casino Guide',
      description:
        'Deposit and withdraw via Interac e-Transfer — no fees, instant confirmation, CAD accounts.',
      category: 'Payments',
      cta: 'Read Payments Guide',
    },
    {
      href: '/fast-payouts',
      icon: Clock,
      iconColor: 'text-success',
      title: 'Fastest Payout Casinos',
      description: 'Ranked by verified withdrawal speed — Interac payout benchmarks.',
      category: 'Withdrawals',
      cta: 'View Payout Rankings',
    },
    {
      href: '/guides/wagering-requirements-explained',
      icon: BookOpen,
      iconColor: 'text-text-body',
      title: 'Wagering Requirements',
      description:
        'Understand playthrough, contribution rates, and max bet rules before claiming any bonus.',
      category: 'Editorial',
      cta: 'Read Bonus Guide',
    },
    {
      href: '/tools/odds-calculator',
      icon: Calculator,
      iconColor: 'text-prestige-gold',
      title: 'Odds Calculator',
      description:
        'Convert American, decimal, and fractional odds instantly and estimate potential returns before you place a bet.',
      category: 'Tool',
      cta: 'Use Odds Calculator',
    },
    {
      href: '/legal-online-gambling-canada',
      icon: Shield,
      iconColor: 'text-prestige-gold',
      title: 'Legal Status Canada',
      description:
        'Federal law, provincial frameworks, and what legal online gambling means for Canadian players.',
      category: 'Compliance',
      cta: 'View Legal Guide',
    },
    {
      href: '/guides/alberta-operator-readiness-index',
      icon: MapPin,
      iconColor: 'text-prestige-gold',
      title: 'Alberta 2026 Licensing',
      description: "Track operator availability and launch context as Alberta's market develops.",
      category: 'Regulation',
      cta: 'Track Alberta Launch',
    },
  ] as const;
</script>

<section aria-labelledby="guides-heading">
  <div class="flex items-baseline gap-4 mb-8">
    <h2
      id="guides-heading"
      class="page-hub-title text-xl md:text-2xl text-gradient-slate uppercase tracking-[0.12em]"
    >
      Expert Guides
    </h2>
    <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
    <a
      href="/guides"
      class="text-xs font-bold text-prestige-gold hover:text-prestige-gold transition-colors whitespace-nowrap shrink-0 group flex items-center gap-1 uppercase tracking-wider"
    >
      View all guides
      <ArrowRight
        class="w-3 h-3 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  </div>

  <div
    class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 pr-10 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 lg:pr-0 [scroll-padding-inline-start:1rem] [mask-image:linear-gradient(to_right,black_0,black_calc(100%-2rem),transparent)] lg:[mask-image:none]"
    style="scrollbar-width: none"
  >
    {#each highlights as { href, icon: Icon, iconColor, title, description, category, cta }}
      <div class="flex flex-none w-[280px] snap-start lg:w-auto lg:flex-none">
        <a
          {href}
          class="group navy-card specular-edge p-6 flex flex-col gap-4 transition-transform duration-300 relative flex-1 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between relative z-10">
            <div
              class="w-10 h-10 rounded-xl bg-navy-raised border border-white/5 flex items-center justify-center shrink-0 shadow-lg"
            >
              <Icon class="w-5 h-5 {iconColor}" aria-hidden="true" />
            </div>
            <span
              class="badge-glossy text-xs font-bold text-prestige-gold px-2.5 py-1 uppercase tracking-wider"
            >
              {category}
            </span>
          </div>

          <div class="flex-1 relative z-10">
            <h3
              class="page-hub-title text-base mb-2 group-hover:text-prestige-gold transition-colors leading-snug font-sans"
            >
              {title}
            </h3>
            <p class="page-hub-subtitle text-sm line-clamp-2">{description}</p>
          </div>

          <div
            class="flex items-center gap-1 text-xs text-prestige-gold font-bold mt-auto pt-2 relative z-10 uppercase tracking-[0.14em]"
          >
            {cta}
            <ArrowRight
              class="w-3 h-3 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>
    {/each}

    <div class="flex flex-none w-[180px] snap-start lg:hidden">
      <a
        href="/guides"
        class="group navy-card p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 flex-1 border border-white/5 hover:border-prestige-gold/30 text-center"
      >
        <div
          class="w-10 h-10 rounded-xl bg-navy-raised border border-white/5 flex items-center justify-center"
        >
          <ArrowRight
            class="w-5 h-5 text-prestige-gold group-hover:translate-x-0.5 transition-transform"
            aria-hidden="true"
          />
        </div>
        <span class="text-xs font-bold text-prestige-gold uppercase tracking-[0.12em] leading-tight">
          View All<br />Guides
        </span>
      </a>
    </div>
  </div>
</section>
