import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          700: '#ff7536',
          800: '#f04d06',
        },
      },
      boxShadow: {
        'card': "0px 2px 4px 0px #1212170a,0px 5px 8px 0px #1212170a,0px 10px 18px 0px #12121708,0px 24px 48px 0px #12121708,0px 0px 0px 1px #1212171a"
      }
    },
  },
  plugins: [],
};
export default config;
