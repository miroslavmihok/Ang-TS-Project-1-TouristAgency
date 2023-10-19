/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'trips1': "url('./assets/trips/trips1.jpg')",
      }
    },
  },
  plugins: [],
}

