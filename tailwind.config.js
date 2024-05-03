/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./index.html"],
  theme: {
    fontFamily: {
      comfortaa: ['Comfortaa', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: "#E0EEF8",
      },
      screens: {
        "2xl": '2220px',
      },
      backgroundImage:{
        'heroImage': 'url(./src/assets/la-images/hero-bg-image.svg)',
        'joinImage': 'url(../src/assets/images/join-background-imagee.png)',
        'missionImage': 'url(../src/assets/la-images/our-mission-image.svg)',
        'visionImage': 'url(../src/assets/la-images/our-vision-image.svg)',
      }
    },
    letterSpacing: {
      wide: "0.5em"
    },
    
  },
  plugins: [
  ],
}

