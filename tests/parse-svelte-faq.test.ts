import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { parseSvelteFaq } from '../src/workflows/steps/parse-svelte-faq';

const ORIGINAL_CWD = process.cwd();

describe('parseSvelteFaq', () => {
  let workdir: string;

  beforeEach(async () => {
    workdir = await mkdtemp(join(tmpdir(), 'parse-faq-'));
    process.chdir(workdir);
  });

  afterEach(async () => {
    process.chdir(ORIGINAL_CWD);
    await rm(workdir, { recursive: true, force: true });
  });

  it('returns an empty array when the page file is missing', async () => {
    const items = await parseSvelteFaq('not-a-real-page');
    expect(items).toEqual([]);
  });

  it('extracts h3 question/answer pairs from a +page.svelte', async () => {
    await mkdir('src/routes/x', { recursive: true });
    const html = `
      <h3>How long do withdrawals take at 247iBET?</h3>
      <p>Most Interac e-Transfer withdrawals land within fifteen minutes.</p>
      <h3>What is the minimum deposit?</h3>
      <p>The minimum deposit at 247iBET is twenty Canadian dollars.</p>
    `;
    await writeFile('src/routes/x/+page.svelte', html, 'utf-8');

    const items = await parseSvelteFaq('x');
    expect(items.length).toBe(2);
    expect(items[0].question).toContain('withdrawals take');
    expect(items[0].answer).toContain('Interac');
  });

  it('decodes basic HTML entities in question and answer', async () => {
    await mkdir('src/routes/y', { recursive: true });
    const html = `
      <h3>Is Q&amp;A safe?</h3>
      <p>Yes &mdash; the answer is &quot;safe&quot; and clearly documented here.</p>
    `;
    await writeFile('src/routes/y/+page.svelte', html, 'utf-8');

    const items = await parseSvelteFaq('y');
    expect(items.length).toBe(1);
    expect(items[0].question).toContain('Q&A');
    expect(items[0].answer).toContain('"safe"');
  });

  it('ignores too-short matches', async () => {
    await mkdir('src/routes/z', { recursive: true });
    await writeFile('src/routes/z/+page.svelte', '<h3>Q?</h3><p>A.</p>', 'utf-8');
    const items = await parseSvelteFaq('z');
    expect(items).toEqual([]);
  });

  it('caps results at 10 items', async () => {
    await mkdir('src/routes/many', { recursive: true });
    const blocks = Array.from(
      { length: 15 },
      (_, i) =>
        `<h3>Question number ${i} for the registry?</h3><p>This is a long enough answer for entry ${i} to pass the validator.</p>`,
    ).join('');
    await writeFile('src/routes/many/+page.svelte', blocks, 'utf-8');

    const items = await parseSvelteFaq('many');
    expect(items.length).toBe(10);
  });

  it('uses an empty path segment when slug is "home"', async () => {
    // home → src/routes/+page.svelte (no slug segment)
    await mkdir('src/routes', { recursive: true });
    await writeFile(
      'src/routes/+page.svelte',
      '<h3>Welcome to the 247iBET site?</h3><p>This is the homepage and the body is plenty long.</p>',
      'utf-8',
    );
    const items = await parseSvelteFaq('home');
    expect(items.length).toBe(1);
  });
});
