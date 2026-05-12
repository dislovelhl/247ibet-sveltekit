<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import { articleSchema } from '$lib/json-ld';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';
  import { CheckCircle } from 'lucide-svelte';

  const steps = [
    {
      title: 'Access the Cashier',
      description:
        'Log into your 247iBET account and click on the "Deposit" button in the top navigation or account menu.',
    },
    {
      title: 'Select Interac',
      description:
        'Choose "Interac e-Transfer" from the list of available payment methods. Enter the amount you wish to deposit.',
    },
    {
      title: 'Get Payment Details',
      description:
        'You will be shown a unique recipient email address and a security code. Keep this information visible or copy it.',
    },
    {
      title: 'Send e-Transfer',
      description:
        'Open your banking app, navigate to Interac e-Transfer, and send the specified amount to the recipient email using the security code provided.',
    },
    {
      title: 'Confirmation',
      description:
        'Once the bank confirms the transfer, your 247iBET balance will be updated automatically, usually within minutes.',
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
        name: 'How to Deposit',
        item: 'https://247ibet.ca/interac/deposit',
      },
    ],
  };
</script>

<svelte:head>
  <title>How to Deposit with Interac at 247iBET: A Step-by-Step Guide</title>
  <meta
    name="description"
    content="Learn how to deposit funds using Interac e-Transfer. Follow our step-by-step instructions for fast, secure, and CAD-native casino deposits."
  />
  <meta
    property="og:title"
    content="How to Deposit with Interac at 247iBET: A Step-by-Step Guide"
  />
  <meta
    property="og:description"
    content="Learn how to deposit funds using Interac e-Transfer. Follow our step-by-step instructions for fast, secure, and CAD-native casino deposits."
  />
  <link rel="canonical" href={canonicalUrl('/interac/deposit')} />
  <JsonLd
    schema={articleSchema({
      headline: 'How to Deposit with Interac at 247iBET: A Step-by-Step Guide',
      description:
        'Learn how to deposit funds using Interac e-Transfer. Follow our step-by-step instructions for fast, secure, and CAD-native casino deposits.',
      url: canonicalUrl('/interac/deposit'),
      datePublished: '2026-04-27',
    })}
  />
  <JsonLd schema={breadcrumbSchema} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-3xl">
  <header class="mb-10">
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li><a href="/interac" class="hover:text-white">Interac</a></li>
        <li>/</li>
        <li class="text-white font-medium">Deposit Guide</li>
      </ol>
    </nav>

    <h1 class="text-[1.875rem] font-bold text-[#F1F5F9] mb-2">How to Deposit with Interac</h1>
  </header>

  <section class="mt-12">
    <div class="my-6 rounded-xl border border-prestige-gold/20 bg-prestige-gold/5 p-5">
      <p class="font-bold text-white text-sm">
        Interac deposits are instant or processed within 30 minutes. Minimum CAD $10. No fees from
        247iBET.
      </p>
      <p class="mt-2 text-xs text-text-tertiary leading-relaxed">
        Your bank may apply standard e-Transfer transaction charges. Ensure the name on your bank
        account matches your 247iBET account.
      </p>
    </div>
  </section>

  <section class="mt-16 space-y-8">
    <h2 class="text-2xl font-bold text-[#F1F5F9]">Deposit Steps</h2>
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

  <!-- Conditions & Limits -->
  <section class="navy-card mt-16 rounded-2xl border border-white/10 p-8">
    <h2 class="text-2xl font-bold text-white mb-6">Important Conditions</h2>
    <ul class="space-y-4 text-sm text-gray-400">
      <li class="flex items-start gap-3">
        <CheckCircle class="w-4 h-4 text-green-500 shrink-0 mt-1" aria-hidden="true" />
        <span
          >Ensure you use the <strong class="text-white">exact security code</strong> provided to avoid
          delays in crediting your account.</span
        >
      </li>
      <li class="flex items-start gap-3">
        <CheckCircle class="w-4 h-4 text-green-500 shrink-0 mt-1" aria-hidden="true" />
        <span
          >Your bank account name <strong class="text-white">must match</strong> the name on your 247iBET
          account.</span
        >
      </li>
      <li class="flex items-start gap-3">
        <CheckCircle class="w-4 h-4 text-green-500 shrink-0 mt-1" aria-hidden="true" />
        <span
          >Verify your daily and weekly e-Transfer limits with your financial institution before
          attempting large deposits.</span
        >
      </li>
    </ul>
  </section>

  <section class="mt-12">
    <IBetShowcase variant="banner" ctaText="Start Deposit" />
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
      >Play casino with Interac</a
    >
    <a
      href="/sportsbook"
      class="text-slate-blue font-bold text-sm hover:underline uppercase tracking-wider"
      >Bet on sports with Interac</a
    >
  </nav>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
