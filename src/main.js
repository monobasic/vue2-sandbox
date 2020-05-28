import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'

import './styles/index.css';

Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
