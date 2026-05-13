<!-- regulatory-claim:context: AGCO and iGaming Ontario references describe regulators or third-party operators, not 247iBET's own licensing posture. -->
<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import {
    ChevronDown,
    UserPlus,
    Wallet,
    Banknote,
    ShieldCheck,
    Gift,
    ArrowRight,
    ExternalLink,
  } from 'lucide-svelte';
  import BackgroundAtmosphere from '$lib/components/BackgroundAtmosphere.svelte';
  import { globalParallax } from '$lib/runes.svelte';

  const faqData = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: UserPlus,
      questions: [
        {
          q: 'How do I open a gaming-platform account as a Canadian player?',
          a: 'Registration is handled by the separate gaming platform. Confirm minimum age, province eligibility, identity-verification steps, and account terms before opening an account.',
        },
        {
          q: 'What types of online casino games are available in Canada?',
          a: 'Game and sportsbook availability depends on the operator, province, and current platform configuration. Use this public site for category education, then verify availability on the separate gaming platform.',
        },
        {
          q: 'Is it safe to play at online casinos in Canada?',
          a: 'Safety depends on using verifiable regulated operators, checking official licensing sources, reviewing privacy/security controls, and using responsible-gambling tools. Do not treat this public site as proof of operator status.',
        },
      ],
    },
    {
      id: 'deposits',
      title: 'Deposits & Funding',
      icon: Wallet,
      questions: [
        {
          q: 'How do I deposit money using Interac e-Transfer?',
          a: 'Funding steps belong to the separate gaming platform. In general, review the cashier, select an available payment method such as Interac e-Transfer, and follow your bank prompts only after checking terms.',
        },
        {
          q: 'How long does an Interac deposit take to reach my account?',
          a: 'Interac deposit timing depends on the operator, bank, and account checks. Some transfers are prompt after bank confirmation; others can take longer. Verify live cashier terms before funding.',
        },
      ],
    },
    {
      id: 'withdrawals',
      title: 'Withdrawals & Payouts',
      icon: Banknote,
      questions: [
        {
          q: 'How do I withdraw winnings from a gaming platform?',
          a: 'Withdrawal steps depend on the separate gaming platform. In general, open the cashier, choose an available method such as Interac e-Transfer, submit the request, and complete any required verification before funds are released.',
        },
        {
          q: 'How fast are Interac withdrawals at Canadian gaming platforms?',
          a: "Interac payout timing depends on the operator, account verification, bonus review, bank-side processing, and the separate gaming platform's approval flow. Check live cashier terms before depositing or withdrawing.",
        },
      ],
    },
    {
      id: 'verification',
      title: 'Account & Verification',
      icon: ShieldCheck,
      questions: [
        {
          q: 'What is the KYC process?',
          a: 'Identity checks are handled by the separate gaming platform or operator. Expect to confirm legal name, date of birth, address, and identity documents where required; exact KYC steps vary by jurisdiction and platform.',
        },
        {
          q: 'What documents are required for ID?',
          a: 'Operators commonly request a valid passport, provincial ID card, or driver&apos;s licence for identity verification, but exact document requirements must be checked on the operating platform.',
        },
        {
          q: 'How do I verify my source of funds?',
          a: 'Operators may request bank statements or payslips to ensure the integrity of funds used for gaming activities.',
        },
      ],
    },
    {
      id: 'bonuses',
      title: 'Bonuses & Promotions',
      icon: Gift,
      questions: [
        {
          q: 'Does 247iBET have a welcome bonus?',
          a: 'Promotions, if available, depend on jurisdiction, eligibility, and current platform terms. Verify any welcome offer directly on the operating platform before opting in.',
        },
        {
          q: 'How do I get Free Spins?',
          a: 'Free spins, if available, depend on current platform promotions, jurisdiction, eligibility, and game restrictions.',
        },
        {
          q: 'What are wagering requirements?',
          a: 'This is the number of times you must play through bonus funds before they convert to withdrawable cash. Always check the fine print on any offer.',
        },
      ],
    },
  ];

  let openIndex = $state<string | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap((cat) =>
      cat.questions.map((q) => ({
        '@type': 'Question',
        name: q.q,
        acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/\*\*/g, '') },
      })),
    ),
  };

  function toggleFaq(id: string) {
    openIndex = openIndex === id ? null : id;
  }
