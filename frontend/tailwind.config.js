/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			colors: {
				"c-yellow-1": "#ffd859",
				"c-yellow-2": "#f7d33",
				"c-yellow-3": "#dec96e",
				"c-black": "#111827",
				"c-black-darker": "#0d121b",
				"c-black-light": "#161f32",
				"c-black-lighter": "#262a44",
				"c-green-1": "#52ce63",
				"c-green-2": "#8ae99c",
				"c-green-3": "#51a256",
				"c-green-soft": "#316334",
			},
		},
	},
	plugins: [typography, forms],
};
