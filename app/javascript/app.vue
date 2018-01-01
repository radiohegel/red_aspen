<template>
  <div id="app">
    <p>{{ message }}</p>
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

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
