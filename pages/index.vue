<template>
  <div>
    <section class="hero">
      <div class="hero-body container">
        <div class="row">
          <div class="col-7">
            <div class="hero-body__intro font-secondary mb-3">Hi, my name is</div>
            <h1 class="hero-body__header font-primary text-white">Paolo Manaloto.</h1>
            <h2 class="hero-body__subheader font-primary mb-5">I build solutions for the web.</h2>
            
            <div class="hero-body__content">
              I'm a senior web developer based in Clark, Philippines enjoying in building (and once in a while designing) exceptional, superb websites, and applications. I'm passionate on what I do.
            </div>
            
            <div class="hero-body__content mt-3">
              <strong>Please bare with me, proper website coming soon.</strong>
            </div>

            <a
              href="mailto:manalotopaolof@gmail.com"
              class="button mt-5">
              <fa-icon
                :icon="['far', 'paper-plane']"
                class="mr-2"/>
              <span>Get in Touch</span>
            </a>
          </div>

          <div class="col d-flex justify-content-center align-items-center">
            <img
              src="~/assets/img/hero-photo.jpg"
              class="rounded-circle hero-body__photo">
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="bg-primary-dark">
      <div class="container text-left">
        <div class="hero-body__intro font-secondary mb-3">About Me</div>
        <h2 class="font-primary font-w-700 text-white">Hi, I’m Paolo. Nice to meet you.</h2>
        <div class="hero-body__content">
          <p class="">I'm very passionate about creating and developing websites and web applications. I enjoy learning new technology or new things in the web. It's always my objective to learn new something everyday.</p>
          <p class="hero-body__content">My goal is to always build quality digital products that will be helpful for the both business and consumer use.</p>
        </div>
      </div>
    </section> -->

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  section {
    padding: 150px 0px;
  }

  .hero {
    height: 100vh;
  }

  .hero-body {
    &__intro {
      font-size: 1.25rem;
      color: $color-cyan;
    }

    &__header {
      font-size: 80px;
      line-height: 1.1;
      font-weight: 700;
    }

    &__subheader {
      color: $color-light-white;
      font-size: 60px;
      font-weight: 700;
      line-height: 1;
      max-width: 490px;
    }

    &__content {
      font-size: 1.3rem;
      max-width: 500px;
      color: $color-light-white;
    }

    &__photo {
      height: 400px;
      width: 400px;
      object-fit: cover;
    }
  }
</style>