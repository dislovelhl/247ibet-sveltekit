import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';

// Use defineAsyncComponent to provide error boundaries and loading states
const KycApp = defineAsyncComponent({
  loader: async () => {
    try {
      const module = await import('kyc/KycApp');
      return module;
    } catch (err) {
      // Telemetry event here
      console.error('[Telemetry] Failed to load KYC remote', err);
      throw err;
    }
  },
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  timeout: 5000 // 5 seconds timeout
});

const Home = { template: '<div><h2>Dashboard</h2><p>Welcome to the Member Shell.</p></div>' };

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/kyc', component: KycApp }
  ]
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
