/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        light: '0px 2px 2px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'lines-pattern': "url('./assets/lines.svg')",
      },
    },
  },
  plugins: [],
}
