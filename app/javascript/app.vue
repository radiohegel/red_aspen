<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view id="main-content"></router-view>
  </div>
</template>

<script>
  import NavBar from './frontend_client/components/NavBar.vue'

  export default {
    components: { NavBar },
    data: function () {
      return {
        message: "Hello Vue is this working!"
      }
    }
  }

</script>

<style lang="sass" scoped>
  @import './frontend_client/styles/app.sass'

  div
    font-family: $family-primary

</style>
