<template>
    <div class="MeetOurStaff_Comp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <SectionTitleComp :title="title" :subtitle="subtitle" />

            <div class="row mt-5">
              <div class="col-md-6 col-lg-4">
                <div class="staff__wrapper">
                  <div class="image__wrapper">
                    <img :src="staff[0].image" class="staff__image img-fluid" :alt="staff[0].alt">
                  </div>
                  <div class="staff-detail__wrapper">
                    <h4 class="staff__name">{{ staff[0].name }}</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="staff__wrapper">
                  <div class="image__wrapper">
                    <img :src="staff[0].image" class="staff__image img-fluid" :alt="staff[0].alt">
                  </div>
                  <div class="staff-detail__wrapper">
                    <h4 class="staff__name">{{ staff[0].name }}</h4>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="staff__wrapper">
                  <div class="image__wrapper">
                    <img :src="staff[0].image" class="staff__image img-fluid" :alt="staff[0].alt">
                  </div>
                  <div class="staff-detail__wrapper">
                    <h4 class="staff__name">{{ staff[0].name }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>


<script>
    import SectionTitleComp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp";

    import Staff1 from '@/assets/images/service_sewing.png';

    export default {
      name: 'MeetOurStaff_Comp',
      components: {
        SectionTitleComp
      },

      data() {
        return {
          title: "MEET OUR STAFF",
          subtitle: "Meet our talented designers.",
          staff: [
            {
              name: "Jane Deo",
              image: Staff1,
              alt: "Staff1 Image"
            },
            {
              name: "Jane Deo",
              image: Staff1,
              alt: "Staff2 Image"
            },
            {
              name: "Jane Deo",
              image: Staff1,
              alt: "Staff3 Image"
            },
          ]
        };
      },
    };
</script>


<style lang="scss" scoped>
  @import "MeetOurStaff_Comp";
</style>