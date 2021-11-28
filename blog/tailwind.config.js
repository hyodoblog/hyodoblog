module.exports = {
  mode: 'jit',
  purge: [
    './app.vue',
    './nuxt.config.{js,ts}',
    './client/components/**/*.{vue,js,ts}',
    './client/layouts/**/*.vue',
    './client/pages/**/*.vue',
    './client/plugins/**/*.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
