import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#07030f',
        'midnight-light': '#120a21',
        'brand-purple': '#7b3fe4',
        'brand-purple-strong': '#a269ff',
  'brand-cyan': '#d977ff',
        'brand-silver': '#c4c8d4',
        'brand-ash': '#888c9a',
        'brand-gold': '#f5c451',
      },
      fontFamily: {
        heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(123, 63, 228, 0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(52, 244, 255, 0.35), transparent 45%)',
        'noise-texture': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22rgba(255,255,255,0.04)%22/%3E%3Ccircle cx=%225%22 cy=%226%22 r=%220.6%22 fill=%22rgba(255,255,255,0.08)%22/%3E%3Ccircle cx=%2225%22 cy=%2218%22 r=%220.4%22 fill=%22rgba(255,255,255,0.06)%22/%3E%3C/svg%3E')",
      },
      boxShadow: {
        glow: '0 0 40px rgba(123, 63, 228, 0.35)',
        glass: '0 25px 55px rgba(5, 2, 15, 0.45)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333333%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.4, filter: 'blur(10px)' },
          '50%': { opacity: 0.9, filter: 'blur(20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
        'pulse-glow': 'pulse-glow 10s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
