import { describe, it, expect } from 'vitest';
import { safeJsonLd } from '../src/lib/json-ld';

describe('safeJsonLd', () => {
  it('serializes a plain object', () => {
    const out = safeJsonLd({ a: 1, b: 'hi' });
    expect(
      JSON.parse(
        out
          .replace(/\\u003c/g, '<')
          .replace(/\\u003e/g, '>')
          .replace(/\\u0026/g, '&'),
      ),
    ).toEqual({ a: 1, b: 'hi' });
  });

  it('escapes < to prevent <script> breakout', () => {
    const out = safeJsonLd({ x: '</script><script>alert(1)</script>' });
    expect(out).not.toContain('</script>');
    expect(out).toContain('\\u003c');
  });

  it('escapes > and & alongside <', () => {
    const out = safeJsonLd({ x: '<>&' });
    expect(out).toContain('\\u003c');
    expect(out).toContain('\\u003e');
    expect(out).toContain('\\u0026');
    expect(out).not.toMatch(/[<>&]/);
  });

  it('escapes U+2028 and U+2029 for safe HTML embedding', () => {
    // JSON.stringify does not reliably escape these in all Node versions; safeJsonLd does it explicitly.
    const out = safeJsonLd({ x: '  ' });
    expect(out).toContain('\\u2028');
    expect(out).toContain('\\u2029');
  });

  it('handles arrays of schema objects', () => {
    const arr = [
      { '@context': 'https://schema.org', '@type': 'Organization', name: 'A' },
      { '@context': 'https://schema.org', '@type': 'WebSite', url: 'https://example.com' },
    ];
    const out = safeJsonLd(arr);
    expect(out.startsWith('[')).toBe(true);
    expect(out.endsWith(']')).toBe(true);
    expect(out).toContain('Organization');
  });

  it('returns valid escaped JSON for a typical FAQ schema', () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is <X> safe?',
          acceptedAnswer: { '@type': 'Answer', text: 'A & B' },
        },
      ],
    };
    const out = safeJsonLd(schema);
    expect(out).not.toMatch(/[<>&]/);
    // Round-trip via inverse replacements should produce equivalent JSON.
    const decoded = out
      .replace(/\\u003c/g, '<')
      .replace(/\\u003e/g, '>')
      .replace(/\\u0026/g, '&');
    expect(JSON.parse(decoded)).toEqual(schema);
  });
});
