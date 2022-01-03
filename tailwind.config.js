const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '600px',
        lg: '700px',
        '2xl': '1000px'
      }
    },
    extend: {
      fontFamily: {
        'title': ["Playfair Display", "Spline Sans", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
