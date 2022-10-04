import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// import ElementUI from 'element-ui'
// import Vant from 'vant'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false
// Vue.use(ElementUI)  // PC
// Vue.use(Vant);      // H5

// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
