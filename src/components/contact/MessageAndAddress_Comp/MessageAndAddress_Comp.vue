<template>
    <section class="MessageAndAddress_Comp">
        <div class="container contact__wrapper">
          <div class="row">
            <div class="col-12 mb-4">
              <h2 class="contact__title">Get in Touch</h2>
            </div>

            <!-- Contact Form -->
            <div class="col-lg-7">
              <form role="form" class="contact__form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name*" required>
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="phone" class="form-control" name="email" id="email" placeholder="Phone Number*" required>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" name="subject" id="subject" placeholder="Your Email">
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" placeholder="Message" required></textarea>
                </div>
                <div class="">
                  <button type="submit" class="send_button">Send Message</button>
                </div>
              </form>
            </div>

            <!-- Contact Detail -->
            <div class="col-lg-5">
              <div class="contact-info__wrapper">
                <span class="contact-info__icon"><i class="ti-home"></i></span>
                <div class="media-body">
                  <h5>No 6B Joseph Shyngle Street, off James Robertson Street, Surulere, Lagos State.</h5>
                </div>
              </div>
              <div class="contact-info__wrapper">
                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                <div class="media-body">
                  <h5>(+234) 803 xxxx xxx</h5>
                  <p>Mon to Fri 8AM to 6PM</p>
                </div>
              </div>
              <div class="contact-info__wrapper">
                <span class="contact-info__icon"><i class="ti-email"></i></span>
                <div class="media-body">
                  <h5>example@fashion.com</h5>
                  <p>Send us a mail anytime!</p>
                </div>
              </div>

              <!-- Social Icons -->
              <div class="social-icon__wrapper">
                <h5>Find us on:</h5>
                <router-link to="#">
                  <box-icon type='logo' name='instagram' color="#2c3e50" title="Instagram" />
                </router-link>
                <router-link to="#">
                  <box-icon name='whatsapp' type='logo' color="#2c3e50" title="WhatsApp" />
                </router-link>
                <router-link to="#">
                  <box-icon name='twitter' type='logo' color="#2c3e50" title="Twitter" />
                </router-link>
                <router-link to="#">
                  <box-icon name='facebook' type='logo' color="#2c3e50" title="Facebook" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>



<script>
    export default {
        name: 'MessageAndAddress_Comp'
    };
</script>


<style lang="scss" scoped>
  @import "MessageAndAddress_Comp";
</style>