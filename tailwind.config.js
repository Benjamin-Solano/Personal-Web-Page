/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f0ede8',
          100: '#dedad4',
          200: '#b8b3ac',
          300: '#908b84',
          400: '#68635d',
          500: '#403c37',
          600: '#2a2724',
          700: '#1a1816',
          800: '#100f0d',
          900: '#0a0908',
        },
        cream: {
          50:  '#faf8f5',
          100: '#f5f2ec',
          200: '#eceae3',
          300: '#dedad2',
          400: '#cac6bc',
          500: '#b0aca2',
        },
        gold: {
          300: '#e8cc7a',
          400: '#d4b44a',
          500: '#b89a2e',
          600: '#9a7e1a',
          700: '#7c640e',
        }
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'ticker': 'ticker 28s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
