/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        violet: '#2e1065',
        indigo:'#1e1b4b',
        purple:'#a855f7',
        red:'#dc2626',
        pink:'#db2777',
        slink:'#09090b',
        slate:'#f8fafc',
        // slate:'#020617',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}