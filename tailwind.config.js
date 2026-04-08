/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        slateBlue: '#F0F4F8',
        vibrantCyan: '#00E5FF',
        medicalBlue: '#0070f3',
        primaryText: '#1E293B',
        secondaryText: '#64748B',
        darkTeal: '#0F172A',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
