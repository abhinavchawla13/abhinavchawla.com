<script>
import Island from "../../components/Island/Island";
import Back from "../../components/Back/Back";
import Front from "../../components/Front/Front";
import gsap from "gsap";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Island,
    Back,
    Front
  },
  methods: {
    // to move the island
    mousemoveEffectIsland: function(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
      this.$refs.island.$el.style.left = xAxis + "px";
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
        duration: 3,
          y: 0
      });

    // let islandUpDownAnimation = gsap.to(island.$el, {
    //   x: 200,
    //   backgroundColor: "red",
    //   repeat: -1
    // });

    // islandUpDownAnimation.play();
  }
};
</script>
<template src="./Home.html"></template>
<style scoped src="./Home.scss" lang="scss"></style>
