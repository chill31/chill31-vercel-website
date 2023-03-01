/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "1.5xl": "1.345rem" // between 1xl and 2xl
      },
      screens: {
        'skw': '690px' // when skills wrapper is wrapped down to one element per view 
      }
    },
  },
  plugins: [],
}