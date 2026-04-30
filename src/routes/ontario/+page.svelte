<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { ArrowRight } from 'lucide-svelte';

  const sourceCards = [
    {
      name: 'AGCO',
      href: 'https://www.agco.ca/',
      note: 'Ontario gaming regulator and standards authority.',
    },
    {
      name: 'iGaming Ontario',
      href: 'https://www.igamingontario.ca/en',
      note: 'Ontario market operator and public registrant information.',
    },
    {
      name: 'ConnexOntario',
      href: 'https://www.connexontario.ca/',
      note: 'Ontario responsible gambling and mental-health support access.',
    },
  ];

  const reviewCards = [
    {
      href: '/casino',
      title: '247iBET Casino',
      description:
        'Ontario-available casino with fast payouts, live dealer games, and 24/7 support.',
    },
    {
      href: '/sportsbook',
      title: '247iBET Sportsbook',
      description: 'Sports betting for Ontario players — NHL, NBA, UFC, and more.',
    },
  ];

  const faqItems = [
    {
      question: 'What should Ontario players check before signing up?',
      answer:
        'Start with age and location eligibility, then confirm current account access, Interac support, KYC steps, and withdrawal expectations before you move money.',
    },
    {
      question: 'What is the legal gambling age in Ontario?',
      answer:
        'The legal age for online casino and sports betting in Ontario is 19+. Age and identity checks should be complete before you expect full real-money access.',
    },
    {
      question: 'Do Ontario players usually use Interac?',
      answer:
        'Interac e-Transfer is one of the most common payment rails for Ontario players because it supports CAD deposits and can also support quicker withdrawals after KYC and operator approval.',
    },
    {
      question: 'Should I treat every Ontario availability claim as current?',
      answer:
        'No. Availability, payment support, and payout timing can change. Use current operator, market, and payment information before you sign up or fund an account.',
    },
  ];

  const guideItems = [
    {
      href: '/guides/ontario-casino-operator-checks',
      title: 'Ontario casino checklist',
      description:
        'Use this before signup to validate market status, cashier support, KYC friction, and withdrawal handling in the right order.',
    },
    {
      href: '/guides/ontario-sportsbook-registration-checklist',
      title: 'Ontario sportsbook checklist',
      description:
        'Compare current market status, bet-type fit, Interac support, and registration friction before you choose a sportsbook.',
    },
    {
      href: '/guides/interac-e-transfer-casino',
      title: 'Interac e-Transfer guide',
      description:
        'Use this before you assume deposits and withdrawals work the same way across every Ontario-facing cashier.',
    },
    {
      href: '/guides/how-to-withdraw-casino-winnings',
      title: 'Withdrawal process guide',
      description:
        'Review document checks, approval timing, and payout friction before you treat speed claims as current.',
    },
    {
      href: '/responsible-gambling',
      title: 'Responsible gambling resources',
      description:
        'Keep limits, time-outs, and support access visible before you opt into any Ontario operator flow.',
    },
  ];

  const crossProvinceItems = [
    {
      href: '/legal-online-gambling-canada',
      title: 'Canada legal framework',
      description:
        'Compare Ontario with Alberta, monopoly provinces, and broader Canadian operator access rules.',
    },
    {
      href: '/gambling-age-canada',
      title: 'Gambling age by province',
      description:
        'Ontario is 19+, while Alberta, Manitoba, and Quebec are 18+. Use the full province grid before publishing any national claim.',
    },
    {
      href: '/alberta',
      title: 'Alberta market hub',
      description:
        'Track how Alberta differs from Ontario on launch timing, legal age, and market maturity.',
    },
    {
      href: '/guides/single-game-betting-canada',
      title: 'Single-event betting context',
      description:
        'Use the legal and product background page when sportsbook copy needs federal context rather than operator claims.',
    },
  ];

const LAST_UPDATED = '2026-04-29';
import AuthorByline from '$lib/components/AuthorByline.svelte';
</script>

