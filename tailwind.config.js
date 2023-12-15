/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-coffee": "#4F2739",
        "light-brown-coffee": "#F5EDDA",
        "med-brown-coffee": "#CA9E7B",
      },
    },
  },
  plugins: [],
};
