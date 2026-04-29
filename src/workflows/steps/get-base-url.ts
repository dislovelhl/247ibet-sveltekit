export async function getBaseUrl(): Promise<string> {
	'use step';
	return (
		process.env.PUBLIC_SITE_URL?.trim() ||
		(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
		'https://247ibet.ca'
	);
}
