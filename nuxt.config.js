export default {
  head: {
    title: 'Degenosaur.us',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Degenosaur.us, the degenerate dinosaur' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/main/dino.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
  ],

  modules: [
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}
