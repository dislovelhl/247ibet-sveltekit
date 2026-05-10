import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'kyc',
      filename: 'remoteEntry.js',
      exposes: {
        './KycApp': './src/KycApp.vue',
        './routes': './src/routes.ts'
      },
      shared: {
        vue: { singleton: true },
        'vue-router': { singleton: true },
        pinia: { singleton: true }
      }
    })
  ],
  build: {
    target: 'esnext'
  }
});
