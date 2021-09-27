<template>
    <section class="AppBreadCrumb_Comp">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>{{ title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              <router-link to="/">Home</router-link> / {{ title }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>



<script>
  export default {
    name: 'AppBreadcrumb_Comp',

    props: {
      title: String,
    }
  };
</script>


<style lang="scss" scoped>
  @import "AppBreadCrumb_Comp";
</style>