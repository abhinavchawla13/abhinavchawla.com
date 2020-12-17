<template src="./Island.html"></template>
<style scoped src="./Island.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import ImageMap from "image-map";
import eventBus from "@/event/eventbus.js";
import imagesLoaded from 'vue-images-loaded';

export default {
  name: "Island",
  directives: {
        imagesLoaded
  },
  methods: {
    momentClicked(moment) {
      eventBus.$emit("openInfoBox", {moment});
      eventBus.$emit("showBackButton");

      const { island } = this.$refs;
      gsap.to(island, {duration: 1,  ease: "power1.out", opacity: 0.5});
    },
    showIsland() {
      const { island } = this.$refs;
      gsap.to(island, {duration: 1, ease: "power1.in", opacity: 1});
    },
    imageProgress(instance, image) {
        const result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
    }

  },
  created() {
     eventBus.$on("showIsland", () => {
      this.showIsland();
    })
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