import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mint-ui模块
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入vant模块
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 在Vue中注册mint-ui
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
