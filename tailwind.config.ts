import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        text100: "#121212",
        text80: "#121212CC",
        text60: " #12121299",
        text40: "#12121266",
        text20: "#12121233",
        text4: "#1212120A",
      },
    },
    keyframes: {
      "loop-horizontal": {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
    animation: {
      loop: "loop-horizontal 10s linear infinite",
    },
  },
  plugins: [],
};
export default config;
