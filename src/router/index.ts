import { createWebHistory, createRouter } from 'vue-router';

import Search from '@/views/pages/Search.vue';
import Stats from '@/views/pages/Stats.vue';
import Sandbox from '@/views/Sandbox.vue';
// import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/stats/:playerId',
    component: Stats,
    name: 'Stats',
    props: true
  },
  {
    path: '/sandbox',
    component: Sandbox,
    name: 'Sandbox'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
