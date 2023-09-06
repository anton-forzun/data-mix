// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  target: 'static',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  router: {
    middleware: 'auth', 
  },
})
