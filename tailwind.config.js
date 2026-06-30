/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Air Indo Primary Colors
        primary: {
          50: '#e8f1f8',
          100: '#d1e3f1',
          200: '#a3c7e3',
          300: '#75abd5',
          400: '#478fc7',
          500: '#1a73b9',
          600: '#155aa3',
          700: '#10418d',
          800: '#0b2877',
          900: '#003d52', // Dark Navy
          950: '#001f33',
        },
        // Sky Blue (secondary)
        sky: {
          50: '#f0f7ff',
          100: '#e1effe',
          200: '#c2ddfd',
          300: '#a3cbfc',
          400: '#84b9fa',
          500: '#65a7f9',
          600: '#4695f7',
          700: '#2683f5',
          800: '#0771f3',
          900: '#0559ca',
        },
        // Gold/Yellow Accent
        accent: {
          50: '#fffbf0',
          100: '#fff7e1',
          200: '#ffefc3',
          300: '#ffe7a5',
          400: '#ffdf87',
          500: '#ffd769',
          600: '#d4a574',
          700: '#b8895f',
          800: '#9c6d4a',
          900: '#805135',
          950: '#642f1a',
        },
        // Teal/Turquoise
        teal: {
          50: '#f0fdfb',
          100: '#e0fbf7',
          200: '#c1f7ef',
          300: '#a2f3e7',
          400: '#83efdf',
          500: '#64ebd7',
          600: '#4db8ab',
          700: '#36857f',
          800: '#1f5253',
          900: '#081f27',
        },
        // Neutral
        neutral: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e3e3e3',
          300: '#d5d5d5',
          400: '#b4b4b4',
          500: '#939393',
          600: '#727272',
          700: '#515151',
          800: '#303030',
          900: '#0f0f0f',
        },
      },
      backgroundImage: {
        'gradient-air': 'linear-gradient(135deg, #003d52 0%, #0771f3 100%)',
        'gradient-sky': 'linear-gradient(180deg, #e8f1f8 0%, #ffffff 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ffd769 0%, #d4a574 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '48px'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 61, 130, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 61, 130, 0.12)',
        'button': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}