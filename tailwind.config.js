/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./**/*.html",  // 覆盖所有 HTML 文件
  "./src/**/*.{html,js,ts,jsx,tsx}" , // 根据项目结构调整
  "./_layouts/**/*.html",
],
  theme: {
    extend: {},
  },
  plugins: [],
}

