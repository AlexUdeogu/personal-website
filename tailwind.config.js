/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        cursive: ['Allura', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        serif: ['Crimson Text', 'serif'], // Add Crimson Text here
      },
    },
  },
  container: {
    center: true,
    padding: "15px",
  },
  plugins: [],
};
