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
			keyframes: {
				hammerSwing: {
					"0%": {
						transform: "rotate(45deg)",
						transformOrigin: "bottom center",
					},
					"30%": {
						transform: "rotate(0deg)",
						transformOrigin: "bottom center",
					},
					"60%": {
						transform: "rotate(45deg)",
						transformOrigin: "bottom center",
					},
					"80%": {
						transform: "rotate(0deg)",
						transformOrigin: "bottom center",
					},
					"100%": {
						transform: "rotate(45deg)",
						transformOrigin: "bottom center",
					},
				},
			},
			animation: {
				hammerSwing: "hammerSwing 2s ease-in-out infinite",
			},
		},
	},
	plugins: [typography, forms],
};
