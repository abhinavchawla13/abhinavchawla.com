<template>
  <div id="app">
    <Home v-show="landscapeMode" />
    <Load v-show="landscapeMode" />
    <div v-if="!landscapeMode" class="landscape-help">
      <div class="big-font">Please rotate your screen</div>
      <div class="small-font-white">Website only works in landscape mode</div>
      <div class="small-font">For a complete experience, please use a larger screen as the website is primarily built for desktops</div>
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
    window.addEventListener(
      "orientationchange",
      this.handleOrientationChangeReload
    );
    window.onresize = this.handleOrientationChange;  
  },
  methods: {
    getOrientation(){
      // var orientation = window.innerWidth < window.innerHeight ? "landscape" : "portrait";
      // console.log(orientation, window.innerWidth, window.innerHeight )
      return (window.orientation != undefined) ? window.orientation : 90;  
    },
    handleOrientationChangeReload() {
      // const screen = window.screen;
      // const orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {});
      // console.log(orientation); 
      if (this.getOrientation() === 90 || this.getOrientation() === -90) {
        this.landscapeMode = true;
        window.location.reload(true);
      } else {
        this.landscapeMode = false;
      }
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

