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

const UNSAFE_CHARS = /[<>&\u2028\u2029]/g;
const JSON_LD_SCRIPT_CLOSE = '</script>';

export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(UNSAFE_CHARS, (c) => ESCAPES[c]);
}

// Build a complete <script type="application/ld+json"> element as a single HTML string.
// JsonLd.svelte renders this as raw HTML outside <svelte:head>; Svelte head
// hydration markers inside script bodies are parsed as text and can break hydration.
export function jsonLdScriptHtml(schema: unknown): string {
  return `<script type="application/ld+json">${safeJsonLd(schema)}${JSON_LD_SCRIPT_CLOSE}`;
}
