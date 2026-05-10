<script lang="ts">
  import { reveal } from '$lib/animations';

  interface Step {
    title: string;
    body: string;
    status: string;
  }

  let { steps } = $props<{ steps: Step[] }>();
</script>

<section
  id="interac-flow"
  use:reveal
  class="reveal-fade-up glow-gold grid gap-5 rounded-xl border border-prestige-gold/30 bg-navy-card/80 p-5 sm:p-6 lg:grid-cols-[0.32fr_0.68fr]"
>
  <div>
    <h2 class="text-4xl font-black md:text-5xl">Interac deposits and withdrawals</h2>
    <p class="mt-3 text-sm leading-6 text-text-body">
      We process deposits instantly. Withdrawal speed depends on approval, identity verification, 
      bonus terms, and bank processing times.
    </p>
    <a href="/deposit" class="page-cta-primary-sm mt-5 inline-flex btn-magnetic">Compare Payouts</a>
  </div>
  <div
    use:reveal
    data-reveal-stagger="true"
    class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
  >
    {#each steps as step, index}
      <article use:reveal class="reveal-fade-up rounded-xl border border-white/10 bg-black/20 p-5 card-hover-lift">
        <div
          class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-prestige-gold text-sm font-black text-navy-black"
        >
          {index + 1}
        </div>
        <h3 class="font-black text-prestige-gold">{step.title}</h3>
        <p class="mt-3 text-sm leading-6 text-text-body sm:min-h-[72px]">{step.body}</p>
        <span
          class="mt-4 inline-flex rounded-full bg-success/10 px-3 py-1 text-xs font-black text-success"
          >{step.status}</span
        >
      </article>
    {/each}
  </div>
</section>
