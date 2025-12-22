/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oda-brown': '#3c2b23',
        'oda-gold': '#d99b3b',
        'oda-cream': '#f7f0e4',
        'oda-green': '#1f6f3e',
        'oda-sky': '#2f86c9',
      },
    },
  },
  plugins: [],
};
