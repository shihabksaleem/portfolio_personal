/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'flutter-blue': '#0175C2',
        'flutter-navy': '#02569B',
        'flutter-sky': '#13B9FD',
        'flutter-yellow': '#FFD500',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s both',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        'soft': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 25px rgba(59, 130, 246, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};