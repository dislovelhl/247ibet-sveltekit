<script lang="ts">
  import SportsbookLandingPage from '$lib/components/templates/SportsbookLandingPage.svelte';
  import { pages } from '$lib/content/pages';

  const page = pages['best-betting-apps-canada'];
</script>

<SportsbookLandingPage {page}>
  <div class="navy-card rounded-xl p-5 sm:p-6 md:p-8">
    <h2 class="mb-2 font-display text-2xl font-semibold sm:text-3xl">
      App vs Mobile Web: Which is Better?
    </h2>
    <p class="mb-5 max-w-2xl text-sm leading-relaxed text-text-tertiary">
      Both paths win on different ground — here's where each one outperforms.
    </p>
    <div class="grid grid-cols-1 gap-5 text-sm leading-relaxed text-text-body md:grid-cols-2">
      <div class="rounded-lg border border-white/5 bg-navy-raised p-4">
        <div class="mb-3 font-bold text-white">Native App (iOS / Android)</div>
        <ul class="space-y-2">
          {#each ['Faster load times (cached assets)', 'Push notifications for odds changes', 'Secure local login', 'Better live-betting latency', 'Home screen shortcut'] as p}
            <li class="flex items-start gap-2">
              <span class="mt-0.5 text-green-400" aria-hidden="true">✓</span><span>{p}</span>
            </li>
          {/each}
        </ul>
      </div>
      <div class="rounded-lg border border-white/5 bg-navy-raised p-4">
        <div class="mb-3 font-bold text-white">Mobile Web (PWA / Browser)</div>
        <ul class="space-y-2">
          {#each ['No app store download required', 'Always latest version', 'Works on any device', 'Some operators only offer mobile web', 'Can add to home screen'] as p}
            <li class="flex items-start gap-2">
              <span class="mt-0.5 text-prestige-gold" aria-hidden="true">◉</span><span>{p}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <p class="mt-4 text-xs leading-relaxed text-text-tertiary">
      For live in-play betting, native apps consistently outperform mobile web on latency and
      reliability — for casual betting, mobile web is fully sufficient.
    </p>
  </div>
</SportsbookLandingPage>
