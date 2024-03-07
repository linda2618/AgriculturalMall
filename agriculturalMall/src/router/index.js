import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/PreviewIndex/index.vue'),
    },
     {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('../views/PreviewIndex/ProductDetail.vue'),
      }
  ]
})

export default router
