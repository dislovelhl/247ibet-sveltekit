import type { RequestHandler } from './$types';
import { SITE } from '$lib/site';

/** Serve a robots.txt that allows crawling for core SEO pages while blocking admin/internal routes. */
export const GET: RequestHandler = async () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    'Disallow: /admin/',
    'Disallow: /api/',
    'Disallow: /lab/',
    'Disallow: /design-system/',
    'Disallow: /handler/',
    'Disallow: /search',
    '',
    `Sitemap: ${SITE.url}/sitemap.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
