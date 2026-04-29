import { describe, it, expect } from 'vitest';
import { safeJsonSerialize } from '../src/lib/sanitize.js';

describe('safeJsonSerialize', () => {
  it('escapes less-than signs', () => {
    expect(safeJsonSerialize({ html: 'a<b' })).toBe('{"html":"a\\u003cb"}');
  });

  it('escapes greater-than signs', () => {
    expect(safeJsonSerialize({ html: 'a>b' })).toBe('{"html":"a\\u003eb"}');
  });

  it('escapes ampersands', () => {
    expect(safeJsonSerialize({ html: 'a&b' })).toBe('{"html":"a\\u0026b"}');
  });

  it('handles nested objects', () => {
    const input = { user: '<script>alert(1)</script>' };
    const output = safeJsonSerialize(input);
    expect(output).toContain('\\u003c');
    expect(output).toContain('\\u003e');
  });

  it('handles arrays', () => {
    expect(safeJsonSerialize(['a<b', 'c>d'])).toBe('["a\\u003cb","c\\u003ed"]');
  });

  it('handles null and undefined', () => {
    expect(safeJsonSerialize({ a: null })).toBe('{"a":null}');
  });

  it('handles numbers and booleans', () => {
    expect(safeJsonSerialize({ n: 42, b: true })).toBe('{"n":42,"b":true}');
  });

  it('handles Unicode characters', () => {
    expect(safeJsonSerialize({ s: '日本語' })).toBe('{"s":"日本語"}');
  });

  it('handles empty object', () => {
    expect(safeJsonSerialize({})).toBe('{}');
  });

  it('handles empty array', () => {
    expect(safeJsonSerialize([])).toBe('[]');
  });
});