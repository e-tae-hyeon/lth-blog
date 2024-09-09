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
  },
  plugins: [],
};
export default config;
