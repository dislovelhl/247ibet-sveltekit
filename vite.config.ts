import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import { tailwindcss } from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { vitePlugin } from 'braintrust/vite';

/**
 * Fix for a Vite 6 bug where ?inline CSS modules lack export default in SSR.
 * @see https://github.com/sveltejs/kit/issues/13175
 */
const cssInlineSSRFix: PluginOption = {
  name: 'css-inline-ssr-fix',
  transform(code, id) {
    if (id.endsWith('.css?inline') && !code.includes('export default')) {
      return {
        code: `${code}\nexport default "";`,
        map: null
      };
    }
  }
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
      ...workflowPlugins,
      ...braintrustBuildPlugin(command),
      cssInlineSSRFix
    ]
  };
});
