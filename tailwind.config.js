/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 0.4s ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
