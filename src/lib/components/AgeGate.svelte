<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { ShieldAlert, ExternalLink } from 'lucide-svelte';
  import {
    hasLocalAgeVerification,
    markLocalAgeVerification,
    loadAgeGateVerificationFromSession,
    persistAgeGateVerificationToSession,
  } from '$lib/age-gate-client';

  const FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let visible = $state(false);
  let acceptButtonRef: HTMLButtonElement | undefined = $state();

  onMount(() => {
    let cancelled = false;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const hydrateGate = async () => {
      if (hasLocalAgeVerification()) {
        markLocalAgeVerification();
        void persistAgeGateVerificationToSession();
        return;
      }

      const verifiedInSession = await loadAgeGateVerificationFromSession();
      if (cancelled) return;

      if (verifiedInSession) {
        markLocalAgeVerification();
        return;
      }

      timerId = setTimeout(() => {
        if (!cancelled) {
          visible = true;
        }
      }, 0);
    };

    void hydrateGate();

    return () => {
      cancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  });

  $effect(() => {
    if (!visible) return;
    if (!browser) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    acceptButtonRef?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  });

  $effect(() => {
    if (!visible) return;
    if (!browser) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleDecline();
        return;
      }

      if (event.key === 'Tab') {
        if (!visible) return;
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return;

        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        ).filter((el) => el.offsetParent !== null);

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  function handleAccept() {
    markLocalAgeVerification();
    void persistAgeGateVerificationToSession();
    visible = false;
  }

  function handleDecline() {
    window.location.assign('https://www.google.com');
  }
</script>

{#if visible}
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="age-gate-title"
    aria-describedby="age-gate-desc"
    class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    style="background-color: rgba(7,12,24,0.97); backdrop-filter: blur(12px);"
    transition:fade={{ duration: 400 }}
  >
    <div
      class="relative w-full max-w-sm glass-premium shimmer-effect rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden text-center shadow-[0_32px_120px_-20px_rgba(0,0,0,0.8)]"
      transition:fly={{ y: 28, duration: 450, easing: cubicOut }}
    >
      <!-- Badge -->
      <div class="flex justify-center mb-6">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-error/30 bg-error/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-error"
        >
          <ShieldAlert class="w-3.5 h-3.5" aria-hidden="true" />
          Age Verification Required
        </div>
      </div>

      <!-- 19+ badge -->
      <div
        class="mx-auto mb-5 w-20 h-20 rounded-full bg-navy-raised border-2 border-prestige-gold flex items-center justify-center animate-pulse-19"
      >
        <span class="text-3xl font-black text-gradient-gold" style="font-family: var(--font-sans);">
          19+
        </span>
      </div>

      <h2 id="age-gate-title" class="page-detail-title text-xl md:text-2xl mb-3">Adults Only</h2>
      <p id="age-gate-desc" class="page-detail-copy text-sm mb-6">
        This website contains content related to online gambling and is intended strictly for
        individuals who are
        <strong class="text-text-primary">19 years of age or older</strong>. By entering, you
        confirm you meet the legal gambling age in your province.
      </p>

      <!-- Disclaimer strip -->
      <div
        class="mb-6 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-text-body leading-relaxed"
      >
        Gambling can be addictive. Play responsibly.
        <a
          href="https://www.responsiblegambling.org"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-0.5 rounded-sm font-bold text-slate-blue underline underline-offset-2 transition-colors hover:text-slate-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-blue/60"
        >
          Get help <ExternalLink class="w-2.5 h-2.5" />
        </a>
      </div>

      <!-- CTA buttons -->
      <div class="flex flex-col sm:flex-row gap-2.5">
        <button
          id="age-gate-accept"
          bind:this={acceptButtonRef}
          type="button"
          onclick={handleAccept}
          class="page-cta-primary flex-1 shimmer-effect transition-transform hover:scale-[1.03] active:scale-[0.97] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
        >
          I Am 19+&nbsp;— Enter
        </button>
        <button
          id="age-gate-decline"
          type="button"
          onclick={handleDecline}
          class="page-cta-secondary flex-1 transition-transform hover:scale-[1.03] active:scale-[0.97] motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
        >
          Exit
        </button>
      </div>
    </div>
  </div>
{/if}
