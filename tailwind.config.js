export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        display: ['"Sora"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        kof: {
          primary: '#05060A',
          secondary: '#0D1018',
          accent: '#BF80FF',
          purple: '#7C3AED',
          red: '#E9ECF7',
          glass: 'rgba(12, 16, 24, 0.72)',
          glassBorder: 'rgba(255, 255, 255, 0.1)',
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(6,8,14,0.55)',
        violet: '0 0 40px rgba(191, 128, 255, 0.2)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'scanline': 'scanline 10s linear infinite',
        'drift': 'drift 14s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        }
      }
    }
  },
  plugins: [],
}
