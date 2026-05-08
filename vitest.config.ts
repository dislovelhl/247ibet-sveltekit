import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    conditions: ['browser'],
    alias: {
      $lib: resolve(__dirname, 'src/lib'),
      $app: resolve(__dirname, 'tests/.stubs/app'),
      '$env/dynamic/public': resolve(__dirname, 'tests/.stubs/env/dynamic/public'),
    },
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['src/lib/**/*.ts', 'src/workflows/**/*.ts'],
      exclude: [
        '**/*.d.ts',
        '**/types.ts',
        // Workflow orchestrators use the 'use workflow' directive and run inside the
        // workflow runtime — exercised by integration runs, not unit tests.
        'src/workflows/aeo-schema.ts',
        'src/workflows/geo-optimizer.ts',
        'src/workflows/seo-audit.ts',
      ],
      reporter: ['text', 'text-summary'],
    },
  },
});
