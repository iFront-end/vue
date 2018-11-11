<template>
  <div class="admin">
    <headerComponent></headerComponent>
    <div class="admin__content">
      <sidebarComponent></sidebarComponent>

      <div class="content">
        <div class="content__page">
          <router-view></router-view>
        </div>

        <copyright></copyright>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebarComponent from '../components/sidebar.vue';
  import copyright        from '../components/copyright.vue';
  import headerComponent  from '../components/header.vue';

  export default {
    components: {
      sidebarComponent,
      headerComponent,
      copyright
    },
    name: "pages"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/admin.scss";
</style>
