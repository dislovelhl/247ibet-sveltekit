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
    ExternalLink
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
          q: 'How do I open a 247iBET account?',
          a: 'Opening an account takes about two minutes. Choose **Sign Up**, enter your details (name, email, mobile), verify your identity via SMS link (AGCO requirement), and set your credentials.'
        },
        {
          q: 'What games can Canadians play?',
          a: 'Regulated operators offer **Sports Betting** (NHL, NFL, UFC), **Online Slots**, **Live Casino** (Blackjack, Roulette), and **Virtual Sports**. Availability varies by province; Ontario has the full catalogue.'
        },
        {
          q: 'How to register as a new player in Canada?',
          a: '1. Click **Sign Up**. 2. **Verification**: Follow the SMS link to upload ID and a selfie. 3. **Final Steps**: Confirm username/password and legal requirements.'
        }
      ]
    },
    {
      id: 'deposits',
      title: 'Deposits & Funding',
      icon: Wallet,
      questions: [
        {
          q: 'How do I make a deposit with Interac?',
          a: 'Log in, go to the **Cashier**, select **Interac**, enter the amount and your registered email/mobile, then complete the bank transfer flow.'
        },
        {
          q: 'Why was my deposit declined?',
          a: 'Common reasons include mismatched emails, reaching daily bank limits, or bank-side blocks. Verify your Interac details and contact your bank if issues persist.'
        },
        {
          q: 'What are the deposit timelines?',
          a: 'Interac e-Transfers are typically processed in **under 10 minutes**. In rare cases, bank delays can extend this to 24 hours.'
        }
      ]
    },
    {
      id: 'withdrawals',
      title: 'Withdrawals & Payouts',
      icon: Banknote,
      questions: [
        {
          q: 'How do I withdraw with Interac?',
          a: 'Log in, open the **Withdraw** tab in your cashier, verify your email if it&apos;s new, select **Interac**, and enter your withdrawal amount.'
        },
        {
          q: 'Why is my withdrawal pending?',
          a: 'All requests undergo a standard security and KYC review. While top-tier operators process within hours, payment method timing and verification status can affect speed.'
        },
        {
          q: 'What are the payout timelines?',
          a: 'Interac payouts typically land **within 15-30 minutes** after operator approval. Unverified accounts may take up to 24 hours for review.'
        }
      ]
    },
    {
      id: 'verification',
      title: 'Account & Verification',
      icon: ShieldCheck,
      questions: [
        {
          q: 'What is the KYC process?',
          a: 'Per AGCO/AGLC rules, you must confirm your **Legal Name, DOB**, and **Residential Address** (via utility bill) and perform a facial verification match.'
        },
        {
          q: 'What documents are required for ID?',
          a: 'A valid passport, provincial ID card, or driver&apos;s license is required for identity verification.'
        },
        {
          q: 'How do I verify my source of funds?',
          a: 'Operators may request bank statements or payslips to ensure the integrity of funds used for gaming activities.'
        }
      ]
    },
    {
      id: 'bonuses',
      title: 'Bonuses & Promotions',
      icon: Gift,
      questions: [
        {
          q: 'Does 247iBET have a welcome bonus?',
          a: 'Yes, new players are eligible for a welcome match on their first deposit. Check the **Promotions** page for current offers and wagering requirements.'
        },
        {
          q: 'How do I get Free Spins?',
          a: 'Free spins are awarded through welcome packages, weekly reload offers, loyalty rewards, or specific game launch promotions.'
        },
        {
          q: 'What are wagering requirements?',
          a: 'This is the number of times you must play through bonus funds before they convert to withdrawable cash. Always check the fine print on any offer.'
        }
      ]
    }
  ];

  let openIndex = $state<string | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(cat => cat.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a.replace(/\*\*/g, '') }
    })))
  };

  function toggleFaq(id: string) {
    openIndex = openIndex === id ? null : id;
  }
</script>

<svelte:head>
  <title>247iBET FAQ | Help Center & Canadian iGaming Guide</title>
  <meta name="description" content="Answers to common questions about Interac deposits, withdrawals, account verification, and technical issues for Canadian players." />
  <link rel="canonical" href={canonicalUrl('/faq')} />
  <JsonLd schema={faqSchema} />
</svelte:head>

