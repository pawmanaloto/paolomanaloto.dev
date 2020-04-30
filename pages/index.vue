<template>
  <section class="container">
    <div class="hero">
      <div class="hero__intro font-secondary mb-3">Hi, my name is</div>
      <h1 class="hero__header font-primary text-white">Paolo Manaloto.</h1>
      <h2 class="hero__subheader font-primary">I build things for the web.</h2>
      
      <div class="hero__content mt-3">
        I'm a senior web developer based in Clark, Pampanga specializing in building (and sometimes designing) exceptional, high-quality websites and applications. And I love what I do.
      </div>
      
      <div class="hero__content mt-3">
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
  </section>
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
    &__intro {
      font-size: 1.25rem;
      color: $color-cyan;
    }

    &__header,
    &__subheader {
      font-size: 80px;
      line-height: 1.1;
      font-weight: 700;
    }

    &__subheader {
      color: $color-light-white;
    }

    &__content {
      font-size: 1.3rem;
      max-width: 500px;
      color: $color-light-white;
    }
  }
</style>