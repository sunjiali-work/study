import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Change from './views/Exchange.vue'
import Login from './views/Login.vue'

import Index from './views/Index.vue'
import Product from './components/home/Discuss.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/icon',
      name: 'Product',
      component: Product
    },
    {
      path: '/change',
      name: 'Change',
      component: Change
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
