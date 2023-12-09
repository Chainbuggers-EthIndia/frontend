/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkgreen: 'rgb(75, 86, 82)',
      offwhite1: 'rgb(214,208,196)',
      offwhite2: 'rgb(222,209,203)',
      green: 'rgb(69,95,70)',
      burdundy: 'rgb(82,27,32)',
      gray: "rgba(255, 255, 255, 0.19)",
      lightgray: "#d6d0c4",
      white: '#FFFFFF',
      lightgreen : '#50C878',
      red : '#C70039'
    }

  },
  spacing: {},
  borderRadius: {
    "3xs": "10px",
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}

