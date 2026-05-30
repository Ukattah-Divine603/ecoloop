import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* 🎨 COLORS */
      colors: {
        eco: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // primary
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },

        night: {
          900: "#0F172A",
          950: "#020617",
        },

        glass: "rgba(255,255,255,0.08)",
      },

      /* ✍️ TYPOGRAPHY */
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Sora", "Inter", "sans-serif"],
      },

      /* 📏 SPACING (extra breathing room for SaaS feel) */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      /* 🧊 BORDER RADIUS SYSTEM */
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      /* 🌑 SHADOW + GLOW SYSTEM */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)",

        glow: "0 0 25px rgba(16,185,129,0.35)",

        glass: "0 8px 32px rgba(0,0,0,0.2)",
      },

      /* 🎬 ANIMATIONS */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },

        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },

        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16,185,129,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(16,185,129,0.5)" },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        glowPulse: "glowPulse 3s ease-in-out infinite",
      },

      /* 🌫 BACKDROP BLUR ENHANCEMENTS */
      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [],
};
