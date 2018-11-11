<template>
  <header class="header">
    <h1 class="logotype header__logotype">
      <span class="logotype__text">The</span> Horizon
    </h1>

    <div class="header__panel">
      <div class="header__icon">
        <i class="material-icons">menu</i>
      </div>

      <div class="header__control">
        <i class="divider"></i>

        <div class="header__icon">
          <i class="material-icons">fullscreen</i>
        </div>

        <div class="header__icon">
          <i class="material-icons">search</i>
        </div>

        <router-link class="header__icon" tag="div" :to="{path: '/admin/auth'}">
          <i class="material-icons">exit_to_app</i>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "headerComponent"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/header.scss";
</style>
