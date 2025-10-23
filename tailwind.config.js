// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce4bc',
          300: '#8fd18f',
          400: '#5cb85c',
          500: '#3d8b3d', // Primary green
          600: '#2f6b2f', // Darker green
          700: '#255425',
          800: '#1e441e',
          900: '#183818',
        }
      }
    },
  },
  plugins: [],
}