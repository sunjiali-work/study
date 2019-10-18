import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Login2 from './views/Login2.vue'
import Index from './views/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {

      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login2',
      name: 'Login2',
      component: Login2
    }

    /*    {
         path: '/',
         name: 'home',
         component: Home
       },
       */
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // } 
  ]
})
