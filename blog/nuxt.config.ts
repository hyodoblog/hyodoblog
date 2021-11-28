import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'client/',

  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  },
})
