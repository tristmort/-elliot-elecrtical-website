import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C2E66",
        "primary-light": "#1C75BC",
        accent: "#0FA3B1",
        "light-grey": "#F4F6F8",
        "dark-text": "#1A1A2E",
        "muted-text": "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "slide-in-left": "slideInLeft 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "slide-in-right": "slideInRight 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      keyframes: {
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
