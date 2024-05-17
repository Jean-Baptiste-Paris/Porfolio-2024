/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui'],
      display: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
