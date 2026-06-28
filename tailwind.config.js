/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        term: {
          bg: '#08090e',
          panel: '#0b0c12',
          chrome: '#0f1117',
          border: 'rgba(255,255,255,0.06)',
          green: '#4ade80',
          sky: '#7dd3fc',
          amber: '#fbbf24',
          purple: '#c084fc',
        },
      },
    },
  },
  plugins: [],
}
