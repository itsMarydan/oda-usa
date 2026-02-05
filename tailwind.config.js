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
        'oda-brown': '#2C3E50',
        'oda-gold': '#F5B041',
        'oda-cream': '#F9F6F3',
        'oda-blue': '#4A90E2',
        'oda-sky': '#E8F4F8',
        'oda-navy': '#003D82',
      },
      borderRadius: {
        'btn': '10px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)',
        'btn': '0 2px 4px rgba(74, 144, 226, 0.2)',
        'btn-hover': '0 4px 12px rgba(74, 144, 226, 0.3)',
      },
    },
  },
  plugins: [],
};
