import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tgreen: "#097d4c",
        tpeach: "#f1ead1"
      },
      fontFamily: {
        cooper: ['"cooper-black-std"', 'sans-serif'],
        news: ['"new-spirit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
