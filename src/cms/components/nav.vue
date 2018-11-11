<template>
  <nav class="nav">
    <router-link class="nav__link" tag="a" :to="{path: '/admin/dashboard'}">
      <span class="nav__content">
        <i class="material-icons md-18">dashboard</i>
        <span class="nav__text">Рабочий стол</span>
      </span>
    </router-link>

    <router-link class="nav__link" tag="a" :to="{path: '/admin/statistic'}">
      <span class="nav__content">
        <i class="material-icons md-18">bubble_chart</i>
        <span class="nav__text">Статистика</span>
      </span>
    </router-link>

    <router-link class="nav__link" tag="a" :to="{path: '/admin/news'}">
      <span class="nav__content">
        <i class="material-icons md-18">art_track</i>
        <span class="nav__text">Новости</span>
      </span>
    </router-link>

    <router-link class="nav__link" tag="a" :to="{path: '/admin/catalog'}">
      <span class="nav__content">
        <i class="material-icons md-18">view_module</i>
        <span class="nav__text">Каталог</span>
      </span>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "navComponent"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/nav";
</style>
