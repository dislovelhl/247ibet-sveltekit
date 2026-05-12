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

  const trustItems = [
    { title: 'Trusted by Canadians', body: 'CAD-native account funding', icon: BadgeCheck },
    { title: 'Fast & reliable', body: 'Deposits often land quickly', icon: Clock3 },
    { title: 'Secure & protected', body: 'Bank-backed transfer flow', icon: ShieldCheck },
  ];

  const depositSteps = [
    {
      title: 'Log in to your 247iBET account',
      body: 'Open your account and confirm your profile details are current.',
    },
    {
      title: 'Navigate to the Cashier',
      body: 'Choose Deposit, then select Interac e-Transfer as your payment method.',
    },
    {
      title: 'Enter your deposit amount',
      body: 'Set a CAD amount that fits your limit and review any active bonus terms.',
    },
    {
      title: 'Confirm the transaction',
      body: 'Follow the Interac prompts from your bank to authorize the transfer.',
    },
    {
      title: 'Funds in your account',
      body: 'Once confirmed, the balance appears in your 247iBET cashier.',
    },
  ];

  const withdrawalSteps = [
    {
      title: 'Choose Interac e-Transfer',
      body: 'Select Interac in the withdrawal section of the cashier.',
    },
    {
      title: 'Confirm your account is verified',
      body: 'KYC verification helps prevent avoidable payout delays.',
    },
    {
      title: 'Wait for operator approval',
      body: 'Withdrawals are reviewed for account, bonus, and security checks.',
    },
    {
      title: 'Accept the transfer',
      body: 'Accept the Interac notice from email or SMS into your bank.',
    },
    {
      title: 'Funds in your bank account',
      body: 'Approved transfers commonly land within the same session window.',
    },
  ];

  const timingRows = [
    {
      service: 'Interac Deposit',
      timing: 'Immediate - 30 min',
      limit: 'CAD $10 - $3,000',
      notes: 'Most deposits are instant after bank confirmation.',
    },
    {
      service: 'Interac Withdrawal',
      timing: '15 - 30 min after approval',
      limit: 'CAD $20 - $5,000',
      notes: 'Approval speed depends on verification and bonus review.',
    },
    {
      service: 'Account Verification',
      timing: 'Instant - 24 hours',
      limit: 'N/A',
      notes: 'Required before some withdrawal requests can be released.',
    },
  ];

  const faqItems = [
    {
      question: 'How long does an Interac withdrawal take?',
      answer:
        'Interac payouts at 247iBET are typically processed within 15-30 minutes after operator approval. First withdrawals or larger amounts can take longer if extra review is required.',
    },
    {
      question: 'Are there fees for using Interac?',
      answer:
        '247iBET does not position Interac as a fee-heavy route. Your bank account plan may still set transfer conditions, so review your bank terms before funding.',
    },
    {
      question: 'What is the minimum Interac deposit?',
      answer:
        'A typical minimum is CAD $10, though limits can vary by account, bank, and current cashier settings.',
    },
    {
      question: 'Is Interac safer than cards?',
      answer:
        'Interac uses your bank authentication flow and avoids entering card details in the cashier, which makes it a strong CAD payment option for many Canadian players.',
    },
  ];

  const quickCards = [
    {
      href: '/guides/interac-e-transfer-casino',
      title: 'How to Deposit with Interac',
      body: 'Review the bank handoff, cashier prompts, and first-deposit checks.',
      icon: Landmark,
      cta: 'View Deposit Guide',
    },
    {
      href: '/fast-payouts',
      title: 'How to Withdraw with Interac',
      body: 'Compare payout timing, KYC friction, and approval checkpoints.',
      icon: Banknote,
      cta: 'View Withdrawal Guide',
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
  <title>Deposit with Interac e-Transfer | Fast Canadian Casino Deposits at 247iBET</title>
  <meta
    name="description"
    content="Deposit and withdraw at 247iBET using Interac e-Transfer. Fast Canadian payments, clear timing expectations, and secure CAD-native account funding."
  />
  <meta property="og:title" content="Deposit with Interac at 247iBET Canada" />
  <meta
    property="og:description"
    content="Deposit and withdraw with Interac e-Transfer at 247iBET. Fast CAD payments for Canadian players."
  />
  <link rel="canonical" href={canonicalUrl('/deposit')} />
  <JsonLd schema={faqSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16 pt-24 lg:pt-40">
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40">
        <li><a href="/" class="transition-colors hover:text-prestige-gold">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li><a href="/interac" class="transition-colors hover:text-prestige-gold">Interac</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">Deposit &amp; Withdraw</li>
      </ol>
    </nav>

    <header
      class="material-panel relative mb-12 min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl"
    >
      <BackgroundAtmosphere
        src="/images/generated/interac-payment-hero.webp"
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent">
      </div>

      <div
        class="material-panel relative z-10 mx-4 my-6 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-8 md:p-14 lg:max-w-3xl"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <div
            class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]"
          >
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
              CAD Native · Bank Secured
            </p>
          </div>
          <span class="text-luxury tracking-boutique text-[11px] text-prestige-gold/60"
            >Instant Deposits</span
          >
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Deposit &amp; Withdraw <br />
          with <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]"
            >Interac</span
          >
        </h1>

        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-text-body md:text-xl font-light">
          Fast, secure, and trusted Interac e-Transfer funding at 247iBET. Built for Canadian
          players who demand direct bank integration and high-speed payouts.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <SafeExternalLink
            href={IBET_URLS.register}
            class="hero-cta-primary group min-w-[200px] shimmer-effect btn-magnetic"
          >
            Start Funding
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </SafeExternalLink>
          <a href="#timing" class="hero-cta-secondary min-w-[200px] glass-thin btn-magnetic">
            Check Timing
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
              Interac e-Transfer payouts at 247iBET are typically processed within 15-30 minutes of
              approval.
            </p>
            <p class="mt-2 max-w-3xl text-sm leading-6 text-text-body">
              This provides a fast Canadian withdrawal route, with direct bank integration and
              security review before release.
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
                <span class="block text-lg font-black text-white">{step.title}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">{step.body}</span>
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
      <h2 class="text-3xl font-black text-white">Interac FAQ</h2>
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
          <h2 class="text-3xl font-black text-white md:text-4xl">
            Ready to make a secure deposit?
          </h2>
          <p class="mt-3 text-base text-text-body">
            Join 247iBET today and use fast, trusted Interac payments.
          </p>
        </div>
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
          Join Now - It&apos;s Free
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>
  </div>
</div>
