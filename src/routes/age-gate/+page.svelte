<script lang="ts">
  import { ShieldAlert, ExternalLink } from 'lucide-svelte';
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>Age Verification Required | 247iBET</title>
</svelte:head>

<div class="min-h-screen bg-navy-black flex items-center justify-center p-4">
  <div class="relative w-full max-w-sm navy-card rounded-2xl border border-navy-border p-7 text-center shadow-2xl md:p-9">
    <div class="flex justify-center mb-6">
      <div class="inline-flex items-center gap-2 rounded-full border border-error/30 bg-error/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-error">
        <ShieldAlert class="w-3.5 h-3.5" aria-hidden="true" />
        Age Verification Required
      </div>
    </div>

    <div class="mx-auto mb-5 w-20 h-20 rounded-full bg-navy-raised border-2 border-prestige-gold flex items-center justify-center animate-[pulse-19_3s_ease-in-out_infinite]">
      <span class="text-3xl font-black text-prestige-gold font-sans">
        19+
      </span>
    </div>

    <h1 class="text-xl md:text-2xl font-black text-white mb-3">Adults Only</h1>
    <p class="text-base leading-relaxed text-text-body mb-6">
      This website contains content related to online gambling and is intended strictly for individuals who are <strong class="text-white">19 years of age or older</strong>. By entering, you confirm you meet the legal gambling age in your province.
    </p>

    <div class="mb-6 p-3 rounded-lg bg-white/5 border border-white/10 text-xs leading-6 text-text-body">
      Gambling can be addictive. Play responsibly.
      <a href="https://www.responsiblegambling.org" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-0.5 rounded-sm font-bold text-slate-blue underline underline-offset-2 transition-colors hover:text-slate-blue/80">
        Get help <ExternalLink class="w-2.5 h-2.5" />
      </a>
    </div>

    <form method="POST" action="?next={encodeURIComponent(page.url.searchParams.get('next') || '/')}">
      <div class="flex flex-col sm:flex-row gap-3">
        <button type="submit" name="action" value="accept" class="page-cta-primary flex-1 min-w-[120px]">
          I Am 19+
        </button>
        <button type="submit" name="action" value="decline" class="page-cta-secondary flex-1 min-w-[120px]">
          Exit
        </button>
      </div>
    </form>
  </div>
</div>
