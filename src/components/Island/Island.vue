<template src="./Island.html"></template>
<style scoped src="./Island.scss" lang="scss"></style>

<script>
import ImageMap from "image-map";
import gsap from "gsap";

export default {
  name: "Island",
  props: {
    msg: String
  },
  methods: {
    momentClicked(moment) {
      console.log("moment", moment);
      const { island } = this.$refs;

      // Create a timeline
      let islandDissolveTimeline = gsap.timeline({
        defaults: {
          ease: "power1.in"
        }
      });
      islandDissolveTimeline.to(island, {duration: 2, scale: 0.3, opacity: 0.3});
    },

    backToMainIsland() {
      const { island } = this.$refs;

      // Create a timeline
      let islandUndissolveTimeline = gsap.timeline({
        defaults: {
          ease: "power1.out"
        }
      });
      // islandUndissolveTimeline.to(island, {duration: 4, transform: 'translateY(-93vh)', scale: 1, opacity: 1, display: 'block'});
      islandUndissolveTimeline.to(island, {duration: 2, scale: 1, opacity: 1});
    }
  },
  mounted() {
    ImageMap('img[usemap]', 0);

    // const { island } = this.$refs;

    // // Create a timeline
    // let islandDissolveTimeline = gsap.timeline();
    // islandDissolveTimeline.to(island, {duration: 3, scale: 0.05, opacity: 0});
  }
};
</script>