// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: This path tells Tailwind to scan all JavaScript/JSX/TSX files in your 'src' folder
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}