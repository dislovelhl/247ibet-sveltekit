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
    ShieldCheck,
    Upload,
    WalletCards,
  } from 'lucide-svelte';
  import SafeExternalLink from '$lib/components/SafeExternalLink.svelte';
  import { IBET_URLS } from '$lib/ibet-brand';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';

  const trustItems = [
    {
      title: 'Common CAD rail',
      body: 'A familiar Canadian bank transfer method',
      icon: BadgeCheck,
    },
    {
      title: 'Timing varies',
      body: 'Deposits and withdrawals depend on operator and bank checks.',
      icon: Clock3,
    },
    {
      title: 'Bank-side flow',
      body: 'Interac transfers run through participating financial institutions.',
      icon: ShieldCheck,
    },
  ];

  const depositSteps = [
    'Open the operating-platform account',
    'Navigate to the Cashier',
    'Enter your deposit amount',
    'Confirm the transaction',
    'Wait for cashier confirmation',
  ];

  const withdrawalSteps = [
    'Choose Interac e-Transfer',
    'Confirm your account is verified',
    'Wait for operator approval',
    'Accept the transfer',
    'Wait for bank-side settlement',
  ];

  const timingRows = [
    {
      service: 'Interac Deposit',
      time: 'Operator/bank dependent',
      limit: 'CAD $10 - $3,000',
      notes: 'Timing varies by operator and bank checks.',
    },
    {
      service: 'Interac Withdrawal',
      time: 'Post-approval timing varies',
      limit: 'CAD $20 - $5,000',
      notes: 'Bank-side receipt timing varies after approval.',
    },
    {
      service: 'Account Verification',
      time: 'Instant - 24 hours',
      limit: 'N/A',
      notes: 'Required for withdrawals for your security.',
    },
  ];

  const guideCards = [
    {
      href: '/interac/deposit',
      title: 'How to Deposit with Interac',
      body: 'Follow our simple step-by-step guide to make your first Interac e-Transfer deposit.',
      cta: 'View Deposit Guide',
      icon: Banknote,
    },
    {
      href: '/interac/withdraw',
      title: 'How to Withdraw with Interac',
      body: 'Everything you need to know about withdrawing funds securely.',
      cta: 'View Withdrawal Guide',
      icon: WalletCards,
    },
  ];

  const faqItems = [
    {
      q: 'How long does an Interac withdrawal take?',
      a: 'After operator approval, bank-side Interac e-Transfer timing can vary. First withdrawals may take longer because of KYC, bonus review, banking, or fraud checks.',
    },
    {
      q: 'Are there fees for using Interac?',
      a: 'Fees vary by operator cashier and by financial institution. Verify the live platform terms and your bank plan before sending an e-Transfer.',
    },
    {
      q: 'What is the minimum Interac deposit?',
      a: 'Interac e-Transfer minimums and maximums vary by operator, account verification level, and banking partner. Verify the live cashier terms before depositing.',
    },
    {
      q: 'Is Interac safer than cards?',
      a: 'Interac e-Transfer runs through participating financial institutions and does not send money by email or text. Casino safety still depends on using a properly regulated operator, matching account details, and completing KYC before withdrawals.',
    },
    {
      q: 'Why was my Interac transfer declined?',
      a: 'Common reasons: daily transfer limit reached at your bank, incorrect security question/answer, or your financial institution blocks gambling-related transfers. Contact your bank to confirm their policy on e-Transfers to casino operators.',
    },
  ];

  let faqOpenIndex = $state<number | null>(null);
</script>

<svelte:head>
  <title>Interac Casino Canada: Deposits, Withdrawals & Limits | 247iBET</title>
  <meta
    name="description"
    content="Use Interac e-Transfer guidance to compare Canadian casino deposits, withdrawals, limits, fees, and cashier checks before funding an account."
  />
  <link rel="canonical" href={canonicalUrl('/interac')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Interac Casino Canada: Deposits, Withdrawals and Limits',
      description:
        'Use Interac e-Transfer guidance to compare Canadian casino deposits, withdrawals, limits, fees, and cashier checks before funding an account.',
      url: canonicalUrl('/interac'),
      datePublished: '2026-05-09',
      dateModified: '2026-05-09',
      publisher: {
        '@type': 'Organization',
        name: '247iBET',
        url: 'https://247ibet.ca',
      },
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Interac', item: canonicalUrl('/interac') },
      ],
    }}
  />
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

