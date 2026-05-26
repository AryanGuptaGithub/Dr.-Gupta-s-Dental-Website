import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#0B4F6C', dark: '#083D55' },
        gold: { DEFAULT: '#C9A45C', light: '#DABE7C', dark: '#B08B3B' },
        ivory: '#FBF8F3',
        charcoal: '#2C2C2C',
        'warm-grey': '#6B6B6B',
        'mint-fresh': '#D9EDE3',
      },
      fontFamily: {
       serif: ['DM Serif Display', 'ui-serif', 'Georgia'],
  sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
  'h1': ['3.5rem', { lineHeight: '1.15', fontWeight: '400' }],
  'h2': ['2.75rem', { lineHeight: '1.2', fontWeight: '400' }],
  'h3': ['2rem', { lineHeight: '1.3', fontWeight: '400' }],
  'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
},
      spacing: { section: '7.5rem' },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.08)',
        'gold-glow': '0 0 30px rgba(201,164,92,0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config