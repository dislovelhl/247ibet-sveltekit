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

  const amountOptions = [50, 100, 250, 1000];

  let selectedAmount = $state(100);
  let openFaq = $state(0);

  const reviewWindow = $derived(
    selectedAmount >= 1000 ? 'manual review may apply' : 'standard review',
  );
  const estimatedWindow = $derived(selectedAmount >= 1000 ? '30-60 min' : '15-30 min');

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

const LAST_UPDATED = '2026-04-29';
import AuthorByline from '$lib/components/AuthorByline.svelte';
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

<div class="min-h-screen bg-navy-black pt-28 pb-20">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-12">
      <ol class="flex items-center gap-3 text-xs font-semibold text-text-tertiary">
        <li><a href="/" class="transition-colors hover:text-white">Home</a></li>
        <li aria-hidden="true">›</li>
        <li><a href="/interac" class="transition-colors hover:text-white">Interac</a></li>
        <li aria-hidden="true">›</li>
        <li class="text-white">Deposit &amp; Withdraw</li>
      </ol>
    </nav>

    <header class="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <h1 class="page-hero-title">
          Deposit &amp; Withdraw <br />
          with <span class="text-prestige-gold">Interac</span> in Canada
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-text-body">
          Fast, secure, and trusted Interac e-Transfer deposits and withdrawals at 247iBET, built
          for Canadian players who want CAD-native banking.
        </p>

        <div
          class="mt-10 grid gap-3 rounded-xl border border-white/10 bg-navy-card/70 p-4 shadow-[0_22px_60px_-45px_rgba(212,148,58,0.5)] sm:grid-cols-3"
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
                <p class="mt-1 text-xs leading-5 text-text-body">{item.body}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="relative overflow-hidden rounded-xl border border-white/12 bg-navy-card shadow-2xl aspect-[5/6] sm:aspect-auto"
      >
        <img
          src="/images/generated/interac-payment-hero.png"
          alt="Interac e-Transfer secure payment visual"
          class="h-full min-h-[520px] w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-navy-black/86 via-navy-black/15 to-transparent"
        ></div>
        <div class="absolute inset-x-0 bottom-0 p-8">
          <p class="text-base font-semibold text-white">Secure payments. Trusted by millions.</p>
          <p class="mt-2 max-w-md text-sm leading-6 text-text-body">
            Interac keeps sensitive payment steps inside your bank flow while 247iBET records the
            cashier result.
          </p>
          <div class="mt-8 rounded-xl border border-white/10 bg-black/24 p-4">
            <div class="flex flex-wrap items-center gap-3">
              {#each amountOptions as amount}
                <button
                  type="button"
                  class="rounded-full border px-4 py-2 text-xs font-black transition-colors {selectedAmount ===
                  amount
                    ? 'border-prestige-gold bg-prestige-gold text-navy-black'
                    : 'border-white/10 bg-white/5 text-white hover:border-white/24'}"
                  onclick={() => (selectedAmount = amount)}
                >
                  ${amount}
                </button>
              {/each}
            </div>
            <div class="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                  Selected amount
                </p>
                <p class="mt-1 text-xl font-black text-white">CAD ${selectedAmount}</p>
              </div>
              <div>
                <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                  Estimated payout
                </p>
                <p class="mt-1 text-xl font-black text-prestige-gold">{estimatedWindow}</p>
              </div>
            </div>
            <p class="mt-4 text-xs text-text-body">Status: {reviewWindow}</p>
          </div>
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
                <span class="block text-lg font-black text-white">{step.title}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">{step.body}</span>
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
                <span class="block text-lg font-black text-white">{step.title}</span>
                <span class="mt-2 block text-sm leading-6 text-text-body">{step.body}</span>
              </span>
            </li>
          {/each}
        </ol>
      </div>
    </section>

    <section class="mt-12 navy-card overflow-hidden p-6 md:p-8">
      <h2 class="text-3xl font-black text-white">Timing &amp; Expectation Limits</h2>
      <div class="table-scroll-wrap mt-7">
        <table class="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr
              class="border-b border-white/10 text-[11px] uppercase tracking-[0.16em] text-text-tertiary"
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
      <div
        class="mt-7 flex gap-3 rounded-lg border border-white/10 bg-black/24 p-4 text-sm text-text-body"
      >
        <ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-prestige-gold" aria-hidden="true" />
        <p>
          All times are estimates and may vary based on bank, verification status, and account
          review.
        </p>
      </div>
    </section>

    <section class="mt-12 grid gap-6 md:grid-cols-2">
      {#each quickCards as card}
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

    <section
      class="mt-12 overflow-hidden rounded-xl border border-prestige-gold/45 bg-[radial-gradient(circle_at_0%_50%,rgba(212,148,58,0.16),transparent_32%),linear-gradient(105deg,#0d1629,#080d18)] p-7 shadow-2xl md:p-10"
    >
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

  <AuthorByline authorId="editorial" date={LAST_UPDATED} />
  </div>
</div>
