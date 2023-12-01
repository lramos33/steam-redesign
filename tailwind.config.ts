import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },

      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
      },

      screens: {
        xs: "460px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
};

export default config;
