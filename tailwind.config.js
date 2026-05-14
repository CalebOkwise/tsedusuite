export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          900: '#0f172a',
          800: '#17243d',
          700: '#1f2f50',
          600: '#3c5ea6',
          500: '#4f75d5',
          400: '#7a9cf0'
        }
      },
      boxShadow: {
        soft: '0 25px 80px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
