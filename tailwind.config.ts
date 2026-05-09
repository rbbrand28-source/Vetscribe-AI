import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        primary: "#7c3aed",
        secondary: "#0f172a"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 6s infinite"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
