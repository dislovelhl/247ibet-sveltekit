<script lang="ts">
  import { Home, Gamepad2, Trophy, User, Search, Download } from 'lucide-svelte';
  import { page } from '$app/state';
  import { IBET_URLS } from '$lib/ibet-brand';
  import { scale, fly } from 'svelte/transition';
  import { browser } from '$app/environment';

  interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
    readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }

  let installPrompt = $state<BeforeInstallPromptEvent | null>(null);
  let isStandalone = $state(false);

  $effect(() => {
    if (!browser) return;

    isStandalone =
      (window.navigator as any).standalone ||
      window.matchMedia('(display-mode: standalone)').matches;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      installPrompt = e as BeforeInstallPromptEvent;
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
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

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Sports', icon: Trophy, href: '/sportsbook' },
    { label: 'Casino', icon: Gamepad2, href: '/casino' },
    { label: 'Search', icon: Search, href: '/search' },
    { label: 'Account', icon: User, href: IBET_URLS.register }
  ];

  const isActive = (href: string) => {
    if (href === '/' || href === '/sportsbook' || href === '/casino' || href === '/search') {
      if (href === '/') return page.url.pathname === '/';
      return page.url.pathname.startsWith(href);
    }
    return false;
  };
</script>

{#if !isStandalone}
  <!-- PWA Install Prompt (Subtle Floating Indicator) -->
  {#if installPrompt}
    <div 
      transition:fly={{ y: 20, duration: 400 }}
      class="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 lg:hidden"
    >
      <button 
        onclick={handleInstall}
        class="flex items-center gap-2 rounded-full bg-prestige-gold px-4 py-2 text-xs font-black uppercase tracking-widest text-navy-black shadow-gold-glow animate-pulse"
      >
        <Download class="h-3 w-3" />
        Install App
      </button>
    </div>
  {/if}

  <nav 
    class="fixed bottom-4 left-4 right-4 z-50 glass-thick rounded-2xl border border-white/10 shadow-2xl lg:hidden transition-all duration-300"
    aria-label="Mobile Navigation"
  >
    <div class="flex h-16 items-center justify-around px-2">
      {#each navItems as item}
        {@const active = isActive(item.href)}
        <a
          href={item.href}
          class="group relative flex flex-col items-center justify-center gap-1 transition-all duration-300"
          class:text-prestige-gold={active}
          class:text-text-body={!active}
          aria-current={active ? 'page' : undefined}
        >
          <item.icon 
            class="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-active:scale-95" 
            aria-hidden="true" 
          />
          <span class="text-xs font-black uppercase tracking-[0.1em] transition-opacity duration-300 {active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}">
            {item.label}
          </span>
          
          {#if active}
            <span 
              class="absolute -bottom-1 h-1 w-1 rounded-full bg-prestige-gold shadow-[0_0_8px_var(--color-prestige-gold)]"
              in:scale={{ duration: 300, start: 0 }}
            ></span>
          {/if}
        </a>
      {/each}
    </div>
  </nav>
{/if}

<style>
  /* Glassmorphism thickening for mobile readability */
  :global(.glass-thick) {
    background: rgba(13, 22, 41, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
</style>
