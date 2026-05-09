import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    csp: {
      mode: 'auto',
      directives: {
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
        'report-uri': process.env.CSP_REPORT_URI ? [process.env.CSP_REPORT_URI] : []
      }
    },
    adapter: adapter({
      runtime: 'nodejs24.x',
      images: {
        sizes: [320, 640, 768, 960, 1280, 1672, 1920],
        domains: [],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
      },
    }),
    alias: {},
  },
};

export default config;
