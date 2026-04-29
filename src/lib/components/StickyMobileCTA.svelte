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
  import { IBET_URLS, IBET_CTA } from '$lib/ibet-brand';

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
    class="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    style="padding-bottom: env(safe-area-inset-bottom, 0px)"
    role="navigation"
    aria-label="Quick actions"
  >
    <div
      class="border-t border-navy-border bg-navy-raised/95 px-3 py-2.5 backdrop-blur-md shadow-2xl"
    >
      <div class="flex items-center gap-2">
        {#if installPrompt}
          <button
            onclick={handleInstall}
            class="flex min-h-12 flex-1 items-center justify-center gap-1.5 btn-glossy-gold px-3 py-3 text-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised"
          >
            <Download class="h-4 w-4 shrink-0" aria-hidden="true" />
            Install App
          </button>
        {:else}
          <a
            href={IBET_URLS.casino}
            target="_blank"
            rel="noopener noreferrer"
            class="flex min-h-12 flex-1 items-center justify-center gap-1.5 btn-glossy-gold px-3 py-3 text-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised"
            aria-label="Open 247iBET Casino"
          >
            <Trophy class="h-4 w-4 shrink-0" aria-hidden="true" />
            Casino
          </a>
        {/if}

        <a
          href={IBET_URLS.register}
          target="_blank"
          rel="noopener noreferrer"
          class="flex min-h-12 flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/8 px-3 py-3 text-sm font-bold text-white transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised"
          aria-label="Open 247iBET Sports Betting"
        >
          <Star class="h-4 w-4 shrink-0 text-prestige-gold" aria-hidden="true" />
          {IBET_CTA.sports}
        </a>

        <button
          type="button"
          onclick={dismiss}
          class="flex h-12 w-12 items-center justify-center rounded-lg text-text-body transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-raised"
          aria-label="Dismiss quick actions (ESC)"
        >
          <X class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="bg-navy-black/95 px-3 py-1 text-center">
      <span class="text-xs text-text-body">
        18+/19+ depending on province · Gamble responsibly · Terms apply
      </span>
    </div>
  </div>
{/if}
