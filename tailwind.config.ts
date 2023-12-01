import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },

      screens: {
        xs: "460px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },

      backgroundColor: {
        "background-main": "var(--bg-main)",
        "background-highlight": "var(--bg-highlight)",
        "background-hover": "var(--bg-hover)",
        "background-secondary": "var(--bg-secondary)",
        "background-tertiary": "var(--bg-tertiary)",
      },

      colors: {
        "color-primary": "var(--color-primary)",
        "color-secondary": "var(--color-secondary)",
        "color-accent-green": "var(--color-accent-green)",
        "color-accent-red": "var(--color-accent-red)",
        "color-accent-yellow": "var(--color-accent-yellow)",
      },

      textColor: {
        main: "var(--text-main)",
        dim: "var(--text-dim)",
      },
    },
  },
};

export default config;
