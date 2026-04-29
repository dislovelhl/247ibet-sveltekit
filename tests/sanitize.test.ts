import { describe, it, expect } from 'vitest';
import { safeJsonLd } from '../src/lib/json-ld.js';

describe('safeJsonLd', () => {
  it('escapes less-than signs', () => {
    expect(safeJsonLd({ html: 'a<b' })).toBe('{"html":"a\\u003cb"}');
  });

  it('escapes greater-than signs', () => {
    expect(safeJsonLd({ html: 'a>b' })).toBe('{"html":"a\\u003eb"}');
  });

  it('escapes ampersands', () => {
    expect(safeJsonLd({ html: 'a&b' })).toBe('{"html":"a\\u0026b"}');
  });

  it('handles nested objects', () => {
    const input = { user: '<script>alert(1)</script>' };
    const output = safeJsonLd(input);
    expect(output).toContain('\\u003c');
    expect(output).toContain('\\u003e');
  });

  it('handles arrays', () => {
    expect(safeJsonLd(['a<b', 'c>d'])).toBe('["a\\u003cb","c\\u003ed"]');
  });

  it('handles null and undefined', () => {
    expect(safeJsonLd({ a: null })).toBe('{"a":null}');
  });

  it('handles numbers and booleans', () => {
    expect(safeJsonLd({ n: 42, b: true })).toBe('{"n":42,"b":true}');
  });

  it('handles Unicode characters', () => {
    expect(safeJsonLd({ s: '日本語' })).toBe('{"s":"日本語"}');
  });

  it('handles empty object', () => {
    expect(safeJsonLd({})).toBe('{}');
  });

  it('handles empty array', () => {
    expect(safeJsonLd([])).toBe('[]');
  });

  it('escapes U+2028 and U+2029 line terminators', () => {
    expect(safeJsonLd({ s: '  ' })).toBe('{"s":"\\u2028\\u2029"}');
  });
});
