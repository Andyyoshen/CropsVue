import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mixin from './components/Mixin.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.mixin(mixin)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
