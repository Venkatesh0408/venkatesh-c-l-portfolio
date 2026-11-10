/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cmd: {
          bg: "#0B0F1A",
          panel: "#101B2B",
          secondary: "#14243A",
          border: "#182A42",
          borderActive: "#00D4FF",
          cyan: "#00D4FF",
          blue: "#007BFF",
          text: "#EAF5FF",
          muted: "#91A8BF",
          green: "#00E599",
          caution: "#FFB020",
          purple: "#B388FF",
        }
      },
      fontFamily: {
        mono: ['Consolas', 'Lucida Console', 'Courier New', 'Cascadia Code', 'monospace'],
        cmd: ['Consolas', 'Lucida Console', 'Courier New', 'Cascadia Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.25)',
        'glow-blue': '0 0 25px rgba(0, 123, 255, 0.25)',
        'glow-box': '0 0 15px rgba(0, 212, 255, 0.15)',
        'terminal': '0 10px 40px rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
};
