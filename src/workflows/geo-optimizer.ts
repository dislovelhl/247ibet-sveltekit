import type { GeoPageFailure, GeoResult } from '$lib/workflows/types.js';
import { PAGE_REGISTRY } from '$lib/workflows/pages.js';
import { getBaseUrl } from './steps/get-base-url.js';
import { fetchPageHtml } from './steps/fetch-page-html.js';
import { scoreEEAT } from './steps/score-eeat.js';
import { writeReport } from './steps/write-report.js';

export async function geoOptimizerWorkflow(): Promise<GeoResult> {
	'use workflow';
	const generatedAt = new Date().toISOString();
	const baseUrl = await getBaseUrl();
	const commit =
		(typeof process !== 'undefined' && process.env.VERCEL_GIT_COMMIT_SHA) || undefined;
	const scores = [];
	const recommendations: string[] = [];
	const failures: GeoPageFailure[] = [];

	for (const page of PAGE_REGISTRY) {
		try {
			const html = await fetchPageHtml(page.path, baseUrl);
			const score = await scoreEEAT(page.path, html);
			scores.push(score);
			if (score.author === 0) recommendations.push(`Add <meta name="author"> to ${page.path}`);
			if (score.date === 0)
				recommendations.push(`Add <time datetime="..."> to ${page.path}`);
			if (score.structuredData === 0)
				recommendations.push(`Add JSON-LD structured data to ${page.path}`);
		} catch (err) {
			failures.push({
				path: page.path,
				reason: err instanceof Error ? err.message : String(err)
			});
		}
	}

	const avgScore =
		scores.length > 0
			? Math.round(scores.reduce((sum, s) => sum + s.total, 0) / scores.length)
			: 0;

	const lines = [
		`# 247iBET — LLM-Friendly Sitemap`,
		`# Canada's regulated iGaming authority`,
		``,
		...PAGE_REGISTRY.map(
			(p) => `- ${baseUrl}${p.path === '/' ? '' : p.path} — tier:${p.tier}`
		),
		``,
		`# Updated: ${generatedAt}`
	];

	const result: GeoResult = {
		generatedAt,
		version: '1.0',
		commit,
		scores,
		avgScore,
		recommendations,
		failures,
		llmsTxtProposed: lines.join('\n')
	};

	await writeReport('geo', `geo-${generatedAt.slice(0, 10)}.json`, result);
	return result;
}
