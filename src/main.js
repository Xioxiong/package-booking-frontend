import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
const vueStore = new Vuex.Store(store)
Vue.use(Antd)
Vue.use(Vuex)

new Vue({
  router,
  store:vueStore,
  render: h => h(App)
}).$mount('#app')
