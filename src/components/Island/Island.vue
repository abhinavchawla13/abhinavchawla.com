<template src="./Island.html"></template>
<style scoped src="./Island.scss" lang="scss"></style>

<script>
import gsap from "gsap";
import ImageMap from "image-map";
import eventBus from "@/event/eventbus.js";
import imagesLoaded from 'vue-images-loaded';

export default {
  name: "Island",
  data: function() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      carBaseWidthPerc: 4,
      carBaseStartTopPerc: 72,
      carBaseStartLeftPerc: 32,
      currentPosition: 'start',
      carDirection: 'east',
      carImageSrc: '',
      path: {
        start: {
          original: [32, 72],
          school: [
            {
              direction: 'east',
              coords: [38, 66]
            }
          ],
          ibm: [
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ],
          charity: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63, 62]
            },
            {
              direction: 'west',
              coords: [55, 70]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        ibm: {
          original: [56, 46],
          school: [
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [52, 50]
            },  
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'west',
              coords: [52, 50]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ],
          charity: [
            {
              direction: 'west',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63, 62]
            },
            {
              direction: 'west',
              coords: [55, 70]
            }
          ], 
           gftw: [
            {
              direction: 'west',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'west',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        school: {
          original: [38, 66],
          ibm: [
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ],
          charity: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63, 62]
            },
            {
              direction: 'west',
              coords: [55, 70]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [52, 50]
            },
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        nasa: {
          original: [43, 41],
          ibm: [
            {
              direction: 'south',
              coords: [49.5, 50.5]
            },
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
           school: [
              {
              direction: 'south',
              coords: [50, 50]
            },
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          swiftseat: [
            {
              direction: 'north',
              coords: [41, 39]
            }
          ],
          charity: [
            {
              direction: 'south',
              coords: [63, 62]
            },
            {
              direction: 'west',
              coords: [55, 70]
            }
          ], 
          gftw: [
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        swiftseat: {
          original: [41, 39],
          ibm: [
            {
              direction: 'south',
              coords: [49.5, 50.5]
            },
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
           school: [
              {
              direction: 'south',
              coords: [50, 50]
            },
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          nasa: [
            {
              direction: 'south',
              coords: [43, 41]
            }
          ],
          charity: [
            {
              direction: 'south',
              coords: [63, 62]
            },
            {
              direction: 'west',
              coords: [55, 70]
            }
          ], 
          gftw: [
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'south',
              coords: [63.5, 62.5]
            },
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        charity: {
          original: [55, 70],
          ibm: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [52, 50]
            },
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
          school: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [54, 48]
            },
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [70, 58]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        gftw: {
          original: [70, 58],
          ibm: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
          school: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [54, 48]
            },
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ], 
          charity: [
            {
              direction: 'west',
              coords: [55, 70]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [83, 44]
            }
          ]
        },
        dai: {
          original: [83, 44],
          ibm: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [56, 46]
            }
          ],
          school: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [54, 48]
            },
            {
              direction: 'west',
              coords: [36, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [43, 41]
            }
          ],
          swiftseat: [
            {
              direction: 'west',
              coords: [65, 61]
            },
            {
              direction: 'north',
              coords: [41, 39]
            }
          ], 
          charity: [
            {
              direction: 'west',
              coords: [55, 70]
            }
          ],
          gftw: [
            {
              direction: 'east',
              coords: [70, 58]
            }
          ]
        }
      }
    }
  },
  directives: {
        imagesLoaded
  },
  methods: {
    setImgUrl(direction) {
      var images = require.context('../../assets/images/', false, /\.png$/);
      this.carImageSrc = images('./car-' + direction + ".png")
    },
    openInfo(moment) {
      setTimeout(function(){
        eventBus.$emit("openInfoBox", {moment});
        eventBus.$emit("showBackButton");
      }, 500)
    },
    momentClicked(moment) {

      const { car, island } = this.$refs;      
      // find the array of path needed to execute
      console.log(this.currentPosition, moment, "");
      let pathArray = this.path[this.currentPosition][moment];

      if (pathArray.length < 1) {
        console.log("pathArray not found");
        return;
      }
      let timeline = gsap.timeline({onComplete: this.openInfo, onCompleteParams: [moment]});
      timeline.pause();

      const pathArrayFinalIndex = pathArray.length - 1;
      for (let [i, p] of pathArray.entries()) {

        let easeVal, distance;
        if (i == 0) { easeVal = "power1.in";}
        else if( i == pathArrayFinalIndex) { easeVal = "power1.out"}
        else { easeVal = "none"} 

        console.log(this.currentPosition, 
        this.path[this.currentPosition])
        if (i == 0) {
          console.log(this.path[this.currentPosition].original[0], p.coords[0])
          distance = Math.sqrt(
            (this.path[this.currentPosition].original[0] - p.coords[0])**2 +
            (this.path[this.currentPosition].original[1] - p.coords[1])**2
            )
        }
        else {
          distance = Math.sqrt(
            (pathArray[i - 1].coords[0] - p.coords[0])**2 +
            (pathArray[i - 1].coords[1] - p.coords[1])**2
            )
        }

        // use direction to pick car image
        // update x and y with 1 second duration after
        timeline.to(car, {
          css: {
            left: (island.clientWidth * p.coords[0] * 0.01) + "px",
            top : (island.clientHeight * p.coords[1] * 0.01) + "px"
          },
          onStart: this.setImgUrl,
          onStartParams: [p.direction],
          ease: easeVal,
          duration: distance / 12
          });
      }
      timeline.delay(6);
      timeline.play();

      // set current position to new moment
      this.currentPosition = moment;
    },
    showIsland() {
      const { island } = this.$refs;
      gsap.to(island, {duration: 1, ease: "power1.in", opacity: 1});
    },
    imageProgress(instance, image) {
        const result = image.isLoaded ? 'loaded' : 'broken';
        console.log( 'image is ' + result + ' for ' + image.img.src );
    },
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.setImgUrl('east');
      this.setCarSize();
      this.setCarPosition();
      this.currentPosition = 'start';

    },
    setCarSize() {
      const { island, car } = this.$refs;
      if (island && car) {
        let carWidth = island.clientWidth * this.carBaseWidthPerc * .01;
        car.width = carWidth;
      }
    },
    setCarPosition() {
      const { island, car } = this.$refs;
      if (island && car) {
        car.style.top = (island.clientHeight * this.carBaseStartTopPerc * 0.01) + "px";
        car.style.left = (island.clientWidth * this.carBaseStartLeftPerc * 0.01) + "px";
      }
    }

  },
  created() {
     eventBus.$on("showIsland", () => {
      this.showIsland();
    })

    eventBus.$on("adjustCar", () => {
      this.setImgUrl('east');
      this.setCarSize();
      this.setCarPosition();
    })
  },
  mounted() {
    ImageMap('img[usemap]', 0);

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })

    // set car size
    this.setImgUrl('east');
    this.setCarSize();
    this.setCarPosition();
    this.currentPosition = 'start';
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
};
</script>