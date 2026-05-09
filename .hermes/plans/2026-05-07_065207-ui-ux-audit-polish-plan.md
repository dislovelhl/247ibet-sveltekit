# UI/UX Audit → Polish Execution Plan

## Goal
Perform a focused UI/UX polish pass across the 247iBET SvelteKit app, improving clarity, visual hierarchy, mobile usability, accessibility, and conversion confidence without changing core behavior.

## Context
- The app already has a strong brand system, a global layout shell, a desktop navbar, and a mobile sticky CTA.
- The current task is *read-only audit first*, then implement only the highest-impact polish items.
- Execution should be done with **Copilot CLI autopilot** for bounded code changes.
- Preserve existing flows: age gate, nav, SEO footer, sticky mobile CTA, CTA destinations, and current page structure.

## Audit focus areas
1. **Global shell and spacing**
   - Improve top-level vertical rhythm and section spacing consistency.
   - Reduce crowding around the fixed navbar / main content boundary.
   - Check for overlap between layout shell, sticky CTA, and footer on small screens.

2. **Typography hierarchy**
   - Strengthen heading scale and content scannability on landing pages and hubs.
   - Ensure body copy, labels, and supporting text have clear contrast and line-height.
   - Reduce “wall of text” density in dense comparison / trust sections.

3. **Navigation and conversion flow**
   - Make primary CTA hierarchy clearer on desktop and mobile.
   - Confirm active states, tap targets, focus states, and menu accessibility.
   - Keep the main conversion path obvious without adding visual noise.

4. **Mobile usability**
   - Validate sticky mobile CTA height, spacing, and safe-area handling.
   - Ensure content does not feel compressed behind fixed UI.
   - Check touch target sizes and scrolling comfort on narrow viewports.

5. **Accessibility and trust**
   - Verify contrast, keyboard navigation, visible focus, skip link behavior, and aria labels.
   - Ensure motion is subtle and does not interfere with usability.
   - Preserve brand trust cues without over-decoration.

## Proposed approach
### Phase 1: Read-only audit and issue shortlist
- Review the global layout and the highest-traffic entry pages.
- Identify only issues that have a clear user impact and can be fixed with small changes.
- Prioritize items that affect comprehension, conversion confidence, or mobile comfort.

### Phase 2: Small-scope polish tasks
Likely targets:
- `src/routes/+layout.svelte`
- `src/lib/components/Navbar.svelte`
- `src/lib/components/StickyMobileCTA.svelte`
- `src/routes/+page.svelte`
- `src/app.css`
- `src/styles/components.css`
- `src/styles/design-system.css`

Potential micro-improvements:
- tighten and standardize spacing between hero, sections, and cards
- refine CTA visual hierarchy and button sizing
- reduce clutter in dense comparison/trust blocks
- improve mobile spacing and safe-area handling
- normalize focus styles and hover/active feedback
- tune typography for better scanability on long-form pages

### Phase 3: Implement with Copilot CLI autopilot
- Use Copilot CLI autopilot for bounded edits only.
- Keep each task small and isolated.
- Avoid bundling unrelated refactors.
- Preserve all routes, links, and behavior unless a change is explicitly part of the polish task.

### Phase 4: Validation
Run the standard gates after each meaningful batch:
- `pnpm check`
- `pnpm lint`
- `pnpm build`
- `pnpm test`

Then verify visually in preview:
- desktop layout at common breakpoints
- mobile layout with sticky CTA visible
- keyboard focus and skip link behavior
- accessibility checks for the affected screens

## Files likely to change
- `src/routes/+layout.svelte`
- `src/lib/components/Navbar.svelte`
- `src/lib/components/StickyMobileCTA.svelte`
- `src/routes/+page.svelte`
- `src/app.css`
- `src/styles/components.css`
- `src/styles/design-system.css`
- any specific page files that the audit flags as high-impact

## Risks / tradeoffs
- Fixed UI can easily create overlap or cramped mobile spacing; verify safe-area behavior carefully.
- Over-polishing can add visual noise; keep changes minimal and brand-consistent.
- CTA hierarchy changes must not reduce discoverability or break current conversion paths.
- Dense content sections can become too sparse if spacing is increased too aggressively.

## Open questions
- Which pages should receive the first polish pass after the global shell: homepage, bonuses, sportsbook hub, or high-intent landing pages?
- Should the first implementation batch focus on shared layout components only, or include one or two key content pages for end-to-end validation?

## Definition of done
- The shortlist of UX issues is documented.
- The highest-impact polish items are implemented with minimal code churn.
- Desktop and mobile layouts remain stable.
- Accessibility and keyboard navigation are preserved or improved.
- Validation gates pass.
