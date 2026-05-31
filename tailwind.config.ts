import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#dbe5ff",
          200: "#bccfff",
          300: "#8aabff",
          400: "#577eff",
          500: "#3257ff",
          600: "#1c36e6",
          700: "#1726b8",
          800: "#0f1a7a",
          900: "#0a1240",
          950: "#050828",
        },
        electric: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#1d4ed8",
        },
        neon: {
          purple: "#8b5cf6",
          green: "#10b981",
          blue: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "gradient-primary":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)",
        "gradient-hero":
          "linear-gradient(180deg, transparent 0%, rgba(10,18,64,0.4) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.7s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.5)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.35)",
        "glow-purple": "0 0 40px rgba(139,92,246,0.35)",
        "glow-green": "0 0 40px rgba(16,185,129,0.35)",
        glass: "0 8px 32px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
