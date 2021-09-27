<template>
    <div class="ImageGallery_Comp">
      <div class="container">
<!--        <div class="row mt-5" data-aos="fade-up">
          <div class="col-12">
            <ul class="portfolio__filters">
              <li data-filter="*" class="portfolio__filter-item filter-active">All</li>
              <li data-filter=".filter-app" class="portfolio__filter-item ">App</li>
              <li data-filter=".filter-card" class="portfolio__filter-item ">Card</li>
              <li data-filter=".filter-web" class="portfolio__filter-item ">Web</li>
            </ul>
          </div>
        </div>-->

        <div class="row">
          <div class="col-12">
            <div class="gallery__wrapper">
              <div v-for="(image, index) in images" class="image__wrapper" :key="index">
                <img :src="image"
                     loading="lazy"
                     :data-src="lazyLoader"
                     @click="openImageModal(image)"
                     class="img-fluid" :alt="Image"
                     data-bs-toggle="modal"
                     data-bs-target="#exampleModal"
                />
              </div>
            </div>
          </div>
        </div>


        <!-- Modal -->
        <div class="modal fade modal__wrapper" id="exampleModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content modal-content__wrapper">
              <div class="modal-header border-bottom-0">
                <button type="button" class="btn-close close__button" data-bs-dismiss="modal" aria-label="Close">&times;</button>
              </div>
              <div class="modal-body">
                <div class="modal-image__wrapper">
                  <img :src="selectedImageUrl" class="modal__image" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>



<script>
  // @ is an alias to /src
  import Image1 from '@/assets/images/profile_avatar_female.jpg';
  import Image2 from '@/assets/images/service_sewing.png';
  import Image3 from '@/assets/images/service_measuring.png';
  import Image4 from '@/assets/images/sewing_bg.jpeg';
  import LazyLoader from '@/assets/images/lazy_loader.gif';

  export default {
    name: 'ImageGallery_Comp',

    data() {
      return {
        imageArray: [Image1, Image2, Image3, Image4],
        lazyLoader: LazyLoader,
        images: [
          "https://i.pinimg.com/originals/2a/bb/a3/2abba36120bdf6ab07f20fd5147a6c30.jpg",
          "https://2.bp.blogspot.com/-Ci-MG3C4wTc/WdKRvS8uMlI/AAAAAAABDqM/k1cKWHl2_8MSZI8L1zrMHs4kxntfCgL2gCLcBGAs/s1600/Ankara%2BBell%2Bsleeves%2Btop.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/09/118133788_740310226512345_7923628961547912501_n.jpg",
          "https://d17a17kld06uk8.cloudfront.net/products/WCJWVZ2/H9NNQESH-large.webp",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/05/skirtki.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/05/flaredc.jpg",
          "https://www.bellanaijastyle.com/wp-content/uploads/2020/11/Tonto-Dikeh.jpg",
          "https://www.bellanaijastyle.com/wp-content/uploads/2020/11/Arike.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/05/flaredbn.jpg",
          "https://www.bellanaijastyle.com/wp-content/uploads/2018/11/@ms_henshaw.jpg",
          "https://www.bellanaijastyle.com/wp-content/uploads/2018/11/@maroffdesigns.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/241761704_1704032043125546_1992756742761755563_n.jpg",
          "https://i.etsystatic.com/22476202/r/il/c97af4/3036066065/il_794xN.3036066065_ss54.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/123108938_1471055183089901_3963321449717679720_n.jpg",
          "https://i.pinimg.com/750x/a6/1e/4c/a61e4cbf41a5a51cad99f09a9f7c3fc7.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/122904413_1471053836423369_7591482005803176597_n.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/122158685_784851255391575_1609086734868994598_n.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/122851008_1471056466423106_5759785669173865858_n.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/07/123164089_1471056409756445_4940980645679923532_n.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/06/Native-styles-for-ladies-36.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2020/02/120973395_774241063119261_2405473083769751067_n.jpg",
          "https://www.bellanaijastyle.com/wp-content/uploads/2020/11/KING-KARMANI.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2018/06/skiirt-and-blouse.jpg",
          "https://ankarafashion.com.ng/wp-content/uploads/2020/02/120955091_774241823119185_496318427971367379_n.jpg"
        ],
        selectedImageUrl: "",
      };
    },

    methods: {
      openImageModal(imageUrl) {
        this.selectedImageUrl = imageUrl;
        console.log(this.selectedImageUrl);
      },
    }
  };
</script>


<style lang="scss" scoped>
  @import "ImageGallery_Comp";
</style>