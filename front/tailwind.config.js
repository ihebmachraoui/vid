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
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
