/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/shared/components/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("tailwindcss-all"),
  ],
  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
          primary: "#216869",
          secondary: "#529B03",
          accent: "#51D6FF",
          // neutral: "#1A181B",
          // neutral: "#3d4451",
          // "base-100": "#FFFFFF",
          // "base-100": "#FCF7F8",
        },
      },
    ],
  },
};
