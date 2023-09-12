import { type Config } from "tailwindcss";

export default {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "1fr 400px",
      },
      gridTemplateAreas: {
        layout: ["header header", "content nav-sidebar"],
      },
      colors: {
        slate: {
          "50": "#F8FAFC",
          "100": "#F1F5F9",
          "200": "#E2E8F0",
          "300": "#CBD5E1",
          "400": "#94A3B8",
          "500": "#64748B",
          "600": "#475569",
          "700": "#334155",
          "800": "#1E293B",
          "900": "#0F172A",
        },
      },
      // Added for development lookup
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
} satisfies Config;
