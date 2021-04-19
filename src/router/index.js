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
      },
      {
        path: '/pwdSetting',
        name: 'PwdSetting',
        component: () => import('../views/PwdSetting.vue'),
        meta: {requiredAuth: true}
      },

      {
        path: '/transfer',
        name: 'Transfer',
        component: () => import('../views/Transfer.vue'),
        meta: {requiredAuth: false}
      },

      {
        path: '/orderQuery',
        name: 'OrderQuery',
        component: () => import('../views/OrderQuery.vue'),
        meta: {requiredAuth: false}
      },

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



  // vue 3写法
  {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由拦截器
router.beforeEach((to,from,next) =>{
  if(to.meta.requiredAuth){
    if(Boolean(sessionStorage.getItem("uid"))){
      next();
    }else {
      next({
        path: '/',
      })
    }
  }else {
    next();
  }
});

export default router
