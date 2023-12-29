/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/img/hero-pattern.png')",
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        madeMountain: ['var(--font-made-mountain)'],
        sdr: ['var(--font-sdr)'],
      },
      colors: {
        primary: {
          900: '#951a2e',
          800: '#c4314e',
          700: '#d93f57',
          750: '#FFD449',
          600: '#ca2128',
          500: '#ec2b26',
          400: '#F7A180',
        },
        secondary: {
          900: '#011F4B',
          800: '#03396C',
          700: '#005b96',
          600: '#6497b1',
          500: '#b3cde0',
        },
        accent: {
          900: '#F58020',
          800: '#FBAC1B',
          700: '#FFC837',
          600: '#FBE47E',
        },
        hitam: {
          100: '#1E1E1E',
        },
        putih: {
          200: '#FDFBF4',
          100: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
};
