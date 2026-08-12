import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B8223A",
        accent: "#931B2E",
        surface: "#E9E7DC",
        elevated: "#DDDBD1",
        muted: "#6B6B6B",
        border: "#686868",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
