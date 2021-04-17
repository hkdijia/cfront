import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children : [
      {
        path:'/dashboard',
        name:'Dashboard',
        component: () => import('../views/Dashboard.vue'),
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/403',
    name: '403',
    component: () => import('../views/403.vue')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },

  // {
  //   path: '*',
  //   redirect:'/404'
  // },

  {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
