<template>
    <div class="AppHeaderComp">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">

          <h2 class="brand__name">
            <a class="navbar-brand" href="#">{{ title }}</a>
          </h2>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
<!--              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>-->
              <li class="nav-item">
                <router-link to="/gallery" class="nav-link">Gallery</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'AppHeader_Comp',

  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
    @import "AppHeader_Comp";
</style>
