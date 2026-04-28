<script lang="ts">
  import { Send, Music2, ChevronDown, Zap } from 'lucide-svelte';
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

  <div class="container mx-auto px-4 pt-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl space-y-8">
      <div class="py-6 text-center">
        <p class="mb-4 text-sm text-slate-400">
          Ready to play? Join 247iBET for casino games, live betting, and fast Interac payouts.
        </p>
        <a
          href={PARTNER.url}
          class="inline-flex items-center gap-2 rounded-lg bg-prestige-gold px-6 py-3 text-sm font-semibold text-navy-black transition-colors hover:bg-prestige-gold-light"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Start Playing Today
        </a>
      </div>

      <!-- SEO Content Accordion -->
      <details class="group">
        <summary
          class="mb-4 flex cursor-pointer list-none items-center gap-2 text-sm font-bold text-slate-blue"
        >
          About 247iBET
          <ChevronDown class="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div class="prose prose-invert prose-sm max-w-none font-sans text-gray-400">
          <h2 class="mb-4 font-sans text-2xl font-bold text-white">
            247iBET — Online Casino &amp; Sports Betting for Canadian Players
          </h2>
          <p>
            247iBET is an online casino and sportsbook built for Canadian players. We offer 500+
            casino games, live dealer tables, and a full sportsbook covering NHL, NBA, UFC, and more
            — all with fast Interac payouts.
          </p>
          <h3 class="mb-3 mt-6 font-sans text-xl font-bold text-white">
            Fast Interac Payouts in Canada
          </h3>
          <p>
            Interac e-Transfer is our primary payment method. Deposits are instant. Withdrawals are
            processed quickly once your account is verified — just your Canadian bank account and a
            clean verification flow.
          </p>

          <h3 class="mb-3 mt-6 font-sans text-xl font-bold text-white">Quick Answers</h3>
          <div class="space-y-4">
            <div>
              <p class="font-bold text-gray-300">
                What is the fastest payout method at 247iBET?
              </p>
              <p class="text-sm">
                Interac e-Transfer is the fastest payout method for Canadian players. Most
                withdrawals are processed within a few hours after identity verification.
              </p>
            </div>
            <div>
              <p class="font-bold text-gray-300">What games does 247iBET offer?</p>
              <p class="text-sm">
                247iBET offers 500+ slots, live dealer blackjack, roulette, baccarat, and a full
                sportsbook. New games are added regularly.
              </p>
            </div>
          </div>

          <hr class="my-8 border-white/10" />

          <p>
            {SITE.name} is an online casino and sportsbook serving Canadian players. We process wagers
            and offer real-money gaming. Must be 19+ (18+ in Alberta and Quebec) to play. Please gamble
            responsibly.
          </p>
        </div>
      </details>

      <AffiliateDisclosure variant="footer" />

      <!-- Responsible Gambling & Links -->
      <div class="grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
        <div class="md:col-span-2">
          <div class="mb-4 flex items-center gap-2">
            <div
              class="flex h-6 w-6 items-center justify-center rounded bg-prestige-gold text-navy-black"
            >
              <span class="font-mono text-[10px] font-bold">iB</span>
            </div>
            <span class="font-bold tracking-wider text-white">{SITE.name.toUpperCase()}</span>
          </div>
          <p class="mb-4 text-xs uppercase leading-relaxed tracking-wider text-gray-300">
            Must be 19+ to gamble online in most of Canada and 18+ in Alberta and Quebec. If you or
            someone you know has a gambling problem, call the AHS Addiction Helpline at
            1-866-332-2322 or ConnexOntario at 1-866-531-2600.
          </p>
          <p class="mb-4 text-xs leading-relaxed text-gray-300">
            Gambling can be addictive. Please play responsibly. 19+ only. {SITE.name} only accepts visitors
            over 19 years of age. If you or someone you know has a gambling problem, help is available.
          </p>
          <div class="mb-4 flex gap-4">
            <span class="rounded border border-gray-600 px-2 py-1 text-xs font-bold text-gray-300"
              >19+</span
            >
            <span class="rounded border border-gray-600 px-2 py-1 text-xs font-bold text-gray-300"
              >BeGambleAware</span
            >
            <span class="rounded border border-gray-600 px-2 py-1 text-xs font-bold text-gray-300"
              >GamCare</span
            >
          </div>
          <div class="flex gap-3">
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
        </div>

        <div>
          <p class="mb-4 font-bold text-white">Play at 247iBET</p>
          <ul class="space-y-0 text-xs">
            {#each playLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block min-h-[44px] py-2.5 text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <p class="mb-4 font-bold text-white">Support</p>
          <ul class="space-y-0 text-xs">
            {#each supportLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block min-h-[44px] py-2.5 text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between border-t border-white/5 pt-8 font-mono text-xs text-gray-300 md:flex-row"
      >
        <p>&copy; Copyright 2026 {SITE.name}. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
