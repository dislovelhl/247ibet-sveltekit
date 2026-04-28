<script lang="ts">
  import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
    CreditCard,
    Headphones,
    Music2,
    Send,
    ShieldCheck,
    Zap,
  } from 'lucide-svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { SITE, PARTNER } from '$lib/site';

  const SOCIAL = {
    x: 'https://x.com/247ibet',
    facebook: 'https://www.facebook.com/247iBET',
    instagram: 'https://www.instagram.com/247ibet/',
    telegram: 'https://t.me/247iBET',
    tiktok: 'https://www.tiktok.com/@247ibet',
  } as const;

  /** Seeded pseudo-random: same seed → same value. Seed changes daily. */
  function seededRand(seed: number, min: number, max: number): number {
    const x = Math.sin(seed) * 10000;
    const frac = x - Math.floor(x);
    return Math.floor(frac * (max - min + 1)) + min;
  }

  function getDailyTickerItems(): { label: string; value: string }[] {
    const today = new Date();
    // Seed: YYYYMMDD as integer — changes each calendar day
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const players = seededRand(seed * 1, 980, 1620);
    const payoutMins = seededRand(seed * 2, 1, 8);
    const bigWin = seededRand(seed * 3, 8200, 24500);
    const withdrawals = seededRand(seed * 4, 72, 140);
    const liveTables = seededRand(seed * 5, 18, 32);
    return [
      { label: 'Players online now', value: players.toLocaleString('en-CA') },
      { label: 'Last Interac payout', value: `${payoutMins} min ago` },
      { label: 'Games available', value: '500+' },
      { label: 'Biggest win today', value: `$${bigWin.toLocaleString('en-CA')}` },
      { label: 'NHL lines updated', value: 'Live' },
      { label: 'Withdrawals today', value: `${withdrawals} processed` },
      { label: 'Live tables open', value: String(liveTables) },
      { label: 'Support response', value: '< 2 min' },
    ];
  }

  const TICKER_ITEMS = getDailyTickerItems();
  // Duplicate array for seamless scroll loop
  const TICKER_DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

  const playLinks = [
    { href: '/casino', label: 'Online Casino' },
    { href: '/sportsbook', label: 'Sports Betting' },
    { href: '/interac', label: 'Interac Payouts' },
    { href: '/fast-payouts', label: 'Fast Withdrawals' },
    { href: '/casino/slots', label: 'Slots' },
    { href: '/casino/live-casino', label: 'Live Casino' },
    { href: '/casino/blackjack', label: 'Blackjack' },
    { href: '/sportsbook/nhl', label: 'NHL Betting' },
    { href: '/sportsbook/nba', label: 'NBA Betting' },
    { href: '/sportsbook/ufc', label: 'UFC Betting' },
    { href: '/casino-bonuses-canada', label: 'Casino Bonuses' },
    { href: '/guides/strategy', label: 'Betting Strategy' },
  ] as const;

  const supportLinks = [
    { href: '/faq', label: 'FAQ' },
    { href: '/guides/sports-betting-odds-explained', label: 'How to Bet' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/responsible-gambling', label: 'Responsible Gaming' },
    { href: '/about', label: 'About Us' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ] as const;

  const footerHighlights = [
    { label: 'Interac-first payouts', detail: 'Canadian banking routes', icon: CreditCard },
    { label: 'Safety resources', detail: 'Responsible play support', icon: ShieldCheck },
    { label: 'Help centre', detail: 'Guides, FAQ, contact', icon: Headphones },
  ] as const;
</script>

<footer
  aria-label="Site footer"
  class="mt-16 border-t border-white/5 bg-navy-black pt-0 pb-[calc(env(safe-area-inset-bottom,0px)+7rem)] sm:mt-20 md:pb-8"
>
  <!-- Live Stats Ticker — decorative, screen readers skip -->
  <div class="overflow-hidden border-b border-white/5 bg-navy-raised/60 py-2" aria-hidden="true">
    <div class="flex items-center gap-0">
      <!-- Fixed label -->
      <div
        class="z-10 flex flex-shrink-0 items-center gap-2 border-r border-prestige-gold/20 bg-prestige-gold/10 px-4 py-2"
      >
        <Zap class="h-3 w-3 text-prestige-gold" aria-hidden="true" />
        <span class="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-prestige-gold"
          >Live</span
        >
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
      </div>
      <!-- Scrolling ticker -->
      <div class="flex-1 overflow-hidden">
        <div
          class="flex gap-0 whitespace-nowrap"
          style="animation: ticker-scroll 40s linear infinite;"
        >
          {#each TICKER_DOUBLED as item, i (i)}
            <span
              class="inline-flex items-center gap-2 border-r border-white/5 px-6 font-mono text-[11px] text-gray-400"
            >
              <span class="text-gray-400">{item.label}</span>
              <span class="font-bold text-white">{item.value}</span>
            </span>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
    <div class="mx-auto max-w-7xl space-y-10">
      <section
        aria-labelledby="footer-cta-heading"
        class="grid gap-6 rounded-2xl border border-white/8 bg-white/[0.035] p-5 shadow-[0_28px_70px_-52px_rgba(0,0,0,0.95)] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-8"
      >
        <div>
          <div class="page-hub-kicker mb-4">
            <BadgeCheck class="h-3.5 w-3.5" aria-hidden="true" />
            Canada-focused casino and sportsbook
          </div>
          <h2 id="footer-cta-heading" class="page-hub-title max-w-2xl text-2xl sm:text-3xl">
            Casino games, sports markets, and Interac payout guidance in one place.
          </h2>
          <p class="mt-4 max-w-2xl text-sm leading-relaxed text-text-body sm:text-base">
            Use 247iBET to compare routes into casino play, sportsbook markets, payment guides, and responsible gambling resources before you open a lobby.
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a
            href={PARTNER.url}
            class="page-cta-primary w-full sm:w-auto"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Start Playing
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="/responsible-gambling" class="page-cta-secondary w-full sm:w-auto">
            Safety Tools
          </a>
        </div>
      </section>

      <div class="grid gap-4 md:grid-cols-3">
        {#each footerHighlights as item}
          {@const ItemIcon = item.icon}
          <div class="rounded-xl border border-white/8 bg-navy-card/80 p-4">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-prestige-gold/20 bg-prestige-gold/10">
              <ItemIcon class="h-5 w-5 text-prestige-gold" aria-hidden="true" />
            </div>
            <p class="text-sm font-bold text-white">{item.label}</p>
            <p class="mt-1 text-xs leading-relaxed text-text-body">{item.detail}</p>
          </div>
        {/each}
      </div>

      <div class="grid grid-cols-1 gap-10 border-t border-white/8 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <section aria-labelledby="footer-brand-heading">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-prestige-gold text-navy-black">
              <span class="font-mono text-xs font-black">iB</span>
            </div>
            <div>
              <h2 id="footer-brand-heading" class="text-sm font-black uppercase tracking-[0.12em] text-white">
                {SITE.name}
              </h2>
              <p class="text-xs text-text-body">{SITE.tagline}</p>
            </div>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-text-body">
            Canadian iGaming coverage for casino, sportsbook, payments, and player safety. Must be 19+ in most provinces and 18+ in Alberta and Quebec.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="rounded-full border border-white/12 px-3 py-1.5 text-xs font-bold text-gray-300">19+</span>
            <span class="rounded-full border border-white/12 px-3 py-1.5 text-xs font-bold text-gray-300">Play responsibly</span>
            <span class="rounded-full border border-white/12 px-3 py-1.5 text-xs font-bold text-gray-300">Canada</span>
          </div>
          <div class="mt-5 flex gap-3">
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow {SITE.name} on X"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <!-- X (formerly Twitter) icon — lucide brand icons removed in newer releases -->
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4l16 16M4 20L20 4" />
              </svg>
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow {SITE.name} on Facebook"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <!-- Facebook icon -->
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow {SITE.name} on Instagram"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <!-- Instagram icon -->
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join {SITE.name} Telegram Community"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <Send class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={SOCIAL.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow {SITE.name} on TikTok"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-white/30 hover:text-white"
            >
              <Music2 class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <nav aria-labelledby="footer-play-heading">
          <h2 id="footer-play-heading" class="mb-4 text-sm font-bold text-white">Play at 247iBET</h2>
          <ul class="space-y-0 text-xs">
            {#each playLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block min-h-[44px] py-2.5 text-gray-400 transition-colors hover:text-prestige-gold"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>

        <nav aria-labelledby="footer-support-heading">
          <h2 id="footer-support-heading" class="mb-4 text-sm font-bold text-white">Support</h2>
          <ul class="space-y-0 text-xs">
            {#each supportLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block min-h-[44px] py-2.5 text-gray-400 transition-colors hover:text-prestige-gold"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>

        <section aria-labelledby="footer-safety-heading" class="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
          <h2 id="footer-safety-heading" class="mb-3 text-sm font-bold text-white">
            Responsible gambling
          </h2>
          <p class="text-xs uppercase leading-relaxed tracking-[0.08em] text-gray-300">
            If you or someone you know has a gambling problem, call the AHS Addiction Helpline at
            1-866-332-2322 or ConnexOntario at 1-866-531-2600.
          </p>
          <a
            href="/responsible-gambling"
            class="mt-5 inline-flex min-h-[44px] items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-prestige-gold hover:text-prestige-gold-light"
          >
            View safety resources
            <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </section>
      </div>

      <details class="group rounded-2xl border border-white/8 bg-white/[0.025] p-5">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-slate-blue">
          About 247iBET
          <ChevronDown class="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div class="mt-5 max-w-4xl space-y-4 font-sans text-sm leading-relaxed text-gray-400">
          <h2 class="font-sans text-xl font-bold text-white">
            247iBET — Online Casino &amp; Sports Betting for Canadian Players
          </h2>
          <p>
            247iBET is an online casino and sportsbook built for Canadian players. It covers casino games,
            live dealer tables, NHL, NBA, UFC, and payment guidance with a focus on Interac access.
          </p>
          <p>
            {SITE.name} is intended for adults only. Must be 19+ in most provinces and 18+ in Alberta and Quebec. Please gamble responsibly.
          </p>
        </div>
      </details>

      <AffiliateDisclosure variant="footer" />

      <div
        class="flex flex-col gap-3 border-t border-white/8 pt-8 font-mono text-xs text-gray-300 md:flex-row md:items-center md:justify-between"
      >
        <p>&copy; Copyright 2026 {SITE.name}. All Rights Reserved.</p>
        <p>{SITE.legalName} · {SITE.locale}</p>
      </div>
    </div>
  </div>
</footer>
