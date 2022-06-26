import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
