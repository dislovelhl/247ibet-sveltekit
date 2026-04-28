// Ported from lib/age-gate-client.ts
// v1: localStorage-only (no /api/session dependency)
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
