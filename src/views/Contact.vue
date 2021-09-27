<template>
  <div class="Contact">
    <AppBreadcrumb_Comp :title="title" />
    <MessageAndAddress_Comp />
    <MapLocation_Comp />
  </div>
</template>

<script>
  // @ is an alias to /src
  import AppBreadcrumb_Comp from "@/components/layouts/AppBreadCrumb_Comp/AppBreadCrumb_Comp";
  import MessageAndAddress_Comp from "@/components/contact/MessageAndAddress_Comp/MessageAndAddress_Comp";
  import MapLocation_Comp from "@/components/contact/MapLocation_Comp/MapLocation_Comp";

  export default {
    name: "Contact",

    components: {
      AppBreadcrumb_Comp,
      MessageAndAddress_Comp,
      MapLocation_Comp,
    },

    data() {
      return {
        title: "Contact",
      };
    },
  };
</script>


<style lang="scss" scoped>

</style>