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
        'heroImage': 'url(https://res.cloudinary.com/dayomichael/image/upload/v1714809968/nick-wessaert-JI01fn0U7Cg-unsplash_2_pu53zr.png)',
        'joinImage': 'url(../src/assets/images/join-background-imagee.png)',
        'missionImage': 'url(https://res.cloudinary.com/dayomichael/image/upload/v1715935736/our-mission-image_u66j6r.svg)',
        'visionImage': 'url(https://res.cloudinary.com/dayomichael/image/upload/v1715935780/our-vision-image_uszyad.svg)',
        'justForYou': 'url(https://res.cloudinary.com/dayomichael/image/upload/v1715935819/just-for-you-image_iquh7d.svg)',
        "propertyView": 'url(https://res.cloudinary.com/dayomichael/image/upload/v1715935856/property-view_lndbsn.svg)',
      }
    },
    letterSpacing: {
      wide: "0.5em"
    },
    
  },
  plugins: [
  ],
}

