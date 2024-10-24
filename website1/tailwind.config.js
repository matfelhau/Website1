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
        'code-color': '#282A36',
        'warning-color': '#FFDB9B',
        'message-color': '#E0F9F0',
        'error-color': '#FEEAEA',
        'warning-border-color': '#FFA70B',
        'warning-bg-color': '#FFF2DA',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}