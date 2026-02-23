/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#FAFAFA",
        border: "#E5E5E5",
        "text-primary": "#1D1D1F",
        "text-secondary": "#6E6E73",
        "text-tertiary": "#86868B",
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.02em' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4', fontWeight: '400' }],
        'nav': ['14px', { lineHeight: '1', fontWeight: '500' }],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'image': '8px',
        'tag': '6px',
      },
      spacing: {
        'section': '64px',
        'card': '24px',
      },
    },
  },
  plugins: [],
};
