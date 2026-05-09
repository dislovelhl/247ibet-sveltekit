/**
 * v1 client-side age-gate cache (UX layer, NOT a security boundary).
 *
 * The authoritative age gate is the server-side HMAC flow at
 * `src/routes/+layout.server.ts` and `src/routes/age-gate/+page.server.ts`.
 * This module only suppresses the in-page modal flicker on repeat visits
 * within the same browser session by reading a localStorage flag.
 *
 * Real KYC + identity verification runs in the operator app at
 * `boapi.ibet247.ca` (Vue 3 + Pinia + Element Plus). The SvelteKit gate
 * is a compliance-UX surface for the marketing front only; this module
 * never gates network requests or money flows.
 *
 * Do not delete: `AgeGate.svelte` consumes these helpers to avoid
 * showing the modal to a user who already accepted in this browser.
 */
import { browser } from '$app/environment';
import { TRACKING } from '$lib/site';

const STORAGE_KEY = TRACKING.ageVerifiedKey;
const LEGACY_KEY = TRACKING.legacyAgeVerifiedKey;

export function hasLocalAgeVerification(): boolean {
  if (!browser) return false;
  try {
    return localStorage.getItem(STORAGE_KEY) === '1' || localStorage.getItem(LEGACY_KEY) === '1';
  } catch {
    return false;
  }
}

export function markLocalAgeVerification(): void {
  if (!browser) return;
  try {
    localStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* ignore */
  }
}

// v1: no session API — always resolves false (localStorage is source of truth)
export async function loadAgeGateVerificationFromSession(): Promise<boolean> {
  return false;
}

export async function persistAgeGateVerificationToSession(): Promise<void> {
  // no-op in v1; add +server.ts session endpoint in v2
}
