import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        _theme_primary_gray: "#F0F2F5",
        _theme_primary_blue: "#1877F2",
        _theme_secondary_blue: "#3D8CF4",
        _dark: "#1C1E21",
        _green: "#42B72A",
        _green_dark: "#36A420",
        _error_color: "#BE4B49",
        _gray: "#777777",
      },
      fontSize: {
        "2xs": "11px",
        "2.5xl": "28px"
      }
    },
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      "Roboto": "'Roboto', Arial"
    },
  },
  plugins: [],
};
export default config;
