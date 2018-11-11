import Vue       from 'vue';
import VueRouter from 'vue-router';
import App       from './App.vue';
import {routes}  from './system/routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'nav__link--active'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
