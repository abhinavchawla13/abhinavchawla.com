<template src="./Info.html"></template>
<style scoped src="./Info.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import eventBus from "@/event/eventbus.js"


export default {
  name: "Info",
  data: function() {
    return {
      tag: '',
      title: '',
      desc: '',
      box1: '',
      box2: '',
      showHelper: true,
      data: {
        school: {
          tag: 'Education',
          title: 'University of Toronto',
          desc: `Honours Bachelor of Science, Class of 2019 <br>Computer Science Specialist, Mathematics Major`,
          box1: `Graduated with <br><b>High Distinction</b>`,
          box2: ` Recepient of <br><b>University of Toronto <br>
                  Full-ride International <br>
                  Scholarship</b>`
        },
        ibm: {
          tag: 'Work',
          title: 'IBM',
          desc: `<b>Software Developer</b>, Blockchain Team<br>Toronto, Canada<br>July 2019 - Present`,
          box1: `Some project 1`,
          box2: `Some project 2`
        }
      }
    }
  },
  methods: {
    showInfoBox(){
      const { info } = this.$refs;
      gsap.to(info, { duration: 1.2, opacity: 0.95, ease: "power2.out", pointerEvents: 'all'});
    },

    hideInfoBox(){
      if (this.showHelper) { 
        eventBus.$emit("hideHelper");
        this.showHelper = false;
      }
      const { info } = this.$refs;
      gsap.to(info, { duration: 0.8, opacity: 0, ease: "power2.in", pointerEvents: 'none' });
    },

    mousemoveEffectBox1: function(e) {
      const { extraBox1, extraBox2 } = this.$refs;
      let xAxis1 = (window.innerWidth / 2 - e.pageX) / 20;
      let yAxis1 = (window.innerHeight / 2 - e.pageY) / 30;
      let xAxis2 = (window.innerWidth / 2 - e.pageX) / 10;
      let yAxis2 = (window.innerHeight / 2 - e.pageY) / 10;
      gsap.to(extraBox1, {duration: 1, x: xAxis1, y: yAxis1});
      gsap.to(extraBox2, {duration: 1, x: -xAxis2, y: -yAxis2});
    },
  },
  created() {
    
    // infoTimeline.to(info, {opacity:1, duration: 2});

    eventBus.$on("openInfoBox", (momentObj) => {
      console.log("openInfoBox", momentObj)
      let moment = momentObj['moment'];
      this.tag = this.data[moment].tag;
      this.title = this.data[moment].title;
      this.desc = this.data[moment].desc;
      this.box1 = this.data[moment].box1;
      this.box2 = this.data[moment].box2;
      this.showInfoBox();
    })

    eventBus.$on("closeInfoBox", () => {
     console.log("closeInfoBox")
     eventBus.$emit("showIsland", {});
     this.hideInfoBox();
    })

    // // Create a timeline
    // let infoTimeline = gsap.timeline({
    //   defaults: {
    //     ease: "power1.in"
    //   }
    // });
    // infoTimeline.to(info, { backdropFilter: "blur(10px)", duration: 2 });
    // infoTimeline.to(info, {opacity:1, duration: 2});
  },
  mounted(){
    // const { extraBox1, extraBox2 } = this.$refs;

  }
};
</script>