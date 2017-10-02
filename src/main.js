import Vue from 'vue'
import App from './App'
import router from './router'

// Libraries
require('./assets/js/jquery.js')
require('./assets/js/mediaelement-and-player.min.js')
require('./assets/js/http-vue-loader.js')
require('./assets/css/mediaelementplayer.min.css')


// this['vue-resize-sensor'] = httpVueLoader('https://raw.githubusercontent.com/FranckFreiburger/vue-resize-sensor/master/src/resize-sensor.vue', 'resize-sensor');

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
