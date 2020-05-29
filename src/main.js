import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import VueCompositionApi from '@vue/composition-api'

import './styles/index.css'

Vue.use(PortalVue)
Vue.use(VueCompositionApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
