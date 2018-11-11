<template>
  <nav class="nav">
    <router-link tag="a" to="/" class="nav__link">Главная</router-link>
    <router-link tag="a" to="/about" class="nav__link">О нас</router-link>
    <router-link tag="a" to="/contacts" class="nav__link">Контакты</router-link>
  </nav>
</template>

<script>
  export default {
    name: "NavComponent"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/nav";
</style>
