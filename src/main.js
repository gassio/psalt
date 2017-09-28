import Vue from 'vue'
import App from './App'
import router from './router'

// Libraries
require('./assets/js/jquery.js')
require('./assets/js/mediaelement-and-player.min.js')
require('./assets/css/mediaelementplayer.min.css')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
