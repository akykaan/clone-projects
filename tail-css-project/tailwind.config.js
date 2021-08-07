module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        sm: "8rem",
        md: "16rem",
        lg: "24rem",
        '-86': "-86rem",
      },
    },
  },
  variants: {
    extend: {
      tableLayout:['hover','focus'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
