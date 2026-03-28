import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: "#080808",
        surface: "#111111",
        border: "#1e1e1e",
        accent: "#C8F542",
        "accent-dim": "#a8d42a",
        muted: "#666666",
        subtle: "#333333",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
