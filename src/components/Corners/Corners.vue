<template src="./Corners.html"></template>
<style scoped src="./Corners.scss" lang="scss"></style>

<script>
import eventBus from "@/event/eventbus.js";
import gsap from "gsap";


export default {
  name: "Corners",
  data: function(){
    return {
      momentsVisited: [],
      points: 0
    }
  },
  methods: {
    backToMainIsland() {
      const { closeButton, points } = this.$refs;
      eventBus.$emit("closeInfoBox", {});
      gsap.to(closeButton, {duration: 1, opacity: 0, display: 'none'});
      gsap.to(points, {duration: 1, opacity: 1, display: 'block'});
    },
    showBackButton() {
      const { closeButton, points } = this.$refs;
      gsap.to(closeButton, {duration: 1, opacity: 1, display: 'block'});
      gsap.to(points, {duration: 1, opacity: 0, display: 'none'});
    }
  },
  created(){
    eventBus.$on("showBackButton", (moment) => {
     setTimeout(() => { if (!this.momentsVisited.includes(moment)) { 
       this.momentsVisited.push(moment);
       this.points++ 
      } }, 1000);
     this.showBackButton();
    })
  }
};
</script>