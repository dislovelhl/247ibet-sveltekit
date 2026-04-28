import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { vitePlugin } from 'braintrust/vite';
import { defineConfig, type Plugin } from 'vite';

// In Vite 6 SSR mode, ?inline CSS modules may not produce `export default "css"`
// causing Kit's inline_styles pipeline to store a non-string, non-function value
// which then throws TypeError at render.js:286. This plugin ensures the default
// export is always a CSS string.
const cssInlineSSRFix: Plugin = {
  name: 'css-inline-ssr-fix',
  enforce: 'post',
  transform(code, id, options) {
    if (!options?.ssr) return;
    if (!/[?&]inline\b/.test(id)) return;
    if (code.includes('export default')) return;
    return { code: `export default ${JSON.stringify(code)}`, map: null };
  }
};

export default defineConfig({
  plugins: [tailwindcss(), vitePlugin(), sveltekit(), cssInlineSSRFix]
});
