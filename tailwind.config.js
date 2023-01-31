/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // CHANGES DEFAULTS... (CHANGES WHAT ALREADY EXISTS IN TAILWIND)
    extend: {
      // EXTENDS DEFAULTS... (ADDS WHAT TAILWIND DIDN'T HAVE BEFORE)
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
