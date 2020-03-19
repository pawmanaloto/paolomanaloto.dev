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
      <div class="d-block mt-3">
        <a
          href="https://github.com/pawmanaloto/"
          class="text-white mr-2"
          target="_BLANK"
          rel="noreferrer nofollow">
          <fa-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://ph.linkedin.com/in/paolo-ferdinand-manaloto"
          class="text-white mr-2"
          target="_BLANK"
          rel="noreferrer nofollow">
          <fa-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a
          href="https://www.instagram.com/pawmanaloto/"
          class="text-white mr-2"
          target="_BLANK"
          rel="noreferrer nofollow">
          <fa-icon :icon="['fab', 'instagram']" />
        </a>
      </div>

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
      max-width: 500px;
      color: $color-light-white;
    }
  }
</style>