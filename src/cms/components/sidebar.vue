<template>
  <aside class="sidebar">
    <navComponent></navComponent>
  </aside>
</template>

<script>
  import navComponent from "./nav.vue"

  export default {
    components: {
      navComponent
    },
    name: "sidebarComponent"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/sidebar";
</style>