<svelte:head>
  <title>Ontario Online Casino &amp; Sports Betting | 247iBET</title>
  <meta
    name="description"
    content="Ontario hub for casino games, sports betting, Interac guidance, age checks, and account setup context for players in the province."
  />
  <meta property="og:title" content="Ontario Online Casino &amp; Sports Betting | 247iBET" />
  <meta
    property="og:description"
    content="Ontario hub for casino games, sports betting, Interac guidance, age checks, and account setup context for players in the province."
  />
  <meta name="twitter:title" content="Ontario Online Casino &amp; Sports Betting | 247iBET" />
  <meta
    name="twitter:description"
    content="Ontario hub for casino games, sports betting, Interac guidance, age checks, and account setup context for players in the province."
  />
  <link rel="canonical" href={canonicalUrl('/ontario')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Ontario', item: 'https://247ibet.ca/ontario' },
      ],
    }}
  />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 pb-20">
  <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">Ontario</li>
      </ol>
    </nav>

    <header class="relative mb-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-navy-card shadow-2xl">
      <img
        src="/images/generated/canada-market-hero.png"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div class="relative z-10 p-8 md:p-14">
        <div class="flex flex-wrap items-center gap-3 mb-8">
          <div class="glass-regular inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10 shadow-lg">
            <span class="live-dot" aria-hidden="true"></span>
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-white">
              Market Active
            </p>
          </div>
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5">
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
              AGCO Licensed · 19+
            </p>
          </div>
        </div>

        <h1 class="page-hero-title">
          Ontario <br />
          <span class="text-prestige-gold">iGaming Hub</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body/90 md:text-xl">
          Your authoritative guide to the Ontario regulated market. Compare licensed operators, verify Interac payout expectations, and access responsible gambling resources.
        </p>

        <div class="mt-10">
          <AuthorByline authorId="editorial" date={LAST_UPDATED} />
        </div>
      </div>
    </header>

  <AffiliateDisclosure />

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Ontario Availability &amp; Setup</h2>
    <p class="text-sm text-gray-300 leading-relaxed mb-6">
      Ontario players should confirm age eligibility, current account access, payment support, and
      withdrawal handling before moving from registration to deposit.
    </p>
    <div class="grid gap-4 md:grid-cols-2 text-sm text-gray-300">
      <div class="navy-card rounded-xl p-4">
        <h3 class="font-bold text-white mb-2">Player Access</h3>
        <p class="leading-relaxed">
          Real-money access is intended for players who are physically in Ontario and at least 19
          years of age.
        </p>
      </div>
      <div class="navy-card rounded-xl p-4">
        <h3 class="font-bold text-white mb-2">Cashier Check</h3>
        <p class="leading-relaxed">
          Interac deposits can be simple while withdrawals still depend on KYC, review queues, and
          bank-side completion.
        </p>
      </div>
    </div>
  </section>

    <section class="mb-16 grid gap-6 md:grid-cols-2">
      <a
        href="/ontario/online-casino"
        class="glass-thin group flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl"
      >
        <div>
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-blue/10 text-slate-blue ring-1 ring-slate-blue/20 transition-transform group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="font-display text-2xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Ontario Casino</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Move straight into slots, live dealer games, and table games with the Ontario route already in mind.
          </p>
        </div>
        <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold">
          Explore Casino
          <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </a>

      <a
        href="/ontario/sports-betting"
        class="glass-thin group flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all hover:bg-navy-raised hover:shadow-2xl"
      >
        <div>
          <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-blue/10 text-slate-blue ring-1 ring-slate-blue/20 transition-transform group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="font-display text-2xl font-black uppercase text-white group-hover:text-prestige-gold transition-colors">Ontario Sports</h3>
          <p class="mt-4 text-sm leading-relaxed text-text-body">
            Bet on NHL, NBA, and more with an Ontario-focused route into the sportsbook.
          </p>
        </div>
        <div class="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-prestige-gold">
          Explore Sportsbook
          <ArrowRight class="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </a>
    </section>

  <div class="mb-10">
    <IBetShowcase variant="banner" ctaText="Play in Ontario" />
  </div>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Ontario supporting guides</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each guideItems as item}
        <a
          href={item.href}
          class="navy-card rounded-xl p-4 transition-colors hover:border-slate-blue/30"
        >
          <div class="font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Ontario operator review entry points</h2>
    <p class="text-sm text-gray-400 leading-relaxed mb-5">
      Use these review pages to compare cashier flow, mobile experience, and product fit before you
      register or deposit.
    </p>
    <div class="grid gap-4 md:grid-cols-2">
      {#each reviewCards as item}
        <a
          href={item.href}
          class="navy-card rounded-xl p-4 transition-colors hover:border-slate-blue/30"
        >
          <div class="font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Primary Ontario checks before signup</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 bg-white/3">
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Check</th>
            <th class="text-left p-4 text-gray-400 font-mono uppercase text-xs">Why it matters</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5 text-gray-300">
          <tr>
            <td class="p-4 font-semibold text-white">Verify current operator status</td>
            <td class="p-4"
              >Ontario availability should be confirmed against current official market information
              before registration.</td
            >
          </tr>
          <tr>
            <td class="p-4 font-semibold text-white">Check Interac and cashier support</td>
            <td class="p-4"
              >Deposits can be easy while withdrawals still depend on KYC, payout review, and
              bank-side completion.</td
            >
          </tr>
          <tr>
            <td class="p-4 font-semibold text-white">Review bonus and wagering terms</td>
            <td class="p-4"
              >Ontario public-entry content should not lead with inducements. Terms still matter
              before you opt in.</td
            >
          </tr>
          <tr>
            <td class="p-4 font-semibold text-white">Keep responsible gambling tools visible</td>
            <td class="p-4"
              >Deposit limits, time-outs, self-exclusion, and support contacts should be easy to
              find before you play.</td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="navy-card rounded-2xl p-6 md:p-8 mb-10">
    <h2 class="text-2xl font-bold mb-4">Source references</h2>
    <div class="grid gap-4 md:grid-cols-3">
      {#each sourceCards as source}
        <a
          href={source.href}
          target="_blank"
          rel="noreferrer noopener"
          class="navy-card rounded-xl p-4 transition-colors hover:border-slate-blue/30"
        >
          <div class="font-bold text-white mb-2">{source.name}</div>
          <p class="text-sm text-gray-400 leading-relaxed">{source.note}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold mb-5">Cross-province context</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {#each crossProvinceItems as item}
        <a
          href={item.href}
          class="rounded-2xl border border-white/10 bg-black/20 p-5 transition-colors hover:border-slate-blue/30 hover:bg-black/30"
        >
          <div class="text-lg font-bold text-white mb-2">{item.title}</div>
          <p class="text-sm leading-relaxed text-gray-400">{item.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="space-y-4 mb-10">
    <h2 class="text-2xl font-bold">Ontario FAQ</h2>
    {#each faqItems as faq}
      <details class="navy-card rounded-xl p-4 group cursor-pointer">
        <summary class="flex list-none items-center justify-between gap-2 font-bold text-[#F1F5F9]">
          {faq.question}
          <svg
            class="h-4 w-4 shrink-0 text-text-tertiary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-[#94A3B8]">{faq.answer}</p>
      </details>
    {/each}
  </section>

  <AuthorByline authorId="editorial" date={LAST_UPDATED} />

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
  </div>
</div>
