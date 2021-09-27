<template>
    <section class="CoreServices_Comp">

      <div class="container-fluid">
        <div class="parallax__circles">
          <span class="big-parallax__circles--top-right"></span>
          <span class="big-parallax__circles--bottom-left"></span>
          <span class="small-parallax__circles"></span>
          <span class="small-parallax__circles"></span>
          <span class="small-parallax__circles"></span>
          <span class="small-parallax__circles"></span>
          <span class="small-parallax__circles"></span>
          <span class="small-parallax__circles"></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <SectionTitleComp :title="title" :subtitle="subtitle" />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="services-item__wrapper">
                <div class="service-image__wrapper">
                  <img :src="serviceImageOne" class="service__image" alt="service Image One">
                </div>
                <div class="service__image-detail">
                  <h3>We measure</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="services-item__wrapper">
                <div class="service-image__wrapper">
                  <img :src="serviceImageTwo" class="service__image" alt="service Image Two">
                </div>
                <div class="service__image-detail">
                  <h3>We Sew</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="services-item__wrapper">
                <div class="service-image__wrapper">
                  <img :src="serviceImageThree" class="service__image" alt="service Image Three">
                </div>
                <div class="service__image-detail">
                  <h3>We Deliver</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>



<script>
  import SectionTitleComp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp";

  import ServiceImageOne from '@/assets/images/service_measuring.png';
  import ServiceImageTwo from '@/assets/images/service_sewing.png';
  import ServiceImageThree from '@/assets/images/service_deliverer.png';

  export default {
    name: 'CoreServices_Comp',

    components: {
      SectionTitleComp
    },

    data() {
      return {
        title: "SERVICES",
        subtitle: "This is what we know how to do best.",

        serviceImageOne: ServiceImageOne,
        serviceImageTwo: ServiceImageTwo,
        serviceImageThree: ServiceImageThree,
      };
    },
  };
</script>



<style lang="scss" scoped>
  @import "CoreServices_Comp";
</style>