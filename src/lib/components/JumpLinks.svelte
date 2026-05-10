<script lang="ts">
  interface JumpLink {
    href: string;
    label: string;
  }

  let { links } = $props<{ links: JumpLink[] }>();
</script>

<nav
  class="mx-auto max-w-[1720px] px-4 pt-1 sm:px-6 lg:px-10 xl:px-16"
  aria-label="Jump links"
>
  <div class="flex gap-2 overflow-x-auto rounded-2xl border border-white/5 bg-navy-card/80 p-2 shadow-2xl snap-x snap-mandatory scroll-smooth hide-scrollbar">
    {#each links as link}
      <a
        href={link.href}
        class="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-text-body transition-colors hover:border-prestige-gold/30 hover:bg-prestige-gold/10 hover:text-prestige-gold snap-start"
      >
        {link.label}
      </a>
    {/each}
  </div>
</nav>
