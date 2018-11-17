<template>
  <section class="auth">
    <aside class="auth__aside">
      <div class="auth__wrap">
        <form class="form auth__form" @submit.prevent="auth(model)">
          <h1 class="logotype">
            <span class="logotype__text">The</span> Horizon
          </h1>

          <div class="form__group">
            <label class="form__label">Логин</label>
              <input type="text" placeholder="Логин" class="input form__input" v-model.lazy="model.login">
          </div>

          <div class="form__group">
            <label class="form__label">Пароль</label>
            <input type="password" placeholder="Пароль" class="input form__input" v-model.lazy="model.password">
          </div>

          <button class="button button--primary auth__button">Войти</button>
          <!--<router-link class="button button&#45;&#45;primary auth__button" tag="button" :to="{path: '/admin/dashboard'}">Войти</router-link>-->
        </form>
      </div>
      <copyright></copyright>
    </aside>
  </section>
</template>

<script>
  import {mapActions} from 'vuex';
  import copyright from '../components/copyright.vue';

  export default {
    data() {
      return {
        model: {
          login: null,
          password: null
        }
      }
    },

    methods: mapActions('user', [
      'auth'
    ]),

    components: {
      copyright
    },

    name: "home"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/auth.scss";
</style>
