/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js"  
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome': "url('/public/welcome.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'culpa': ['"Mea Culpa"', 'cursive'],
        "third": ["Agbalumo"],
        'edu-hand': ['"Edu AU VIC WA NT Hand"', 'sans-serif'],
        'libre-bodoni': ['"Libre Bodoni"', 'serif'],
        'ranchers': ['"Ranchers"', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito','sans-serif'],
        'pacifico': ['Pacifico', 'sans-serif']
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')  
  ]
}
