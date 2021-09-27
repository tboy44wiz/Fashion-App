<template>
    <section class="Testimonial_Comp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SectionTitleComp :title="title" :subtitle="subtitle" :subtitleColor="subtitleColor" />
          </div>

          <div class="col-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <!--<div class="carousel-inner">-->
                <div v-for="carouselItem in carouselItems" :key="carouselItem.id" class="carousel-item" :class="carouselItem.class">
                  <div class="customer-testimonial__wrapper">
                    <img :src="carouselItem.image" :alt="carouselItem.alt" class="customer__image">

                    <div class="customer-details__wrapper">
                      <h5 class="customer__name">{{ carouselItem.name }}</h5>
                      <p class="customer__comment">{{ carouselItem.text }}</p>
                      <div>
                        <box-icon type='solid' name='quote-alt-left' color="#ff814e" size="md"></box-icon>
                        <box-icon name='quote-alt-right' type='solid' color="#ff814e" size="md"></box-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>


<script>
  //  @ is an alias to /src
  import SectionTitleComp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp";

  import CustomerImage from '@/assets/images/profile_avatar_female.jpg';
  import CustomerImage1 from '@/assets/images/carousel/attireA1.png';
  import CustomerImage2 from '@/assets/images/carousel/attireB1.png';
  import CustomerImage3 from '@/assets/images/carousel/attireC1.png';
  import CustomerImage4 from '@/assets/images/carousel/attireD1.png';

  export default {
    name: 'Testimonial_Comp',

    components: {
      SectionTitleComp,
    },

    data() {
      return {
        title: "CUSTOMER TESTIMONIALS",
        subtitle: "See what our satisfied customers says about us.",
        subtitleColor: "#ffffff",

        customerImage: CustomerImage,
        carouselItems: [
          {
            id: 1,
            class: "active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: CustomerImage1,
            alt: "Customer Image",
          },
          {
            id: 2,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: CustomerImage2,
            alt: "Customer Image",
          },
          {
            id: 3,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: CustomerImage3,
            alt: "Customer Image",
          },
          {
            id: 4,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: CustomerImage4,
            alt: "Customer Image",
          },
        ],
      };
    },
  };
</script>


<style lang="scss" scoped>
  @import "Testimonial_Comp";
</style>