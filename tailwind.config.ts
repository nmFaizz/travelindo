import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-primary": "var(--orange-primary)",
        "white-primary": "var(--white-primary)",
        "black-primary": "var(--black-primary)",
      }
    },
  },
  plugins: [],
};
export default config;
