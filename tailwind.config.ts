import type { Config } from "tailwindcss";

/* ============================================================
   CUSTOM TRUCK INSURANCE — "Gunmetal & Flame" palette
   clay = gunmetal · sage/gold = orange flame
   cream = off-white · sand = warm gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F6F2",
        sand: "#EDEAE4",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#3D3D3D",
          dark: "#222222",
          light: "#5A5A5A",
          50: "#F0F0F0",
          100: "#D8D8D8",
          200: "#B0B0B0",
          300: "#888888",
          400: "#666666",
          500: "#5A5A5A",
          600: "#3D3D3D",
          700: "#222222",
          800: "#141414",
          900: "#0A0A0A",
        },
        sage: {
          DEFAULT: "#E85D04",
          dark: "#C44D00",
          light: "#FF7A2F",
          50: "#FFF0E6",
          100: "#FFDBCC",
          200: "#FFB899",
          300: "#FF7A2F",
          400: "#F06A10",
          500: "#E85D04",
          600: "#C44D00",
          700: "#9E3E00",
        },
        gold: {
          DEFAULT: "#E85D04",
          dark: "#C44D00",
          light: "#FF7A2F",
          50: "#FFF0E6",
          100: "#FFDBCC",
          200: "#FFB899",
          300: "#FF7A2F",
          400: "#F06A10",
          500: "#E85D04",
          600: "#C44D00",
        },
        espresso: "#1A1A1A",
        cocoa: "#2E2E2E",
        mocha: "#6B6B6B",
        adobe: "#D4C9BB",
        adobeDark: "#B8A898",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F8F6F2 0%, #EDEAE4 40%, #E8E4DC 70%, #F8F6F2 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(232,93,4,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(61,61,61,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #3D3D3D 0%, #5A5A5A 100%)",
        "sage-gradient": "linear-gradient(135deg, #E85D04 0%, #FF7A2F 100%)",
        "gold-gradient": "linear-gradient(135deg, #E85D04 0%, #FF7A2F 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(232, 93, 4, 0.22), 0 4px 12px -6px rgba(26, 26, 26, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(232, 93, 4, 0.28), 0 10px 30px -10px rgba(26, 26, 26, 0.10)",
        card: "0 2px 8px -2px rgba(26, 26, 26, 0.06), 0 1px 3px -1px rgba(26, 26, 26, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(232, 93, 4, 0.24), 0 8px 20px -8px rgba(26, 26, 26, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(232, 93, 4, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
