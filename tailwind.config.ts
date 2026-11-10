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
        brand: {
          primary: "#2d487d",     // Porto primary finance blue
          secondary: "#0b1f44",   // Deep midnight navy
          gold: "#c9a24a",        // Warm brass / gold accent
          cream: "#f7f0e7",       // Soft sand / light background
          dark: "#111111",        // Main text & headings
          muted: "#777777",       // Body text muted
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        heading: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
