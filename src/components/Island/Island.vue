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
      carBaseStartTopPerc: 73,
      carBaseStartLeftPerc: 32,
      currentPosition: 'start',
      carDirection: 'east',
      carImageSrc: '',
      path: {
        start: {
          original: [32, 73],
          school: [
            {
              direction: 'east',
              coords: [38, 67]
            }
          ],
          ibm: [
            {
              direction: 'east',
              coords: [56, 47]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [62, 41]
            }
          ],
          charity: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [64, 63]
            },
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        ibm: {
          original: [56, 47],
          school: [
            {
              direction: 'west',
              coords: [37, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [53, 51]
            },  
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [62, 41]
            }
          ],
          charity: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [64, 63]
            },
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ], 
           gftw: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        school: {
          original: [38, 66],
          ibm: [
            {
              direction: 'east',
              coords: [56, 47]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [62, 41]
            }
          ],
          charity: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [64, 63]
            },
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        nasa: {
          original: [43, 40],
          ibm: [
            {
              direction: 'south',
              coords: [49.5, 50.5]
            },
            {
              direction: 'east',
              coords: [56, 47]
            }
          ],
           school: [
              {
              direction: 'south',
              coords: [50, 50]
            },
            {
              direction: 'west',
              coords: [37, 64]
            }
          ],
          swiftseat: [
            {
              direction: 'south',
              coords: [49.5, 50.5]
            },
            {
              direction: 'east',
              coords: [62, 41]
            }
          ],
          charity: [
            {
              direction: 'south',
              coords: [64, 63]
            },
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ], 
          gftw: [
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        swiftseat: {
          original: [62, 41],
          ibm: [
            {
              direction: 'west',
              coords: [56, 47]
            }
          ],
          school: [
            {
              direction: 'west',
              coords: [37, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [53, 51]
            },  
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          charity: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [64, 63]
            },
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ], 
           gftw: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'west',
              coords: [53, 51]
            },
            {
              direction: 'south',
              coords: [65, 64]
            },
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        charity: {
          original: [56.5, 71.5],
          ibm: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [53, 51]
            },
            {
              direction: 'east',
              coords: [56, 47]
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
              coords: [37, 64]
            }
          ],
          nasa: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'east',
              coords: [64.5, 61.5]
            },
            {
              direction: 'north',
              coords: [53, 51]
            },
            {
              direction: 'east',
              coords: [62, 41]
            }
          ], 
          gftw: [
            {
              direction: 'east',
              coords: [70, 60]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        gftw: {
          original: [70, 60],
          ibm: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [56, 47]
            }
          ],
          school: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [54, 48]
            },
            {
              direction: 'west',
              coords: [37, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [62, 41]
            }
          ], 
          charity: [
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ],
          dai: [
            {
              direction: 'east',
              coords: [85, 44]
            }
          ]
        },
        dai: {
          original: [85, 44],
          ibm: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [56, 47]
            }
          ],
          school: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [54, 48]
            },
            {
              direction: 'west',
              coords: [37, 64]
            }
          ],
          nasa: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [43, 40]
            }
          ],
          swiftseat: [
            {
              direction: 'west',
              coords: [66, 64]
            },
            {
              direction: 'north',
              coords: [53, 49]
            },
            {
              direction: 'east',
              coords: [62, 41]
            }
          ], 
          charity: [
            {
              direction: 'west',
              coords: [56.5, 71.5]
            }
          ],
          gftw: [
            {
              direction: 'west',
              coords: [70, 57]
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
      console.log("moment.....", moment)
      setTimeout(function(){
        eventBus.$emit("openInfoBox", {moment});
        eventBus.$emit("showBackButton");
      }, 500)
    },
    momentClicked(moment) {

      if (moment === this.currentPosition) {
        this.openInfo(moment);
        return;
      }
      else if (moment === 'boat') {
        this.openInfo(moment);
        return;
      }

      const { car, island } = this.$refs;      
      // find the array of path needed to execute
      let pathArray = this.path[this.currentPosition][moment];

      if (pathArray.length < 1) {
        console.log("pathArray not found");
        return;
      }
      let timeline = gsap.timeline({onComplete: this.openInfo, onCompleteParams: [moment]});
      // let timeline = gsap.timeline();
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