<script lang="ts">
  import { Music2, Send } from 'lucide-svelte';
  import AffiliateDisclosure from '$lib/components/AffiliateDisclosure.svelte';
  import { SITE } from '$lib/site';

  const SOCIAL = [
    {
      href: 'https://x.com/247ibet',
      label: `Follow ${SITE.name} on X`,
      icon: `<path d="M4 4l16 16M4 20L20 4"/>`,
    },
    {
      href: 'https://www.instagram.com/247ibet/',
      label: `Follow ${SITE.name} on Instagram`,
      icon: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>`,
    },
  ] as const;

  const playLinks = [
    { href: '/casino', label: 'Online Casino' },
    { href: '/sportsbook', label: 'Sports Betting' },
    { href: '/casino/slots', label: 'Slots' },
    { href: '/casino/live-casino', label: 'Live Casino' },
    { href: '/casino/blackjack', label: 'Blackjack' },
    { href: '/interac', label: 'Interac Payouts' },
    { href: '/casino-bonuses-canada', label: 'Casino Bonuses' },
    { href: '/sportsbook/nhl', label: 'NHL Betting' },
  ] as const;

  const infoLinks = [
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/guides/sports-betting-odds-explained', label: 'Betting Guide' },
    { href: '/responsible-gambling', label: 'Responsible Gaming' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ] as const;

  const legalLinks = [
    { href: '/terms-of-service', label: 'Terms' },
    { href: '/privacy-policy', label: 'Privacy' },
    { href: '/cookie-policy', label: 'Cookies' },
    { href: '/responsible-gambling', label: 'Responsible Gaming' },
  ] as const;
</script>

<footer
  aria-label="Site footer"
  class="mt-16 border-t border-white/5 bg-navy-black pb-[calc(env(safe-area-inset-bottom,0px)+7rem)] sm:mt-20 md:pb-0"
>
  <div class="container mx-auto px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <!-- Main 3-col grid -->
      <div
        class="grid grid-cols-1 gap-12 border-b border-white/5 py-14 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16"
      >
        <!-- Brand column -->
        <section aria-labelledby="footer-brand-heading">
          <div class="mb-5 flex items-center gap-3">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-prestige-gold text-navy-black"
            >
              <span class="font-mono text-xs font-black">iB</span>
            </div>
            <div>
              <h2
                id="footer-brand-heading"
                class="text-sm font-black uppercase tracking-[0.12em] text-white"
              >
                {SITE.name}
              </h2>
              <p class="text-[11px] text-text-body">{SITE.tagline}</p>
            </div>
          </div>

          <p class="max-w-sm text-sm leading-relaxed text-gray-400">
            Canadian iGaming coverage — casino, sportsbook, live dealer, and payment guides for
            players in Ontario and Alberta. Must be 19+ to play.
          </p>

          <p class="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-gray-600">
            Ontario &amp; Alberta Licensed · 19+ Only · Fast Payouts
          </p>

          <!-- Social icons -->
          <div class="mt-6 flex items-center gap-2">
            {#each SOCIAL as s}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-colors hover:border-white/25 hover:text-gray-300"
              >
                <svg
                  aria-hidden="true"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {@html s.icon}
                </svg>
              </a>
            {/each}
            <a
              href="https://t.me/247iBET"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Join ${SITE.name} on Telegram`}
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-colors hover:border-white/25 hover:text-gray-300"
            >
              <Send class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@247ibet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${SITE.name} on TikTok`}
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-colors hover:border-white/25 hover:text-gray-300"
            >
              <Music2 class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <!-- Play links -->
        <nav aria-labelledby="footer-play-heading">
          <h2
            id="footer-play-heading"
            class="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-gray-300"
          >
            Play
          </h2>
          <ul class="space-y-0.5">
            {#each playLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block py-1.5 text-sm text-gray-500 transition-colors hover:text-gray-200"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>

        <!-- Info + Safety -->
        <section aria-labelledby="footer-info-heading">
          <h2
            id="footer-info-heading"
            class="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-gray-300"
          >
            Info
          </h2>
          <ul class="space-y-0.5">
            {#each infoLinks as link}
              <li>
                <a
                  href={link.href}
                  class="block py-1.5 text-sm text-gray-500 transition-colors hover:text-gray-200"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>

          <div class="mt-8 border-t border-white/5 pt-6">
            <p class="text-xs leading-relaxed text-gray-600">
              Problem gambling helplines:
              <a href="tel:18663322322" class="text-gray-400 hover:text-gray-200">1-866-332-2322</a>
              (Alberta) ·
              <a href="tel:18665312600" class="text-gray-400 hover:text-gray-200">1-866-531-2600</a>
              (Ontario).
            </p>
          </div>
        </section>
      </div>

      <!-- Affiliate disclosure -->
      <div class="py-6 border-b border-white/5">
        <AffiliateDisclosure variant="footer" />
      </div>

      <!-- Legal bar -->
      <div
        class="flex flex-col gap-3 py-6 font-mono text-[11px] text-gray-600 md:flex-row md:items-center md:justify-between"
      >
        <p>&copy; 2026 {SITE.legalName} &middot; {SITE.locale}</p>
        <nav aria-label="Legal links" class="flex flex-wrap gap-x-5 gap-y-1">
          {#each legalLinks as link}
            <a href={link.href} class="transition-colors hover:text-gray-400">{link.label}</a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
</footer>
