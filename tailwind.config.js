/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
  theme: {
    fontFamily: {
     
    },
    extend: {
      colors: {
        blue: "#E0EEF8",
      },
      screens: {
        "2xl": '2220px',
      },
      backgroundImage:{
        'heroImage': 'url(./src/assets/icons/mez-hero-img.svg)',
        'joinImage': 'url(../src/assets/images/join-background-imagee.png)',
      }
    },
    letterSpacing: {
      wide: "0.5em"
    },
    
  },
  plugins: [
  ],
}

