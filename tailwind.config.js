/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'primaryBlack':'#111517',
        // 'gray-100':'#697C9A',
        // 'gray-200':'#4B6A9B',
        // 'gray-300':'#2B3442',
        // 'gray-500':'#1E2A47',
        // 'primaryBlack':'#141D2F',
        // 'white':'#ffffff'
      },
      fontFamily: {
        'nunitoSans': ['Nunito Sans',],
      },
    },
  },
  plugins: [],
}

