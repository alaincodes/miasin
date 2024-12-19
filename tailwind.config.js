/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./resources/**/*.edge",
    "./inertia/**/*.ts",
    "./inertia/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, forms],
}

