import { createWebHistory, createRouter } from 'vue-router';

import Search from '@/views/Search.vue';
import Stats from '@/views/Stats.vue';

const routes = [
  {
    path: '/',
    component: Search,
  },
  {
    path: '/stats/:playerId',
    component: Stats,
    name: 'Stats',
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
