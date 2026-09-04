import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 12s ease-in-out infinite",
        "drift-1": "drift1 6s ease-in-out infinite",
        "drift-2": "drift2 8s ease-in-out infinite",
        "drift-3": "drift3 10s ease-in-out infinite",
        "float-photo": "floatPhoto 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1) rotate(5deg)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9) rotate(-5deg)" },
        },
        drift1: {
          "0%, 100%": { transform: "translateY(0px) rotate(12deg)" },
          "50%": { transform: "translateY(-16px) rotate(20deg)" },
        },
        drift2: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(14px) translateX(10px)" },
        },
        drift3: {
          "0%, 100%": { transform: "translateY(0px) rotate(45deg)" },
          "50%": { transform: "translateY(-12px) rotate(60deg)" },
        },
        floatPhoto: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