</script>

<svelte:head>
  <title>247iBET FAQ | Help Center & Canadian iGaming Guide</title>
  <meta
    name="description"
    content="Answers to common questions about Interac deposits, withdrawals, account verification, and technical issues for Canadian players."
  />
  <link rel="canonical" href={canonicalUrl('/faq')} />
  <JsonLd schema={faqSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol
        class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary"
      >
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">FAQ</li>
      </ol>
    </nav>

    <header
      class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]"
    >
      <BackgroundAtmosphere src="/images/generated/faq-help-hero.png" parallaxMultiplier={0.4} />
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
              Help Center
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Frequently Asked <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]"
            >Questions</span
          >
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Everything you need to know about Canadian iGaming — from Interac deposits to account
          verification and bonus rules.
        </p>
      </div>
    </header>

    {#if faqData.length > 0}
      <div class="grid gap-12 lg:grid-cols-[300px_1fr]">
        <!-- Category Sidebar -->
        <aside class="material-panel hidden lg:block space-y-2 sticky top-24 h-fit p-3">
          <h2 class="text-xs font-black uppercase tracking-[0.2em] text-text-tertiary mb-6 px-4">
            Categories
          </h2>
          {#each faqData as cat}
            {@const Icon = cat.icon}
            <a
              href="#{cat.id}"
              class="material-cell flex items-center gap-3 px-4 py-3 rounded-2xl transition-all hover:bg-white/5 text-text-body hover:text-white group"
            >
              <Icon
                class="h-4 w-4 text-text-tertiary group-hover:text-prestige-gold transition-colors"
              />
              <span class="text-sm font-bold">{cat.title}</span>
            </a>
          {/each}
        </aside>

        <div class="space-y-16">
          {#each faqData as cat}
            {@const CatIcon = cat.icon}
            <section id={cat.id} class="scroll-mt-24">
              <div class="flex items-center gap-4 mb-8">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20"
                >
                  <CatIcon class="h-6 w-6" />
                </div>
                <h2 class="font-display text-3xl font-black uppercase tracking-tight text-white">
                  {cat.title}
                </h2>
              </div>

              <div class="grid gap-4">
                {#each cat.questions as q, i}
                  {@const qId = `${cat.id}-${i}`}
                  <div
                    class="material-cell rounded-2xl overflow-hidden transition-all hover:border-white/10"
                  >
                    <button
                      class="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                      onclick={() => toggleFaq(qId)}
                      aria-expanded={openIndex === qId}
                    >
                      <span class="text-lg font-bold text-white pr-8">{q.q}</span>
                      <ChevronDown
                        class="h-5 w-5 text-text-tertiary transition-transform duration-300 {openIndex ===
                        qId
                          ? 'rotate-180 text-prestige-gold'
                          : ''}"
                      />
                    </button>

                    {#if openIndex === qId}
                      <div class="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div
                          class="prose prose-invert prose-p:text-text-body prose-strong:text-white prose-p:leading-relaxed text-sm"
                        >
                          {@html q.a.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-white">$1</strong>',
                          )}
                        </div>
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>
            </section>
          {/each}
        </div>
      </div>
    {/if}

    <footer class="mt-24 grid gap-8 md:grid-cols-2">
      <div class="material-panel p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p class="text-text-body mb-8">
            Use the contact page for public-site questions. Account, deposit, withdrawal, or
            technical issues on the gaming platform must be handled by the operating platform's
            support flow.
          </p>
        </div>
        <a
          href="/contact"
          class="inline-flex items-center gap-2 text-prestige-gold font-bold hover:gap-3 transition-all"
        >
          Contact Support <ArrowRight class="h-5 w-5" />
        </a>
      </div>

      <div class="material-panel p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">Responsible Gambling</h2>
          <p class="text-text-body mb-8">
            Learn about safer-play tools, platform-level limits, taking breaks, and support
            resources in your province.
          </p>
        </div>
        <a
          href="/responsible-gambling"
          class="inline-flex items-center gap-2 text-slate-blue font-bold hover:gap-3 transition-all"
        >
          View Player Protection <ExternalLink class="h-4 w-4" />
        </a>
      </div>
    </footer>
  </div>
</div>

<style>
  :global(.animate-in) {
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-in-from-top-2 {
    from {
      transform: translateY(-0.5rem);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
