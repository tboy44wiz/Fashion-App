<template>
  <div class="Gallery">
    <AppBreadcrumb_Comp :title="title" />
    <ImageGallery_Comp />
  </div>
</template>



<script>
  // @ is an alias to /src
  import AppBreadcrumb_Comp from "@/components/layouts/AppBreadCrumb_Comp/AppBreadCrumb_Comp";
  import ImageGallery_Comp from "@/components/gallery/ImageGallery_Comp/ImageGallery_Comp";

  export default {
    name: "Gallery",
    components: {
      AppBreadcrumb_Comp,
      ImageGallery_Comp,
    },
    data() {
      return {
        title: "Gallery",
      };
    },
  };
</script>



<style lang="scss" scoped>
  .Gallery {

  };
</style>