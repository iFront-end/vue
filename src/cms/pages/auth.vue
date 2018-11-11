<template>
  <section class="auth">
    <aside class="auth__aside">
      <div class="auth__wrap">
        <form class="form auth__form">
          <h1 class="logotype">
            <span class="logotype__text">The</span> Horizon
          </h1>

          <div class="form__group">
            <label class="form__label">Логин</label>
              <input type="text" placeholder="Логин" class="input form__input">
          </div>

          <div class="form__group">
            <label class="form__label">Пароль</label>
            <input type="password" placeholder="Пароль" class="input form__input">
          </div>

          <router-link class="button button--primary auth__button" tag="button" :to="{path: '/admin/dashboard'}">Войти</router-link>
        </form>
      </div>
      <copyright></copyright>
    </aside>
  </section>
</template>

<script>
  import copyright from '../components/copyright.vue';

  export default {
    components: {
      copyright
    },
    name: "home"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/auth.scss";
</style>
