import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);


import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)



const router = new VueRouter({
  routes,
  mode: 'history'
})

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
