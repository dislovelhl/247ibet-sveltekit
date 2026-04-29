import type { FAQItem } from '../../lib/workflows/types.js';

export async function parseSvelteFaq(slug: string): Promise<FAQItem[]> {
  'use step';
  const { readFile } = await import('fs/promises');
  const { resolve } = await import('path');
  const routePath = slug === 'home' ? '' : slug;
  const filePath = resolve(`src/routes/${routePath}/+page.svelte`);

  let source: string;
  try {
    source = await readFile(filePath, 'utf-8');
  } catch {
    return [];
  }

  const items: FAQItem[] = [];
  const h3Pattern = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h[123]|$)/gi;
  let match: RegExpExecArray | null;

  while ((match = h3Pattern.exec(source)) !== null) {
    const question = stripHtml(match[1]).trim();
    const answer = stripHtml(match[2]).trim();
    if (question.length < 10 || answer.length < 20) continue;
    items.push({ question, answer });
    if (items.length >= 10) break;
  }

  return items;
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
