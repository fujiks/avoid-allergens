import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        red: "#DB0000",
        orange: "#FBC076",
        black: "#212121",
        dark: "#434738",
        purple: "#4045AF",
        fadePurple: "#798bcc",
        lightPurple: "#AFADE3",
        lightGreen: "#C5CCAD",
        lightGray: "#F9F9F9",
        gray: "#ABABAB",
        fadeGray: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
export default config;
