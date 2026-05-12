<script lang="ts">
  /**
   * StickyMobileCTA — mobile-only sticky bottom bar
   *
   * Shows after 300px scroll. Two primary CTAs driving into the highest-RPV money pages.
   * Dismissible per session. Respects iOS safe-area-inset-bottom.
   *
   * PWA Awareness: Detects if the app is installable and prompts for "Install" on returning sessions.
   */

  import { browser } from '$app/environment';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { Trophy, Star, X, Download } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';

  interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
    readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }

  const DISMISS_KEY = '247ibet_sticky_cta_dismissed';

  let visible = $state(false);
  let installPrompt = $state<BeforeInstallPromptEvent | null>(null);
  let isStandalone = $state(false);
  let dismissed = $state(false);

  $effect(() => {
    if (!browser) return;

    // Initialize isStandalone
    isStandalone =
      (window.navigator as Navigator & { standalone?: boolean }).standalone ||
      window.matchMedia('(display-mode: standalone)').matches;

    // Initialize dismissed from sessionStorage
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      // ignore
    }

    // BeforeInstallPrompt listener
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      installPrompt = e as BeforeInstallPromptEvent;
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Scroll listener (only if not already dismissed)
    // Show after 300px scroll. Hide briefly while scrolling DOWN, restore on scroll UP —
    // gives the user content breathing room without losing the CTA.
    let removeScroll: (() => void) | undefined;
    let removeKey: (() => void) | undefined;
    if (!dismissed) {
      let lastY = window.scrollY;
      const handleScroll = () => {
        const y = window.scrollY;
        if (y <= 300) {
          visible = false;
        } else if (y < lastY - 4) {
          // Scrolling up — show
          visible = true;
        } else if (y > lastY + 8) {
          // Scrolling down past threshold — hide
          visible = false;
        }
        lastY = y;
      };
      // First pass: show if already scrolled past threshold on mount
      visible = window.scrollY > 300;
      window.addEventListener('scroll', handleScroll, { passive: true });
      removeScroll = () => window.removeEventListener('scroll', handleScroll);

      // ESC dismisses for the session
      const handleKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && visible) dismiss();
      };
      window.addEventListener('keydown', handleKey);
      removeKey = () => window.removeEventListener('keydown', handleKey);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      removeScroll?.();
      removeKey?.();
    };
  });

  async function handleInstall() {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      installPrompt = null;
    }
  }

  function dismiss() {
    dismissed = true;
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  }
</script>

{#if visible && !dismissed && !isStandalone}
  <div
    transition:fly={{ y: 100, duration: 350, easing: cubicOut }}
    class="fixed inset-x-0 z-40 mx-auto w-[calc(100%_-_1rem)] max-w-lg md:hidden safe-bottom"
    style="bottom: calc(6rem + env(safe-area-inset-bottom, 0px))"
    role="navigation"
    aria-label="Quick actions"
  >
    <div class="floating-action-tray p-2.5">
      <div class="flex items-center gap-2">
        {#if installPrompt}
          <button
            onclick={handleInstall}
            class="flex min-h-11 flex-1 items-center justify-center gap-1.5 btn-glossy-gold shimmer-effect rounded-2xl px-2 py-2.5 text-xs font-black active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised min-[360px]:text-sm"
          >
            <Download class="h-4 w-4 shrink-0" aria-hidden="true" />
            Install App
          </button>
        {:else}
          <a
            href={IBET_URLS.casino}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            data-sveltekit-preload-data="tap"
            class="flex min-h-[48px] flex-1 items-center justify-center gap-2 btn-glossy-gold btn-magnetic shimmer-effect rounded-2xl px-2 py-3 text-xs font-black active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised min-[360px]:text-sm"
            aria-label="Open affiliate casino handoff"
          >
            <Trophy class="h-4 w-4 shrink-0" aria-hidden="true" />
            Casino
          </a>
        {/if}

        <a
          href={IBET_URLS.register}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          data-sveltekit-preload-data="tap"
          class="segmented-item flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.065] px-2 py-3 text-xs font-bold text-white transition-all hover:bg-white/10 active:scale-95 btn-magnetic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised min-[360px]:text-sm"
          aria-label="Open affiliate sportsbook handoff"
        >
          <Star class="h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
          Sports
        </a>

        <button
          type="button"
          onclick={dismiss}
          class="segmented-item flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-text-body transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised"
          aria-label="Dismiss quick actions (ESC)"
        >
          <X class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="px-2 pt-1.5 text-center">
      <span class="block text-[10px] leading-tight text-text-tertiary mb-1">
        Affiliate Disclosure: This site may earn commissions from featured operators.
      </span>
      <span class="text-xs leading-snug text-text-tertiary">
        18+/19+ by province · Gamble responsibly · Terms apply
      </span>
    </div>
  </div>
{/if}
