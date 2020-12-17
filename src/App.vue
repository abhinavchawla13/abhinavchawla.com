<template>
  <div id="app">
    <Home />
    <Load />
  </div>
</template>


<script>
import Home from "./pages/Home/Home.vue";
import Load from "./pages/Load/Load.vue";

export default {
  name: "App",
  components: {
    Home,
    Load
  }
};
</script>

