import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-strong": "var(--muted-strong)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        "surface-muted": "var(--surface-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "accent-fg": "var(--accent-foreground)",
        "section-alt": "var(--section-alt)",
        header: "var(--header-bg)",
        ink: {
          950: "#050505",
          900: "#0b0b0b",
          850: "#111111",
          800: "#171717",
        },
        gold: {
          400: "#ffd500",
          500: "#f5d000",
          600: "#d9ad00",
        },
      },
      boxShadow: {
        glow: "var(--glow-shadow)",
        card: "var(--card-shadow)",
        "card-hover": "var(--card-hover-shadow)",
      },
      backgroundImage: {
        "radial-accent": "radial-gradient(circle at center, var(--accent-glow), transparent 58%)",
        "grid-soft":
          "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
