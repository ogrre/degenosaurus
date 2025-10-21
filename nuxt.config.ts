export default defineNuxtConfig({
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

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  devtools: { enabled: true },

  nitro: {
    preset: 'vercel'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2024-12-19'
})