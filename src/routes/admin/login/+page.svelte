<script lang="ts">
  import { enhance } from '$app/forms';
  import { ShieldCheck, Lock, ArrowRight, AlertCircle } from 'lucide-svelte';

  let { form } = $props();
</script>

<svelte:head>
  <title>Admin Login | 247iBET</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
  <div class="w-full max-w-md">
    <div class="text-center mb-8">
      <div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-prestige-gold/10 text-prestige-gold mb-4 ring-1 ring-prestige-gold/20">
        <ShieldCheck class="h-8 w-8" />
      </div>
      <h1 class="font-display text-3xl font-black text-white mb-2">Admin Access</h1>
      <p class="text-text-tertiary text-sm">Protected internal surface. Please enter your authorization token.</p>
    </div>

    <div class="navy-card specular-edge rounded-3xl p-8 shadow-2xl relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-prestige-gold/5 to-transparent pointer-events-none"></div>

      <form method="POST" use:enhance class="relative z-10 space-y-6">
        <div>
          <label for="token" class="block text-xs font-black uppercase tracking-[0.14em] text-prestige-gold mb-2">
            Authorization Token
          </label>
          <div class="relative group">
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-prestige-gold transition-colors">
              <Lock class="h-4 w-4" />
            </div>
            <input
              type="password"
              id="token"
              name="token"
              required
              autocomplete="current-password"
              placeholder="••••••••••••••••"
              class="w-full h-12 bg-navy-black/40 border border-white/10 rounded-xl pl-11 pr-4 text-sm text-white focus:outline-none focus:border-prestige-gold/50 focus:ring-2 focus:ring-prestige-gold/20 transition-all placeholder:text-white/10"
            />
          </div>
          {#if form?.error}
            <div class="mt-4 flex items-center gap-2 text-xs font-bold text-error bg-error/5 p-3 rounded-lg border border-error/20 animate-fade-in">
              <AlertCircle class="h-3.5 w-3.5" />
              {form.error}
            </div>
          {/if}
        </div>

        <button
          type="submit"
          class="page-cta-primary w-full justify-center gap-2 group shadow-xl"
        >
          Verify Identity
          <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>

    <div class="mt-8 text-center">
      <a href="/" class="text-xs font-bold text-text-tertiary hover:text-white transition-colors flex items-center justify-center gap-1">
        Back to Public Site
      </a>
    </div>
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
