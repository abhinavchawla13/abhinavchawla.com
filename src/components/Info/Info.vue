<template src="./Info.html"></template>
<style scoped src="./Info.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import eventBus from "@/event/eventbus.js"


export default {
  name: "Info",
  methods: {
    showInfoBox(){
      const { info } = this.$refs;
      gsap.to(info, { duration: 1, opacity: 0.95, ease: "power2.out", pointerEvents: 'all'});
    },

    hideInfoBox(){
      const { info } = this.$refs;
      gsap.to(info, { duration: 0.8, opacity: 0, ease: "power2.in", pointerEvents: 'none' });
    }
  },
  created() {
    
    // infoTimeline.to(info, {opacity:1, duration: 2});

    eventBus.$on("openInfoBox", (moment) => {
      console.log("openInfoBox", moment)
      this.showInfoBox();
    })

    eventBus.$on("closeInfoBox", () => {
     console.log("closeInfoBox")
     eventBus.$emit("showIsland", {});
     this.hideInfoBox();
    })

    // // Create a timeline
    // let infoTimeline = gsap.timeline({
    //   defaults: {
    //     ease: "power1.in"
    //   }
    // });
    // infoTimeline.to(info, { backdropFilter: "blur(10px)", duration: 2 });
    // infoTimeline.to(info, {opacity:1, duration: 2});
  }
};
</script>