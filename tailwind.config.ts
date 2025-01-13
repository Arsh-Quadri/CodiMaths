import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#212121",
          exdark: "#0F0F0F",
          golden: "#FFBE1A",
          fontcol: "#CFCFCF",
          btnfont: "#131616",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      fontFamily: {
        lilita: ["var(--font-lilita-one)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
