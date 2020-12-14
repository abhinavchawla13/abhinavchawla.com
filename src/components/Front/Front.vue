<template src="./Front.html"></template>
<style scoped src="./Front.scss" lang="scss"></style>

<script>
import gsap from "gsap";

export default {
  name: "Front",
  props: {
    msg: String
  },
  methods: {},
  mounted() {
    const { balloon2 } = this.$refs;

    // Create a timeline
    let balloonTimeline2 = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });


    balloonTimeline2
    .delay(15)
    .to(balloon2, { duration: 25, transform: 'translateY(-88vh)'})
    .to(balloon2, { duration: 3, y: "+=20px", ease: 'power1.inOut'})
    .to(balloon2, { duration: 3, y: "-=20px", ease: 'power1.inOut', repeat: -1, yoyo: true});

  }
};
</script>