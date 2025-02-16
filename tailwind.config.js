/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    
    extend: {

      screens: {
        'sm': '640px',
        'md': '720px',
        'lg': '1024px',
        'xl': '1440px',
      },
      
    },
  },
  plugins: [],
}

