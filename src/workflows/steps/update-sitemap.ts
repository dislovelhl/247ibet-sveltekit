import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * Updates the static/llms.txt file with the proposed sitemap content.
 * This is a 'use step' to ensure it's idempotent and handled by the workflow runner.
 */
export async function updateSitemap(content: string): Promise<void> {
  'use step';
  const filePath = resolve('static/llms.txt');
  await writeFile(filePath, content, 'utf-8');
}
