import type { EEATScore } from '../../lib/workflows/types.js';

export async function scoreEEAT(path: string, html: string): Promise<EEATScore> {
  'use step';
  const author =
    /<meta\s[^>]*name=["']author["']/i.test(html) || /rel=["']author["']/i.test(html) ? 25 : 0;

  const date =
    /<time\s[^>]*datetime=/i.test(html) ||
    /<meta\s[^>]*property=["']article:published_time["']/i.test(html)
      ? 25
      : 0;

  const outboundPattern = /<a\s[^>]*href=["'](https?:\/\/(?!247ibet)[^"']+)["']/gi;
  let outboundCount = 0;
  while (outboundPattern.exec(html) !== null) {
    outboundCount++;
    if (outboundCount >= 5) break;
  }
  const citations = Math.min(outboundCount * 5, 25);

  const hasJsonLd = /<script\s[^>]*type=["']application\/ld\+json["']/i.test(html);
  const hasRichType = /"@type"\s*:\s*["'](Article|FAQPage|Review|HowTo)["']/i.test(html);
  const structuredData = hasRichType ? 25 : hasJsonLd ? 12 : 0;

  const directAnswer = /<h[12][^>]*>.*?<\/h[12]>\s*<p[^>]*>.{40,}<\/p>/is.test(html) ? 25 : 0;
  const tableData = /<table[^>]*>/i.test(html) ? 25 : 0;
  const summaryBox = /(class=["'][^"']*(summary|takeaway|standOut|whyCards|hero-cta)[^"']*["'])|(<aside[^>]*>)/i.test(html) ? 25 : 0;
  const faq = /(id=["']home-faq|class=["'][^"']*faq[^"']*["']|<details[^>]*>|FAQPage)/i.test(html) ? 25 : 0;

  const total = author + date + citations + structuredData + directAnswer + tableData + summaryBox + faq;

  return { path, author, date, citations, structuredData, directAnswer, tableData, summaryBox, faq, total };
}
