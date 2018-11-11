<template>
  <div>
    <p>Контакты</p>
    <span @click="showContacts()">Показать</span>
    <transition name="show-contacts">
      <p v-show="isShow">тел: 88005003030</p>
    </transition>
    <span @click="routerLink()">Перейти</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        rou: this.$route.name
      }
    },
    methods: {
      showContacts() {
        this.isShow = !this.isShow;
      },
      routerLink() {
        this.$router.push('about-foo', this.onComplete, this.onAbort);
      },
      onComplete(e) {
        console.log(e);
      },
      onAbort(e) {
        console.log(e);
      }
    },
    name: "contacts"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/contacts";
</style>