<div class="min-h-screen bg-navy-black text-white" role="presentation">
  <main class="mx-auto max-w-[1720px] px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true">/</li>
        <li class="text-white font-medium">Interac Payouts</li>
      </ol>
    </nav>

    <AffiliateDisclosure variant="inline" />

    <header
      class="material-panel relative mb-12 min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl"
    >
      <BackgroundAtmosphere
        src="/images/generated/interac-payment-hero.webp"
        parallaxMultiplier={0.4}
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"
      ></div>

      <div
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div
            class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]"
          >
            <p class="text-xs font-black uppercase tracking-[0.15em] text-prestige-gold">
              CAD Native Payments
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Deposit &amp; Withdraw <br />
          with
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Interac</span
          >
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Use Interac e-Transfer guidance to understand CAD deposits, withdrawals, timing caveats,
          and cashier checks before visiting the separate gaming platform.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary min-w-[200px] shimmer-effect btn-magnetic"
          >
            Visit Platform
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </SafeExternalLink>
          <a href="#timing" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            View Timing
          </a>
        </div>
      </div>
    </header>

    <div class="material-group mt-10 mb-12 grid gap-2 p-2 sm:grid-cols-3">
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
            <p class="mt-1 text-xs leading-5 text-text-body">{@html item.body}</p>
          </div>
        </div>
      {/each}
    </div>

    <section
      id="timing"
      class="material-panel mt-14 p-5 shadow-[0_18px_60px_-45px_rgba(212,148,58,0.65)] md:p-6"
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
              Interac e-Transfer payout timing depends on operator approval, account verification,
              bonus review, and bank-side processing.
            </p>
            <p class="mt-2 max-w-3xl text-sm leading-6 text-text-body">
              Treat any exact timing, limit, or fee as a live operating-platform term to verify
              before depositing or withdrawing.
            </p>
          </div>
        </div>
        <a
          href="/fast-payouts"
          class="inline-flex items-center gap-2 text-sm font-black text-prestige-gold transition-colors hover:text-prestige-gold-light"
        >
          Learn more about timing
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
          <h2 class="text-3xl font-black text-white">How to Deposit</h2>
        </div>
        <ol class="material-group space-y-2 p-2">
          {#each depositSteps as step, index}
            <li class="material-cell grid grid-cols-[2.25rem_1fr] gap-4 rounded-2xl p-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
                >{index + 1}</span
              >
              <span>
                <span class="block text-lg font-black text-white">{step}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">
                  {index === 0
                    ? 'Access the operating-platform account and use any required security controls.'
                    : index === 1
                      ? 'Select Deposit and choose Interac e-Transfer from the list of payment methods.'
                      : index === 2
                        ? 'Input the amount shown as eligible in the live cashier.'
                        : index === 3
                          ? 'Follow the secure Interac prompts to authorize the transfer from your bank.'
                          : 'Wait for the cashier confirmation before assuming funds are available.'}
                </span>
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
          <h2 class="text-3xl font-black text-white">How to Withdraw</h2>
        </div>
        <ol class="material-group space-y-2 p-2">
          {#each withdrawalSteps as step, index}
            <li class="material-cell grid grid-cols-[2.25rem_1fr] gap-4 rounded-2xl p-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
                >{index + 1}</span
              >
              <span>
                <span class="block text-lg font-black text-white">{step}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">
                  {index === 0
                    ? 'Select Interac e-Transfer as your withdrawal method.'
                    : index === 1
                      ? 'Ensure your account is fully verified to prevent delays.'
                      : index === 2
                        ? 'Withdrawals require operator review; timing varies by platform, KYC, and bonus status.'
                        : index === 3
                          ? 'Accept the Interac e-Transfer directly in your email or through your bank.'
                          : 'Bank-side completion timing can vary after the transfer is accepted.'}
                </span>
              </span>
            </li>
          {/each}
        </ol>
      </div>
    </section>

    <section class="material-panel mt-12 overflow-hidden p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Timing &amp; Expectation Limits</h2>
      <div class="material-cell table-scroll-wrap mt-7 rounded-2xl">
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr
              class="border-b soft-separator text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
            >
              <th class="px-4 py-4 font-black">Service</th>
              <th class="px-4 py-4 font-black">Typical Time</th>
              <th class="px-4 py-4 font-black">Limits</th>
              <th class="px-4 py-4 font-black">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/6">
            {#each timingRows as row}
              <tr class="text-text-body">
                <td class="px-4 py-5 font-black text-white">{row.service}</td>
                <td class="px-4 py-5">{row.time}</td>
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
          All times are estimates and may vary based on your bank, verification status, and security
          reviews.
        </p>
      </div>
    </section>

    <section class="material-group mt-12 grid gap-2 p-2 md:grid-cols-2">
      {#each guideCards as card}
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
      <h2 class="text-3xl font-black text-white">Interac FAQ</h2>
      <div class="mt-6 divide-y divide-white/8">
        {#each faqItems as item, i}
          <div>
            <button
              id="interac-faq-btn-{i}"
              type="button"
              class="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
              aria-expanded={faqOpenIndex === i}
              aria-controls="interac-faq-panel-{i}"
              onclick={() => (faqOpenIndex = faqOpenIndex === i ? null : i)}
            >
              <span class="text-base font-black text-white">{item.q}</span>
              <ChevronDown
                class="h-5 w-5 shrink-0 text-text-body transition-transform duration-200 {faqOpenIndex ===
                i
                  ? 'rotate-180'
                  : ''}"
                aria-hidden="true"
              />
            </button>
            <div
              id="interac-faq-panel-{i}"
              role="region"
              aria-labelledby="interac-faq-btn-{i}"
              hidden={faqOpenIndex !== i}
            >
              <p class="pb-5 text-sm leading-6 text-text-body">{item.a}</p>
            </div>
          </div>
        {/each}
      </div>
      <p class="mt-6 text-center text-sm text-text-body">
        Still have questions? <a
          href="/contact"
          class="font-black text-prestige-gold hover:text-prestige-gold-light"
          >Use the appropriate operator support channel for account issues.</a
        >
      </p>
    </section>

    <section class="material-panel mt-12 overflow-hidden p-7 shadow-2xl md:p-10">
      <div class="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black text-white md:text-4xl">Ready to verify cashier terms?</h2>
          <p class="mt-3 text-base text-text-body">
            Review current platform terms, eligibility, and responsible-play controls before
            depositing.
          </p>
        </div>
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
          Visit Platform
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>

    <section class="material-panel mt-7 p-6">
      <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <ShieldCheck class="h-9 w-9 text-prestige-gold" aria-hidden="true" />
          <div>
            <h2 class="text-xl font-black">We play for keeps.</h2>
            <p class="mt-1 text-sm text-text-body">Play responsibly. Set limits. Need help?</p>
          </div>
        </div>
        <a
          href="/responsible-gambling"
          class="inline-flex items-center gap-2 text-sm font-black text-prestige-gold"
        >
          Visit Responsible Gaming
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  </main>
</div>
