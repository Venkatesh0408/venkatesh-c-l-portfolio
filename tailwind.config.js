/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060913', // Deepest dark navy background
          900: '#080D1A', // Secondary dark surface
          850: '#0B1220', // Card surface
          800: '#101B2E', // Elevated card / border
          750: '#15243D', // Hover border
          700: '#1C2E4C', // Active divider
          600: '#2A436B',
        },
        accent: {
          blue: '#087BFF',  // Electric blue
          cyan: '#00D4FF',  // Bright cyan accent
          sky: '#38BDF8',   // Soft sky blue
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 212, 255, 0.15)',
        'glow-blue': '0 0 25px rgba(8, 123, 255, 0.25)',
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 20px 40px -15px rgba(0, 123, 255, 0.2)',
      }
    },
  },
  plugins: [],
};
