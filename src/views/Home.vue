<template>
  <div class="Home">
    <Carousel_Comp />
    <CoreServices_Comp />
    <MeetTheOwner_Comp />
    <MeetOurStaff_Comp />
    <Testimonial_Comp />
  </div>
</template>



<script>
// @ is an alias to /src
import Carousel_Comp from "@/components/home/Carousel_Comp/Carousel_Comp";
import MeetTheOwner_Comp from "@/components/home/MeetTheOwner_Comp/MeetTheOwner_Comp";
import CoreServices_Comp from "@/components/home/CoreServices_Comp/CoreServices_Comp";
import MeetOurStaff_Comp from "@/components/home/MeetOurStaff_Comp/MeetOurStaff_Comp";
import Testimonial_Comp from "@/components/home/Testimonial_Comp/Testimonial_Comp";

export default {
  name: 'Home',

  components: {
    Carousel_Comp,
    CoreServices_Comp,
    MeetTheOwner_Comp,
    MeetOurStaff_Comp,
    Testimonial_Comp,
  }
}
</script>


<style lang="scss" scoped>
  @import "../assets/styles/GlobalVariables";

  .Home {
    //background: #e7e7e7;
  }
</style>
