// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/ionic",
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/tailwindcss",
  ],
});
