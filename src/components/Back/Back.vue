<template src="./Back.html"></template>
<style scoped src="./Back.scss" lang="scss"></style>

<script>
import gsap from "gsap";

export default {
  name: "Back",
  props: {
    msg: String
  },
  methods: {},
  mounted() {
    const { balloon1, cloud1, cloud2 } = this.$refs;

    // Create a timeline
    let balloonTimelinel = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });

    let cloudTimeline1 = gsap.timeline({
      defaults: {
        ease: "power1.inOut"
      }
    });

    let cloudTimeline2 = gsap.timeline({
      defaults: {
        ease: "power1.inOut"
      }
    });

    balloonTimelinel
    .delay(4)
    .to(balloon1, { duration: 18, transform: 'translateY(-90vh)'})
    .to(balloon1, { duration: 5, y: "+=30px", ease: 'power1.inOut'})
    .to(balloon1, { duration: 5, y: "-=30px", ease: 'power1.inOut', repeat: -1, yoyo: true});


    cloudTimeline1.to(cloud1, {duration: 6, x: -30}).to(cloud1, { duration: 6, x: 0, repeat: -1, yoyo: true})
    cloudTimeline2.to(cloud2, {duration: 4, x: 15}).to(cloud2, { duration: 5, x: 0, repeat: -1, yoyo: true})
  }
};
</script>