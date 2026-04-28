import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      images: {
        sizes: [320, 640, 768, 960, 1280, 1672, 1920],
        domains: [],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000
      }
    }),
    alias: {}
  }
};

export default config;
