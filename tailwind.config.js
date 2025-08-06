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
          darkMode: '#1f2020',
          tooRed: '#f70a09'
        }
      },
    },
  plugins: [],
}

