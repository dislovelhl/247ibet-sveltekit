# Liquid Glass Aesthetic Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the global 247iBET visual experience from a "Professional" but "muddy" dark theme to a "Crystal Clear" luxury aesthetic.

**Architecture:** A global theme refresh focused on high-precision transparency, vibrant blurs, and boutique typography.

**Tech Stack:** SvelteKit, Tailwind CSS 4, CSS Backdrop Filters, SVG Filters.

---

### Task 1: Token & Theme Refresh

**Files:**
- Modify: `src/styles/theme.css`

- [ ] **Step 1: Update design tokens for luxury materials**

Modify `src/styles/theme.css` to refine the gold gradient and add typography tracking tokens.

```css
@theme {
  /* ... existing colors ... */

  /* Enhanced Multi-stop Gold Foil */
  --gradient-prestige-gold-foil: linear-gradient(
    135deg,
    #f2d6af 0%,
    #d4a769 25%,
    #d4943a 50%,
    #a9824b 75%,
    #f2c586 100%
  );

  /* Typography Polish */
  --tracking-prestige: 0.14em;
  --tracking-tight-hd: -0.02em;
}
```

- [ ] **Step 2: Commit theme changes**

```bash
git add src/styles/theme.css
git commit -m "style: update prestige gold gradient and typography tokens"
```

---

### Task 2: Global Background & Noise Grain

**Files:**
- Modify: `src/styles/base.css`

- [ ] **Step 1: Add global atmospheric depth and micro-texture**

Update `src/styles/base.css` to include the noise grain and the radial depth on the body.

```css
@layer base {
  body {
    @apply bg-navy-black text-text-primary font-sans antialiased selection:bg-prestige-gold/20 selection:text-prestige-gold;
    min-height: 100dvh;
    /* Atmospheric Depth */
    background-image: radial-gradient(circle at 50% -20%, var(--color-navy-raised) 0%, var(--color-navy-black) 100%);
    position: relative;
  }

  /* Precision Noise Grain Overlay */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 9999;
    opacity: 0.04;
    pointer-events: none;
    background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
  }
}
```

- [ ] **Step 2: Commit global background changes**

```bash
git add src/styles/base.css
git commit -m "style: add global atmospheric depth and noise grain texture"
```

---

### Task 3: Atmosphere Light Leaks Refinement

**Files:**
- Modify: `src/lib/components/Atmosphere.svelte`

- [ ] **Step 1: Refine atmospheric glows and particles**

Update `src/lib/components/Atmosphere.svelte` to use the new "light leak" intensities and saturate the glow colors.

```svelte
<!-- Update the glow containers -->
<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <!-- Saturated Light Leaks -->
  <div class="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] animate-pulse rounded-full bg-slate-blue/15 blur-[120px]" style="animation-duration: 8s"></div>
  <div class="absolute top-[30%] -right-[5%] h-[40%] w-[40%] animate-pulse rounded-full bg-prestige-gold/10 blur-[100px]" style="animation-delay: 2s; animation-duration: 10s"></div>
  <div class="absolute -bottom-[10%] left-[15%] h-[45%] w-[45%] animate-pulse rounded-full bg-slate-blue/8 blur-[140px]" style="animation-delay: 4s; animation-duration: 12s"></div>
</div>
```

- [ ] **Step 2: Commit atmosphere changes**

```bash
git add src/lib/components/Atmosphere.svelte
git commit -m "style: refine atmospheric light leaks and animations"
```

---

### Task 4: Liquid Glass Material Implementation

**Files:**
- Modify: `src/styles/glass.css`

- [ ] **Step 1: Rewrite glass tiers for high-vibrancy and precision**

Update `src/styles/glass.css` with the new liquid glass definitions, using 0.5px borders and `saturate(200%)`.

```css
@layer utilities {
  .glass-liquid {
    -webkit-backdrop-filter: blur(40px) saturate(210%) brightness(110%);
    backdrop-filter: blur(40px) saturate(210%) brightness(110%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    border: 0.5px solid rgba(255, 255, 255, 0.12);
    border-top: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 24px;
    box-shadow: 
      0 20px 40px -15px rgba(0, 0, 0, 0.5),
      inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  }

  .glass-liquid-thin {
    -webkit-backdrop-filter: blur(24px) saturate(190%) brightness(115%);
    backdrop-filter: blur(24px) saturate(190%) brightness(115%);
    background: rgba(255, 255, 255, 0.03);
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 16px;
  }
}
```

- [ ] **Step 2: Commit glass material changes**

```bash
git add src/styles/glass.css
git commit -m "style: implement high-precision liquid glass materials"
```

---

### Task 5: Boutique Typography & Polish

**Files:**
- Modify: `src/styles/design-system.css`
- Modify: `src/lib/components/HeroBanner.svelte`

- [ ] **Step 1: Add typography utility classes**

```css
/* src/styles/design-system.css */
@layer utilities {
  .text-luxury {
    font-family: var(--font-luxury);
    font-style: italic;
  }
  .tracking-boutique {
    letter-spacing: 0.14em;
  }
}
```

- [ ] **Step 2: Apply luxury accents to Hero Banner**

Update `src/lib/components/HeroBanner.svelte` to use the new typography and glass styles.

- [ ] **Step 3: Commit typography changes**

```bash
git add src/styles/design-system.css src/lib/components/HeroBanner.svelte
git commit -m "style: apply boutique typography and luxury hero accents"
```
