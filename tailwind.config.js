/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8F0EFC",
        secondary: "#F1F1F1",
        hover: "#00FFF7",
        highlight: "#FCE94F	",
        mute: "#A0A0A0",
        background: "#121212",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter font
        sans: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  module: {
    theme: {
      extend: {
        scrollBehavior: ["motion-safe"],
      },
    },
    variants: {
      extend: {
        scrollBehavior: ["responsive"],
      },
    },
    plugins: [],
  },
  plugins: [],
};
