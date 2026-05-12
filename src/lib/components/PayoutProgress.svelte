<script lang="ts">
  import { Zap, ShieldCheck, BadgeCheck, CheckCircle2 } from 'lucide-svelte';
  import GlintCard from './GlintCard.svelte';

  let { activeStep = 1 } = $props<{ activeStep?: number }>();

  const steps = [
    { label: 'Approval', icon: ShieldCheck, detail: 'Operator review' },
    { label: 'Processing', icon: Zap, detail: 'Network routing' },
    { label: 'Funds Sent', icon: BadgeCheck, detail: 'In your account' },
  ];
</script>

<GlintCard class="luxury-border relative overflow-hidden rounded-2xl bg-navy-card/50 p-6 backdrop-blur-sm" useReveal={true}>
  <div class="mb-8 flex items-center justify-between">
    <div class="flex flex-col">
      <h3 class="text-sm font-bold uppercase tracking-[0.14em] text-prestige-gold">
        Interac Payout Speed
      </h3>
      <span class="font-luxury text-xs text-prestige-gold-400 opacity-70">Canadian Trusted Network</span>
    </div>
    <span class="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success border border-success/20">
      LIVE NETWORK STATUS
    </span>
  </div>

  <div class="relative flex justify-between">
    <!-- Connecting Line -->
    <div class="absolute top-5 left-0 h-0.5 w-full bg-white/5"></div>
    <div 
      class="absolute top-5 left-0 h-0.5 bg-prestige-gold transition-all duration-1000 ease-out"
      style="width: {((activeStep - 1) / (steps.length - 1)) * 100}%"
    ></div>

    {#each steps as step, i}
      <div class="relative z-10 flex flex-col items-center gap-3">
        <div 
          class="flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500
          {i + 1 < activeStep ? 'bg-prestige-gold border-prestige-gold text-navy-black shadow-gold-glow' : 
           i + 1 === activeStep ? 'bg-navy-raised border-prestige-gold text-prestige-gold shadow-gold-glow animate-pulse' : 
           'bg-navy-black border-white/10 text-text-tertiary'}"
        >
          {#if i + 1 < activeStep}
            <CheckCircle2 size={20} />
          {:else}
            <step.icon size={20} />
          {/if}
        </div>
        <div class="text-center">
          <p class="text-xs font-bold {i + 1 <= activeStep ? 'text-white' : 'text-text-tertiary'}">
            {step.label}
          </p>
          <p class="text-xs text-text-tertiary">
            {step.detail}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-8 rounded-lg bg-navy-black/40 p-3 border border-white/5">
    <p class="text-xs leading-relaxed text-text-body">
      <span class="font-bold text-prestige-gold">Interac timing note:</span> 247iBET payout guidance treats withdrawal timing as operator-dependent. Approval reviews, KYC, and bank processing can all affect when funds arrive.
    </p>
  </div>
</GlintCard>
