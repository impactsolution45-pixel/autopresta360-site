import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a1120",
        panel: "#0f172a",
        panel2: "#1e293b",
        panel3: "#334155",
        line: "#22314a",
        cyan: {
          DEFAULT: "#38bdf8",
          dim: "#0ea5e9",
        },
        mute: "#94a3b8",
        ash: "#cbd5e1",
        amber: "#fb923c",
        gold: "#f59e0b",
        leaf: "#22c55e",
        violet: "#8b5cf6",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.25), 0 12px 40px rgba(56,189,248,0.18)",
        "glow-lg": "0 0 60px rgba(56,189,248,0.25)",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "rotate(-120deg)" },
          "100%": { transform: "rotate(120deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
