<template>
    <section class="MapLocation_Comp">
      <div class="container p-0">
        <div class="row">
          <div class="col-12 contact-map__wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1541156247877!2d3.3525146510399377!3d6.502165925190141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c15e894f659%3A0x2ab490804e21306d!2s6b%20Joseph%20Shyngle%20Cl%2C%20Surulere%20101241%2C%20Street!5e0!3m2!1sen!2sng!4v1631898979218!5m2!1sen!2sng"
                    loading="lazy" title="Google Map" class="contact-map__iframe" />
          </div>
        </div>
      </div>
    </section>
</template>


<script>
    export default {
        name: 'MapLocation_Comp'
    };
</script>


<style lang="scss" scoped>
  @import "MapLocation_Comp";
</style>