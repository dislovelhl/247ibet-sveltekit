<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { ArrowRight, CreditCard, Headphones, Menu, Search, ShieldCheck, User, X } from 'lucide-svelte';
  import { SITE, PARTNER } from '$lib/site';
  import { IBET_URLS } from '$lib/ibet-brand';

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
    { href: '/interac', label: 'Interac' },
    { href: '/responsible-gambling', label: 'Help' },
  ];

  const quickLinks = [
    { href: '/fast-payouts', label: 'Fast payouts', icon: CreditCard },
    { href: '/legal-online-gambling-canada', label: 'Legal guide', icon: ShieldCheck },
    { href: '/contact', label: 'Support', icon: Headphones },
  ] as const;

  // ---------------------------------------------------------------------------
  // State (Svelte 5 runes)
  // ---------------------------------------------------------------------------

  let isMobileMenuOpen = $state(false);
  let scrolled = $state(false);

  let mobileMenuRef: HTMLDivElement | undefined = $state();
  let mobileMenuButtonRef: HTMLButtonElement | undefined = $state();

  // Track last-focused element before opening mobile menu, for focus restoration
  let lastMobileFocus: HTMLElement | null = null;
  let mobileMenuWasOpen = false;

  // Derived pathname
  const pathname = $derived(page.url.pathname);

  // ---------------------------------------------------------------------------
  // Scroll + global keyboard listeners
  // ---------------------------------------------------------------------------

  onMount(() => {
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

    // Focus first focusable element inside the menu once it is rendered
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
  class="fixed top-0 left-0 right-0 z-50 border-b transition-[height,background-color,border-color,box-shadow] duration-200 ease-out animate-fade-down {scrolled
    ? 'h-16 border-white/10 bg-navy-black/92 shadow-[0_18px_42px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl'
    : 'h-20 border-white/5 bg-navy-black/82 backdrop-blur-md'}"
>
  <div
    class="container mx-auto flex items-center justify-between gap-4 px-4 transition-[height] duration-200 ease-out sm:px-6 lg:px-8 {scrolled
      ? 'h-16'
      : 'h-20'}"
  >
    <!-- Logo + desktop nav links -->
    <div class="flex min-w-0 items-center gap-5 lg:gap-8">
      <a
        href="/"
        class="flex min-h-[44px] shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold"
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <img
          src={LOGO_SRC}
          alt="{SITE.name} Logo"
          width="140"
          height="40"
          fetchpriority="high"
          class="h-10 w-[132px] object-contain sm:w-[140px]"
        />
        <span class="sr-only">{SITE.name} Home</span>
      </a>

      <ul class="hidden items-center rounded-full border border-white/8 bg-white/[0.035] p-1 text-sm font-semibold text-gray-300 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] md:flex">
        {#each mainLinks as item (item.href)}
          <li>
            <a
              href={item.href}
              class="relative inline-flex min-h-[40px] items-center rounded-full px-4 text-text-body transition-colors hover:text-white {pathname ===
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
    <div class="flex shrink-0 items-center gap-2 sm:gap-3">
      <div class="hidden items-center gap-2 rounded-full border border-success/20 bg-success/8 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-success lg:flex">
        <span class="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true"></span>
        19+ Play responsibly
      </div>

      <!-- Search (desktop) -->
      <div class="hidden xl:block">
        <a
          href="/search"
          aria-label="Search"
          class="flex min-h-[44px] min-w-[132px] items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-body transition-all hover:border-prestige-gold/30 hover:bg-white/8 hover:text-white"
        >
          <Search class="w-4 h-4" aria-hidden="true" />
          <span class="hidden md:inline">Search...</span>
        </a>
      </div>

      <!-- Search (mobile compact) -->
      <div class="md:hidden">
        <a
          href="/search"
          aria-label="Search"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-body transition-all hover:border-prestige-gold/30 hover:text-white"
        >
          <Search class="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <!-- Play Now CTA -->
      <div class="hidden sm:block">
        <a
          href={PARTNER.url}
          target="_blank"
          rel="noopener noreferrer"
          class="page-cta-primary-sm"
          aria-label="Open game lobby"
        >
          Play Now
          <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <!-- User profile / login (external operator URL) -->
      <a
        href={IBET_URLS.login}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Sign in to your 247iBET account"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-white/8 text-gray-300 transition-colors hover:border-white/16 hover:text-white"
      >
        <User class="w-4 h-4" aria-hidden="true" />
      </a>

      <!-- Mobile menu toggle -->
      <button
        type="button"
        bind:this={mobileMenuButtonRef}
        class="flex h-11 w-11 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold md:hidden"
        onclick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
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

  <!-- Mobile menu panel -->
  {#if isMobileMenuOpen}
    <div
      id={MOBILE_MENU_ID}
      bind:this={mobileMenuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      tabindex="-1"
      class="max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-navy-border bg-navy-black/98 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.95)] backdrop-blur-xl md:hidden"
      transition:slide={{ duration: 300, easing: cubicOut }}
    >
      <div class="space-y-6 px-4 py-6">
        <div class="rounded-2xl border border-white/8 bg-white/[0.035] p-2">
          <!-- Home link -->
          <a
            href="/"
            class="flex min-h-[48px] items-center rounded-xl px-4 text-base font-bold transition-colors hover:bg-white/[0.05] hover:text-prestige-gold {pathname ===
            '/'
              ? 'bg-prestige-gold/12 text-prestige-gold'
              : ''}"
            aria-current={pathname === '/' ? 'page' : undefined}
            onclick={closeMobileMenu}
          >
            Home
          </a>

          <!-- Main nav links -->
          {#each mainLinks as item (item.href)}
            <a
              href={item.href}
              class="flex min-h-[48px] items-center rounded-xl px-4 text-base font-bold transition-colors hover:bg-white/[0.05] hover:text-prestige-gold {pathname ===
              item.href
                ? 'bg-prestige-gold/12 text-prestige-gold'
                : ''}"
              aria-current={pathname === item.href ? 'page' : undefined}
              onclick={closeMobileMenu}
            >
              {item.label}
            </a>
          {/each}
        </div>

        <div>
          <p class="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
            Popular routes
          </p>
          <div class="grid gap-2">
            {#each quickLinks as item}
              {@const ItemIcon = item.icon}
              <a
                href={item.href}
                class="flex min-h-[48px] items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-text-body transition-colors hover:border-prestige-gold/30 hover:text-white"
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

        <!-- Bottom actions -->
        <div class="flex flex-col gap-3 border-t border-white/10 pt-6">
          <a
            href={PARTNER.url}
            target="_blank"
            rel="noopener noreferrer"
            class="page-cta-primary w-full"
            onclick={closeMobileMenu}
          >
            Play Now
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={IBET_URLS.login}
            target="_blank"
            rel="noopener noreferrer"
            class="flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition-colors hover:border-prestige-gold/30 hover:bg-white/[0.07]"
            onclick={closeMobileMenu}
          >
            <div class="flex items-center gap-2">
              <User class="w-5 h-5 text-gray-300" aria-hidden="true" />
              <span class="text-sm font-medium text-gray-300">Sign in</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>
