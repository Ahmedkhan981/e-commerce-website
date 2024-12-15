import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F43F5E",
        greendark:" #23856D",
        lightgreen:"#2dc071",

      },
    },
  },
  plugins: [],
} satisfies Config;
