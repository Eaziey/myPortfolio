/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          skylight: '#38b6ff',
          darkMode: '#000000',
          lightDarkMode: '#18191E'
        }
      },
    },
  plugins: [],
}

