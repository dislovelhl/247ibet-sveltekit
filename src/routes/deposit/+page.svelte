<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import {
    ArrowRight,
    BadgeCheck,
    Banknote,
    ChevronDown,
    Clock3,
    Download,
    Info,
    Landmark,
    ShieldCheck,
    Upload,
  } from 'lucide-svelte';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { howToSchema } from '$lib/json-ld';

  const trustItems = [
    { title: 'Deposit-first guidance', body: 'Check cashier terms before funding', icon: BadgeCheck },
    { title: 'Limits vary', body: 'Bank and operator limits can differ', icon: Clock3 },
    { title: 'Budget before play', body: 'Set limits before sending funds', icon: ShieldCheck },
  ];

  const depositSteps = [
    {
      title: 'Confirm the live cashier method',
      body: 'Open the operating-platform cashier and verify which CAD funding method is currently available before planning a deposit.',
    },
    {
      title: 'Check minimums, maximums, and fees',
      body: 'Compare the cashier amount range with your bank transfer limit and any account-plan fees.',
    },
    {
      title: 'Review bonus impact first',
      body: 'Read bonus terms before funding so wagering, game restrictions, or expiry rules do not surprise you later.',
    },
    {
      title: 'Set a responsible budget',
      body: 'Choose a deposit amount that fits your entertainment budget and use platform limits where available.',
    },
    {
      title: 'Wait for confirmed account credit',
      body: 'Do not assume funds are playable until the separate operating platform confirms the deposit in the cashier balance.',
    },
  ];

  const withdrawalSteps = [
    {
      title: 'Match account details',
      body: 'Use banking details that match the gaming account owner to reduce verification friction.',
    },
    {
      title: 'Complete KYC early',
      body: 'Identity checks may be required before withdrawals, so complete them before depositing larger amounts.',
    },
    {
      title: 'Keep deposit receipts',
      body: 'Save transaction references until the cashier balance and account history both show the funded amount.',
    },
    {
      title: 'Avoid duplicate attempts',
      body: 'If a deposit is pending, wait for bank and operator confirmation before trying the same transfer again.',
    },
    {
      title: 'Know the exit path',
      body: 'Review withdrawal eligibility, payout timing, and bonus restrictions before the first deposit.',
    },
  ];

  const timingRows = [
    {
      service: 'Cashier availability',
      timing: 'Check live before funding',
      limit: 'Operator-defined',
      notes: 'Available deposit methods, limits, and fee notices can change in the live cashier.',
    },
    {
      service: 'Deposit confirmation',
      timing: 'Bank/operator dependent',
      limit: 'Account-specific',
      notes: 'A transfer is not complete until the platform confirms the playable balance.',
    },
    {
      service: 'Bonus eligibility',
      timing: 'Before deposit',
      limit: 'Offer-specific',
      notes: 'Some offers require opt-in, minimum deposit amounts, or specific payment eligibility.',
    },
    {
      service: 'Account verification',
      timing: 'Before cashout when requested',
      limit: 'N/A',
      notes: 'KYC status affects withdrawal readiness even though this page focuses on deposits.',
    },
  ];

  const faqItems = [
    {
      question: 'What should I check before making a casino deposit?',
      answer:
        'Confirm the live cashier method, minimum and maximum amounts, possible fees, bonus eligibility, responsible-play limits, and whether your account details match your banking details.',
    },
    {
      question: 'Is the /deposit page the same as the Interac guide?',
      answer:
        'No. This page is the general deposit-readiness checklist. The Interac page explains the Interac e-Transfer rail, including deposit and withdrawal timing caveats.',
    },
    {
      question: 'Can a deposit affect withdrawals later?',
      answer:
        'Yes. Bonus opt-ins, mismatched account details, missing KYC, or unresolved payment checks can slow or block later withdrawal requests.',
    },
    {
      question: 'Should I deposit before reading bonus terms?',
      answer:
        'No. Read the offer terms first, including minimum deposit, wagering requirements, game restrictions, expiry, and payment-method eligibility.',
    },
  ];

  const quickCards = [
    {
      href: '/interac',
      title: 'Interac e-Transfer Details',
      body: 'Use the dedicated Interac page for rail-specific deposit, withdrawal, and bank-side timing notes.',
      icon: Landmark,
      cta: 'Open Interac Guide',
    },
    {
      href: '/fast-payouts',
      title: 'Withdrawal Readiness',
      body: 'Review payout timing, KYC friction, and approval checkpoints before you fund an account.',
      icon: Banknote,
      cta: 'View Payout Guide',
    },
  ];

  let openFaq = $state(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
</script>

<svelte:head>
  <title>Casino Deposit Guide Canada: Cashier Checks & Limits | 247iBET</title>
  <meta
    name="description"
    content="Canadian casino deposit checklist covering cashier methods, limits, bonus terms, verification readiness, and responsible funding reminders."
  />
  <meta property="og:title" content="Casino Deposit Guide Canada: Cashier Checks & Limits" />
  <meta
    property="og:description"
    content="How to check casino deposit terms in Canada before funding an account, including limits, bonus impact, KYC readiness, and cashier confirmation."
  />
  <link rel="canonical" href={canonicalUrl('/deposit')} />
  <JsonLd schema={faqSchema} />
  <JsonLd
    schema={howToSchema({
      name: 'How to check casino deposit terms in Canada',
      description:
        'Step-by-step guide to checking cashier terms, limits, bonus impact, and verification readiness before funding a casino account.',
      steps: depositSteps.map((step) => ({
        name: step.title,
        text: step.body,
      })),
    })}
  />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol
        class="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40"
      >
        <li><a href="/" class="transition-colors hover:text-prestige-gold">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">Deposit Guide</li>
      </ol>
    </nav>

    <AffiliateDisclosure variant="inline" />

    <header
      class="material-panel relative mb-12 min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl"
    >
      <BackgroundAtmosphere
        src="/images/generated/interac-payment-hero.png"
        parallaxMultiplier={0.4}
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"
      ></div>

      <div
        class="material-panel relative z-10 mx-4 my-6 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-8 md:p-14 lg:max-w-3xl"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <div
            class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]"
          >
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              Deposit Checklist · Canada
            </p>
          </div>
          <span class="text-luxury tracking-boutique text-[11px] text-prestige-gold/60"
            >Funding Readiness</span
          >
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Deposit Smarter <br />
          Before You
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Fund</span
          >
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          A Canadian deposit-readiness checklist for checking cashier methods, limits, bonus impact,
          verification readiness, and responsible-play controls before sending funds.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary group min-w-[200px] shimmer-effect btn-magnetic"
          >
            Check Live Cashier
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </SafeExternalLink>
          <a href="#timing" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            Review Checklist
          </a>
        </div>
      </div>
    </header>

    <div
      class="material-group mb-12 grid gap-2 p-2 shadow-[0_22px_60px_-45px_rgba(212,148,58,0.5)] sm:grid-cols-3"
    >
      {#each trustItems as item}
        {@const Icon = item.icon}
        <div class="material-cell flex gap-3 rounded-2xl p-3">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-prestige-gold/30 bg-prestige-gold/10 text-prestige-gold"
          >
            <Icon class="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p class="text-sm font-black text-white">{item.title}</p>
            <p class="mt-1 text-xs leading-5 text-text-body">{item.body}</p>
          </div>
        </div>
      {/each}
    </div>

    <section
      id="timing"
      class="material-panel p-5 shadow-[0_18px_60px_-45px_rgba(212,148,58,0.65)] md:p-6"
    >
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="flex gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-prestige-gold/35 bg-prestige-gold/10 text-prestige-gold"
          >
            <Info class="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p class="font-black text-white">
              Deposit terms depend on the live operating-platform cashier, account status, bank limits,
              bonus eligibility, and responsible-play controls.
            </p>
            <p class="mt-2 max-w-3xl text-sm leading-6 text-text-body">
              Treat this page as a pre-deposit checklist, not a promise that any method, amount, or
              bonus term is currently available.
            </p>
          </div>
        </div>
        <a
          href="/fast-payouts"
          class="inline-flex items-center gap-2 text-sm font-black text-prestige-gold transition-colors hover:text-prestige-gold-light"
        >
          Learn about payouts
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="mt-12 grid gap-6 lg:grid-cols-2">
      <div class="material-panel p-6 md:p-8">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full border border-prestige-gold/35 bg-prestige-gold/10 text-prestige-gold"
          >
            <Upload class="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black text-white">Deposit Checklist</h2>
        </div>
        <ol class="material-group space-y-2 p-2">
          {#each depositSteps as step, index}
            <li class="material-cell grid grid-cols-[2.25rem_1fr] gap-4 rounded-2xl p-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
                >{index + 1}</span
              >
              <span>
                <span class="block text-lg font-black text-white">{step.title}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">{step.body}</span>
              </span>
            </li>
          {/each}
        </ol>
      </div>

      <div class="material-panel p-6 md:p-8">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full border border-prestige-gold/35 bg-prestige-gold/10 text-prestige-gold"
          >
            <Download class="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black text-white">Before You Deposit</h2>
        </div>
        <ol class="material-group space-y-2 p-2">
          {#each withdrawalSteps as step, index}
            <li class="material-cell grid grid-cols-[2.25rem_1fr] gap-4 rounded-2xl p-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
                >{index + 1}</span
              >
              <span>
                <span class="block text-lg font-black text-white">{step.title}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">{step.body}</span>
              </span>
            </li>
          {/each}
        </ol>
      </div>
    </section>

    <section class="material-panel mt-12 overflow-hidden p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Cashier Terms to Verify</h2>
      <div class="material-cell table-scroll-wrap mt-7 rounded-2xl">
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr
              class="border-b soft-separator text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
            >
              <th class="px-4 py-4 font-black">Service</th>
              <th class="px-4 py-4 font-black">Typical Time</th>
              <th class="px-4 py-4 font-black">Limit</th>
              <th class="px-4 py-4 font-black">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/6">
            {#each timingRows as row}
              <tr class="text-text-body">
                <td class="px-4 py-5 font-black text-white">{row.service}</td>
                <td class="px-4 py-5">{row.timing}</td>
                <td class="px-4 py-5">{row.limit}</td>
                <td class="px-4 py-5">{row.notes}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="material-cell mt-7 flex gap-3 rounded-2xl p-4 text-sm text-text-body">
        <ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-prestige-gold" aria-hidden="true" />
        <p>
          All times are estimates and may vary based on bank, verification status, and account
          review.
        </p>
      </div>
    </section>

    <section class="material-group mt-12 grid gap-2 p-2 md:grid-cols-2">
      {#each quickCards as card}
        {@const Icon = card.icon}
        <a
          href={card.href}
          class="material-cell group rounded-[22px] p-7 transition-transform hover:-translate-y-0.5"
        >
          <div class="flex items-start justify-between gap-6">
            <div>
              <h2 class="text-2xl font-black text-white">{card.title}</h2>
              <p class="mt-3 max-w-md text-sm leading-6 text-text-body">{card.body}</p>
              <span
                class="mt-6 inline-flex items-center gap-2 text-sm font-black text-prestige-gold group-hover:text-prestige-gold-light"
              >
                {card.cta}
                <ArrowRight
                  class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
            <Icon class="h-16 w-16 shrink-0 text-prestige-gold/80" aria-hidden="true" />
          </div>
        </a>
      {/each}
    </section>

    <section class="material-panel mt-12 p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Deposit FAQ</h2>
      <div class="mt-6 divide-y divide-white/8">
        {#each faqItems as item, index}
          <div>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={openFaq === index}
              onclick={() => (openFaq = openFaq === index ? -1 : index)}
            >
              <span class="text-base font-black text-white">{item.question}</span>
              <ChevronDown
                class="h-5 w-5 shrink-0 text-text-body transition-transform {openFaq === index
                  ? 'rotate-180'
                  : ''}"
                aria-hidden="true"
              />
            </button>
            {#if openFaq === index}
              <p class="pb-5 pr-10 text-sm leading-6 text-text-body">{item.answer}</p>
            {/if}
          </div>
        {/each}
      </div>
      <p class="mt-6 text-center text-sm text-text-body">
        Still have questions?
        <a href="/contact" class="font-black text-prestige-gold hover:text-prestige-gold-light"
          >Contact our support team 24/7.</a
        >
      </p>
    </section>

    <section class="material-panel mt-12 overflow-hidden p-7 shadow-2xl md:p-10">
      <div class="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black text-white md:text-4xl">Ready to check the live cashier?</h2>
          <p class="mt-3 text-base text-text-body">
            Review current deposit terms, eligibility, and responsible-play controls before
            sending funds.
          </p>
        </div>
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
          Open Platform
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
