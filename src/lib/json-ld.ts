// Serialize a value as JSON-LD safe for inline embedding in <script type="application/ld+json">.
// Escapes < > & to prevent script-tag breakout, plus U+2028/U+2029 to keep the payload safe
// even if a downstream tool treats it as JavaScript instead of JSON.
const ESCAPES: Record<string, string> = {
  '<': '\\u003c',
  '>': '\\u003e',
  '&': '\\u0026',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (c) => ESCAPES[c]);
}
