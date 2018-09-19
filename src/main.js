// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Product from './components/Product'
import VueResource from 'vue-resource'
import {appConstants} from './services/constants'

Vue.config.productionTip = false

// Use VueResource plugin to make API call
Vue.use(VueResource)
Vue.http.options.root = appConstants.apiEndpoint
Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-Custom-Header', 'Custom Header Demo')
  console.log('Request: ', request)

  next(response => {
    console.log('Response: ', response)
  })
})

/* eslint-disable no-new */

Vue.component('product', Product)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
