import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
