<template>
  <div class="index">
    <nav-component v-show="currentRoute !== '/'"></nav-component>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavComponent from '../components/NavComponent.vue';
  import {router}     from "../../app";

  export default {
    data() {
      return {
        currentRoute: router.currentRoute.path
      }
    },
    props: ['hideNav'],
    components: {
      NavComponent
    },
    watch: {
      '$route'(to) {
        this.currentRoute = to.path;
      }
    },
    name: "index"
  }
</script>

<style lang="scss">
  @import "../assets/scss/reset.scss";
</style>
