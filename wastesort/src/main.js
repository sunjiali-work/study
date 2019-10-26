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
import BaiduMap from 'vue-baidu-map'; //使用百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'tefv1GFSbi8d4m15D7Rx55H832RGOzCS'
});

Vue.use(Vant);

// 在Vue中注册mint-ui
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
