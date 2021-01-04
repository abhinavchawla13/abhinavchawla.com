<template>
  <div id="app">
    <Home v-if="landscapeMode" />
    <Load v-if="landscapeMode" />
    <div v-if="!landscapeMode" class="landscape-help">
      <div class="big-font"><b>Please rotate your screen</b></div>
      <div class="small-font-white">Website only works on landscape mode</div>
      <div class="small-font">For complete experience, please use a larger screen</div>
    </div>
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
  },
  data: function(){
    return {
      landscapeMode: true,
    }
  },
  mounted() {

    if (this.getOrientation() === 90 || this.getOrientation() === -90) {
      this.landscapeMode = true;
    }
    else {
      this.landscapeMode = false;
    }

     // this.$ga.page('/');
    // window.addEventListener(
    //   "orientationchange",
    //   this.handleOrientationChange
    // );
    window.onresize = this.handleOrientationChange;
  
  },
  methods: {
    getOrientation(){
      // var orientation = window.innerWidth < window.innerHeight ? "landscape" : "portrait";
      // console.log(orientation, window.innerWidth, window.innerHeight )
      return (window.orientation != undefined) ? window.orientation : 90;  
    },
    handleOrientationChange() {
      // const screen = window.screen;
      // const orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {});
      // console.log(orientation); 
      if (this.getOrientation() === 90 || this.getOrientation() === -90) {
        this.landscapeMode = true;
      } else {
        this.landscapeMode = false;
      }
    }
  }
};
</script>

