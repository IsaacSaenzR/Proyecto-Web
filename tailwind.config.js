/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'spinner-grow': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
      animation: {
        'spinner-grow': 'spinner-grow 0.75s linear infinite',
      },
    },
  },
  plugins: [],
}

