import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { vitePlugin } from 'braintrust/vite';
import { fileURLToPath } from 'node:url';

/**
 * Fix for a Vite 6 bug where ?inline CSS modules lack export default in SSR.
 * @see https://github.com/sveltejs/kit/issues/13175
 */
const cssInlineSSRFix: PluginOption = {
  name: 'css-inline-ssr-fix',
  transform(code, id) {
    if (id.includes('.css?inline')) {
      if (!code.includes('export default')) {
        return {
          code: `${code}\nexport default "";`,
          map: null
        };
      }
    }
  }
};

function braintrustBuildPlugin(command: string): PluginOption[] {
  if (command !== 'build') return [];
  const plugin = vitePlugin({});
  return Array.isArray(plugin) ? plugin : [plugin];
}

export default defineConfig(async ({ command }) => {
  const { workflowPlugin } = await import('workflow/sveltekit');

  return {
    plugins: [
      enhancedImages(),
      tailwindcss(),
      sveltekit(),
      workflowPlugin(),
      ...braintrustBuildPlugin(command),
      cssInlineSSRFix
    ],
    server: {
      watch: {
        ignored: ['**/src/routes/.well-known/workflow/**']
      }
    },
    resolve: {
      alias: {
        '@vercel/speed-insights/sveltekit': fileURLToPath(
          new URL('./node_modules/@vercel/speed-insights/dist/sveltekit/index.mjs', import.meta.url)
        )
      }
    }
  };
});
