import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/apps',
  },
  {
    path: '/traffic',
    name: 'Tráfego Pago',
    component: () => import(/* webpackChunkName: "sites" */ '../views/PaidTraffic.vue'),
  },
  {
    path: '/logos',
    name: 'Design de Logos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "branding" */ '../views/DesignLogos.vue'),
  },
  {
    path: '/sites',
    name: 'Criação de Sites',
    component: () => import(/* webpackChunkName: "sites" */ '../views/Sites.vue'),
  },
  {
    path: '/apps',
    name: 'Aplicativos',
    component: () => import(/* webpackChunkName: "instagram" */ '../views/Apps.vue'),
  },
  {
    path: '/metaverse',
    name: 'Metaverso',
    component: () => import(/* webpackChunkName: "instagram" */ '../views/Metaverse.vue'),
  },
  {
    path: '/instagram-filters',
    name: 'Filtros para Instagram',
    component: () => import(/* webpackChunkName: "instagram" */ '../views/InstagramFilters.vue'),
  },
  {
    path: '/instagram-manager',
    name: 'Instagram Manager',
    component: () => import(/* webpackChunkName: "marketing" */ '../views/InstagramManager.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
