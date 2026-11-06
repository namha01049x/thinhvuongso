/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyssal: {
          DEFAULT: '#1B2632',
          deep: '#16212C',
          footer: '#121B24',
          surface: '#2C3B4D',
        },
        palladian: '#EEE9DF',
        oatmeal: '#C9C1B1',
        flame: {
          DEFAULT: '#FFB162',
          hover: '#FFC27F',
        },
        truffle: '#A35139',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'flame': '0 12px 30px -14px rgba(255, 177, 98, 0.8)',
        'flame-lg': '0 18px 40px -14px rgba(255, 177, 98, 0.95)',
        'palladian': '0 16px 34px -16px rgba(238, 233, 223, 0.6)',
      },
    },
  },
  plugins: [],
};
