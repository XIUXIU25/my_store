/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--background))",  // Register the background color
        foreground: "hsl(var(--foreground))",  // Register foreground color
        border: "hsl(var(--border))",  // Register border color
      },
    },
  },
  plugins: [],
};