import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto-regular)', 'sans-serif'],
        'roboto-bold': ['var(--font-roboto-bold)', 'sans-serif'],
        'roboto-light': ['var(--font-roboto-light)', 'sans-serif'],
        'roboto-medium': ['var(--font-roboto-medium)', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      colors: {
        neutralLighter: '#CCCCCC',
        neutralLight: '#AAAAAA',
        neutralDark: '#444444',
        neutralDarker: '#222222',
        neutralDarkest: '#111111',
        success: '#027A48',
        successLight: '#ecfdf3',
        error: '#b42318',
        errorLight: '#fef3f2',
        primary: '#F5F5F5',
        secondary: '#EEEEEE',
        tertiary: '#666666',
        alternate: '#2E2E2E',
        purpleMain: '#211C24',
      },
      backgroundImage: {
        'search-pattern': "url('/img/search.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
