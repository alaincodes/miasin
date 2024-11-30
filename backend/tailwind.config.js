/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./inertia/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark", "garden"],
  },
}

