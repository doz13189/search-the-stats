import { createWebHistory, createRouter } from 'vue-router';

import Search from '@/views/Search.vue';
import Stats from '@/views/Stats.vue';
import NotFound from '@/views/NotFound.vue';

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
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
