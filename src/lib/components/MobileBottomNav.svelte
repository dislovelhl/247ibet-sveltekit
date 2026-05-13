<script lang="ts">
  import { page } from '$app/state';
  import { Home, LayoutGrid, Trophy, Wallet, Menu } from 'lucide-svelte';

  const MOBILE_MENU_OPEN_EVENT = '247ibet:mobile-menu-open-request';

  const pathname = $derived(page.url.pathname);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/casino', label: 'Casino', icon: LayoutGrid },
    { href: '/sportsbook', label: 'Sports', icon: Trophy },
    { href: '/interac', label: 'Interac', icon: Wallet },
  ];

  function openMenu() {
    window.dispatchEvent(new CustomEvent(MOBILE_MENU_OPEN_EVENT));
  }
</script>

<nav
  class="fixed bottom-0 left-0 right-0 z-[60] block md:hidden safe-bottom"
  aria-label="Mobile bottom navigation"
>
  <div class="mx-auto mb-4 w-[calc(100%_-_1.5rem)] max-w-md">
    <div class="segmented-chrome flex h-16 items-center justify-around rounded-[24px] px-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {#each navItems as item}
        {@const Icon = item.icon}
        <a
          href={item.href}
          class="relative flex min-h-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black {pathname === item.href ? 'text-prestige-gold' : 'text-text-tertiary hover:text-white'}"
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          <Icon class="h-5 w-5" aria-hidden="true" />
          <span class="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          {#if pathname === item.href}
            <div class="absolute -bottom-1 h-1 w-1 rounded-full bg-prestige-gold shadow-[0_0_8px_rgba(212,148,58,0.8)]"></div>
          {/if}
        </a>
      {/each}
      
      <button
        type="button"
        onclick={openMenu}
        class="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 text-text-tertiary transition-all active:scale-95 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prestige-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-black"
        aria-label="Open site menu"
      >
        <Menu class="h-5 w-5" aria-hidden="true" />
        <span class="text-[10px] font-black uppercase tracking-widest">Menu</span>
      </button>
    </div>
  </div>
</nav>

<style>
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
</style>
