import Vue from 'vue'
import App from './App'

/* eslint-disable */

import vuetify from './plugins/vuetify'
Vue.use(vuetify)

import '@/scss/fonts.scss'
import '@/scss/variables.scss'

Vue.config.productionTip = false

const vue = new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
