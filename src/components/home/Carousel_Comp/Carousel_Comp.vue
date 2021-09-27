<template>
  <section class="Carousel_Comp">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img :src="carouselBG" class="carousel__image img-fluid" alt="Carousel_BG" />
          <h1>Fashion</h1>

          <div class="typewriter__text">
            We
            <p class="typewriterText">{{ singleWord }}</p>
          </div>
        </div>
      </div>
    </div>

<!--    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        &lt;!&ndash;            <div class="carousel-inner">&ndash;&gt;
        <div v-for="carouselItem in carouselItems" :key="carouselItem.id" class="carousel-item" :class="carouselItem.class">
          <img :src="carouselItem.image" :alt="carouselItem.alt" class="img-fluid d-block w-100">
          <div class="carousel-caption carousel__caption d-none d-sm-block">
            <div class="morphy">
              <h5 class="title">{{ carouselItem.title }}</h5>
              <p class="text">{{ carouselItem.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>-->
  </section>
</template>

<script>
import CarouselBG from '@/assets/images/carousel_bg.png';
import Image1 from '@/assets/images/carousel/carousel_image_one.png';
import Image2 from '@/assets/images/carousel/carousel_image_two.png';
import Image3 from '@/assets/images/carousel/carousel_image_three.png';
import Image4 from '@/assets/images/carousel/carousel_image_four.png';

export default {
    name: 'Carousel_Comp',

    data() {
      return {
        carouselBG: CarouselBG,
        singleWord: "Measure.",
        typeWriterTextList: [
          "Cut & Sew.",
          "Deliver.",
          "Measure.",
        ],
        intervalID: 0,
        carouselItems: [
          {
            id: 1,
            class: "active",
            alt: "carousel_item_one",
            title: "First Slider Label",
            text: "Some representative placeholder content for the first slide.",
            image: Image1,
            // image: AttireA1,
            // background: ImageBG,
          },
          {
            id: 2,
            class: "non-active",
            alt: "carousel_item_two",
            title: "Second Slider Label",
            text: "Some representative placeholder content for the second slide.",
            image: Image2,
            // image: AttireB1,
            // background: ImageBG,
          },
          {
            id: 3,
            class: "non-active",
            alt: "carousel_item_three",
            title: "Third Slider Label",
            text: "Some representative placeholder content for the third slide.",
            image: Image3,
            // image: AttireC1,
            // background: ImageBG,
          },
          {
            id: 4,
            class: "non-active",
            alt: "carousel_item_four",
            title: "Forth Slider Label",
            text: "Some representative placeholder content for the forth slide.",
            image: Image4,
            // image: AttireD1,
            // background: ImageBG,
          },
        ],
      };
    },

    created() {
      this.getLoopedTexts();
    },
    unmounted() {
      clearInterval(this.intervalID);
    },

    methods: {
      getLoopedTexts() {
        let index = 0;
        this.intervalID = setInterval(() => {
          this.singleWord = this.typeWriterTextList[index++ % this.typeWriterTextList.length];
        }, 8000);
      }
    }
  };
</script>


<style lang="scss" scoped>
  @import "Carousel_Comp";
</style>
