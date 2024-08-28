/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      
      screens: {
        'custom1': '900px', 
        'custom2': '1190px', 
      },
      boxShadow: {
        'booking': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      fontFamily: {
        eduVic: ['"Edu VIC WA NT Beginner"', 'sans-serif'],
        newAmsterdam: ['"New Amsterdam"', 'serif'],
        jost: ['"Jost"', 'Helvetica', 'Arial', 'sans-serif'],

      },
      backgroundColor: {
        'pagination': 'linear-gradient(45deg, rgba(var(--primary-color-rgb), .8), rgba(var(--secondary-color-rgb), .8))',
      },
      colors:{
        'primary' : "#83cc61",
        'secondary' : "#212529",
        'third' : "#7b8893",
        'fourth':"#ff0000",
        
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
