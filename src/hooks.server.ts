import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// CSP configuration matching svelte.config.js but in Report-Only mode for testing/audit
	const cspDirectives = {
		'default-src': ["'none'"],
		'img-src': ["'self'", 'data:', 'https:'],
		'media-src': ["'self'"],
		'script-src': ["'self'", "'strict-dynamic'", 'https://va.vercel-scripts.com'],
		'style-src': ["'self'", "'unsafe-inline'"],
		'font-src': ["'self'", 'data:', 'https:'],
		'connect-src': ["'self'", 'https://vitals.vercel-insights.com', 'https://*.sentry.io', 'https://boapi.ibet247.ca'],
		'frame-src': ["'none'"],
		'object-src': ["'none'"],
		'base-uri': ["'none'"],
		'form-action': ["'self'"],
	};

	const cspHeader = Object.entries(cspDirectives)
		.map(([key, values]) => `${key} ${values.join(' ')}`)
		.join('; ');

	// Set the Report-Only header
	response.headers.set('Content-Security-Policy-Report-Only', cspHeader);

	return response;
};
