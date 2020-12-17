<template src="./Corners.html"></template>
<style scoped src="./Corners.scss" lang="scss"></style>

<script>
import eventBus from "@/event/eventbus.js";
import gsap from "gsap";


export default {
  name: "Corners",
  methods: {
    backToMainIsland() {
      const { closeButton } = this.$refs;
      eventBus.$emit("closeInfoBox", {});
      gsap.to(closeButton, {duration: 1, opacity: 0, display: 'none'});
    },
    showBackButton() {
      const { closeButton } = this.$refs;
      gsap.to(closeButton, {duration: 1, opacity: 1, display: 'block'});
    }
  },
  created(){
    eventBus.$on("showBackButton", () => {
     this.showBackButton();
    })
  }
};
</script>