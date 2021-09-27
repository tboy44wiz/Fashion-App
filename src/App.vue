<template>
  <div class="App">

    <!--  Header  -->
    <header>
      <AppHeader_Comp :title="title" />
    </header>

    <!--  Body  -->
    <div class="app-body__wrapper">
      <router-view/>
    </div>


    <!--  Footer  -->
    <footer>
      <AppFooter_Comp :title="title" />
    </footer>
  </div>
</template>



<script>
  // @ is an alias to /src
  import AppHeader_Comp from "@/components/layouts/AppHeader_Comp/AppHeader_Comp";
  import AppFooter_Comp from "@/components/layouts/AppFooter_Comp/AppFooter_Comp";

  export default {
    components: {
      AppHeader_Comp,
      AppFooter_Comp,
    },

    data() {
      return {
        title: "Fashion"
      };
    },
  };

</script>



<style lang="scss" scoped>
  @import "App";
</style>