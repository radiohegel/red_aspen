<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
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
