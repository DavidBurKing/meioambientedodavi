/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 1px 5px #00000065',
        '4xl': '0px 1px 14px 0px #000000c2'
      },
      dropShadow: {
        'text': '2px 2px 0px #000000'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px'
      },
      colors: {
        'bluish-light-gray': '#e7e7e7',
        'popbackground': '#00000080',
        'backgroundindex': '#363535',
        'ForestGreen': '#239D12',
        'DarkMossGreen': '#505F04',
        'Bone': '#CFCBBD'
      },
      screens: {
        'DisposG': '426px',
        'ResponsiveExtraBig': '900px',
        'ResponsiveExtra': '800px',
        'ResponsiveBig': '690px',
        'ResponsiveMid': '500px'
      },
    },
  },
  plugins: [],
}