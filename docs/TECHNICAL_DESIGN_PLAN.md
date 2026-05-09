# 247iBET Technical & Design Execution Plan

## Overview
This plan outlines the concrete technical and design steps required to elevate the 247ibet.ca platform. Per business direction, compliance considerations are deferred to a separate workstream. The focus here is strictly on delivering a "Boutique/Luxury" visual experience through advanced CSS, Svelte 5 interactivity, and atmospheric depth.

## Phase 1: Core Design System & CSS Foundation
**Goal**: Establish the structural tokens and atmospheric layers that create depth and premium feel.

1. **Atmospheric Layers (`src/styles/base.css` & `theme.css`)**
   - Implement a global 2% opacity noise grain overlay on `.navy-black` surfaces.
   - Define radial gradient utilities for ambient glows (`.glow-gold`, `.glow-navy`).
   - Update shadowing system to use multi-layered, navy-tinted soft shadows instead of harsh black dropshadows.

2. **Luxury Color Theory & Typography**
   - Replace standard linear gradients with a 4-stop metallic gold ramp (`#f2d6af`, `#d4943a`, `#a9824b`, `#f2c586`).
   - Implement `.luxury-border`: 1px `border-white/10` outer border with a 1px inset white glow (`rgba(255,255,255,0.05)`).
   - Integrate `Playfair Display` for serif accents (e.g., italicized labels, background watermark numbers).
   - Increase tracking to `0.14em` on all-caps labels for a spacious feel.

## Phase 2: Advanced Svelte 5 Componentry
**Goal**: Introduce motion, tactile feedback, and sophisticated component architecture.

1. **`GlintCard.svelte` (New Component)**
   - **Logic**: Implement mouse-tracking to calculate cursor position relative to the card.
   - **Visual**: Render a radial gradient "spotlight" (opacity 10%) that follows the cursor, simulating light hitting a premium surface.
   - **Usage**: Apply this wrapper to all high-value conversion cards (e.g., Casino hubs, Top lists).

2. **`PayoutProgress.svelte` (New Component)**
   - **Logic**: A 3-step progressive UI (Approval -> Processing -> Funds).
   - **Visual**: Use Svelte transitions for state changes, pulsing animations for the active step, and a gold checkmark for completion.
   - **Usage**: Embed in `/interac` and homepage payment sections to visualize the "fast payout" claim.

3. **Motion & Transitions**
   - Implement Svelte `in:fade` and `in:fly` with staggered delays (`delay-100`, `delay-200`) for all grid layouts and lists on mount.
   - Upgrade interactive hover states to include scale transforms (`scale-[1.02]`) alongside existing color shifts.

## Phase 3: Route-Level Integration & Polish
**Goal**: Apply the new systems across the primary user journeys.

1. **Hero Banners & Data Visualization**
   - Update `HeroBanner.svelte` with the new 4-stop gold ramp, `Playfair Display` flourishes, and intensified 3D parallax.
   - Add a subtle pulse animation to "Live Now" badges and real-time odds indicators.

2. **Mobile Optimization**
   - Refine active/tap states for immediate, high-contrast haptic feedback.
   - Style the native pull-to-refresh spinner using Prestige Gold.
   - Ensure `padding-bottom` on sticky CTAs accounts for iOS safe area insets (dynamic island/home indicator).

## Execution Strategy
- **Sprint 1**: CSS architecture, tokens, and typography updates.
- **Sprint 2**: Build `GlintCard.svelte` and `PayoutProgress.svelte`. Implement staggered motion.
- **Sprint 3**: Route integration, Hero upgrades, and mobile-specific polish.
- **Sprint 4**: QA and performance testing (ensuring animations do not degrade TTI).
