<script lang="ts">
  import { page } from '$app/state';
  import { Home, LayoutGrid, Trophy, ShieldCheck, Menu } from 'lucide-svelte';
  import { IBET_URLS } from '$lib/ibet-brand';

  const pathname = $derived(page.url.pathname);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/casino', label: 'Casino', icon: LayoutGrid },
    { href: '/sportsbook', label: 'Sports', icon: Trophy },
    { href: '/responsible-gambling', label: 'Safety', icon: ShieldCheck },
  ];

  // We'll use a custom event or a shared state to open the main navbar menu
  function openMenu() {
    const menuBtn = document.querySelector('button[aria-label="Open mobile menu"]') as HTMLButtonElement;
    menuBtn?.click();
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
          class="flex flex-1 flex-col items-center justify-center gap-1 transition-all active:scale-95 {pathname === item.href ? 'text-prestige-gold' : 'text-text-tertiary hover:text-white'}"
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          <Icon class="h-5 w-5" />
          <span class="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          {#if pathname === item.href}
            <div class="absolute -bottom-1 h-1 w-1 rounded-full bg-prestige-gold shadow-[0_0_8px_rgba(212,148,58,0.8)]"></div>
          {/if}
        </a>
      {/each}
      
      <button
        type="button"
        onclick={openMenu}
        class="flex flex-1 flex-col items-center justify-center gap-1 text-text-tertiary transition-all active:scale-95 hover:text-white"
        aria-label="Open navigation menu"
      >
        <Menu class="h-5 w-5" />
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
