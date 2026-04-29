import { describe, it, expect } from 'vitest';
import { safeJsonLd, jsonLdScriptHtml } from '../src/lib/json-ld';

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
    const out = safeJsonLd({ x: '\u2028\u2029' });
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

describe('jsonLdScriptHtml', () => {
  // Regression: the previous implementation rendered the script via Svelte's
  // <svelte:element this={scriptTag}>{@html ...}</svelte:element> pattern, which
  // emitted hydration anchor comments inside the <script> body. The browser parsed
  // those comments as script text content; Svelte then failed to find them as
  // Comment nodes during hydration and logged hydration_mismatch on every page
  // that rendered structured data.
  it('returns a single complete <script> element', () => {
    const out = jsonLdScriptHtml({ a: 1 });
    expect(out.startsWith('<script type="application/ld+json">')).toBe(true);
    expect(out.endsWith('</script>')).toBe(true);
  });

  it('places no comment markers inside the script body', () => {
    const out = jsonLdScriptHtml({ a: 1, b: [2, 3] });
    const body = out.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
    expect(body).not.toContain('<!--');
    expect(body).not.toContain('-->');
  });

  it('round-trips the schema through the script body', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'X' };
    const out = jsonLdScriptHtml(schema);
    const body = out.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
    const decoded = body
      .replace(/\\u003c/g, '<')
      .replace(/\\u003e/g, '>')
      .replace(/\\u0026/g, '&');
    expect(JSON.parse(decoded)).toEqual(schema);
  });

  it('escapes a </script> payload so the element cannot be broken out of', () => {
    const out = jsonLdScriptHtml({ x: '</script><script>alert(1)</script>' });
    // The literal closing tag must appear exactly once — the trailing one we emit.
    expect(out.match(/<\/script>/g)?.length).toBe(1);
  });
});
