// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: {
          brand: "#8cc63f",
          dark: "#5f9c05"
        },
      },
    },
  },
  plugins: [],
};
