/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	screens: {
	'sm': '640px',   
	'md': '768px', 
	'lg': '1024px',
	'xl': '1280px', 
  
	'2xln': { max: "1535px" },
	// => @media (max-width: 1535px) { ... }
  
	'xln': { max: "1279px" },
	// => @media (max-width: 1279px) { ... }
  
	'lgn': { max: "1023px" },
	// => @media (max-width: 1023px) { ... }
  
	'mdn': { max: "767px" },
	// => @media (max-width: 767px) { ... }
  
	'smn': { max: "639px" },
	// => @media (max-width: 639px) { ... }
  
	  },
    extend: {
      colors: {
        "custom-black" : "#000000",
        "custom-purple": "#26184b",
        "custom-blue": "#3E3062",
        "custom-pink": {
          light: "#F881F3",
          DEFAULT: "#BC81F8",
        },
        "custon-fixia": {
          light: "#ff0080",
          default: "#7928ca"
        },
        "custom-lavender": "#F0DAFB",
        "custom-white": "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
