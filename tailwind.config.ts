import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        brand: {
          '100': '#ffe3e5',
          '200': '#ffcbd3',
          '300': '#ffa1ad',
          '400': '#ff6c82',
          '50': '#fff0f2',
          '500': '#fb3a5d',
          '600': '#e91546',
          '700': '#c50b3b',
          '800': '#a40d39',
          '900': '#8c0f36',
          '950': '#4f0219',
        },
        gray: colors.zinc,
        green: colors.emerald,
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
export default config
