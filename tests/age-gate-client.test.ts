import { describe, it, expect } from 'vitest';
import {
  hasLocalAgeVerification,
  markLocalAgeVerification,
  loadAgeGateVerificationFromSession,
  persistAgeGateVerificationToSession,
} from '../src/lib/age-gate-client';

// $app/environment stub has browser=false, so these tests exercise the SSR/server-safe path:
// every function must short-circuit cleanly without touching browser globals.

describe('age-gate-client (real module, browser=false)', () => {
  it('hasLocalAgeVerification returns false when not in a browser', () => {
    expect(hasLocalAgeVerification()).toBe(false);
  });

  it('markLocalAgeVerification is a no-op when not in a browser', () => {
    expect(() => markLocalAgeVerification()).not.toThrow();
  });

  it('loadAgeGateVerificationFromSession resolves to false in v1', async () => {
    expect(await loadAgeGateVerificationFromSession()).toBe(false);
  });

  it('persistAgeGateVerificationToSession is a no-op in v1', async () => {
    await expect(persistAgeGateVerificationToSession()).resolves.toBeUndefined();
  });
});
