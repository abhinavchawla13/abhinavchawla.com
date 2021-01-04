<template src="./Back.html"></template>
<style scoped src="./Back.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import eventBus from "@/event/eventbus.js";

export default {
  name: "Back",
  data: function(){
    return {
      showHelperBool: true,
    }
  },
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
  created() {
    eventBus.$on("hideHelper", () => {
      this.showHelperBool = false;
    });
  },
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