/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#faf9f7',
        ink: '#1a1a1a',
        graphite: '#4a4a4a',
        ash: '#676767',
        haze: '#b8b6b2',
        line: '#e8e6e2',
        wash: '#f3f1ed',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.75rem, 8vw, 7.5rem)', { lineHeight: '0.88', letterSpacing: '-0.035em' }],
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'section': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'prose-editorial': '68ch',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
