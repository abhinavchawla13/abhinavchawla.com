<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>


<script>
import Home from "./pages/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style src="./css/main.scss" lang="scss"></style>
