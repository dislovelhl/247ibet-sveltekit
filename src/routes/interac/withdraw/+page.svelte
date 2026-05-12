<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { CheckCircle } from 'lucide-svelte';

  const steps = [
    {
      title: 'Complete KYC',
      description:
        'Upload your ID and proof of address before requesting a payout. Verified accounts move through review faster and avoid first-withdrawal holds.',
    },
    {
      title: 'Open the operator withdrawal area',
      description:
        'Log into the separate gaming platform, go to the cashier or account area, and choose the withdrawal option from the platform menu.',
    },
    {
      title: 'Select Interac',
      description:
        'If available, choose Interac e-Transfer, enter the cashout amount, and confirm that any bonus wagering requirements are fully cleared on the operating platform.',
    },
    {
      title: 'Wait for Approval',
      description:
        'The operating platform reviews the request for security, account verification, withdrawal limits, bonus status, and bank-side requirements. Timing varies by operator and account state.',
    },
    {
      title: 'Accept the Transfer',
      description:
        'If the operating platform approves the withdrawal and Interac is used, transfer notices may arrive by email or SMS. Follow the operator and bank instructions for completion.',
    },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      { '@type': 'ListItem', position: 2, name: 'Interac', item: 'https://247ibet.ca/interac' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Withdrawal Guide',
        item: 'https://247ibet.ca/interac/withdraw',
      },
    ],
  };
</script>

<svelte:head>
  <title>Interac Withdrawal Timing Guide Canada</title>
  <meta
    name="description"
    content="Learn what affects Interac e-Transfer withdrawal timing in Canada, including operator approval, identity checks, bank processing, and live cashier terms."
  />
  <meta property="og:title" content="Interac Withdrawal Timing Guide Canada" />
  <meta
    property="og:description"
    content="Learn what affects Interac e-Transfer withdrawal timing in Canada, including operator approval, identity checks, bank processing, and live cashier terms."
  />
  <link rel="canonical" href={canonicalUrl('/interac/withdraw')} />
  <JsonLd
    schema={articleSchema({
      headline: 'Interac Withdrawal Timing Guide Canada',
      description:
        'Learn what affects Interac e-Transfer withdrawal timing in Canada, including operator approval, identity checks, bank processing, and live cashier terms.',
      url: canonicalUrl('/interac/withdraw'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="container mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/interac" class="hover:text-white">Interac</a></li>
        <li>/</li>
        <li class="text-white font-medium">Withdraw</li>
      </ol>
    </nav>

    <h1 class="text-[1.875rem] font-bold text-[#F1F5F9] mb-2">How to Withdraw with Interac</h1>
  </header>

  <section class="mt-12">
    <div class="my-6 rounded-xl border border-prestige-gold/20 bg-prestige-gold/5 p-5">
      <p class="font-bold text-white text-sm">
        Interac withdrawal timing varies after operator approval. First withdrawals may take 24-48
        hours due to KYC verification.
      </p>
      <p class="mt-2 text-xs text-text-tertiary leading-relaxed">
        Ensure your bank account name matches your operating-platform account. Check your bank's
        e-Transfer acceptance settings.
      </p>
    </div>
  </section>

  <section class="mt-16 space-y-8">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">Withdrawal Steps</h2>
    <ol class="space-y-4 mt-4">
      {#each steps as step, i}
        <li class="flex gap-4">
          <span
            class="flex-shrink-0 w-7 h-7 rounded-full bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-xs font-bold flex items-center justify-center"
            >{i + 1}</span
          >
          <div>
            <p class="font-bold text-white text-sm">{step.title}</p>
            <p class="mt-1 text-sm text-text-tertiary leading-relaxed">{step.description}</p>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section class="navy-card mt-16 rounded-2xl border border-navy-border p-8">
    <h2 class="mb-6 text-2xl font-bold text-text-primary">Why Some Withdrawals Take Longer</h2>
    <div class="grid gap-8 text-sm leading-relaxed text-text-body md:grid-cols-2">
      <div class="space-y-4">
        <p>
          <strong class="mb-1 block text-xs uppercase tracking-tight text-text-primary"
            >First-Time Withdrawal:</strong
          >
          Your very first request triggers a deeper security check to prevent fraud, which may add a few
          hours to the initial timing.
        </p>
        <p>
          <strong class="mb-1 block text-xs uppercase tracking-tight text-text-primary"
            >Large Amounts:</strong
          >
          High-value withdrawals may require additional manual approval steps from the selected
          operator, cashier provider, or compliance team.
        </p>
      </div>
      <div class="space-y-4">
        <p>
          <strong class="mb-1 block text-xs uppercase tracking-tight text-text-primary"
            >Bank-Side Processing:</strong
          >
          While Interac is fast, some smaller credit unions or banks may have longer internal clearing
          times for incoming e-Transfers.
        </p>
        <p>
          <strong class="mb-1 block text-xs uppercase tracking-tight text-text-primary"
            >Unmet Wagering:</strong
          >
          If you have an active bonus, ensure the wagering requirements are 100% complete, or the withdrawal
          request may be cancelled.
        </p>
      </div>
    </div>
  </section>

  <section class="navy-card mt-16 rounded-2xl border border-navy-border p-8">
    <h2 class="mb-6 text-2xl font-bold text-text-primary">Important Conditions</h2>
    <ul class="space-y-4 text-sm text-text-body">
      <li class="flex items-start gap-3">
        <CheckCircle class="mt-1 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
        <span
          >Your bank account name generally must match the name registered on the operating platform
          account.</span
        >
      </li>
      <li class="flex items-start gap-3">
        <CheckCircle class="mt-1 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
        <span
          >Auto-deposit can speed up receipt, but you should still monitor your Interac email or SMS
          notifications.</span
        >
      </li>
      <li class="flex items-start gap-3">
        <CheckCircle class="mt-1 h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
        <span
          >Withdrawal timing starts after operator approval, not when you first submit the request.</span
        >
      </li>
    </ul>
  </section>

  <section class="mt-12">
    <IBetShowcase variant="banner" ctaText="Review Withdrawal Steps" />
  </section>

  <nav class="mt-12 flex flex-wrap gap-6" aria-label="Related pages">
    <a
      href="/interac"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Back to Interac</a
    >
    <a
      href="/casino"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Explore casino guides</a
    >
    <a
      href="/fast-payouts"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Compare payout caveats</a
    >
  </nav>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
