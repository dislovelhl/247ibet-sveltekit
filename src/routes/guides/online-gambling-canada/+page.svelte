<script lang="ts">
  import { canonicalUrl } from '$lib/site';
  import JsonLd from '$lib/components/JsonLd.svelte';

import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
</script>

<svelte:head>
  <title>Online Gambling in Canada: Legal Casinos, Bonuses &amp; Games | 247iBET</title>
  <meta
    name="description"
    content="Discover legal online gambling options in Canada. Provincial rules for Ontario and Alberta, top Interac casinos, bonuses, and responsible play guidance."
  />
  <meta
    property="og:title"
    content="Online Gambling in Canada: Legal Casinos, Bonuses &amp; Games | 247iBET"
  />
  <meta
    property="og:description"
    content="Discover legal online gambling options in Canada. Provincial rules for Ontario and Alberta, top Interac casinos, bonuses, and responsible play guidance."
  />
  <meta
    name="twitter:title"
    content="Online Gambling in Canada: Legal Casinos, Bonuses &amp; Games | 247iBET"
  />
  <meta
    name="twitter:description"
    content="Discover legal online gambling options in Canada. Provincial rules for Ontario and Alberta, top Interac casinos, bonuses, and responsible play guidance."
  />
  <link rel="canonical" href={canonicalUrl('/guides/online-gambling-canada')} />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Online Gambling in Canada: Your Guide to Legal Casinos, Bonuses, and Games',
      description:
        'Discover legal online gambling options in Canada. Provincial rules for Ontario and Alberta, top Interac casinos, bonuses, and responsible play guidance.',
      url: 'https://247ibet.ca/guides/online-gambling-canada',
      datePublished: '2026-04-06',
      dateModified: '2026-04-08',
    }}
  />
  <JsonLd
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://247ibet.ca/guides' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Online Gambling in Canada',
          item: 'https://247ibet.ca/guides/online-gambling-canada',
        },
      ],
    }}
  />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl">
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex items-center gap-2 text-xs text-text-tertiary">
      <li><a href="/" class="hover:text-white">Home</a></li>
      <li>/</li>
      <li><a href="/guides" class="hover:text-white">Guides</a></li>
      <li>/</li>
      <li class="text-white font-medium">Online Gambling in Canada</li>
    </ol>
  </nav>

  <header class="mb-10">
    <h1 class="font-display text-4xl font-normal text-[#F1F5F9] mb-4">Online Gambling in Canada</h1>
    <p class="max-w-3xl text-base leading-relaxed text-[#94A3B8]">
      Discover legal online gambling options in Canada. Provincial rules for Ontario and Alberta,
      top Interac casinos, bonuses, and responsible play guidance.
    </p>
    <p class="mt-2 text-xs text-text-tertiary">Last updated: April 8, 2026</p>
  </header>

  <AffiliateDisclosure />

  <div class="my-6 rounded-xl border border-prestige-gold/20 bg-prestige-gold/5 p-5">
    <p class="font-bold text-white text-sm">Is online gambling legal in Canada?</p>
    <p class="mt-2 text-xs text-text-tertiary leading-relaxed">
      Yes, but the rules are provincial. Ontario operates a regulated private-operator market under
      iGaming Ontario and the AGCO. Alberta's regulated online gambling is currently available
      through PlayAlberta. Players in other provinces should check their local lottery corporation
      for regulated options.
    </p>
  </div>

  <section class="mb-10">
    <h2 class="text-2xl font-bold text-white mb-5">Provincial framework overview</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="navy-card rounded-2xl border border-white/10 p-6">
        <h3 class="font-bold text-white text-lg mb-3">Ontario</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>Open regulated private-operator market since April 4, 2022</li>
          <li>Regulated by the AGCO and iGaming Ontario</li>
          <li>47 operators and 81 gaming websites listed as of March 2026</li>
          <li>Interac is the dominant cashier method</li>
          <li>Mandatory responsible gambling tools for all licensed sites</li>
        </ul>
      </div>
      <div class="navy-card rounded-2xl border border-white/10 p-6">
        <h3 class="font-bold text-white text-lg mb-3">Alberta</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>Regulated option: PlayAlberta (AGLC-operated)</li>
          <li>Private-operator open market expected — tracking in progress</li>
          <li>247iBET monitoring operator licensing progress for 2026</li>
          <li>Check current status before registering at any site</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold text-white mb-5">What Canadian online gambling includes</h2>
    <div class="space-y-3">
      {#each [{ cat: 'Online casinos', desc: 'Slots, live dealer tables, poker, and table games at licensed sites.' }, { cat: 'Sports betting', desc: 'Single-game and parlay betting on NHL, NFL, CFL, NBA, UEFA, and more.' }, { cat: 'Poker', desc: 'Peer-to-peer poker available at select Ontario-licensed operators.' }, { cat: 'Lottery', desc: 'Provincial lottery draws available via lottery corporation apps.' }] as item}
        <div class="navy-card rounded-xl border border-white/10 p-4 flex gap-4">
          <div class="font-bold text-white text-sm w-32 shrink-0">{item.cat}</div>
          <div class="text-sm text-gray-400">{item.desc}</div>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-bold text-white mb-5">Key checks before depositing</h2>
    <ol class="space-y-4 mt-4">
      {#each [{ title: 'Confirm provincial registration', detail: 'Ontario: verify on the iGaming Ontario directory. Alberta: confirm PlayAlberta or licensed operator status via AGLC.' }, { title: 'Check Interac cashier support', detail: 'Interac deposits and withdrawals are standard at most AGCO-licensed sites. Confirm both directions before funding your account.' }, { title: 'Read bonus wagering terms', detail: 'Wagering requirements of 30x–50x are typical. Always check expiry dates and maximum withdrawal caps tied to bonuses.' }, { title: 'Verify responsible gambling tools', detail: 'Deposit limits, session reminders, cooling-off tools, and self-exclusion access are legally required at Ontario-licensed operators.' }] as step, i}
        <li class="flex gap-4">
          <span
            class="flex-shrink-0 w-7 h-7 rounded-full bg-prestige-gold/15 border border-prestige-gold/30 text-prestige-gold text-xs font-bold flex items-center justify-center"
            >{i + 1}</span
          >
          <div>
            <p class="font-bold text-white text-sm">{step.title}</p>
            <p class="mt-1 text-sm text-text-tertiary leading-relaxed">{step.detail}</p>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <div class="mt-8 rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a
      href="/responsible-gambling"
      class="text-slate-blue hover:underline">Responsible gambling resources</a
    >.
  </div>

  <nav aria-label="Related guides" class="mt-8 border-t border-white/10 pt-6">
    <p class="text-xs text-text-tertiary mb-3 uppercase tracking-widest font-medium">
      Related guides
    </p>
    <div class="flex flex-wrap gap-3">
      <a
        href="/guides/regulated-vs-offshore"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Regulated vs Offshore Casinos</a
      >
      <a
        href="/guides/legal-online-casino-canada"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Legal Online Casino Canada</a
      >
      <a
        href="/guides/wagering-requirements-explained"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Wagering Requirements Explained</a
      >
      <a
        href="/guides/interac-e-transfer-casino"
        class="text-xs text-slate-blue hover:underline bg-navy-raised px-3 py-1.5 rounded-md"
        >Interac e-Transfer Casino Guide</a
      >
    </div>
  </nav>
</div>
