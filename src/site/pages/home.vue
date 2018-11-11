<template>
  <div class="home">
    <p>Главная</p>
    {{ hideNav }}
  </div>
</template>

<script>
  export default {
    props: ['hideNav'],
    name: "home"
  }
</script>

<style lang="scss" scoped>

</style>
