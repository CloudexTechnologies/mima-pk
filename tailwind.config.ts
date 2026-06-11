import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mima-bg':        '#FFFFFF',
        'mima-warm':      '#F7F7F6',
        'mima-surface':   '#EFEFEE',
        'mima-strip':     '#F0F0EF',
        'mima-fg':        '#0D0D0D',
        'mima-body':      '#4A4A4A',
        'mima-mute':      '#9A9A9A',
        'mima-hair':      '#E4E2DE',
        'mima-accent':    '#1A3A5C',
        'mima-accent-dk': '#122947',
      },
      fontFamily: {
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      transitionTimingFunction: {
        mima: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        marq: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee:      'marq 100s linear infinite',
        'marquee-rev':'marq 110s linear infinite reverse',
        'marquee-slow':'marq 120s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
