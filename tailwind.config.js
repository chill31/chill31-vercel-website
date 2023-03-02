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
        "1.5xl": "1.345rem", // between 1xl and 2xl
        "7.5xl": "5.75rem" // title font size when in small screens
      },
      screens: {
        'skw': '750px', // the media width when mobile menu needs to pop up and everything needs to scale down
        'mb': '430px' // smaller breakpoint for mobile devices
      }
    },
  },
  plugins: [],
}