import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { vitePlugin } from 'braintrust/vite';
import { defineConfig, type Plugin, type PluginOption } from 'vite';

// In Vite 6 SSR mode, ?inline CSS modules may not produce `export default "css"`
// causing Kit's inline_styles pipeline to store a non-string, non-function value
// which then throws TypeError at render.js:286. This plugin ensures the default
// export is always a CSS string.
//
// The naive fallback `export default <whole-code>` would stringify a JS HMR
// wrapper produced by upstream plugins (containing `__vite__updateStyle` etc.),
// not the actual CSS — that broke style injection at runtime. We extract the
// real CSS literal first and only fall back to the raw code if no wrapper is
// detected.
const CSS_LITERAL_RE = /const\s+__vite__css\s*=\s*("(?:\\.|[^"\\])*")/;
const cssInlineSSRFix: Plugin = {
  name: 'css-inline-ssr-fix',
  enforce: 'post',
  transform(code, id, options) {
    if (!options?.ssr) return;
    if (!/[?&]inline\b/.test(id)) return;
    if (code.includes('export default')) return;
    const match = code.match(CSS_LITERAL_RE);
    const cssExport = match ? match[1] : JSON.stringify(code);
    return { code: `export default ${cssExport};`, map: null };
  },
};

function braintrustBuildPlugin(command: string): PluginOption[] {
  if (command !== 'build') return [];
  const plugin = vitePlugin({});
  return Array.isArray(plugin) ? plugin : [plugin];
}

export default defineConfig(async ({ command }) => {
  // Workflow plugin only runs in build. In dev it watches files it generates
  // itself, triggering a rebuild loop that prevents Vite from settling and
  // breaks CSS injection.
  let workflowPlugins: PluginOption[] = [];
  if (command === 'build') {
    const { workflowPlugin } = await import('workflow/sveltekit');
    workflowPlugins = workflowPlugin();
  }
  return {
    plugins: [
      enhancedImages(),
      tailwindcss(),
      sveltekit(),
      // ...workflowPlugins,
      ...braintrustBuildPlugin(command),
      cssInlineSSRFix,
    ],
  };
});
