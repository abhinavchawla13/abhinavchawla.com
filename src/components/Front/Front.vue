<template src="./Front.html"></template>
<style scoped src="./Front.scss" lang="scss"></style>

<script>
import gsap from "gsap";

export default {
  name: "Front",
  methods: {
    checkMobile: function() {
      if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i))
        {
          return true;
        }
        else {
          return false;
        } 
    }
  },
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
    .to(balloon2, { duration: 25, transform: 'translateY(-93vh)'})
    .to(balloon2, { duration: 4, y: "+=20px", ease: 'power1.inOut'})
    .to(balloon2, { duration: 4, y: "-=20px", ease: 'power1.inOut', repeat: -1, yoyo: true});

  }
};
</script>