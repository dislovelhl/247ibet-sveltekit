import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock $app/environment before importing the module
vi.mock('$app/environment', () => ({
  browser: true
}));

// Import the module under test after mocking
import {
  hasLocalAgeVerification,
  markLocalAgeVerification
} from '../src/lib/age-gate-client';
import { TRACKING } from '../src/lib/site';

const STORAGE_KEY = TRACKING.ageVerifiedKey;
const LEGACY_KEY = TRACKING.legacyAgeVerifiedKey;

describe('age-gate-client (browser path)', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
    vi.clearAllMocks();
  });

  it('returns true if STORAGE_KEY is "1"', () => {
    vi.mocked(localStorage.getItem).mockReturnValue('1');
    expect(hasLocalAgeVerification()).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE_KEY);
  });

  it('returns true if LEGACY_KEY is "1" (migration path)', () => {
    vi.mocked(localStorage.getItem).mockImplementation((key) => {
      if (key === LEGACY_KEY) return '1';
      return null;
    });
    expect(hasLocalAgeVerification()).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORAGE_KEY);
    expect(localStorage.getItem).toHaveBeenCalledWith(LEGACY_KEY);
  });

  it('returns false if neither key is "1"', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);
    expect(hasLocalAgeVerification()).toBe(false);
  });

  it('markLocalAgeVerification sets STORAGE_KEY to "1"', () => {
    markLocalAgeVerification();
    expect(localStorage.setItem).toHaveBeenCalledWith(STORAGE_KEY, '1');
  });

  it('handles localStorage errors gracefully', () => {
    vi.mocked(localStorage.getItem).mockImplementation(() => {
      throw new Error('SecurityError');
    });
    expect(hasLocalAgeVerification()).toBe(false);

    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(() => markLocalAgeVerification()).not.toThrow();
  });
});
