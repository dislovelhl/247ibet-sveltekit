# Design System Documentation — 247iBET (2026)

This document defines the visual language, design tokens, and component architecture for 247iBET. It serves as the single source of truth for design decisions and ensures consistency across the platform.

---

## 🎨 Color Palette

### Surfaces (Prestige Navy)
The core surface colors provide depth and hierarchy in the dark theme.

| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `--color-navy-black` | `#070c18` | ![#070c18](https://via.placeholder.com/15/070c18/070c18.png) | Main background |
| `--color-navy-card` | `#0d1629` | ![#0d1629](https://via.placeholder.com/15/0d1629/0d1629.png) | Cards, sections |
| `--color-navy-raised` | `#142038` | ![#142038](https://via.placeholder.com/15/142038/142038.png) | Modals, active states |

### Accents
Strategic use of gold and blue for branding and interactive elements.

| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `--color-prestige-gold` | `#d4943a` | ![#d4943a](https://via.placeholder.com/15/d4943a/d4943a.png) | Primary brand, CTAs |
| `--color-slate-blue` | `#4a9ebf` | ![#4a9ebf](https://via.placeholder.com/15/4a9ebf/4a9ebf.png) | Secondary brand, data |

### iGaming Semantics
Domain-specific colors for live updates and betting states.

| Token | Value | Hex | Usage |
|-------|-------|-----|-------|
| `--color-odds-up` | `#22c55e` | ![#22c55e](https://via.placeholder.com/15/22c55e/22c55e.png) | Shortening odds |
| `--color-odds-down` | `#ef4444` | ![#ef4444](https://via.placeholder.com/15/ef4444/ef4444.png) | Drifting odds |
| `--color-live-pulse` | `#22c55e` | ![#22c55e](https://via.placeholder.com/15/22c55e/22c55e.png) | Live indicators |
| `--color-jackpot` | `#e8ac52` | ![#e8ac52](https://via.placeholder.com/15/e8ac52/e8ac52.png) | Jackpot highlights |

---

## 🔡 Typography

### Font Families
- **Display**: `Be Vietnam Pro` (light weights for headlines)
- **Sans**: `Plus Jakarta Sans` (body, labels)
- **Mono**: `JetBrains Mono` (odds, stats, numbers)

### Type Scale
Based on a modular scale (ratio: 1.25) starting from `16px`.

| Token | Value | Rem | Usage |
|-------|-------|-----|-------|
| `--text-xs` | `12px` | `0.75rem` | Captions, kickers |
| `--text-sm` | `14px` | `0.875rem` | Small body, secondary labels |
| `--text-base` | `16px` | `1rem` | Standard body copy |
| `--text-lg` | `18px` | `1.125rem` | Large body, subtitles |
| `--text-xl` | `20px` | `1.25rem` | H6 |
| `--text-2xl` | `24px` | `1.5rem` | H5 |
| `--text-3xl` | `30px` | `1.875rem` | H4 |
| `--text-4xl` | `36px` | `2.25rem` | H3 |
| `--text-5xl` | `48px` | `3rem` | H2 |
| `--text-6xl` | `60px` | `3.75rem` | H1 |

---

## 📏 Spacing & Layout

### 8pt Grid System
All spacing, margins, and paddings should be multiples of `4px` or `8px`.

| Token | Value | Rem |
|-------|-------|-----|
| `--spacing-1` | `4px` | `0.25rem` |
| `--spacing-2` | `8px` | `0.5rem` |
| `--spacing-4` | `16px` | `1rem` |
| `--spacing-8` | `32px` | `2rem` |
| `--spacing-12` | `48px` | `3rem` |

---

## ✨ Motion & Glassmorphism

### Durations
- `micro`: `100ms` (hover states)
- `short`: `200ms` (component transitions)
- `medium`: `300ms` (page transitions)

### Glass Tiers
Defined in `src/styles/glass.css`:
- `.glass-thin`: Subtle blur (8px)
- `.glass-regular`: Standard blur (16px)
- `.glass-thick`: Deep blur (32px)
- `.glass-premium`: Ultra-premium liquid glass (48px blur, gold inner glow)
- `.glass-shimmer`: Animated light sweep
- `.shimmer-effect`: Utility for adding periodic light sweeps to any surface
- `.float-3d`: CSS-based 3D floating animation

---

## 🚀 Proposed Extensions (Generated via `ui-design-system`)

To provide more UI depth, the following expanded scales are proposed for integration into `theme.css`:

### Prestige Gold Scale
```css
--color-prestige-gold-50: #f2d9b6;
--color-prestige-gold-100: #f2d6af;
--color-prestige-gold-200: #f2d0a2;
--color-prestige-gold-300: #f2cb94;
--color-prestige-gold-400: #f2c586;
--color-prestige-gold-500: #d4a769; /* Current Gold Light */
--color-prestige-gold-600: #a9824b;
--color-prestige-gold-700: #7f5e31;
--color-prestige-gold-800: #543d1b;
--color-prestige-gold-900: #2a1d0b;
```

### Slate Blue Scale
```css
--color-slate-blue-50: #bfe4f2;
--color-slate-blue-100: #bae2f2;
--color-slate-blue-200: #aedff2;
--color-slate-blue-300: #a3dbf2;
--color-slate-blue-400: #97d8f2;
--color-slate-blue-500: #6ea8bf;
--color-slate-blue-600: #518498;
--color-slate-blue-700: #376172;
--color-slate-blue-800: #21404c;
--color-slate-blue-900: #0e1f26;
```

---

## ♿ Accessibility Standards

- **Contrast Target**: 4.5:1 (AA) for normal text, 7:1 (AAA) for critical information.
- **Current Main Contrast**: `#070c18` vs `#d4943a` ≈ 6.3:1 (Passes AA).
- **Interactive Targets**: Minimum `44x44px` for mobile tap areas (enforced in `StickyMobileCTA`).
