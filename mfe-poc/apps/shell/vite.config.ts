import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'shell',
      remotes: {
        kyc: {
          external: 'Promise.resolve(window.__REMOTE_CONFIG__.kyc)',
          externalType: 'promise'
        }
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
