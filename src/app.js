import Vue       from 'vue';
import VueRouter from 'vue-router';
import App       from './App.vue';
import {sync}    from 'vuex-router-sync';
import {routes}  from './system/routes';
import store     from './cms/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'nav__link--active'
});

sync(store, router);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
