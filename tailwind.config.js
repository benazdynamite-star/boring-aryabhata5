/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#5C4033',
          dark: '#3E2723',
          light: '#7B5E52',
        },
        cream: {
          DEFAULT: '#F8F1E5',
          dark: '#E8DCCB',
        },
        gold: '#C9A227',
        charcoal: '#2D2D2D',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
