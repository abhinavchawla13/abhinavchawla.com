<script>
import gsap from "gsap";
import eventBus from "@/event/eventbus.js";

export default {
  name: "Load",
  components: {},
  methods: {
    completeLoad() {
      const { loaderLeft, loaderRight, loader } = this.$refs;
      gsap.to(loaderLeft, { duration: 3, scaleX: 1 });
      gsap.to(loaderRight, { duration: 3, scaleX: 1 });
      gsap
        .to(loaderLeft, { opacity: 0, duration: 1, display: "none" })
        .delay(3);
      gsap
        .to(loaderRight, { opacity: 0, duration: 1, display: "none" })
        .delay(3);
      gsap.to(loader, { opacity: 0, duration: 3, display: "none" }).delay(4);
    }
  },
  mounted() {
    const { loaderLeft, loaderRight } = this.$refs;
    gsap.fromTo(
      loaderLeft,
      { scaleX: 0, transformOrigin: "right" },
      { duration: 2, scaleX: 0.4, transformOrigin: "right" }
    );

    gsap.fromTo(
      loaderRight,
      { scaleX: 0, transformOrigin: "left" },
      { duration: 2, scaleX: 0.4, transformOrigin: "left" }
    );
  },
  created() {
    eventBus.$on("loadComplete", () => {
      this.completeLoad();
    });
  }
};
</script>
<template src="./Load.html"></template>
<style scoped src="./Load.scss" lang="scss"></style>
