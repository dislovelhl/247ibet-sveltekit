import { describe, it, expect } from 'vitest';
import { safeEq } from '../src/lib/server/auth.js';

describe('safeEq', () => {
  it('returns true for identical strings', () => {
    expect(safeEq('hello', 'hello')).toBe(true);
  });

  it('returns false for different strings', () => {
    expect(safeEq('hello', 'world')).toBe(false);
  });

  it('returns false for different lengths', () => {
    expect(safeEq('hello', 'hello!')).toBe(false);
  });

  it('returns true for empty strings', () => {
    expect(safeEq('', '')).toBe(true);
  });

  it('returns false for empty vs non-empty', () => {
    expect(safeEq('', 'a')).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(safeEq('Hello', 'hello')).toBe(false);
  });

  it('handles unicode text byte-for-byte', () => {
    expect(safeEq('café', 'café')).toBe(true);
    expect(safeEq('café', 'cafe')).toBe(false);
  });

  it('handles long repeated values', () => {
    const a = 'x'.repeat(1024);
    expect(safeEq(a, a)).toBe(true);
    expect(safeEq(a, `${a}y`)).toBe(false);
  });
});
