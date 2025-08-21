/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Azul substituindo o roxo Rocketseat
        secondary: '#0F172A',
        accent: '#38BDF8'
      }
    }
  },
  plugins: [],
}
