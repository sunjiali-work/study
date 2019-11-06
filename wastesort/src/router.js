import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Change from './views/Exchange.vue'
import Login from './views/Login.vue'

import Near from './views/Near.vue'
import ThrowTime from './views/ThrowTime';
import ProductDetail from './views/ProductDetail.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'home',
      component: Home
    },
    {
      path: '/throw',
      name: 'throw',
      component: ThrowTime
    },
    
    {
      path: '/near',
      name: 'Near',
      component: Near
    },
    {
      path: '/change',
      name: 'Change',
      component: Change
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {

      path: '/login',
      name: 'Login',
      component: Login
    },
    {

      path: '/prodetail',
      name: 'prodetail',
      component: ProductDetail
    },

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
