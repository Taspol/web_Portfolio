/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans :['var(--font-noto-sans-thai)'],
      },
      colors: {
        custom: {
          'light-blue': '#D5EEFF',
          'dark-blue': '#4A677A',
        },
        backgroundImage: {
          'rpa': "url('/img/RPA.png')",
        }
      },
    },
    plugins: [],
  }
}