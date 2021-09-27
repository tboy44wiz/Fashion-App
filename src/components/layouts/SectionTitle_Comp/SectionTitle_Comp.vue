<template>
    <section class="SectionTitle_Comp">
      <div class="caption__wrapper">
        <h3 class="caption__title"> {{ title }} </h3>
        <p class="caption__subTitle" :style="{'color': subtitleColor}"> {{ subtitle }} </p>
      </div>
    </section>
</template>


<script>
    export default {
      name: 'SectionTitle_comp',

      props: {
        title: String,
        subtitle: String,
        subtitleColor: String,
      },
    };
</script>


<style lang="scss" scoped>
  @import "SectionTitle_Comp";
</style>