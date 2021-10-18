import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/traffic',
    name: 'Tráfego Pago',
    component: () => import(/* webpackChunkName: "sites" */ '../views/PaidTraffic.vue'),
  },
  {
    path: '/apps',
    name: 'Criação de Apps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "apps" */ '../views/Apps.vue'),
  },
  {
    path: '/sites',
    name: 'Criação de Sites',
    component: () => import(/* webpackChunkName: "sites" */ '../views/Sites.vue'),
  },
  {
    path: '/instagram',
    name: 'Filtros para Instagram',
    component: () => import(/* webpackChunkName: "instagram" */ '../views/InstagramFilters.vue'),
  },
  {
    path: '/marketing',
    name: 'Makrketing Digital',
    component: () => import(/* webpackChunkName: "marketing" */ '../views/MarketingDigital.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
