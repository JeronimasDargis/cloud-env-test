// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      MY_SECRET_KEY: process.env.MY_SECRET_KEY,
    },
  },
});
