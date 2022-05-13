module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'ivory': '#F8FDED',
        'body': '#F1FBDA',
        'sky' : '#99EBFF',
        'ground' : '#81b559',
        'dino-yellow': '#fce354',
        'dino-green': '#729f4e',
      },
    },
  },
  plugins: [],
}
