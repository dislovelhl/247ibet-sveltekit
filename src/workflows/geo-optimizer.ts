import type { EEATScore, GeoPageFailure, GeoResult } from '../lib/workflows/types.js';
import { PAGE_REGISTRY } from '../lib/workflows/pages.js';
import { getBaseUrl } from './steps/get-base-url.js';
import { fetchPageHtml } from './steps/fetch-page-html.js';
import { scoreEEAT } from './steps/score-eeat.js';
import { writeReport } from './steps/write-report.js';
import { updateSitemap } from './steps/update-sitemap.js';

export function buildLlmsTxtProposed(baseUrl: string, generatedAt: string): string {
  const lines = [
    `# 247iBET — Canadian iGaming Public Web Guide`,
    `# Public brand, SEO, acquisition, compliance-content, and integration shell for a separate gaming platform.`,
    `# No-documentary-proof public-web mode: verify operator status against official regulator sources before relying on licence claims.`,
    ``,
    ...PAGE_REGISTRY.map((p) => `- ${baseUrl}${p.path === '/' ? '' : p.path} — tier:${p.tier}`),
    ``,
    `# Updated: ${generatedAt}`,
  ];

  return lines.join('\n');
}

export async function geoOptimizerWorkflow(): Promise<GeoResult> {
  'use workflow';
  const generatedAt = new Date().toISOString();
  const baseUrl = await getBaseUrl();
  const commit = (typeof process !== 'undefined' && process.env.VERCEL_GIT_COMMIT_SHA) || undefined;

  // Robustness: Use a batch size to avoid hitting rate limits or consuming too much memory
  const batchSize = 5;
  const results: Array<
    PromiseSettledResult<{ page: (typeof PAGE_REGISTRY)[0]; score: EEATScore }>
  > = [];

  for (let i = 0; i < PAGE_REGISTRY.length; i += batchSize) {
    const batch = PAGE_REGISTRY.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map(async (page) => {
        const html = await fetchPageHtml(page.path, baseUrl);
        const score = await scoreEEAT(page.path, html);
        return { page, score };
      }),
    );
    results.push(...batchResults);
  }

  const scores: EEATScore[] = [];
  const recommendations: string[] = [];
  const failures: GeoPageFailure[] = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const page = PAGE_REGISTRY[i];
    if (result.status === 'rejected') {
      failures.push({
        path: page.path,
        reason: result.reason instanceof Error ? result.reason.message : 'page fetch failed',
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
      recommendations.push(
        `Add a direct answer (<p>) immediately following the main heading on ${page.path}`,
      );
    if (score.tableData === 0)
      recommendations.push(`Add a data table to summarize structured information on ${page.path}`);
    if (score.summaryBox === 0)
      recommendations.push(`Add a Key Takeaways or Summary box to ${page.path}`);
    if (score.faq === 0 && page.hasFaq)
      recommendations.push(`Add an FAQ section with Q&A pairs to ${page.path}`);
  }

  const avgScore =
    scores.length > 0 ? Math.round(scores.reduce((sum, s) => sum + s.total, 0) / scores.length) : 0;

  const result: GeoResult = {
    generatedAt,
    version: '1.0',
    commit,
    scores,
    avgScore,
    recommendations,
    failures,
    llmsTxtProposed: buildLlmsTxtProposed(baseUrl, generatedAt),
  };

  // Move side effect into a step
  await updateSitemap(result.llmsTxtProposed);

  await writeReport('geo', `geo-${generatedAt.slice(0, 10)}.json`, result);
  return result;
}
