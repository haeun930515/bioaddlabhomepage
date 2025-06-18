/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        },
        subtlePing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        subtlePing: 'subtlePing 2.5s ease-in-out infinite',
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          100: "#F5F6F8",
          200: "#E9EBF0",
          300: "#DADCE2",
        },
        // ✅ green 기본값 유지하면서 필요한 값 추가
        green: {
          400: "#66E274", // 네가 사용하는 초록색
          500: "#22c55e", // Tailwind 기본값도 같이 보장
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
