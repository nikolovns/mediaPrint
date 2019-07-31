import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
