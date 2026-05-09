# Design Spec - Fix Systematic 'reveal' Animation Bug

## Background
The project uses a custom animation system where elements with `reveal-fade-up`, `reveal-scale-in`, `reveal-slide-left`, or `reveal-slide-right` classes are hidden by default (`opacity: 0`). They transition to a visible state (`reveal-visible` class) via the `use:reveal` Svelte action. 

A bug was identified where many elements have the classes but lack the action, making them permanently invisible. Additionally, for staggered animations (using `data-reveal-stagger="true"`), both the parent and the children elements must have `use:reveal` for the stagger logic to apply correctly.

## Objectives
1. Identify all Svelte files in `src/routes` and `src/lib/components` using `reveal-*` classes.
2. Ensure every element with a `reveal-*` class also has the `use:reveal` action.
3. Ensure the `reveal` action is imported from `$lib/animations` in all affected files.

## Proposed Changes

### 1. Identify Affected Elements
The following classes trigger the hidden state:
- `reveal-fade-up`
- `reveal-scale-in`
- `reveal-slide-left`
- `reveal-slide-right`

### 2. Add `use:reveal` Action
For each element found, if it does not already have `use:reveal`, add it.
Example:
```svelte
<!-- Before -->
<div class="reveal-fade-up p-4">...</div>

<!-- After -->
<div use:reveal class="reveal-fade-up p-4">...</div>
```

### 3. Ensure Imports
Check the `<script>` section of each modified file. If `reveal` is not imported from `$lib/animations`, add the import.
Example:
```typescript
import { reveal } from '$lib/animations';
```

## Affected Files (Initial List)
- `src/lib/components/IBetShowcase.svelte` (Verified partially fixed)
- `src/lib/components/SEOFooter.svelte`
- `src/routes/+page.svelte`
- `src/routes/bonus-terms/+page.svelte`
- `src/routes/casino/+page.svelte`
- `src/routes/new-player-bonuses-canada/+page.svelte`
- `src/routes/sportsbook-bonuses-canada/+page.svelte`
- `src/routes/sportsbook/+page.svelte`
- `src/routes/alberta/+page.svelte` (Already fixed? Needs verification)
- `src/routes/ontario/+page.svelte` (Already fixed? Needs verification)
- `src/routes/casino-bonuses-canada/+page.svelte` (Already fixed? Needs verification)

## Verification Plan
1. **Static Analysis**: Run `npm run check` to ensure Svelte components still compile correctly and imports are valid.
2. **Manual Review**: Verify that `use:reveal` is placed correctly on the same element as the `reveal-*` class.
