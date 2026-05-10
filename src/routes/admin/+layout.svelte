<script lang="ts">
  import { page } from '$app/state';
  import { ShieldCheck, LogOut, LayoutDashboard, Zap, Search } from 'lucide-svelte';
  import { SITE } from '$lib/site';

  let { children } = $props();

  const links = [
    { href: '/admin/affiliate-dashboard', label: 'Affiliate', icon: LayoutDashboard },
    { href: '/admin/optimization', label: 'Optimization', icon: Zap },
    { href: '/admin/signup-lookup', label: 'Signups', icon: Search },
  ];

  const pathname = $derived(page.url.pathname);
  const isLoginPage = $derived(pathname === '/admin/login');
</script>

{#if isLoginPage}
  <main>
    {@render children()}
  </main>
{:else}
  <div class="min-h-dvh bg-navy-black text-white">
    <!-- Admin Header -->
    <header class="border-b border-white/5 bg-navy-black/60 backdrop-blur-md sticky top-0 z-50">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="/admin/affiliate-dashboard" class="flex items-center gap-2 group">
            <div class="h-8 w-8 rounded-lg bg-prestige-gold/10 flex items-center justify-center text-prestige-gold ring-1 ring-prestige-gold/20 group-hover:bg-prestige-gold group-hover:text-navy-black transition-all">
              <ShieldCheck class="h-5 w-5" />
            </div>
            <span class="font-display font-black text-lg tracking-tight">{SITE.name} <span class="text-prestige-gold font-normal opacity-80">Admin</span></span>
          </a>

          <nav class="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {#each links as link}
              {@const Icon = link.icon}
              <a
                href={link.href}
                class="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold transition-all {pathname === link.href ? 'bg-prestige-gold/15 text-prestige-gold' : 'text-text-tertiary hover:text-white'}"
              >
                <Icon class="h-3.5 w-3.5" />
                {link.label}
              </a>
            {/each}
          </nav>
        </div>

        <div class="flex items-center gap-3">
          <form method="POST" action="/admin/login?/logout">
            <button
              type="submit"
              class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-text-tertiary hover:text-white hover:bg-white/5 transition-all"
            >
              <LogOut class="h-3.5 w-3.5" />
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </header>

    <!-- Mobile Nav (Secondary) -->
    <nav class="md:hidden border-b border-white/5 bg-navy-card/30 flex items-center justify-around p-2 overflow-x-auto">
      {#each links as link}
        {@const Icon = link.icon}
        <a
          href={link.href}
          class="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all {pathname === link.href ? 'text-prestige-gold' : 'text-text-tertiary'}"
        >
          <Icon class="h-4 w-4 mb-0.5" />
          {link.label}
        </a>
      {/each}
    </nav>

    <main class="container mx-auto px-4 py-8">
      {@render children()}
    </main>
  </div>
{/if}
