/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13224f",
          secondary: "#091945",
          accent: "#091945",
          neutral: "#13224f",
          "base-100": "#13224f", // default background
          "base-200": "#c4c8d3",
          info: "#091945",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FF0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
