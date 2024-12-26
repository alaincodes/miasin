// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-12-20",

	app: {
		pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: 'utf-8',
      title: 'MIASIN | YOU ARE THE JUDGE',
    }
	},

	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@pinia/nuxt", "@nuxt/image", "@pinia/nuxt", "@vueuse/nuxt"],
});
