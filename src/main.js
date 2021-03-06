// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import mSwipe from './components/swipe/swipe.vue'
import backScroll from './components/backScroll'
import infinite from './components/infiniteScroll'
Vue.config.productionTip = false
// Vue.component( "m-swipe", mSwipe )
Vue.component( backScroll.name, backScroll )
Vue.component( infinite.name, infinite )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
