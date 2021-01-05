<template src="./Info.html"></template>
<style scoped src="./Info.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import eventBus from "@/event/eventbus.js"


export default {
  name: "Info",
  data: function() {
    return {
      w: window.innerWidth,
      tag: '',
      title: '',
      desc: '',
      box1: '',
      box2: '',
      link1: '',
      showHelper: true,
      data: {
        school: {
          tag: 'Education',
          title: 'University of Toronto',
          desc: `<b>Honours Bachelor of Science, Class of 2019</b> <br>Computer Science Specialist, Mathematics Major`,
          box1: `Graduated with <br><b>High Distinction</b> and <b>Dean's List</b>.`,
          box2: `Recepient of <b>Jon S. Dellandrea <br>
                Scholarship</b>, a full-ride scholarship awarded to an international student covering all costs over the course.`
        },
        ibm: {
          tag: 'Work',
          title: 'IBM',
          desc: `<b>Software Developer</b> <span style="color: #60504796">//</span><span> July 2019 - Present </span><span style="color: #60504796">//</span><span> Toronto, CA</span>`,
          box1: `Developed blockchain-based shipment tracking solution for a Canadian federal government client using Hyperledger Fabric.`,
          box2: `Developed a data aggregator framework to fetch information from multiple sources for a Canadian university chatbot assistant tool.`,
          link1: `https://www.ibm.com/blockchain`
        },
        nasa: {
          tag: 'Project',
          title: 'NASA Ames Spaces Settlement Contest',
          desc: `Led the team to the <b>first prize!</b><br>Prepared a 92-page project by the name <b>'Radeios'</b>`,
          box1: `<b>Radeios</b> proposed a multi-tuboidal shaped space settlement to support 17000 residents create a self sustaining miniature planet.`,
          box2: `Though, this project was submitted in 2012 (ah, 9 years?), I'm proud of the work and you can view it <a style="color: #6d524a;" href="https://drive.google.com/file/d/1cRi4TB2FOavRpIROl3FktLFkgz4mRVRT/view?usp=sharing" target="_blank">here</a>.`,
          link1: `https://space.nss.org/settlement/nasa/Contest/`
        },
        charity: {
          tag: 'Project',
          title: 'BeTheHope',
          desc: `I developed BeTheHope to streamline the donation process, and tackle the problem of endless <br>and unclear processes by enabling 1-click donations!`,
          box2: `<i>"Cumbersome donation processes paired with fickle minded millennials are a recipe for disaster."</i><br>
          You read all about the project <a style="color: #6d524a;" href="https://dev.to/abhinavchawla13/bethehope-series-finale-4-2ifc" target="_blank">here</a>.`,
          link1: `https://www.youtube.com/watch?v=nBZlpwKwr-s&ab_channel=AbhinavChawla/`,
        },
        gftw: {
          tag: 'Project',
          title: 'Grant for the Web',
          desc: `Awarded a <a style="color: #413228" href="https://www.grantfortheweb.org/blog/2020-spark-grantees" target="_blank">Spark<a/> and 
                a <a style="color: #413228" href="https://www.grantfortheweb.org/blog/2020-mid-grantees" target="_blank">Mid-Level</a>  grants to prototype and experiment my proposed ideas <br>leveraging the new Web Monetization standards.`,
          box1: `With the Spark grant, I decided to web-monetize Github README documentations to incentivize the developer community. You can view the <a style="color: #6d524a" href="https://dev.to/abhinavchawla13/github-monetize-documentation-217l" target="_blank">demo</a> and the 
          <a style="color: #6d524a" href="https://github.com/abhinavchawla13/github-monetize-ui" target="_blank">
          code</a> here! `,
          box2: `The Mid-Level project is aimed resolving an authentication issue posed by the new standards. You can read more on the <a style="color: #6d524a" href="https://community.webmonetization.org/projectinsulate" target="_blank">blog</a>; here's link to the <a style="color: #6d524a" href="https://github.com/project-insulate" target="_blank">code</a>.` 
        },
        dai: {
          tag: 'Work',
          title: 'DirectedAI Inc.',
          desc: `<b>Software Developer</b> <span style="color: #60504796">//</span><span> September 2018 - June 2019 </span><span style="color: #60504796">//</span><span> Toronto, CA</span>`,
          box1: `Developed Google voice assistant using Dialogflow to integrate with the Salesforce platform.`,
          box2: `Worked closely with the leadership team to work on multiple experimental prototypes to innovate the core solution in the future.`,
          link1: `http://directedai.com/` 
        },
        swiftseat: {
          tag: 'entrepreneurship',
          title: 'SwiftSeat Inc.',
          desc: `<b>CEO, Co-founder</b> <span style="color: #60504796">//</span><span> July 2017 - July 2019 </span><span style="color: #60504796">//</span><span> Toronto, CA</span> <br>
          The carpool platform was acquired by a Toronto based mobility startup namely SwiftRide in July 2019.`,
          box1: `Created a mobile application (Android, iOS) providing features including long-term grouping, localized searching, secure payments, real-time notifications and chat`,
          box2: `Partnered with Velocia, a mobility rewards ecosystem, for their Pilot launch in Miami (Florida, USA) as a carpool service in the network.`,
          link1: `https://swiftseat-backup.web.app`
        },
        boat: {
          tag: 'Just for fun',
          title: 'Boating PCOC License',
          desc: `Well, I got my boating license in Summer 2020, but if anyone can practically teach me how to boat, please don't be shy to help me out here, haha! `,
        }
      }
    }
  },
  methods: {
    showInfoBox(){
      const { info } = this.$refs;
      gsap.to(info, { duration: 1.2, opacity: 0.97, ease: "power2.out", pointerEvents: 'all'});
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
    
    // infoTimeline.to(info, {opacity:1, duration: 2});

    eventBus.$on("openInfoBox", (momentObj) => {
      let moment = momentObj['moment'];
      this.tag = this.data[moment].tag;
      this.title = this.data[moment].title;
      this.desc = this.data[moment].desc;
      this.box1 = this.data[moment].box1;
      this.box2 = this.data[moment].box2;
      this.link1 = this.data[moment].link1;
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