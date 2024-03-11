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
      children: [
        {
          path: '/preview/shopCar',
          name: 'shopCar',
          component: () => import('../views/PreviewIndex/ShoppingCar.vue')
        },
        {
          path: '/preview/collect',
          name: 'collect',
          component: () => import('../views/PreviewIndex/Collect.vue')
        },
        {
          path: '/preview/profile',
          name: 'profile',
          component: () => import('../views/PreviewIndex/YouProfile.vue')
        },
        {
          path: '/preview/connect',
          name: 'connect',
          direction: '/preview/connect/manService',
          component: () => import('../views/PreviewIndex/Connection/ManService.vue'),
          children: [
            {
              path: '/preview/connect/manService',
              name: 'manService',
              component: () => import('../views/PreviewIndex/Connection/ManService.vue'),
            },
            {
              path: '/preview/connect/feedback',
              name: 'feedback',
              component: () => import('../views/PreviewIndex/Connection/Feedback.vue'),
            },
          ]
        },

      ]
    },
     {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('../views/PreviewIndex/ProductDetail.vue'),
      }
  ]
})

export default router
