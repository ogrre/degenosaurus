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
        'sky': '#99EBFF',
        'ground': '#81b559',
        'dino-yellow': '#fce354',
        'dino-green': '#729f4e',
      },
      animation: {
        cloud: 'cloud 60s linear infinite',
        slowCloud: 'slowCloud 80s linear infinite',
        cloud2: 'cloud2 60s linear infinite',
        slowCloud2: 'slowCloud2 80s linear infinite'
      },
      keyframes: {
        cloud: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
        slowCloud: {
          '0%': {
            transform: 'translateX(50%)'
          },
          '100%': {
            transform: 'translateX(-150%)'
          },
        },
        cloud2: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
        slowCloud2: {
          '0%': {
            transform: 'translateX(50%)'
          },
          '100%': {
            transform: 'translateX(-150%)'
          },
        },
      },
    }
  },
  plugins: [],
}
