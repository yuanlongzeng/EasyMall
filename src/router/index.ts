import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/hello/:name',
    name: 'About',
    component: () => import('@c/About.vue')
  },
  {
    path: '/user/register',
    name: 'Register',
    component: () => import('views/user/Register.vue')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('views/user/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
