module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'bFirstImage': "url('./../src/assets/p1.jpg')",
       'bSecondImage': "url('./../src/assets/p2.jpg')",
       'bThirdImage': "url('./../src/assets/p3.jpg')",
      }),
      height: theme => ({
       'customHeight': '50vh',
       'customHeight2': '70vh',
        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
