<template>
    <div class="AppFooter_Comp">

        <!--    Top Footer    -->
        <div class="top-footer__wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h3 class="brand__name">{{ title }}</h3>
                <p>
                  We pursue the goals of becoming price, quality and business leaders in local and global business
                  frontier by focusing on continuous improvement, strong partnership and professionalism.
                </p>
              </div>

              <div class="col-md-4 mt-sm-4 mt-md-0">
                <h3>Contacts</h3>
                <p>No 6B Joseph Shyngle Street, off James Robertson Street, Surulere, Lagos State</p>
                <p>
                  <span> +234 813 2403 322</span>,
                  <span> +234 806 8998 490</span>, <br/>
                  <span> +234 815 3536 249</span>
                </p>
                <p> Email: <router-link to="mailto:hello@domain.com">example@fashion.com</router-link>
                </p>
                <p>WhatsApp: +234 813 2403 322</p>
                <p>Instagram: @_fashion</p>
              </div>

              <div class="col-md-4 mt-sm-4 mt-md-0">
                <h3>Links</h3>
                <div class="row">
                  <div class="col">
                    <p><router-link to="/">Home</router-link></p>
<!--                    <p><router-link to="/about">About</router-link></p>-->
                    <p><router-link to="/gallery">Gallery</router-link></p>
                    <p><router-link to="/contact">Contact</router-link></p>
                  </div>

                  <div class="col">
                    <p><router-link to="#">Plans &amp; pricing</router-link></p>
                    <p><router-link to="#">Blogs</router-link></p>
                    <p><router-link to="#">Fashion Owner</router-link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--    Bottom Footer    -->
        <div class="bottom-footer__wrapper">
          <div class="container">
            <div class="row">

              <div class="col-md-5">
                <div class="footer-copyright">
                  &copy; Copyright
                  <router-link to="https://fashion.com">CarParts</router-link> {{ year }}
                </div>
              </div>

              <div class="col-md-7 text-end">
                <div class="social-icon__wrapper">
                  <router-link to="#">
                    <box-icon type='logo' name='instagram' color="white" />
                  </router-link>
                  <router-link to="#">
                    <box-icon name='whatsapp' type='logo' color="white" />
                  </router-link>
                  <router-link to="#">
                    <box-icon name='twitter' type='logo' color="white" />
                  </router-link>
                  <router-link to="#">
                    <box-icon name='facebook' type='logo' color="white" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>



<script>
  export default {
    name: 'AppFooter_Comp',

    props: {
      title: String
    },

    data() {
      return {
        year: new Date().getFullYear(),
      }
    }
  };
</script>



<style lang="scss" scoped>
  @import "AppFooter_Comp";
</style>
