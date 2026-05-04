<script lang="ts">
  import { page } from '$app/state';
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import {
    ArrowRight,
    CreditCard,
    Headphones,
    Menu,
    Music2,
    Send,
    ShieldCheck,
    X,
  } from 'lucide-svelte';
  import { SITE, PARTNER } from '$lib/site';

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------

  const LOGO_SRC = '/images/brand/logo.png';
  const MOBILE_MENU_ID = 'mobile-menu-panel';
  const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  interface NavItem {
    href: string;
    label: string;
  }

  const mainLinks: NavItem[] = [
    { href: '/casino', label: 'Casino' },
    { href: '/sportsbook', label: 'Sportsbook' },
    { href: '/deposit', label: 'Interac Payouts' },
    { href: '/casino-bonuses-canada', label: 'Bonuses' },
    { href: '/responsible-gambling', label: 'Safety' },
    { href: '/faq', label: 'FAQ' },
  ];

  const subLinks: NavItem[] = [
    { href: '/casino/slots', label: 'Slots' },
    { href: '/casino/blackjack', label: 'Blackjack' },
    { href: '/casino/roulette', label: 'Roulette' },
    { href: '/casino/baccarat', label: 'Baccarat' },
    { href: '/casino/live-casino', label: 'Live Casino' },
    { href: '/sportsbook/nhl', label: 'NHL' },
    { href: '/sportsbook/nba', label: 'NBA' },
    { href: '/sportsbook/ufc', label: 'UFC' },
    { href: '/fast-payouts', label: 'Fast Payouts' },
    { href: '/casino-bonuses-canada', label: 'Bonuses' },
  ];

  const quickLinks = [
    { href: '/fast-payouts', label: 'Fast payouts', icon: CreditCard },
    { href: '/legal-online-gambling-canada', label: 'Legal guide', icon: ShieldCheck },
    { href: '/responsible-gambling', label: 'Responsible gaming', icon: Headphones },
  ] as const;

  // ---------------------------------------------------------------------------
  // State (Svelte 5 runes)
  // ---------------------------------------------------------------------------

  let isMobileMenuOpen = $state(false);
  let scrolled = $state(false);

  let mobileMenuRef: HTMLDivElement | undefined = $state();
  let mobileMenuButtonRef: HTMLButtonElement | undefined = $state();

  let lastMobileFocus: HTMLElement | null = null;
  let mobileMenuWasOpen = false;

  const pathname = $derived(page.url.pathname);

  // ---------------------------------------------------------------------------
  // Scroll + global keyboard listeners
  // ---------------------------------------------------------------------------

  $effect(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') isMobileMenuOpen = false;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  // ---------------------------------------------------------------------------
  // Body scroll lock
  // ---------------------------------------------------------------------------

  $effect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // ---------------------------------------------------------------------------
  // Focus trap + focus restoration
  // ---------------------------------------------------------------------------

  $effect(() => {
    if (!isMobileMenuOpen) {
      if (mobileMenuWasOpen) {
        window.setTimeout(() => {
          const fallback = lastMobileFocus ?? mobileMenuButtonRef;
          fallback?.focus();
          lastMobileFocus = null;
        }, 0);
      }
      mobileMenuWasOpen = false;
      return;
    }

    mobileMenuWasOpen = true;

    window.setTimeout(() => {
      if (!mobileMenuRef) return;
      const focusable = Array.from(
        mobileMenuRef.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null);
      (focusable[0] ?? mobileMenuRef).focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !mobileMenuRef) return;
      const elements = Array.from(
        mobileMenuRef.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null);

      if (elements.length === 0) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function toggleMobileMenu() {
    if (!isMobileMenuOpen) {
      lastMobileFocus =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<nav
  aria-label="Main navigation"
  class="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-out animate-fade-down {scrolled
    ? 'glass-premium border-white/15 shadow-[0_20px_70px_-20px_rgba(0,0,0,0.9)]'
    : 'border-white/5 bg-navy-black/60 backdrop-blur-md'}"
>
  <!-- Tier 1: Utility bar — desktop only, collapses on scroll -->
  <div
    class="overflow-hidden transition-[max-height,opacity] duration-200 ease-out {scrolled
      ? 'max-h-0 opacity-0'
      : 'max-h-8 opacity-100'}"
  >
    <div
      class="hidden h-8 items-center justify-between border-b border-white/5 px-4 sm:px-6 lg:flex lg:px-8"
    >
      <div class="flex items-center gap-2">
        <span class="live-dot" aria-hidden="true"></span>
        <span class="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary"
          >19+ · Play Responsibly</span
        >
      </div>
      <div class="flex items-center gap-1" aria-label="Social media links">
        <a
          href="https://x.com/247ibet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${SITE.name} on X`}
          class="flex h-11 w-11 items-center justify-center rounded-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
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
            <path d="M4 4l16 16M4 20L20 4" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/247ibet/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${SITE.name} on Instagram`}
          class="flex h-11 w-11 items-center justify-center rounded-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
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
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://t.me/247iBET"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Join ${SITE.name} on Telegram`}
          class="flex h-11 w-11 items-center justify-center rounded-sm text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
        >
          <Send class="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <a
          href="https://www.tiktok.com/@247ibet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${SITE.name} on TikTok`}
          class="flex h-11 w-11 items-center justify-center rounded-sm text-text-tertiary transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
        >
          <Music2 class="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>

  <!-- Tier 2: Main bar (always visible) -->
  <div
    class="mx-auto flex h-14 w-full max-w-[1720px] items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6 lg:px-8"
  >
    <!-- Logo + desktop nav links -->
    <div class="flex min-w-0 items-center gap-3 lg:gap-8">
      <a
        href="/"
        class="flex min-h-[44px] shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <img
          src={LOGO_SRC}
          alt={`${SITE.name} Logo`}
          width="140"
          height="40"
          fetchpriority="high"
          class="h-9 w-[116px] object-contain sm:h-10 sm:w-[140px]"
        />
        <span class="sr-only">{SITE.name} Home</span>
      </a>

      <ul
        class="hidden items-center rounded-full border border-white/8 bg-white/[0.035] p-1 text-sm font-semibold text-gray-300 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] md:flex"
      >
        {#each mainLinks as item (item.href)}
          <li>
            <a
              href={item.href}
              class="relative inline-flex min-h-[44px] items-center rounded-full px-4 text-text-body transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black {pathname ===
              item.href
                ? 'bg-prestige-gold/12 text-prestige-gold shadow-[0_0_0_1px_rgba(212,148,58,0.18)_inset]'
                : ''}"
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Right-side actions -->
    <div class="flex shrink-0 items-center gap-1.5 sm:gap-3">
      <div
        class="hidden items-center gap-2 rounded-full border border-success/20 bg-success/8 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-success lg:flex"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true"></span>
        19+ Play responsibly
      </div>

      <!-- Partner CTA -->
      <div class="hidden sm:block">
        <a
          href={PARTNER.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          class="page-cta-primary-sm shimmer-effect"
          aria-label="Visit partner site"
        >
          Visit Partner Site
          <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <!-- Safety shortcut -->
      <a
        href="/responsible-gambling"
        aria-label="Responsible gaming tools"
        class="hidden h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-white/8 text-text-body transition-colors hover:border-white/16 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black min-[360px]:flex"
      >
        <ShieldCheck class="w-4 h-4" aria-hidden="true" />
      </a>

      <!-- Mobile menu toggle -->
      <button
        type="button"
        bind:this={mobileMenuButtonRef}
        class="flex h-11 w-11 items-center justify-center rounded-full text-text-body transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black md:hidden"
        onclick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-haspopup="menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls={MOBILE_MENU_ID}
      >
        {#if isMobileMenuOpen}
          <X class="w-6 h-6" aria-hidden="true" />
        {:else}
          <Menu class="w-6 h-6" aria-hidden="true" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Tier 3: Sub-nav — desktop only, collapses on scroll -->
  <div
    class="overflow-hidden transition-[max-height,opacity] duration-200 ease-out {scrolled
      ? 'max-h-0 opacity-0'
      : 'max-h-12 opacity-100'}"
  >
    <div class="hidden border-t border-white/5 lg:block">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Quick category navigation">
          <ul class="flex min-h-[44px] items-center overflow-x-auto [scrollbar-width:none]">
            {#each subLinks as link (link.href)}
              <li>
                <a
                  href={link.href}
                  class="flex h-full min-h-[44px] shrink-0 items-center border-r border-white/5 px-4 font-mono text-xs uppercase tracking-[0.1em] transition-colors last:border-r-0 hover:text-prestige-gold focus-visible:bg-prestige-gold/10 focus-visible:text-prestige-gold focus-visible:outline-none {pathname ===
                  link.href
                    ? 'text-prestige-gold'
                    : 'text-text-body'}"
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- Mobile menu backdrop (tap to close) -->
  {#if isMobileMenuOpen}
    <button
      type="button"
      aria-label="Close mobile menu"
      tabindex="-1"
      class="fixed inset-0 top-14 z-40 cursor-default bg-navy-black/40 backdrop-blur-sm sm:top-16 md:hidden"
      onclick={closeMobileMenu}
    ></button>
  {/if}

  <!-- Mobile menu panel -->
  {#if isMobileMenuOpen}
    <div
      id={MOBILE_MENU_ID}
      bind:this={mobileMenuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      tabindex="-1"
      class="relative z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-navy-border bg-navy-black/98 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:max-h-[calc(100dvh-4rem)] md:hidden"
      transition:slide={{ duration: 300, easing: cubicOut }}
    >
      <div class="space-y-4 px-3 py-4 sm:px-4 sm:py-6">
        <div class="rounded-2xl border border-white/8 bg-white/[0.035] p-2">
          <div
            class="mb-2 flex items-center justify-between rounded-xl border border-success/15 bg-success/8 px-3 py-2"
          >
            <span
              class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-success"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true"></span>
              19+ guide
            </span>
            <span class="text-xs font-semibold text-text-tertiary">Play responsibly</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <a
              href="/"
              class="col-span-2 flex min-h-[46px] items-center justify-center rounded-xl px-4 text-sm font-bold transition-colors hover:bg-white/[0.05] hover:text-prestige-gold focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/70 {pathname ===
              '/'
                ? 'bg-prestige-gold/12 text-prestige-gold'
                : 'bg-white/[0.025]'}"
              aria-current={pathname === '/' ? 'page' : undefined}
              onclick={closeMobileMenu}
            >
              Home
            </a>

            {#each mainLinks as item (item.href)}
              <a
                href={item.href}
                class="flex min-h-[46px] items-center justify-center rounded-xl px-3 text-center text-sm font-bold transition-colors hover:bg-white/[0.05] hover:text-prestige-gold focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/70 {pathname ===
                item.href
                  ? 'bg-prestige-gold/12 text-prestige-gold'
                  : 'bg-white/[0.025]'}"
                aria-current={pathname === item.href ? 'page' : undefined}
                onclick={closeMobileMenu}
              >
                {item.label}
              </a>
            {/each}
          </div>
        </div>

        <div>
          <p class="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
            Quick actions
          </p>
          <div class="grid gap-2 sm:grid-cols-2">
            {#each quickLinks as item}
              {@const ItemIcon = item.icon}
              <a
                href={item.href}
                class="flex min-h-[48px] items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-text-body transition-colors hover:border-prestige-gold/30 hover:text-white focus-visible:border-prestige-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold/40"
                onclick={closeMobileMenu}
              >
                <span class="inline-flex items-center gap-2">
                  <ItemIcon class="h-4 w-4 text-prestige-gold" aria-hidden="true" />
                  {item.label}
                </span>
                <ArrowRight class="h-4 w-4 text-text-tertiary" aria-hidden="true" />
              </a>
            {/each}
          </div>
        </div>

        <div class="flex flex-col gap-3 border-t border-white/10 pt-6">
          <a
            href={PARTNER.url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            class="page-cta-primary w-full"
            onclick={closeMobileMenu}
          >
            Visit Partner Site
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="/responsible-gambling"
            class="flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition-colors hover:border-prestige-gold/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
            onclick={closeMobileMenu}
          >
            <div class="flex items-center gap-2">
              <ShieldCheck class="w-5 h-5 text-gray-300" aria-hidden="true" />
              <span class="text-sm font-medium text-gray-300">Responsible gaming tools</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>
