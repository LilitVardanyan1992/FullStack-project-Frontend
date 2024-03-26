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
        primary: "#111928",
        secondary: "#4B5563",
        lightGray: "#F9FAFB",
        bg: "#DCDCDC",
        scrollbar: {
          track: "rgba(225, 239, 254, 1)",
          thumb: "rgba(164, 202, 254, 1)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};

export default config;
