import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F3ED',
        tan: '#F1E3D3',
        terracotta: '#E07A5F',
        burgundy: '#690B22',
        'forest-green': '#34623F',
        charcoal: '#121211',
      },
      fontFamily: {
        serif: ['"DM Serif Text"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
