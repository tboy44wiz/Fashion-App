<template>
  <div class="About">
    <AppBreadcrumb_Comp :title="title" />
  </div>
</template>


<script>
  // @ is an alias to /src
  import AppBreadcrumb_Comp from "@/components/layouts/AppBreadCrumb_Comp/AppBreadCrumb_Comp";

  export default {
    name: "About",

    components: {
      AppBreadcrumb_Comp
    },

    data() {
      return {
        title: "About"
      };
    },
  };
</script>


<style lang="scss" scoped>
  .About {

  };
</style>
