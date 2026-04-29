<script lang="ts">
  import IBetShowcase from '$lib/components/IBetShowcase.svelte';

  const CURRENT_YEAR = new Date().getFullYear();

  const markets = [
    { name: 'Game Winner (Moneyline)', desc: 'Bet on which team wins the game outright. Most straightforward NBA bet.' },
    { name: 'Point Spread', desc: 'The favourite must win by more than the spread; the underdog must lose by less. Example: Lakers -5.5 vs Warriors +5.5.' },
    { name: 'Total (Over/Under)', desc: 'Bet on whether the combined points scored goes over or under the posted line (e.g., Over/Under 228.5).' },
    { name: 'Player Props', desc: 'Points, rebounds, assists, 3-pointers made, steals — individual performance markets for any NBA player.' },
    { name: 'Same-Game Parlay', desc: 'Combine player props, spread, and moneyline from a single NBA game into one bet with multiplied payouts.' },
    { name: 'Series Winner / Futures', desc: 'Bet on conference champions, Finals winner, or division winners. Best value before the season starts or at playoff seeding time.' },
    { name: 'Live In-Play', desc: 'Bet after tip-off — odds update in real time based on score, momentum, and time remaining.' },
  ];

  const tips = [
    { tip: 'Check injury reports', detail: 'NBA injuries heavily impact line movement. Check official injury reports 1–2 hours before game time.' },
    { tip: 'Track back-to-back games', detail: 'Teams on the second night of a back-to-back show measurable performance drops — especially on the road.' },
    { tip: 'Monitor line movement', detail: 'Sharp line movement (opening line to current) signals sharp bettor activity. Following steam moves can be profitable.' },
    { tip: 'Home-court advantage quantified', detail: 'Home teams win approximately 58–60% of NBA games — factor this into spread and moneyline analysis.' },
    { tip: 'Player props and minutes', detail: 'Injured starters drive minutes to backups — spot opportunities in props markets before the sportsbook adjusts.' },
  ];

  const relatedLinks = [
    { href: '/sportsbook', label: 'Sports Betting Canada' },
    { href: '/nhl-betting-canada', label: 'NHL Betting' },
    { href: '/events/ufc-betting-canada', label: 'UFC Betting' },
    { href: '/tools/parlay-calculator', label: 'Parlay Calculator' },
    { href: '/guides/sports-betting-odds-explained', label: 'Odds Explained' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `NBA Betting Canada ${new Date().getFullYear()} — Best Markets, Odds & Tips`,
    description: 'Bet on the NBA in Canada at 247iBET — game lines, player props, parlays, and live in-play.',
    url: 'https://247ibet.ca/events/nba-betting-canada',
    datePublished: '2026-03-01',
    dateModified: '2026-03-30',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://247ibet.ca' },
      { '@type': 'ListItem', position: 2, name: 'NBA Betting', item: 'https://247ibet.ca/events/nba-betting-canada' },
    ],
  };
</script>

<svelte:head>
  <title>NBA Betting Canada {CURRENT_YEAR} — Best Markets, Odds &amp; Tips | 247iBET</title>
  <meta name="description" content="Bet on the NBA in Canada at 247iBET — game lines, player props, parlays, and live in-play. Fast Interac payouts. 19+." />
  <meta property="og:title" content="NBA Betting Canada {CURRENT_YEAR} — Best Markets, Odds & Tips | 247iBET" />
  <meta property="og:description" content="Bet on the NBA in Canada at 247iBET — game lines, player props, parlays, and live in-play. Fast Interac payouts. 19+." />
  <meta property="og:type" content="article" />
  <link rel="canonical" href="https://247ibet.ca/events/nba-betting-canada" />
  <script type="application/ld+json">{@html JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">{@html JSON.stringify(breadcrumbSchema)}</script>
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 max-w-5xl space-y-16">

  <header>
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-xs text-text-tertiary">
        <li><a href="/" class="hover:text-white">Home</a></li>
        <li>/</li>
        <li class="text-white">NBA Betting</li>
      </ol>
    </nav>
    <div class="text-xs font-mono text-text-tertiary mb-1">Last updated: 2026-03-01</div>
    <h1 class="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-3">NBA Betting Canada {CURRENT_YEAR}</h1>
    <p class="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
      Bet on NBA games at 247iBET — game lines, player props, same-game parlays, and live in-play. Fast Interac payouts across Canada.
    </p>
  </header>

  <div class="rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-xs text-text-tertiary">
    Affiliate disclosure · Reviewed by: 247iBET Sports Desk · Last updated: 2026-03-01
  </div>

  <IBetShowcase variant="hero" ctaText="Bet on the NBA Now" showFeatures={true} contextLabel="Live in-play · Player props · Same-game parlays" />

  <section aria-labelledby="markets-heading">
    <h2 id="markets-heading" class="text-2xl font-bold text-[#F1F5F9] mb-5">NBA Betting Markets at 247iBET</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each markets as m}
        <div class="navy-card p-4">
          <div class="font-semibold text-[#F1F5F9] text-sm mb-1">{m.name}</div>
          <p class="text-xs text-[#94A3B8] leading-relaxed">{m.desc}</p>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="tips-heading">
    <h2 id="tips-heading" class="text-2xl font-bold text-[#F1F5F9] mb-5">NBA Betting Tips for Canadian Bettors</h2>
    <div class="space-y-3">
      {#each tips as t}
        <div class="navy-card p-4 flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-[#D4943A] shrink-0 mt-2" aria-hidden="true"></div>
          <div>
            <span class="font-semibold text-[#F1F5F9] text-sm">{t.tip}: </span>
            <span class="text-xs text-[#94A3B8]">{t.detail}</span>
          </div>
        </div>
      {/each}
    </div>
    <p class="text-xs text-[#8492A6] mt-4">
      New to sports betting?
      <a href="/guides/sports-betting-odds-explained" class="text-[#4A9EBF] underline decoration-dotted">Read our odds guide →</a>
    </p>
  </section>

  <IBetShowcase variant="banner" ctaText="Bet on NBA" contextLabel="Kahnawake licensed · Interac deposits · Live in-play" />

  <nav aria-label="Related pages" class="border-t border-white/[0.08] pt-6">
    <p class="text-xs text-[#8492A6] mb-3 uppercase tracking-widest font-medium">Related</p>
    <div class="flex flex-wrap gap-3">
      {#each relatedLinks as l}
        <a href={l.href} class="text-xs text-[#4A9EBF] hover:underline bg-[#142038] px-3 py-1.5 rounded-md">{l.label}</a>
      {/each}
    </div>
  </nav>

  <div class="rounded-xl border border-white/10 bg-navy-card p-4 text-xs text-text-tertiary">
    Play responsibly. 19+ only. <a href="/responsible-gambling" class="text-slate-blue hover:underline">Responsible gambling resources</a>.
  </div>

</div>
