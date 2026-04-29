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

  const trustItems = [
    {
      title: 'Trusted by Canadians',
      body: 'Canada&apos;s most trusted payment method',
      icon: BadgeCheck,
    },
    {
      title: 'Fast & Reliable',
      body: 'Deposits in minutes. Withdrawals in 1-24 hours.',
      icon: Clock3,
    },
    {
      title: 'Secure & Protected',
      body: 'Bank-level security to protect your funds',
      icon: ShieldCheck,
    },
  ];

  const depositSteps = [
    'Log in to your 247iBET account',
    'Navigate to the Cashier',
    'Enter your deposit amount',
    'Confirm the transaction',
    'Funds in your account',
  ];

  const withdrawalSteps = [
    'Choose Interac e-Transfer',
    'Confirm your account is verified',
    'Wait for operator approval',
    'Accept the transfer',
    'Funds in your bank account',
  ];

  const timingRows = [
    {
      service: 'Interac Deposit',
      time: 'Immediate - 10 mins',
      limit: 'CAD $10 - $3,000',
      notes: 'Most deposits are instant.',
    },
    {
      service: 'Interac Withdrawal',
      time: '1 - 24 hours (post-approval)',
      limit: 'CAD $20 - $5,000',
      notes: 'Payouts typically received in 15-30 mins.',
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
    'How long does an Interac withdrawal take?',
    'Are there fees for using Interac?',
    'What is the minimum Interac deposit?',
    'Is Interac safer than cards?',
    'Why was my Interac transfer declined?',
  ];
</script>

<svelte:head>
  <title>Interac Casino Canada: Fast Deposits & Withdrawals at 247iBET</title>
  <meta
    name="description"
    content="Use Interac e-Transfer for fast Canadian casino deposits and withdrawals at 247iBET. Clear timing, secure CAD payments, and step-by-step guidance."
  />
  <link rel="canonical" href={canonicalUrl('/interac')} />
</svelte:head>

<div class="min-h-screen bg-navy-black pt-6 text-white">
  <main class="mx-auto max-w-[1720px] px-4 pb-20 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-semibold text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li aria-hidden="true">›</li>
        <li class="text-white">Interac</li>
        <li aria-hidden="true">›</li>
        <li class="text-white">Deposit &amp; Withdraw</li>
      </ol>
    </nav>

    <header class="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <h1
          class="max-w-4xl text-[clamp(3rem,6.5vw,6rem)] font-black leading-[1.02] tracking-normal"
        >
          Deposit &amp; Withdraw <br />
          with <span class="text-prestige-gold">Interac</span> in Canada
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-text-body">
          Fast, secure, and trusted. Use Interac e-Transfer to deposit and withdraw CAD at 247iBET,
          built for Canadian players.
        </p>

        <div
          class="mt-10 grid gap-3 rounded-xl border border-white/10 bg-navy-card/70 p-4 sm:grid-cols-3"
        >
          {#each trustItems as item}
            {@const Icon = item.icon}
            <div class="flex gap-3 rounded-lg bg-black/14 p-3">
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
      </div>

      <div
        class="relative overflow-hidden rounded-xl border border-white/12 bg-navy-card shadow-2xl"
      >
        <img
          src="/images/generated/interac-payment-hero.png"
          alt="Interac e-Transfer secure payment visual"
          class="h-full min-h-[340px] w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-navy-black/70 via-transparent to-transparent"
        ></div>
        <div class="absolute inset-x-0 bottom-0 p-8">
          <p class="text-base font-semibold text-white">Secure payments. Trusted by millions.</p>
          <p class="mt-2 max-w-md text-sm leading-6 text-text-body">
            Interac keeps sensitive payment steps inside your bank flow while 247iBET records the
            cashier result.
          </p>
        </div>
      </div>
    </header>

    <section
      class="mt-14 rounded-xl border border-prestige-gold/45 bg-prestige-gold/7 p-5 shadow-[0_18px_60px_-45px_rgba(212,148,58,0.65)] md:p-6"
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
              This process includes fraud checks and bank verification. In rare cases, timing may
              vary based on bank and security review.
            </p>
          </div>
        </div>
        <a
          href="/fast-payouts"
          class="inline-flex items-center gap-2 text-sm font-black text-prestige-gold hover:text-prestige-gold-light"
        >
          Learn more about timing
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section class="mt-12 grid gap-6 lg:grid-cols-2">
      <div class="navy-card p-6 md:p-8">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full border border-prestige-gold/35 bg-prestige-gold/10 text-prestige-gold"
          >
            <Upload class="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black text-white">How to Deposit</h2>
        </div>
        <ol class="space-y-7">
          {#each depositSteps as step, index}
            <li class="grid grid-cols-[2.25rem_1fr] gap-4">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
                >{index + 1}</span
              >
              <span>
                <span class="block text-lg font-black text-white">{step}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">
                  {index === 0
                    ? 'Access your account and make sure you have enabled 2FA.'
                    : index === 1
                      ? 'Select Deposit and choose Interac e-Transfer from the list of payment methods.'
                      : index === 2
                        ? 'Input the amount you wish to fund.'
                        : index === 3
                          ? 'Follow the secure Interac prompts to authorize the transfer from your bank.'
                          : 'Your deposit is credited in minutes.'}
                </span>
              </span>
            </li>
          {/each}
        </ol>
      </div>

      <div class="navy-card p-6 md:p-8">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full border border-prestige-gold/35 bg-prestige-gold/10 text-prestige-gold"
          >
            <Download class="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 class="text-3xl font-black text-white">How to Withdraw</h2>
        </div>
        <ol class="space-y-7">
          {#each withdrawalSteps as step, index}
            <li class="grid grid-cols-[2.25rem_1fr] gap-4">
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
                        ? 'Withdrawals are reviewed and approved, typically within 1-24 hours.'
                        : index === 3
                          ? 'Accept the Interac e-Transfer directly in your email or through your bank.'
                          : 'Once accepted, funds typically arrive within 15-30 minutes.'}
                </span>
              </span>
            </li>
          {/each}
        </ol>
      </div>
    </section>

    <section class="mt-12 navy-card overflow-hidden p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Timing &amp; Expectation Limits</h2>
      <div class="mt-7 overflow-x-auto">
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr
              class="border-b border-white/10 text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
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
      <div
        class="mt-7 flex gap-3 rounded-lg border border-white/10 bg-black/24 p-4 text-sm text-text-body"
      >
        <ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-prestige-gold" aria-hidden="true" />
        <p>
          All times are estimates and may vary based on your bank, verification status, and security
          reviews.
        </p>
      </div>
    </section>

    <section class="mt-12 grid gap-6 md:grid-cols-2">
      {#each guideCards as card}
        {@const Icon = card.icon}
        <a href={card.href} class="navy-card group p-7 transition-transform hover:-translate-y-0.5">
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

    <section class="mt-12 navy-card p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Interac FAQ</h2>
      <div class="mt-6 divide-y divide-white/8">
        {#each faqItems as item}
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 py-5 text-left"
          >
            <span class="text-base font-black text-white">{item}</span>
            <ChevronDown class="h-5 w-5 shrink-0 text-text-body" aria-hidden="true" />
          </button>
        {/each}
      </div>
      <p class="mt-6 text-center text-sm text-text-body">
        Still have questions? <a
          href="/contact"
          class="font-black text-prestige-gold hover:text-prestige-gold-light"
          >Contact our support team 24/7.</a
        >
      </p>
    </section>

    <section
      class="mt-12 overflow-hidden rounded-xl border border-prestige-gold/45 bg-[radial-gradient(circle_at_0%_50%,rgba(212,148,58,0.16),transparent_32%),linear-gradient(105deg,#0d1629,#080d18)] p-7 shadow-2xl md:p-10"
    >
      <div class="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h2 class="text-3xl font-black text-white md:text-4xl">
            Ready to make a secure deposit?
          </h2>
          <p class="mt-3 text-base text-text-body">
            Join 247iBET today and enjoy fast, trusted Interac payments.
          </p>
        </div>
        <SafeExternalLink href={IBET_URLS.register} class="hero-cta-primary">
          Join Now - It&apos;s Free
          <ArrowRight class="h-5 w-5" aria-hidden="true" />
        </SafeExternalLink>
      </div>
    </section>

    <section class="mt-7 rounded-xl border border-prestige-gold/35 bg-navy-card/80 p-6">
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
