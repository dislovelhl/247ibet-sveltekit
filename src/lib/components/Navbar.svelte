<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { Menu, X, Search, User } from 'lucide-svelte';
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
    { href: '/interac', label: 'Interac' },
    { href: '/responsible-gambling', label: 'Help' },
  ];

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
  class="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 animate-fade-down {scrolled
    ? 'navy-card border-white/10 h-14'
    : 'bg-navy-black/90 border-white/5 h-20'}"
>
  <div
    class="container mx-auto px-4 flex items-center justify-between transition-all duration-500 {scrolled
      ? 'h-14'
      : 'h-20'}"
  >
    <!-- Logo + desktop nav links -->
    <div class="flex items-center gap-8">
      <a
        href="/"
        class="flex items-center"
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        <img
          src={LOGO_SRC}
          alt="{SITE.name} Logo"
          width="140"
          height="40"
          fetchpriority="high"
          class="object-contain w-[140px] h-10"
        />
        <span class="sr-only">{SITE.name} Home</span>
      </a>

      <ul class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
        {#each mainLinks as item (item.href)}
          <li>
            <a
              href={item.href}
              class="relative py-3 min-h-[44px] inline-flex items-center hover:text-gradient-premium transition-colors {pathname ===
              item.href
                ? 'text-gradient-premium'
                : ''}"
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
              {#if pathname === item.href}
                <span
                  class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-blue rounded-full"
                  aria-hidden="true"
                ></span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Right-side actions -->
    <div class="flex items-center gap-4">
      <!-- Search stub (desktop) -->
      <div class="hidden xl:block">
        <button
          type="button"
          aria-label="Search"
          class="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-text-body transition-all"
        >
          <Search class="w-4 h-4" aria-hidden="true" />
          <span class="hidden md:inline">Search...</span>
        </button>
      </div>

      <!-- Search stub (mobile compact) -->
      <div class="md:hidden">
        <button
          type="button"
          aria-label="Search"
          class="flex justify-center items-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-text-body transition-all"
        >
          <Search class="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      <!-- Play Now CTA -->
      <div class="hidden sm:block">
        <a
          href={PARTNER.url}
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-2 btn-glossy-gold rounded-full text-sm inline-block hover:scale-[1.03] active:scale-[0.97] transition-transform"
          aria-label="Open game lobby"
        >
          Play Now
        </a>
      </div>

      <!-- User profile placeholder -->
      <a
        href="/login"
        aria-label="Sign in to your account"
        class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
      >
        <User class="w-4 h-4" aria-hidden="true" />
      </a>

      <!-- Mobile menu toggle -->
      <button
        type="button"
        bind:this={mobileMenuButtonRef}
        class="md:hidden p-2.5 text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-blue"
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
      class="md:hidden bg-navy-raised border-b border-navy-border overflow-hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
      transition:slide={{ duration: 300, easing: cubicOut }}
    >
      <div class="px-4 py-6 space-y-6">
        <div class="flex flex-col gap-4">
          <!-- Home link -->
          <a
            href="/"
            class="text-lg font-bold min-h-[44px] flex items-center hover:text-slate-blue transition-colors {pathname ===
            '/'
              ? 'text-slate-blue'
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
              class="text-lg font-bold min-h-[44px] flex items-center hover:text-slate-blue transition-colors {pathname ===
              item.href
                ? 'text-slate-blue'
                : ''}"
              aria-current={pathname === item.href ? 'page' : undefined}
              onclick={closeMobileMenu}
            >
              {item.label}
            </a>
          {/each}
        </div>

        <!-- Bottom actions -->
        <div class="pt-6 border-t border-white/10 flex flex-col gap-4">
          <a
            href={PARTNER.url}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full text-center px-6 py-3 btn-glossy-gold rounded-full text-sm"
            onclick={closeMobileMenu}
          >
            Play Now
          </a>

          <div class="flex items-center px-4 py-3 rounded-xl bg-navy-raised border border-navy-border">
            <div class="flex items-center gap-2">
              <User class="w-5 h-5 text-gray-300" aria-hidden="true" />
              <span class="text-sm font-medium text-gray-300">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav>
