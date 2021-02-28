const pkg = require("./package");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Paolo Manaloto | Web Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        hid: "robots",
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: pkg.author
      },
      {
        hid: "og:description",
        property: "og:description",
        content: pkg.description
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: pkg.author
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: pkg.description
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/gjj4uzl.css" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    "@nuxtjs/google-gtag"
  ],

  buildModules: ["@nuxtjs/fontawesome"],

  styleResources: {
    scss: "./assets/scss/*.scss"
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  fontawesome: {
    component: "FaIcon",
    icons: {
      brands: ["faGithub", "faInstagram", "faLinkedinIn"],
      regular: ["faPaperPlane"]
    }
  },

  "google-gtag": {
    id: "G-4YRYYGC0GE", // Use as fallback if no runtime config is provided
    config: {
      //debug: true
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
