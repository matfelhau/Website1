/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#0f0f0f',
        'custom-gray': '#3c3c3c',
      }
    },
  },
  plugins: [],
}