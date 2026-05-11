# Design Spec: Crystal Clear Liquid Glass Aesthetic Upgrade

**Date:** 2026-05-11
**Project:** 247iBET SvelteKit
**Status:** Approved
**Theme:** macOS-inspired "Liquid Glass" (High-precision, High-vibrancy, Luxury)

## 1. Core Objective
Transform the global 247iBET visual experience from a "Professional" but "muddy" dark theme to a "Crystal Clear" luxury aesthetic. The design prioritizes ultra-thin transparency, vibrant refracted colors, and razor-sharp high-definition details.

## 2. Background & Atmospheric Depth
To eliminate the "dirty" feel of flat dark colors, the foundation is replaced with an atmospheric system.

### 2.1 Depth Gradient
- **Base:** `#070c18` (Navy Black).
- **Leak:** A subtle radial gradient center-top using `#142038` (Navy Raised) to create volume.
- **Vibrancy Source:** Strategic background "light leaks" (radial glows) in Slate Blue (`#4a9ebf`) and Prestige Gold (`#d4943a`) at 10-15% opacity, heavily blurred (60px+).

### 2.2 Micro-Texture (Noise)
- **Implementation:** A global `::after` overlay on the `<body>`.
- **Properties:** 4% opacity fractal noise grain.
- **Purpose:** Eliminates CSS color banding, adds tactile quality, and provides a "premium matte" feel.

## 3. Liquid Glass Material System
Components and panels move from solid backgrounds to "Liquid Crystal" materials.

### 3.1 Material Definition
- **Transparency:** `background: rgba(255, 255, 255, 0.04)`.
- **Vibrancy:** `backdrop-filter: blur(40px) saturate(200%)`.
- **Reflections:** Internal glint using a 135deg linear gradient (`rgba(255,255,255,0.05)` to transparent).

### 3.2 Precision Edges
- **Side/Bottom Borders:** 0.5px hairline strokes using `rgba(255, 255, 255, 0.12)`.
- **Specular Top Edge:** 1px solid `rgba(255, 255, 255, 0.25)` to simulate a light-catching glass edge.
- **Corner Radius:** Increased to `20px` - `24px` for "Squircle" geometry.

## 4. High-Precision Typography
Typography is refined for an editorial, high-end boutique feel.

### 4.1 Fonts & Tracking
- **Playfair Display:** Used for italicized "boutique" accents (e.g., *"The expert's choice"*).
- **Letter Spacing:** Global increase to `0.14em` for all-caps labels and kickers.
- **Color Contrast:** Secondary text shifted from grey to desaturated navy-white (`rgba(255, 255, 255, 0.7)`).
- **Numerical Precision:** `JetBrains Mono` for all odds, stats, and monetary values.

## 5. Implementation Strategy
1. **Token Refresh:** Update `src/styles/theme.css` with the new gradient and material tokens.
2. **Base Layer:** Update `src/styles/base.css` with the noise grain and global background gradient.
3. **Glass Tiers:** Refactor `src/styles/glass.css` to implement the new "Liquid" blurs and specular borders.
4. **Component Audit:** Apply the updated glass classes and typography styles across all major layouts.

## 6. Success Criteria
- The "muddy" or "dirty" feel is replaced by a sense of clarity and depth.
- Borders look razor-sharp on high-DPI displays.
- Colors feel vibrant and "alive" through transparent panels.
- Typography feels editorial and boutique rather than generic.
