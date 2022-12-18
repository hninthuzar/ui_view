/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {  // see colorxcode
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  },
  theme: {
    fontFamily: {
      'primary': ['Jost', 'sans-serif']
    },
    screens: {  // under 640
      "6xs": "320px",
      "5xs": "360px",
      "4xs": "375px",
      "3xs": "390px",
      '2xs': '414px',
      'xs': '480px',
      'xsm': '560px'
    },
    extend: {
      colors: {
        bluez: "#0054A6",
        darkbluez: "#063A78",
        darkblackz: "#082A36",
        lightblackz: "#4F5A5E",
        greyz: "#8FA5AE",
        cyanz: "#00B9FF",
        purplez: "#DD5BF2",
        infoz: "#5C80FF",
        successz: "#51D4A5",
        warningz: "#FFB547",
        dangerz: "#FF545F",
        blackz: "#082A36",
        blackz2: "#4F5A5E",
        footerbg: "#06458D"
      },
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1360px",
        "3xl": "1440px",
        "4xl": "1560px",
        "5xl": "1600px",
        "6xl": "1680px",
        "7xl": "1920px",
        "8xl": "2560px",
        "9xl": "3440px"
      },
      boxShadow: {
        "csv2": "0px 15px 35px rgba(34, 79, 94, 0.06)"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      // Container Adjustment - @screen sm is equal to @media (min-width: 640px)
      addComponents({
        ".containerv2": {
          maxWidth: "100%",
          padding: "0 20px",
          "@screen sm": {
            maxWidth: "640px",
            padding: "0 20px",
          },
          "@screen md": {
            maxWidth: "768px",
            padding: "0 40px",
          },
          "@screen lg": {
            maxWidth: "1024px",
            padding: "0 40px",
          },
          "@screen xl": {
            maxWidth: "1200px",
            padding: "0 40px",
          },
        },
        ".container.px-0": {
          padding: "0",
        }
      });
    },
  ],
}
