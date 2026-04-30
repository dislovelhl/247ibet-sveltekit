import { describe, it, expect } from 'vitest';
import { scoreEEAT } from '../src/workflows/steps/score-eeat';

describe('scoreEEAT', () => {
  it('returns zero score for an empty document', async () => {
    const r = await scoreEEAT('/x', '');
    expect(r).toEqual({
      path: '/x',
      author: 0,
      date: 0,
      citations: 0,
      structuredData: 0,
      directAnswer: 0,
      tableData: 0,
      summaryBox: 0,
      faq: 0,
      total: 0,
    });
  });

  it('awards 25 for an author meta tag', async () => {
    const r = await scoreEEAT('/x', '<meta name="author" content="Jane">');
    expect(r.author).toBe(25);
  });

  it('awards 25 for a rel="author" link', async () => {
    const r = await scoreEEAT('/x', '<a rel="author" href="/about">Jane</a>');
    expect(r.author).toBe(25);
  });

  it('awards 25 for a <time datetime> element', async () => {
    const r = await scoreEEAT('/x', '<time datetime="2026-01-01">today</time>');
    expect(r.date).toBe(25);
  });

  it('awards 25 for an article:published_time meta tag', async () => {
    const r = await scoreEEAT('/x', '<meta property="article:published_time" content="2026">');
    expect(r.date).toBe(25);
  });

  it('counts up to 5 outbound non-247ibet links @ 5 points each', async () => {
    const html = `
      <a href="https://example.com">a</a>
      <a href="https://other.com">b</a>
      <a href="https://247ibet.ca/internal">internal</a>
      <a href="https://three.com">c</a>
    `;
    const r = await scoreEEAT('/x', html);
    expect(r.citations).toBe(15);
  });

  it('caps citations at 25', async () => {
    const html = Array.from({ length: 10 }, (_, i) => `<a href="https://e${i}.com">x</a>`).join('');
    const r = await scoreEEAT('/x', html);
    expect(r.citations).toBe(25);
  });

  it('awards 12 for plain JSON-LD without rich type', async () => {
    const r = await scoreEEAT('/x', '<script type="application/ld+json">{"foo":"bar"}</script>');
    expect(r.structuredData).toBe(12);
  });

  it('awards 25 when JSON-LD declares Article / FAQPage / Review / HowTo', async () => {
    for (const t of ['Article', 'FAQPage', 'Review', 'HowTo']) {
      const html = `<script type="application/ld+json">{"@type":"${t}"}</script>`;
      const r = await scoreEEAT('/x', html);
      expect(r.structuredData).toBe(25);
    }
  });

  it('total equals sum of components', async () => {
    const html = `
      <meta name="author" content="A">
      <time datetime="2026-01-01"></time>
      <a href="https://example.com">x</a>
      <script type="application/ld+json">{"@type":"Article"}</script>
    `;
    const r = await scoreEEAT('/p', html);
    expect(r.total).toBe(r.author + r.date + r.citations + r.structuredData + r.directAnswer + r.tableData + r.summaryBox + r.faq);
    expect(r.total).toBe(25 + 25 + 5 + 25);
  });

  it('awards 25 for a direct answer following a heading', async () => {
    const html = '<h1>Title</h1><p>This is a direct answer of sufficient length to be captured by the regex.</p>';
    const r = await scoreEEAT('/x', html);
    expect(r.directAnswer).toBe(25);
  });

  it('awards 25 for a table element', async () => {
    const html = '<table><tr><td>Data</td></tr></table>';
    const r = await scoreEEAT('/x', html);
    expect(r.tableData).toBe(25);
  });

  it('awards 25 for a summary box element', async () => {
    const html = '<div class="summary">Key takeaways here</div>';
    const r = await scoreEEAT('/x', html);
    expect(r.summaryBox).toBe(25);
  });

  it('awards 25 for an FAQ section', async () => {
    const html = '<div id="home-faq-panel-1">Answer</div>';
    const r = await scoreEEAT('/x', html);
    expect(r.faq).toBe(25);
  });

  it('threads the path through unchanged', async () => {
    const r = await scoreEEAT('/some/deep/path', '');
    expect(r.path).toBe('/some/deep/path');
  });
});
