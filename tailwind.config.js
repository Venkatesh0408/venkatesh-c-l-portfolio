/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712', // Deep near-black background
          900: '#060B18', // Primary dark canvas
          850: '#0A1128', // Elevated robotic surface
          800: '#0E1738', // Card container
          750: '#14204A', // Hover surface
          700: '#1A295C', // Structural border
          600: '#2A3F87', // Highlight border
        },
        navy: {
          950: '#040711',
          900: '#060B18',
          850: '#0A1128',
          800: '#0E1738',
          750: '#14204A',
          700: '#1C2E54',
          600: '#2B4378',
        },
        cyan: {
          400: '#00F0FF',
          500: '#00D4FF',
          600: '#00A8CC',
        },
        electric: {
          400: '#38BDF8',
          500: '#087BFF',
          600: '#005CE6',
        },
        accent: {
          blue: '#087BFF',   // Electric blue
          cyan: '#00D4FF',   // Electric cyan
          sky: '#38BDF8',    // Technical sky
          emerald: '#10B981', // System nominal green
          amber: '#F59E0B',  // Telemetry warning/highlight
          purple: '#A855F7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.25)',
        'glow-cyan-lg': '0 0 50px rgba(0, 212, 255, 0.35)',
        'glow-blue': '0 0 25px rgba(8, 123, 255, 0.25)',
        'glow-blue-lg': '0 0 50px rgba(8, 123, 255, 0.35)',
        'hud': '0 8px 32px 0 rgba(0, 10, 30, 0.8), inset 0 0 0 1px rgba(0, 212, 255, 0.15)',
        'hud-active': '0 8px 32px 0 rgba(0, 212, 255, 0.15), inset 0 0 0 1px rgba(0, 212, 255, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
};
