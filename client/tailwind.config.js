/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      screens: 
      {
        'xsm': '390px', 
      },
      colors: 
      {
        primary: 
        {
          DEFAULT: '#EE892D', 
          lighter: '#FBE5D0',    
          dark: '#8E4A0B',    
          darker: '#472506',    
        },
        secondary: 
        {
          DEFAULT: '#92929D', 
          light: '#9A9AB0',   
          lighter: '#F1F1F6',
          extralight:'#FCFCFC',
          dark: '#333333',
          darker: '#11142D',    
        },
      },
    },
  },
  plugins: [],
};
