import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import KycApp from './KycApp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/kyc',
      component: KycApp
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/kyc'
    }
  ]
});

const app = createApp(KycApp);
app.use(createPinia());
app.use(router);
app.mount('#app');
