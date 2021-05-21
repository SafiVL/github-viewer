import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './quasar'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')
