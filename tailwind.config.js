const colors = {
  obsidian: "#0A0A0C",
  electric: "#2563EB",
  violet: "#7C3AED",
  surface: "#111114",
  line: "#1E1E24",
  muted: "#8A8A95"
};

module.exports = {
  content: [
    "./app*.{ts,tsx}",
    "./app/components*.{ts,tsx}",
    "./app/lib*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      maxWidth: {
        container: "1200px"
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" }
        },
        smokeDriftA: {
          "0%,100%": { transform: "translate3d(-6%, -4%, 0) scale(1.05)" },
          "50%": { transform: "translate3d(4%, 6%, 0) scale(1.15)" }
        },
        smokeDriftB: {
          "0%,100%": { transform: "translate3d(5%, 3%, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-5%, -6%, 0) scale(1.2)" }
        },
        smokeDriftC: {
          "0%,100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-3%, 4%, 0) scale(1.08)" }
        },
        caret: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        rgbSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        ticker: "ticker 32s linear infinite",
        smokeA: "smokeDriftA 26s ease-in-out infinite",
        smokeB: "smokeDriftB 32s ease-in-out infinite",
        smokeC: "smokeDriftC 40s ease-in-out infinite",
        caret: "caret 1s steps(1) infinite",
        rgbSpin: "rgbSpin 4s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};