/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        natraj: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          500: '#A8201A', // Signature Natraj Crimson
          600: '#8E1B15',
          700: '#731611',
          800: '#58100C',
        },
        apsara: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#1E4D5E',
          700: '#143642', // Signature Apsara Deep Teal
          800: '#0E252D',
          900: '#08171C',
          950: '#061318',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAFAFA', // Dominant Canvas
          200: '#F4F5F6',
          300: '#E9EBEF',
        },
        gold: {
          500: '#D97706',
          600: '#B45309',
        }
      },
      boxShadow: {
        'floating': '0 20px 40px -15px rgba(20, 54, 66, 0.08), 0 0 15px rgba(0, 0, 0, 0.03)',
        'floating-lg': '0 30px 60px -12px rgba(20, 54, 66, 0.15), 0 0 25px rgba(168, 32, 26, 0.06)',
        'glass': '0 8px 32px 0 rgba(20, 54, 66, 0.08)',
        'crimson-glow': '0 10px 25px -5px rgba(168, 32, 26, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
