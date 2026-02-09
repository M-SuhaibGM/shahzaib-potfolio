/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      // Using the updated color names
      primary: colors.violet,  // Replaces purple (which is now violet in v3)
      secondary: colors.fuchsia,  // Replaces pink (more vibrant alternative)
      
      // Explicitly include the renamed colors if you need them
      sky: colors.sky,        // Replaces lightBlue
      stone: colors.stone,    // Replaces warmGray
      neutral: colors.neutral, // Replaces trueGray
      gray: colors.gray,      // Replaces coolGray
      slate: colors.slate,    // Replaces blueGray
    },
  },
  plugins: [],
};