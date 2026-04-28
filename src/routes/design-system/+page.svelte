<script lang="ts">
  // Design system showcase — static, no interactive state needed
  const sections = [
    ['01', 'Surfaces & palette',     'palette'],
    ['02', 'Typography',             'type'],
    ['03', 'Cards',                  'cards'],
    ['04', 'Buttons',                'buttons'],
    ['05', 'Status badges',          'status'],
    ['06', 'Money & odds type',      'money'],
    ['07', 'Odds buttons',           'odds'],
    ['08', 'Bet slip',               'slip'],
    ['09', 'Jackpot ticker',         'jackpot'],
    ['10', 'Live indicators',        'live'],
    ['11', 'Segmented & tabs',       'segmented'],
    ['12', 'Filter chips',           'chips'],
    ['13', 'Form controls',          'forms'],
    ['14', 'Data table',             'table'],
    ['15', 'Skeletons',              'skeleton'],
    ['16', 'Alerts',                 'alerts'],
    ['17', 'Empty state',            'empty'],
    ['18', 'Tooltip & info',         'tooltip'],
    ['19', 'Progress & steps',       'progress'],
  ] as const;

  const palette = {
    surfaces: [
      { name: 'navy-black',   hex: '#070C18', use: 'page background' },
      { name: 'navy-card',    hex: '#0D1629', use: 'card surface' },
      { name: 'navy-raised',  hex: '#142038', use: 'nav · modals · inputs' },
    ],
    accents: [
      { name: 'prestige-gold',       hex: '#D4943A', use: 'CTA · AGCO · key data' },
      { name: 'prestige-gold-light', hex: '#E8AC52', use: 'CTA hover' },
      { name: 'slate-blue',          hex: '#4A9EBF', use: 'links · info' },
    ],
    semantic: [
      { name: 'success', hex: '#22C55E', use: 'verified · live' },
      { name: 'warning', hex: '#F59E0B', use: 'pre-launch · approaching' },
      { name: 'error',   hex: '#EF4444', use: 'compliance · age gate' },
    ],
    igaming: [
      { name: 'odds-up',     hex: '#22C55E', use: 'odds shortened' },
      { name: 'odds-down',   hex: '#EF4444', use: 'odds drifted' },
      { name: 'odds-frozen', hex: '#94A3B8', use: 'market suspended' },
      { name: 'boost',       hex: '#B86FD9', use: 'boosted price' },
      { name: 'jackpot',     hex: '#E8AC52', use: 'jackpot ticker' },
      { name: 'win-flash',   hex: '#FFD700', use: 'win moment ≤ 800ms' },
    ],
  };

  const colophon = [
    ['Direction',   'Prestige editorial'],
    ['Mode',        'Dark only'],
    ['Display',     'Be Vietnam Pro · 300/400'],
    ['Body',        'Plus Jakarta Sans · 600/700'],
    ['Data',        'JetBrains Mono · tnum'],
    ['Last review', 'Apr 2026'],
  ];

  const cards = [
    ['default',     'navy-card',                        'Standard content card.'],
    ['flat',        'navy-card navy-card--flat',          'Sits inside another card.'],
    ['elevated',    'navy-card navy-card--elevated',      'Hero · BLUF answer block.'],
    ['interactive', 'navy-card navy-card--interactive',   'Clickable; gold border on hover.'],
  ];

  const betLegs = [
    ['Toronto Maple Leafs ML', '−145'],
    ['Auston Matthews · Anytime goalscorer', '+180'],
    ['Game total · Over 6.5', '+105'],
  ];

  const quickStakes = ['$10', '$25', '$50', '$100'];

  const tableRows = [
    ['Operator A', 'ON · Licensed', 20, '47 min',  '9.4'],
    ['Operator B', 'ON · Licensed', 10, '52 min',  '9.2'],
    ['Operator C', 'ON · Licensed', 10, '1h 12m',  '8.8'],
    ['Operator D', 'ON · Licensed', 20, '1h 04m',  '8.7'],
  ];

  const slipAnatomy = [
    ['Header',      '`Parlay · N legs` mono kicker; combined American odds top-right.'],
    ['Legs list',   '`navy-card--flat --compact` rows; mono price always right-aligned.'],
    ['Odds-shift',  '`alert--warning` fires inline whenever a leg price moves after add.'],
    ['Stake input', '`ds-input--money` (Mono 700, tabular). Quick-stake `chip` row underneath.'],
    ['Totals',      'Top hairline divider; mono labels left, gold to-win, white return.'],
    ['Footer copy', '19+, province, AGCO line — 11px text-tertiary, never decorative.'],
  ];

  function renderCode(v: string) {
    return v.replace(/`([^`]+)`/g, '<code class="font-mono text-[12px] text-text-primary">$1</code>');
  }
</script>

<svelte:head>
  <title>247iBET Design System — Prestige Navy</title>
  <meta name="description" content="Living styleguide for the 247iBET Prestige Navy aesthetic. Tokens, components, and iGaming-native primitives built for AGCO-licensed Canadian betting." />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-24">

  <!-- Frontispiece -->
  <header class="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-[1fr_auto] lg:items-end">
    <div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="status-badge status-badge--licensed">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          </svg>
          AGCO Regulated
        </span>
        <span class="status-badge status-badge--live">
          <span class="live-dot"></span> Ontario · Live
        </span>
        <span class="status-badge status-badge--soon">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          Alberta · July 2026
        </span>
      </div>

      <h1 class="mt-7 font-display text-[clamp(3rem,7vw,5.25rem)] font-light leading-[0.95] tracking-[-0.04em] text-text-primary">
        The Prestige Navy
        <br class="hidden md:block" />
        design system.
      </h1>
      <p class="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-text-body">
        A regulated iGaming aesthetic — calm, layered, fact-first. Authoritative
        editorial typography over a single navy palette, with amber-gold reserved
        for conversion moments and AGCO trust marks. Dark-mode only. No glow,
        no glass on content surfaces, no neon.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-3">
        <a href="#palette" class="btn-gold">Tour the system</a>
        <a href="#slip"    class="btn-ghost">See the bet slip</a>
      </div>
    </div>

    <!-- Editorial colophon -->
    <aside
      class="navy-card navy-card--elevated rounded-xl p-6 text-[12px] lg:w-[280px]"
      aria-label="Colophon"
    >
      <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-prestige-gold">
        Colophon · v1
      </div>
      <dl class="mt-4 space-y-3">
        {#each colophon as [k, v]}
          <div class="flex items-baseline justify-between gap-3 border-b border-white/5 pb-2 last:border-0 last:pb-0">
            <dt class="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">{k}</dt>
            <dd class="text-right font-mono text-[11px] text-text-primary">{v}</dd>
          </div>
        {/each}
      </dl>
    </aside>
  </header>

  <!-- Body grid: TOC + content -->
  <div class="grid gap-14 xl:grid-cols-[200px_1fr] xl:gap-16">
    <nav aria-label="Sections" class="hidden xl:block">
      <div class="sticky top-28">
        <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-text-tertiary">
          Index
        </div>
        <ol class="mt-4 space-y-1.5">
          {#each sections as [no, title, id]}
            <li>
              <a
                href="#{id}"
                aria-label="Section {no} — {title}"
                class="group flex items-baseline gap-3 py-1 text-[12.5px] text-text-body transition-colors hover:text-prestige-gold"
              >
                <span aria-hidden="true" class="font-mono text-[10px] tracking-[0.18em] text-text-tertiary group-hover:text-prestige-gold">
                  {no}
                </span>
                <span aria-hidden="true">{title}</span>
              </a>
            </li>
          {/each}
        </ol>
      </div>
    </nav>

    <main class="space-y-24">

      <!-- 01 — Palette -->
      <section id="palette">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">01 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Surfaces &amp; palette</h2>
          <p class="mt-3 max-w-2xl text-text-body">Layered navy carries depth; gold appears only at conversion. iGaming semantics extend the system without breaking restraint.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-10 md:grid-cols-2">
          <!-- Surfaces -->
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Surfaces</div>
            <div class="space-y-4">
              {#each palette.surfaces as s}
                <div class="flex items-center gap-4">
                  <span aria-hidden="true" class="block h-12 w-12 flex-shrink-0 rounded-md border border-white/10" style="background: {s.hex}"></span>
                  <div class="min-w-0">
                    <div class="font-mono text-[12px] tracking-tight text-text-primary">{s.name}</div>
                    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">{s.hex}</div>
                    <div class="text-[12px] text-text-body">{s.use}</div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          <!-- Accents -->
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Accents</div>
            <div class="space-y-4">
              {#each palette.accents as s}
                <div class="flex items-center gap-4">
                  <span aria-hidden="true" class="block h-12 w-12 flex-shrink-0 rounded-md border border-white/10" style="background: {s.hex}"></span>
                  <div class="min-w-0">
                    <div class="font-mono text-[12px] tracking-tight text-text-primary">{s.name}</div>
                    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">{s.hex}</div>
                    <div class="text-[12px] text-text-body">{s.use}</div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          <!-- Semantic -->
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Semantic</div>
            <div class="space-y-4">
              {#each palette.semantic as s}
                <div class="flex items-center gap-4">
                  <span aria-hidden="true" class="block h-12 w-12 flex-shrink-0 rounded-md border border-white/10" style="background: {s.hex}"></span>
                  <div class="min-w-0">
                    <div class="font-mono text-[12px] tracking-tight text-text-primary">{s.name}</div>
                    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">{s.hex}</div>
                    <div class="text-[12px] text-text-body">{s.use}</div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
          <!-- iGaming -->
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">iGaming</div>
            <div class="space-y-4">
              {#each palette.igaming as s}
                <div class="flex items-center gap-4">
                  <span aria-hidden="true" class="block h-12 w-12 flex-shrink-0 rounded-md border border-white/10" style="background: {s.hex}"></span>
                  <div class="min-w-0">
                    <div class="font-mono text-[12px] tracking-tight text-text-primary">{s.name}</div>
                    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">{s.hex}</div>
                    <div class="text-[12px] text-text-body">{s.use}</div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>

      <!-- 02 — Typography -->
      <section id="type">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">02 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Typography</h2>
          <p class="mt-3 max-w-2xl text-text-body">Be Vietnam Pro for display &amp; H1, Plus Jakarta Sans for everything else, JetBrains Mono with tabular numerals for data. Never mix families inside a heading level.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="space-y-6">
          <div class="navy-card navy-card--flat p-8">
            <div class="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">Display · Be Vietnam Pro 300</div>
            <p class="mt-3 font-display text-[clamp(2.5rem,5.5vw,4rem)] font-light leading-[0.98] tracking-[-0.045em] text-text-primary">
              Online casino &amp; sportsbook — fast Interac payouts.
            </p>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">H1 · Be Vietnam Pro 400 · 36px</div>
              <div role="img" aria-label="Heading 1 type specimen" class="font-display text-[36px] font-normal leading-[1.05] tracking-[-0.02em] text-text-primary">
                Best NHL betting sites in Ontario
              </div>
            </div>
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">H2 · Plus Jakarta 700 · 30px</div>
              <div role="img" aria-label="Heading 2 type specimen" class="font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">
                Verified payout times
              </div>
            </div>
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">H3 · Plus Jakarta 600 · 24px</div>
              <div role="img" aria-label="Heading 3 type specimen" class="font-sans text-[24px] font-semibold leading-[1.2] text-text-primary">
                Same-game parlays
              </div>
            </div>
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">H4 · Plus Jakarta 600 · 20px</div>
              <div role="img" aria-label="Heading 4 type specimen" class="font-sans text-[20px] font-semibold leading-[1.3] text-text-primary">
                How we score operators
              </div>
            </div>
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Body · 16/1.72</div>
              <p class="text-text-body">
                Play 500+ casino games and bet on your favourite sports. Fast Interac
                deposits and withdrawals, live dealer tables, and same-game parlays —
                built for Canadian players.
              </p>
            </div>
            <div class="navy-card navy-card--flat p-6">
              <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Caption / Kicker · Mono · tracked</div>
              <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-prestige-gold">
                AGCO Regulated · Last reviewed Apr 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 03 — Cards -->
      <section id="cards">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">03 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Card elevation</h2>
          <p class="mt-3 max-w-2xl text-text-body">Default solid navy is the right answer 90% of the time. Variants only when the role demands it.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {#each cards as [name, cls, copy]}
            <div class="{cls} p-6">
              <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-prestige-gold">{name}</div>
              <div class="mt-3 text-[15px] font-semibold text-text-primary">Operator card</div>
              <p class="mt-2 text-[13.5px] leading-relaxed text-text-body">{copy}</p>
            </div>
          {/each}
        </div>
      </section>

      <!-- 04 — Buttons -->
      <section id="buttons">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">04 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Buttons</h2>
          <p class="mt-3 max-w-2xl text-text-body">Gold for conversion only. Ghost for everything else. Sm variants for dense surfaces.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Primary · btn-gold</div>
            <div class="flex flex-wrap items-center gap-4">
              <button type="button" class="btn-gold">Play now</button>
              <button type="button" class="btn-gold btn-gold--sm">Deposit</button>
            </div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Secondary · btn-ghost</div>
            <div class="flex flex-wrap items-center gap-4">
              <button type="button" class="btn-ghost">Compare operators</button>
              <button type="button" class="btn-ghost btn-ghost--sm">View terms</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 05 — Status badges -->
      <section id="status">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">05 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Status badges</h2>
          <p class="mt-3 max-w-2xl text-text-body">Mono caps pills with semantic borders + 6%-alpha fills. Province readiness, AGCO licensure, and market state at a glance.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card navy-card--flat p-6">
          <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Variants</div>
          <div class="flex flex-wrap items-center gap-3">
            <span class="status-badge status-badge--live">
              <span class="live-dot"></span> Ontario · Live
            </span>
            <span class="status-badge status-badge--soon">Alberta · July 2026</span>
            <span class="status-badge status-badge--blocked">Québec · Blocked</span>
            <span class="status-badge status-badge--licensed">AGCO Regulated</span>
          </div>
        </div>
      </section>

      <!-- 06 — Money & odds typography -->
      <section id="money">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">06 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Money &amp; odds typography</h2>
          <p class="mt-3 max-w-2xl text-text-body">Numerals are tabular by default. Display weight 300 carries win amounts; mono 700 carries every odds price.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Win amount · money-xl</div>
            <div class="text-text-tertiary">
              <span class="font-mono text-[14px] align-top">CA$</span>
              <span class="money-xl text-text-primary"> 4,217</span>
              <span class="money-xl text-text-tertiary text-[0.5em] align-top">.84</span>
            </div>
            <div class="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-success">
              Verified · Paid in 47 min
            </div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Stake input · money-lg</div>
            <div class="text-text-primary">
              <span class="font-mono text-text-tertiary">$</span>
              <span class="money-lg">25.00</span>
            </div>
            <div class="mt-2 text-[12px] text-text-body">to win <span class="font-mono text-prestige-gold">$56.25</span></div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">American · Decimal · Fractional</div>
            <div class="flex flex-wrap items-baseline gap-6">
              <span class="odds-lg text-prestige-gold">−145</span>
              <span class="odds-lg text-prestige-gold">+225</span>
              <span class="odds-md text-prestige-gold-light">2.25</span>
              <span class="odds-sm text-slate-blue">5/4</span>
            </div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Odds shift</div>
            <div class="flex flex-wrap items-center gap-4 text-[13px]">
              <span class="odds-shift odds-shift--up">▲ −165 → −145</span>
              <span class="odds-shift odds-shift--down">▼ +110 → +95</span>
              <span class="odds-shift odds-shift--frozen">SUSPENDED</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 07 — Odds buttons -->
      <section id="odds">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">07 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Odds buttons</h2>
          <p class="mt-3 max-w-2xl text-text-body">The atomic unit of a sportsbook. Same row, four states — default, selected, boosted, frozen.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card p-6">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <div class="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">NHL · Tonight 19:00 ET</div>
              <div class="mt-1 text-[15px] font-semibold text-text-primary">Toronto Maple Leafs vs Montréal Canadiens</div>
            </div>
            <span class="status-badge status-badge--live">
              <span class="live-dot"></span> 1st period
            </span>
          </div>
          <div class="grid gap-3 md:grid-cols-4">
            <button type="button" class="odds-btn">
              <span class="odds-btn__label">Toronto · ML</span>
              <span class="odds-btn__price">−145</span>
            </button>
            <button type="button" class="odds-btn odds-btn--selected">
              <span class="odds-btn__label">Montréal · ML</span>
              <span class="odds-btn__price">+125</span>
            </button>
            <button type="button" class="odds-btn odds-btn--boosted">
              <span class="odds-btn__label">A. Matthews · Anytime</span>
              <span class="odds-btn__price">+180</span>
            </button>
            <button type="button" class="odds-btn odds-btn--frozen" aria-disabled="true">
              <span class="odds-btn__label">1st Period · Over 1.5</span>
              <span class="odds-btn__price">−110</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 08 — Bet slip -->
      <section id="slip">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">08 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Bet slip</h2>
          <p class="mt-3 max-w-2xl text-text-body">Sticky right-rail surface with mono stake input, combined American odds, to-win, and the inline odds-shift warning when a leg has moved.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-8 lg:grid-cols-[1fr_minmax(320px,420px)] lg:gap-10 lg:items-start">
          <!-- Anatomy annotation -->
          <aside class="navy-card navy-card--flat p-6 lg:sticky lg:top-28">
            <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">
              Anatomy
            </div>
            <ol class="mt-4 space-y-3 text-[13px] leading-relaxed text-text-body">
              {#each slipAnatomy as [k, v]}
                <li class="grid grid-cols-[88px_1fr] gap-3">
                  <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-prestige-gold">{k}</span>
                  <span>{@html renderCode(v)}</span>
                </li>
              {/each}
            </ol>
          </aside>

          <!-- The bet slip itself -->
          <div class="bet-slip p-6">
            <div class="flex items-center justify-between">
              <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-prestige-gold">
                Parlay · 3 legs
              </div>
              <span class="font-mono text-[11px] text-text-tertiary">+486</span>
            </div>

            <ul class="mt-4 space-y-3">
              {#each betLegs as [leg, price]}
                <li class="navy-card navy-card--flat navy-card--compact flex items-center justify-between gap-3 p-3">
                  <span class="text-[13px] text-text-primary">{leg}</span>
                  <span class="font-mono text-[13px] font-bold text-prestige-gold">{price}</span>
                </li>
              {/each}
            </ul>

            <div class="alert alert--warning mt-5">
              <span class="alert__icon">!</span>
              <div>
                <div class="alert__title">Odds shifted</div>
                <div class="alert__body">Toronto ML moved <span class="odds-shift odds-shift--down">▼ −145 → −165</span> since you added it.</div>
              </div>
            </div>

            <div class="mt-5">
              <label class="field-label" for="ds-stake">Stake</label>
              <div class="flex items-center gap-2">
                <span class="font-mono text-[14px] text-text-tertiary">$</span>
                <input id="ds-stake" type="text" inputmode="decimal" value="25.00" class="ds-input ds-input--money" />
              </div>
              <div class="mt-2 flex flex-wrap gap-2">
                {#each quickStakes as c}
                  <button type="button" class="chip">{c}</button>
                {/each}
              </div>
            </div>

            <dl class="mt-5 space-y-1.5 border-t border-white/5 pt-4 font-mono text-[12px]">
              <div class="flex justify-between"><dt class="text-text-body">To win</dt><dd class="text-prestige-gold">$121.50</dd></div>
              <div class="flex justify-between"><dt class="text-text-body">Total return</dt><dd class="text-text-primary">$146.50</dd></div>
            </dl>

            <button type="button" class="btn-gold mt-5 w-full">Place bet</button>
            <p class="mt-3 text-center text-[11px] leading-relaxed text-text-tertiary">
              19+ · ON · AGCO regulated. Play within your limits.
            </p>
          </div>
        </div>
      </section>

      <!-- 09 — Jackpot ticker -->
      <section id="jackpot">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">09 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Jackpot ticker</h2>
          <p class="mt-3 max-w-2xl text-text-body">The only place gold may glow. Always paired with a context line so it reads as data, not promo.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="jackpot-ticker p-10 text-center">
          <div class="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-prestige-gold">
            Mega Moolah · Pooled jackpot
          </div>
          <div class="mt-4">
            <span class="jackpot-ticker__amount">CA$ 8,427,193</span>
            <span class="jackpot-ticker__amount text-[0.45em] align-top">.84</span>
          </div>
          <div class="mt-3 font-mono text-[12px] text-text-body">
            Last hit <span class="text-text-primary">12 days ago</span> · seed CA$1,000,000
          </div>
        </div>
      </section>

      <!-- 10 — Live indicators -->
      <section id="live">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">10 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Live indicators</h2>
          <p class="mt-3 max-w-2xl text-text-body">A 7px green dot with a 1.8s pulsing ring. Pair with a tag for context; never decorative.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card navy-card--flat p-6">
          <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Live tag · pulsing dot · odds shift</div>
          <div class="flex flex-wrap items-center gap-6">
            <span class="live-tag"><span class="live-dot"></span> LIVE NOW</span>
            <span class="text-[13px] text-text-body">23 markets open</span>
            <span class="odds-shift odds-shift--up">▲ +110 → +125</span>
            <span class="odds-shift odds-shift--down">▼ −145 → −165</span>
            <span class="odds-shift odds-shift--frozen">SUSPENDED</span>
          </div>
        </div>
      </section>

      <!-- 11 — Segmented & tabs -->
      <section id="segmented">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">11 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Segmented control &amp; tabs</h2>
          <p class="mt-3 max-w-2xl text-text-body">Pill segmented for ≤4 mutually-exclusive top-level switches. Underline tabs inside surfaces for content sections.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Segmented · Sportsbook ↔ Casino ↔ Live</div>
            <div class="segmented" role="tablist">
              <button type="button" class="segmented__option segmented__option--active">Sportsbook</button>
              <button type="button" class="segmented__option">Casino</button>
              <button type="button" class="segmented__option">Live</button>
            </div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Underline tabs · with counts</div>
            <div class="tabs" role="tablist">
              <button type="button" class="tab tab--active">Open <span class="tab__count">3</span></button>
              <button type="button" class="tab">Settled <span class="tab__count">128</span></button>
              <button type="button" class="tab">Cashed out <span class="tab__count">14</span></button>
            </div>
          </div>
        </div>
      </section>

      <!-- 12 — Filter chips -->
      <section id="chips">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">12 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Filter chips</h2>
          <p class="mt-3 max-w-2xl text-text-body">The atomic unit of any filter — sport, market, or active-filter pills. Active flips to gold-tinted selection.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card navy-card--flat p-6">
          <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Default · active · removable · with count</div>
          <div class="flex flex-wrap gap-3">
            <span class="chip chip--active">Live now <span class="chip__count">23</span></span>
            <span class="chip">NHL <span class="chip__count">8</span></span>
            <span class="chip">NBA <span class="chip__count">12</span></span>
            <span class="chip">UFC</span>
            <span class="chip chip--active chip--removable">
              Boosted <span class="chip__close" aria-label="Remove">×</span>
            </span>
          </div>
        </div>
      </section>

      <!-- 13 — Form controls -->
      <section id="forms">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">13 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Form controls</h2>
          <p class="mt-3 max-w-2xl text-text-body">One visual language across input, select, checkbox, radio, and toggle. Focus ring is a 3px gold halo at 12% alpha — calm, not jumpy.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Text · money input</div>
            <label class="field-label" for="ds-email">Email</label>
            <input id="ds-email" class="ds-input" type="email" placeholder="you@example.ca" />
            <p class="field-help">We use this to verify your account against AGCO records.</p>

            <label class="field-label mt-5" for="ds-deposit">Deposit limit</label>
            <input id="ds-deposit" class="ds-input ds-input--money" type="text" value="500.00" inputmode="decimal" />
          </div>

          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Select</div>
            <label class="field-label" for="ds-province">Province</label>
            <select id="ds-province" class="ds-select">
              <option value="ON" selected>Ontario · AGCO regulated</option>
              <option value="AB">Alberta · pre-launch</option>
              <option value="BC">British Columbia</option>
              <option value="QC">Québec · blocked</option>
            </select>
            <p class="field-help">Determines which licensed operators we can show.</p>
          </div>

          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Checkbox</div>
            <label class="ds-checkbox">
              <input type="checkbox" checked />
              <span>I am 19 or older and accept the responsible-gambling terms.</span>
            </label>
            <label class="ds-checkbox mt-3">
              <input type="checkbox" />
              <span>Email me on Interac payout confirmations.</span>
            </label>
          </div>

          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Radio · toggle</div>
            <fieldset class="space-y-2">
              <legend class="field-label">Odds format</legend>
              <label class="ds-radio"><input type="radio" name="odds-fmt" checked /> American (−145)</label><br />
              <label class="ds-radio"><input type="radio" name="odds-fmt" /> Decimal (1.69)</label><br />
              <label class="ds-radio"><input type="radio" name="odds-fmt" /> Fractional (5/4)</label>
            </fieldset>

            <label class="ds-toggle mt-5">
              <input type="checkbox" checked />
              <span class="ds-toggle__track"></span>
              <span>Reality check every 60 minutes</span>
            </label>
          </div>
        </div>
      </section>

      <!-- 14 — Data table -->
      <section id="table">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">14 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Data table</h2>
          <p class="mt-3 max-w-2xl text-text-body">Mono uppercase headers, navy hairline rows, hover-tint on tbody rows. td.num and td.mono opt rows into mono + tabular nums + right-alignment.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card overflow-hidden">
          <table class="data-table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Province</th>
                <th class="num">Min deposit</th>
                <th class="num">Avg payout</th>
                <th class="num">Score</th>
              </tr>
            </thead>
            <tbody>
              {#each tableRows as [op, prov, min, payout, score]}
                <tr>
                  <td class="primary">{op}</td>
                  <td>{prov}</td>
                  <td class="num">${min}</td>
                  <td class="num">{payout}</td>
                  <td class="num">{score}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </section>

      <!-- 15 — Skeletons -->
      <section id="skeleton">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">15 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Skeletons</h2>
          <p class="mt-3 max-w-2xl text-text-body">A single 1.6s shimmer. Compose them — never pulse the real card border. Stagger with negative animation-delay if many appear together.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card navy-card--flat p-6">
          <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Title · text · circle · button</div>
          <div class="space-y-3">
            <span class="skeleton skeleton--title block w-1/2"></span>
            <span class="skeleton skeleton--text block w-full"></span>
            <span class="skeleton skeleton--text block w-11/12"></span>
            <span class="skeleton skeleton--text block w-3/4"></span>
            <div class="mt-5 flex items-center gap-4">
              <span class="skeleton skeleton--circle block h-12 w-12"></span>
              <span class="skeleton skeleton--button block w-40"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- 16 — Alerts -->
      <section id="alerts">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">16 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Alerts</h2>
          <p class="mt-3 max-w-2xl text-text-body">Inline messages with a 3px left-border accent and a 16%-alpha icon chip. Don't use for celebration — those are toasts or win-flash.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-3">
          <div class="alert alert--success">
            <span class="alert__icon">✓</span>
            <div>
              <div class="alert__title">Withdrawal sent · 47 min</div>
              <div class="alert__body">CA$245.00 paid via Interac e-Transfer to TD ••3421.</div>
            </div>
          </div>
          <div class="alert alert--info">
            <span class="alert__icon">i</span>
            <div>
              <div class="alert__title">Alberta is launching July 2026</div>
              <div class="alert__body">Pre-register to be notified when AB operators go live.</div>
            </div>
          </div>
          <div class="alert alert--warning">
            <span class="alert__icon">!</span>
            <div>
              <div class="alert__title">Approaching weekly deposit limit</div>
              <div class="alert__body">$420 of $500 used this week. Limit resets Sunday.</div>
            </div>
          </div>
          <div class="alert alert--error">
            <span class="alert__icon">×</span>
            <div>
              <div class="alert__title">Province not supported</div>
              <div class="alert__body">Online gambling is restricted in your jurisdiction.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 17 — Empty state -->
      <section id="empty">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">17 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Empty state</h2>
          <p class="mt-3 max-w-2xl text-text-body">Use only when a list is genuinely empty. During loading, reach for skeletons instead.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="empty-state">
          <div class="empty-state__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 7h18M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M9 7V5a3 3 0 0 1 6 0v2" />
            </svg>
          </div>
          <div class="empty-state__title">No open bets</div>
          <p class="empty-state__body">Your open bets will appear here. Start with a featured market or browse tonight's NHL slate.</p>
          <button type="button" class="btn-gold btn-gold--sm">Browse markets</button>
        </div>
      </section>

      <!-- 18 — Tooltip & info -->
      <section id="tooltip">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">18 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Tooltip &amp; info dot</h2>
          <p class="mt-3 max-w-2xl text-text-body">Always-visible 'i' affordances for odds formats, RG terms, or any data-dense moment that warrants a one-line gloss.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="navy-card navy-card--flat p-6">
          <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Hover the info dot</div>
          <div class="flex flex-wrap items-center gap-6 text-[14px] text-text-body">
            <span class="inline-flex items-center gap-2">
              Odds shown in American format
              <span class="tooltip">
                <span class="info-dot">i</span>
                <span class="tooltip__bubble">−145 means stake $145 to win $100</span>
              </span>
            </span>
            <span class="inline-flex items-center gap-2">
              Reality check
              <span class="tooltip">
                <span class="info-dot">i</span>
                <span class="tooltip__bubble">A pause every 60 minutes during play</span>
              </span>
            </span>
          </div>
        </div>
      </section>

      <!-- 19 — Progress & steps -->
      <section id="progress">
        <header class="mb-10">
          <div class="font-mono text-[11px] font-semibold tracking-[0.28em] text-prestige-gold">19 · SECTION</div>
          <h2 class="mt-3 font-sans text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">Progress &amp; steps</h2>
          <p class="mt-3 max-w-2xl text-text-body">Slim 6px progress drives off --progress. Steps for KYC and deposit flows. Use --warning approaching a limit, --danger when hit.</p>
          <hr class="seam-rule mt-6" aria-hidden="true" />
        </header>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">Deposit limit · weekly</div>
            <div class="flex items-baseline justify-between">
              <span class="text-[13px] text-text-body">$420 of $500</span>
              <span class="font-mono text-[11px] text-warning">84% used</span>
            </div>
            <div class="progress progress--warning mt-3">
              <div class="progress__fill" style="--progress: 84%"></div>
            </div>
          </div>
          <div class="navy-card navy-card--flat p-6">
            <div class="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-text-tertiary">KYC · 4-step flow</div>
            <div class="steps">
              <span class="steps__step steps__step--done"></span>
              <span class="steps__step steps__step--done"></span>
              <span class="steps__step steps__step--current"></span>
              <span class="steps__step"></span>
            </div>
            <div class="mt-3 grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
              <span>Identity</span>
              <span>Address</span>
              <span class="text-prestige-gold">Funding</span>
              <span>Review</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Coda -->
      <footer class="border-t border-white/5 pt-10">
        <hr class="seam-rule mb-8" aria-hidden="true" />
        <p class="font-mono text-[11px] uppercase tracking-[0.28em] text-text-tertiary">
          247iBET · Prestige Navy · Dark mode only · AGCO regulated
        </p>
        <p class="mt-2 max-w-xl text-[13px] text-text-body">
          Tokens live in <code class="text-prestige-gold">app/globals.css</code>. Component
          specs follow <code class="text-prestige-gold">DESIGN.md</code>. Source-of-truth:
          the bundle at <code class="text-prestige-gold">project/colors_and_type.css</code>.
        </p>
      </footer>

    </main>
  </div>
</div>
