import type { EEATScore, GeoPageFailure, GeoResult } from '../lib/workflows/types.js';
import { PAGE_REGISTRY } from '../lib/workflows/pages.js';
import { getBaseUrl } from './steps/get-base-url.js';
import { fetchPageHtml } from './steps/fetch-page-html.js';
import { scoreEEAT } from './steps/score-eeat.js';
import { writeReport } from './steps/write-report.js';

export async function geoOptimizerWorkflow(): Promise<GeoResult> {
  'use workflow';
  const generatedAt = new Date().toISOString();
  const baseUrl = await getBaseUrl();
  const commit = (typeof process !== 'undefined' && process.env.VERCEL_GIT_COMMIT_SHA) || undefined;

  const results = await Promise.allSettled(
    PAGE_REGISTRY.map(async (page) => {
      const html = await fetchPageHtml(page.path, baseUrl);
      const score = await scoreEEAT(page.path, html);
      return { page, score };
    }),
  );

  const scores: EEATScore[] = [];
  const recommendations: string[] = [];
  const failures: GeoPageFailure[] = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const page = PAGE_REGISTRY[i];
    if (result.status === 'rejected') {
      failures.push({
        path: page.path,
        reason: 'page fetch failed',
      });
      continue;
    }
    const { score } = result.value;
    scores.push(score);
    if (score.author === 0) recommendations.push(`Add <meta name="author"> to ${page.path}`);
    if (score.date === 0) recommendations.push(`Add <time datetime="..."> to ${page.path}`);
    if (score.structuredData === 0)
      recommendations.push(`Add JSON-LD structured data to ${page.path}`);
    if (score.directAnswer === 0)
      recommendations.push(`Add a direct answer (<p>) immediately following the main heading on ${page.path}`);
    if (score.tableData === 0)
      recommendations.push(`Add a data table to summarize structured information on ${page.path}`);
    if (score.summaryBox === 0)
      recommendations.push(`Add a Key Takeaways or Summary box to ${page.path}`);
    if (score.faq === 0 && page.hasFaq)
      recommendations.push(`Add an FAQ section with Q&A pairs to ${page.path}`);
  }

  const avgScore =
    scores.length > 0 ? Math.round(scores.reduce((sum, s) => sum + s.total, 0) / scores.length) : 0;

  const lines = [
    `# 247iBET — LLM-Friendly Sitemap`,
    `# Canada's regulated iGaming authority`,
    ``,
    ...PAGE_REGISTRY.map((p) => `- ${baseUrl}${p.path === '/' ? '' : p.path} — tier:${p.tier}`),
    ``,
    `# Updated: ${generatedAt}`,
  ];

  const result: GeoResult = {
    generatedAt,
    version: '1.0',
    commit,
    scores,
    avgScore,
    recommendations,
    failures,
    llmsTxtProposed: lines.join('\n'),
  };

  const { writeFile } = await import('fs/promises');
  const { resolve } = await import('path');
  await writeFile(resolve('static/llms.txt'), result.llmsTxtProposed, 'utf-8');

  await writeReport('geo', `geo-${generatedAt.slice(0, 10)}.json`, result);
  return result;
}
