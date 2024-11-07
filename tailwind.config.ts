import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-wihire",
    "bg-reminderoo",
    "bg-beaknbite",
    "bg-attention",
    "bg-wihireImg",
    "bg-reminderooImg",
    "bg-beaknbiteImg",
    "bg-attentionImg",
  ],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    },
    extend: {
      colors: {
        wihire: "#1BAE8B",
        reminderoo: "#4336F3",
        attention: "#B12220",
        beaknbite: "#DD7047",
        charcoal: "#0E0E0E",
        light: "#fffbf5",
      },
      backgroundImage: {
        reminderooImg: "url('../../public/reminderoo.png')",
        wihireImg: "url('../../public/wihire.png')",
        attentionImg: "url('../../public/attention.png')",
        beaknbiteImg: "url('../../public/beaknbite.png')",
      },
    },
  },
  plugins: [],
};
export default config;
