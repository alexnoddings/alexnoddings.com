/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    lineHeight: {
      normal: "1.13",
      relaxed: "1.25",
      loose: "1.32",
    },
    screens: {
      sm: "384px",
      md: "512px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
