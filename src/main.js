import Vue from 'vue'
import App from './App'
import router from './router'

// Libraries
require('./assets/js/jquery.js')
require('./assets/js/mediaelement-and-player.min.js')
require('./assets/css/mediaelementplayer.min.css')
require('./assets/js/pdfobject.min.js')

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
