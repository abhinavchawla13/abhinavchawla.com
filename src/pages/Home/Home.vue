<script>
import Island from "../../components/Island/Island";
import Back from "../../components/Back/Back";
import Front from "../../components/Front/Front";
import Corners from "../../components/Corners/Corners";
import Info from "../../components/Info/Info";
import gsap from "gsap";
import imagesLoaded from 'vue-images-loaded';
import eventBus from "@/event/eventbus.js";


export default {
  name: "Home",
  data: function() {
    return { 
      totalNumberOfImages: 7,
      numberOfImgLoaded: 0,
      heavylifters: ['main-island'],
      heavyliftersLifted: false
    }
  },
  components: {
    Island,
    Back,
    Front,
    Corners,
    Info
  },
  directives: {
      imagesLoaded
  },
  methods: {
    // to move the island
    mousemoveEffectIsland: function(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
      this.$refs.island.$el.style.left = xAxis + "px";
    },
    imageProgress(instance, image) {
        const result = image.isLoaded ? 'loaded' : 'broken';
        // console.log( 'image is ' + result + ' for ' + image.img.src );

        if (image.img.src.includes(this.heavylifters[0])) this.heavyliftersLifted = true;
        if (result === 'loaded') this.numberOfImgLoaded++;
        if ( this.numberOfImgLoaded >= this.totalNumberOfImages && this.heavyliftersLifted) {
          eventBus.$emit("loadComplete", {});
        }
    }
  },

  mounted() {
    const { island } = this.$refs;

    // Create a timeline
    let tl = gsap.timeline({
      repeat: -1, // number of repeats (-1 for infinite)
      defaults: {
        ease: "power1.inOut"
      }
    });

    tl.to(island.$el, { duration: 3, y: 30 })
      .to(island.$el, {
        duration: 5,
          y: 0
      });

  }
};
</script>
<template src="./Home.html"></template>
<style scoped src="./Home.scss" lang="scss"></style>
