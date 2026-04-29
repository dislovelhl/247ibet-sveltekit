export async function fetchPageHtml(path: string, baseUrl: string): Promise<string> {
	'use step';
	const url = baseUrl.replace(/\/$/, '') + path;
	const response = await fetch(url, {
		headers: { 'User-Agent': '247iBET-SEO-Audit/1.0' },
		signal: AbortSignal.timeout(15000)
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status} fetching ${url}`);
	}

	return response.text();
}
