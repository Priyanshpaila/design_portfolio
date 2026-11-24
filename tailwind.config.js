/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        "bone-white": "#ffffff",
        "ash-gray": "#9a9a9a",
        "silver-mist": "#bdbdbd",
        "electric-iris": "#8052ff",
        "saffron-spark": "#ffb829",
        "deep-verdant": "#15846e",
      },
      fontFamily: {
        sans: [
          "PPNeueMontreal",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "PPNeueMontreal",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.5" }],
        "nav-label": ["14px", { lineHeight: "1.2", letterSpacing: "0.35px" }],
        body: ["18px", { lineHeight: "1.5" }],
        "heading-2xs": ["24px", { lineHeight: "1.25", letterSpacing: "-0.48px" }],
        "heading-xs": ["27px", { lineHeight: "1" }],
        subheading: ["36px", { lineHeight: "1.2" }],
        "heading-sm": ["42px", { lineHeight: "1.2", letterSpacing: "-1.68px" }],
        heading: ["48px", { lineHeight: "1.1", letterSpacing: "-1.68px" }],
        "heading-lg": ["78px", { lineHeight: "1.1", letterSpacing: "-3.12px" }],
        display: ["113px", { lineHeight: "1.1", letterSpacing: "-4.52px" }],
      },
      spacing: {
        "6": "6px",
        "12": "12px",
        "18": "18px",
        "24": "24px",
        "30": "30px",
        "36": "36px",
        "60": "60px",
        "96": "96px",
        "120": "120px",
      },
      borderRadius: {
        "3xl": "24px",
        pill: "22.5px",
        full: "9999px",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};
