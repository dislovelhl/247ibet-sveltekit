import type { SeoAuditResult, SeoIssue, SeoPageReport } from '$lib/workflows/types.js';
import { PAGE_REGISTRY } from '$lib/workflows/pages.js';
import { fetchPageHtml } from './steps/fetch-page-html.js';
import { writeReport } from './steps/write-report.js';

async function getBaseUrl(): Promise<string> {
	'use step';
	return (
		process.env.PUBLIC_SITE_URL?.trim() ||
		(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
		'https://247ibet.ca'
	);
}

export async function seoAuditWorkflow(): Promise<SeoAuditResult> {
	'use workflow';
	const generatedAt = new Date().toISOString();
	const baseUrl = await getBaseUrl();
	const commit =
		(typeof process !== 'undefined' && process.env.VERCEL_GIT_COMMIT_SHA) || undefined;
	const pages: SeoPageReport[] = [];

	for (const page of PAGE_REGISTRY) {
		const issues: SeoIssue[] = [];
		let title: string | undefined;
		let description: string | undefined;
		let canonical: string | undefined;
		let h1Count = 0;
		let jsonLdCount = 0;

		try {
			const html = await fetchPageHtml(page.path, baseUrl);

			const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
			title = titleMatch ? titleMatch[1].trim() : undefined;
			if (!title) {
				issues.push({ rule: 'missing-title', severity: 'error' });
			} else if (title.length < 30) {
				issues.push({ rule: 'short-title', severity: 'warn', detail: `${title.length} chars` });
			}

			const descMatch =
				html.match(/<meta\s[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
				html.match(/<meta\s[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
			description = descMatch ? descMatch[1] : undefined;
			if (!description) issues.push({ rule: 'missing-description', severity: 'warn' });

			const canonicalMatch =
				html.match(/<link\s[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
				html.match(/<link\s[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
			canonical = canonicalMatch ? canonicalMatch[1] : undefined;
			if (!canonical) issues.push({ rule: 'missing-canonical', severity: 'error' });

			if (!/<meta\s[^>]*property=["']og:/i.test(html)) {
				issues.push({ rule: 'missing-og', severity: 'warn' });
			}

			const h1Matches = html.match(/<h1[\s>]/gi);
			h1Count = h1Matches ? h1Matches.length : 0;
			if (h1Count > 1)
				issues.push({ rule: 'multiple-h1', severity: 'warn', detail: `${h1Count} H1 tags` });

			const jsonLdMatches = html.match(/<script\s[^>]*type=["']application\/ld\+json["']/gi);
			jsonLdCount = jsonLdMatches ? jsonLdMatches.length : 0;
			if (jsonLdCount === 0) issues.push({ rule: 'missing-jsonld', severity: 'error' });
		} catch (err) {
			issues.push({
				rule: 'missing-title',
				severity: 'error',
				detail: `Fetch failed: ${err instanceof Error ? err.message : String(err)}`
			});
		}

		pages.push({ path: page.path, title, description, canonical, h1Count, jsonLdCount, issues });
	}

	const summary = {
		totalPages: pages.length,
		totalIssues: pages.reduce((n, p) => n + p.issues.length, 0),
		errorCount: pages.reduce(
			(n, p) => n + p.issues.filter((i) => i.severity === 'error').length,
			0
		),
		warnCount: pages.reduce(
			(n, p) => n + p.issues.filter((i) => i.severity === 'warn').length,
			0
		)
	};

	const result: SeoAuditResult = {
		generatedAt,
		version: '1.0',
		baseUrl,
		commit,
		pages,
		summary
	};
	await writeReport('seo', `audit-${generatedAt.slice(0, 10)}.json`, result);
	return result;
}