<div class="min-h-screen bg-navy-black pb-20" role="presentation">
  <div class="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-16">
    <nav aria-label="Breadcrumb" class="mb-10">
      <ol class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-tertiary">
        <li><a href="/" class="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true" class="text-white/20">/</li>
        <li class="text-prestige-gold">FAQ</li>
      </ol>
    </nav>

    <header class="material-panel relative mb-16 overflow-hidden rounded-[2.5rem] shadow-2xl min-h-[400px]">
      <BackgroundAtmosphere 
        src="/images/generated/faq-help-hero.webp" 
        parallaxMultiplier={0.4}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-black via-navy-black/80 to-transparent"></div>
      
      <div 
        class="material-panel relative z-10 mx-4 my-8 animate-float-3d rounded-3xl p-8 shadow-[0_32px_120px_-30px_rgba(0,0,0,0.9)] sm:mx-6 sm:my-10 md:p-14 md:max-w-2xl text-left"
        style="transform: translate3d({-globalParallax.x * 0.8}px, {-globalParallax.y * 0.8}px, 0);"
      >
        <div class="mb-5 flex items-center gap-2">
          <div class="rounded-full border border-prestige-gold/20 bg-prestige-gold/10 px-4 py-1.5 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
            <p class="text-[10px] font-black uppercase tracking-[0.15em] text-prestige-gold">
              Help Center
            </p>
          </div>
        </div>

        <h1 class="page-hero-title !tracking-tighter">
          Frequently Asked <br />
          <span class="text-prestige-gold drop-shadow-[0_0_30px_rgba(212,148,58,0.4)]">Questions</span>
        </h1>
        <p class="mt-8 text-lg leading-relaxed text-text-body md:text-xl font-light">
          Everything you need to know about Canadian iGaming — from Interac deposits to account verification and bonus rules.
        </p>
      </div>
    </header>

    {#if faqData.length > 0}
      <div class="grid gap-12 lg:grid-cols-[300px_1fr]">
        <!-- Category Sidebar -->
        <aside class="material-panel hidden lg:block space-y-2 sticky top-24 h-fit p-3">
          <h2 class="text-xs font-black uppercase tracking-[0.2em] text-text-tertiary mb-6 px-4">Categories</h2>
          {#each faqData as cat}
            {@const Icon = cat.icon}
            <a
              href="#{cat.id}"
              class="material-cell flex items-center gap-3 px-4 py-3 rounded-2xl transition-all hover:bg-white/5 text-text-body hover:text-white group"
            >
              <Icon class="h-4 w-4 text-text-tertiary group-hover:text-prestige-gold transition-colors" />
              <span class="text-sm font-bold">{cat.title}</span>
            </a>
          {/each}
        </aside>

        <div class="space-y-16">
          {#each faqData as cat}
            {@const CatIcon = cat.icon}
            <section id={cat.id} class="scroll-mt-24">
              <div class="flex items-center gap-4 mb-8">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold ring-1 ring-prestige-gold/20">
                  <CatIcon class="h-6 w-6" />
                </div>
                <h2 class="font-display text-3xl font-black uppercase tracking-tight text-white">{cat.title}</h2>
              </div>

              <div class="grid gap-4">
                {#each cat.questions as q, i}
                  {@const qId = `${cat.id}-${i}`}
                  <div class="material-cell rounded-2xl overflow-hidden transition-all hover:border-white/10">
                    <button
                      class="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                      onclick={() => toggleFaq(qId)}
                      aria-expanded={openIndex === qId}
                    >
                      <span class="text-lg font-bold text-white pr-8">{q.q}</span>
                      <ChevronDown class="h-5 w-5 text-text-tertiary transition-transform duration-300 {openIndex === qId ? 'rotate-180 text-prestige-gold' : ''}" />
                    </button>
                    
                    {#if openIndex === qId}
                      <div class="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div class="prose prose-invert prose-p:text-text-body prose-strong:text-white prose-p:leading-relaxed text-sm">
                          {@html q.a.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}
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
          <p class="text-text-body mb-8">Our support team is available 24/7 to help with account, deposit, or technical issues.</p>
        </div>
        <a href="/contact" class="inline-flex items-center gap-2 text-prestige-gold font-bold hover:gap-3 transition-all">
          Contact Support <ArrowRight class="h-5 w-5" />
        </a>
      </div>

      <div class="material-panel p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">Responsible Gambling</h2>
          <p class="text-text-body mb-8">Learn how to set deposit limits, take breaks, and access support resources in your province.</p>
        </div>
        <a href="/responsible-gambling" class="inline-flex items-center gap-2 text-slate-blue font-bold hover:gap-3 transition-all">
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
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-in-from-top-2 {
    from { transform: translateY(-0.5rem); }
    to { transform: translateY(0); }
  }
</style>
