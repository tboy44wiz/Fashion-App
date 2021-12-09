<template>
    <section class="MeetTheOwner_Comp" @scroll.prevent="scrollHandle()">
      <img :src="backgroundImage" class="background__image" alt="BackgroundImage">
      <div class="MeetTheOwner_Comp__wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 p-0">
              <div class="owner-image__wrapper">
                <img :src="ownerImage" class=" owner__image" alt="Owner Image">
              </div>
            </div>
            <div class="col-lg-5">
              <div class="owner-info__wrapper">
                <div class="owner__info">
                  <h2>Meet The Owner</h2>
                  <p>
                    Write any detail you want to write about the owner here. You can make it more detailed.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, animi aperiam asperiores
                    aspernatur beatae commodi consequatur culpa dolor, dolorem laudantium maiores modi nam natus officia
                    quaerat quisquam saepe ullam, voluptates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>



<script>
  import BackgroundImage from '@/assets/images/sewing_bg.jpeg'
  import OwnerImage from '@/assets/images/carousel/attireC1.png'

  export default {
    name: 'MeetTheOwner_Comp',

    data() {
      return {
        backgroundImage: BackgroundImage,
        ownerImage: OwnerImage
      }
    },

    created() {
      window.addEventListener("scroll", () => {
        this.scrollHandle();
      });
    },
    destroyed() {
      window.removeEventListener("scroll", () => {
        this.scrollHandle();
      });
    },

    methods: {
      scrollHandle() {
        let backgroundImage = document.querySelector(".background__image");
        let hhh = docume;
        const scrollValue = window.scrollY;
        const screenInnerHeight = window.innerHeight;
        const screenInnerWidth = window.innerWidth;
        console.log(backgroundImage);

        if(scrollValue >= screenInnerHeight && screenInnerWidth >= 992) {
          backgroundImage.style.top = `${(scrollValue - (screenInnerHeight * 2)) * 0.5}px`;
        }
        else if(scrollValue >= screenInnerHeight && screenInnerWidth >= 753) {
          backgroundImage.style.top = `${(scrollValue - (screenInnerHeight * 2) - 500) * 0.5}px`;
        }
        else {
          backgroundImage.style.top = `${(scrollValue - (screenInnerHeight * 2.5) - 1200) * 0.3}px`;
          console.log("Yeeeeeh...");
        }
      },
    }
  };
</script>


<style lang="scss" scoped>
  @import "MeetTheOwner_Comp";
</style>