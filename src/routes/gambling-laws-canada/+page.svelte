<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const faqs = [
    {
      q: 'Is online gambling legal in Canada?',
      a: "Yes, for players. Under the Canadian Criminal Code (Section 207), online gambling is legal when authorized by a province. Players using licensed platforms are generally not at legal risk — Canada's gambling laws target operators, not individual bettors.",
    },
    {
      q: 'What changed with Bill C-218 in 2021?',
      a: 'Bill C-218 (Safe and Regulated Sports Betting Act) amended the Criminal Code in August 2021 to allow provinces to authorize single-game sports betting. Before this, only parlay-style bets were permitted.',
    },
    {
      q: 'Can I use an offshore casino from Canada?',
      a: 'Many Canadians use Kahnawake Gaming Commission-licensed platforms (located in Kahnawake, Québec), which have a long history of serving Canadian players. These are not illegal for players under current Canadian law.',
    },
    {
      q: 'What is the legal gambling age in Canada?',
      a: 'The legal gambling age is 18 or 19 depending on your region. Please verify with local regulations before creating an account.',
    },
  ];

  const relatedLinks = [
    { href: '/legal-online-gambling-canada', label: 'Legal Online Gambling' },
    { href: '/gambling-age-canada', label: 'Gambling Age Canada' },
    { href: '/responsible-gambling', label: 'Responsible Gambling' },
  ];

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Canada Gambling Laws 2026: Your Guide to Provincial Rules | 247iBET</title>
  <meta
    name="description"
    content="Canada gambling laws explained: federal Criminal Code rules, provincial licensing, legal betting age, and player protections."
  />
  <meta
    property="og:title"
    content="Canada Gambling Laws 2026: Your Guide to Provincial Rules | 247iBET"
  />
  <meta
    property="og:description"
    content="Federal law, AGCO Ontario, AGLC Alberta, and the province-by-province legal framework."
  />
  <meta
    name="twitter:title"
    content="Canada Gambling Laws 2026: Your Guide to Provincial Rules | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Federal law, provincial licensing, legal betting age, and player protections across Canada."
  />
  <link rel="canonical" href={canonicalUrl('/gambling-laws-canada')} />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-3xl space-y-14">
  <header class="space-y-4">
    <div
      class="flex items-center gap-2 text-xs font-medium text-[#4A9EBF] uppercase tracking-widest"
    >
      <svg
        class="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        /></svg
      >
      Legal &amp; Compliance
    </div>
    <h1 class="font-display font-light text-4xl leading-tight text-[#F1F5F9]">
      Canada Gambling Laws 2026
    </h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed">
      Canada's gambling framework is provincial, not federal. Here is what you need to know as a
      Canadian player — by province, regulator, and legal age.
    </p>
    <p class="text-[10px] text-[#8492A6]">
      Updated March 2026 · This page provides general legal information, not legal advice. Laws
      change — verify with your provincial regulator.
    </p>
  </header>

  <AffiliateDisclosure />

  <section aria-labelledby="federal-heading">
    <h2 id="federal-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Federal Framework — Criminal Code s.207
    </h2>
    <div class="navy-card p-5 space-y-3">
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        Gambling regulation in Canada flows from <strong class="text-[#F1F5F9]"
          >Section 207 of the Criminal Code</strong
        >. This section authorises provincial governments to license, regulate, and conduct gaming
        within their territory. It does not prohibit individuals from gambling — it sets the
        framework for who can <em>operate</em> gambling services legally.
      </p>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        <strong class="text-[#F1F5F9]">Bill C-218 (2021)</strong> amended this to add single-game sports
        betting to the list of permitted activities, overturning a parlay-only restriction that had been
        in place since 1985.
      </p>
      <p class="text-sm text-[#94A3B8] leading-relaxed">
        Individual Canadians are not criminally liable for gambling online — only unlicensed
        operators face legal exposure.
      </p>
    </div>
  </section>

  <section aria-labelledby="faq-heading">
    <h2 id="faq-heading" class="text-xl font-bold text-[#F1F5F9] mb-4">
      Canada Gambling Laws — FAQ
    </h2>
    <div class="space-y-3">
      {#each faqs as faq}
        <details class="navy-card rounded-lg group cursor-pointer">
          <summary
            class="px-5 py-4 font-semibold text-[#F1F5F9] text-sm list-none flex items-center justify-between gap-4 hover:text-[#D4943A] transition-colors"
          >
            {faq.q}
            <span class="text-[#8492A6] shrink-0 text-lg leading-none">+</span>
          </summary>
          <div
            class="px-5 pb-4 text-sm text-[#94A3B8] leading-relaxed border-t border-white/8 pt-3"
          >
            {faq.a}
          </div>
        </details>
      {/each}
    </div>
  </section>

  <aside class="navy-card p-4 border border-[#F59E0B]/15">
    <div class="flex items-start gap-3">
      <svg
        class="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        /></svg
      >
      <p class="text-xs text-[#94A3B8] leading-relaxed">
        <strong class="text-[#F1F5F9]">Legal information only:</strong> This page provides general information
        about Canadian gambling law. It does not constitute legal advice. Laws and regulatory frameworks
        change — consult your provincial regulator or a qualified legal professional for advice specific
        to your situation.
      </p>
    </div>
  </aside>

  <IBetShowcase
    variant="banner"
    ctaText="Play at 247iBET"
    contextLabel="Quality Canadian Platform · 18+/19+"
  />

  <nav aria-label="Related pages" class="border-t border-white/8 pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related</p>
    <div class="flex flex-wrap gap-3">
      {#each relatedLinks as l}
        <a
          href={l.href}
          class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md"
          >{l.label}</a
        >
      {/each}
    </div>
  </nav>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>
</div>
