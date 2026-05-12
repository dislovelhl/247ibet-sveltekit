<script lang="ts">
  // Protected admin route — requires valid ADMIN_TOKEN session
</script>

<svelte:head>
  <title>Signup Lookup | 247iBET Admin</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8  pb-20 max-w-5xl">
  <h1 class="font-display text-3xl font-normal text-[#F1F5F9] mb-4">Signup Lookup</h1>
  <div class="navy-card rounded-2xl p-8 text-center">
    <p class="text-text-tertiary text-sm">
      Protected admin tool. Requires active session verified via <code class="text-prestige-gold"
        >+page.server.ts</code
      > session check.
    </p>
  </div>
</div>
