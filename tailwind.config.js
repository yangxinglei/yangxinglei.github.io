module.exports = {
    content: [
      "./src/**/*.{html,js}",
    ],
    darkMode: 'class', // 启用基于 class 的暗色模式
    theme: {
      extend: {
        colors: {
          primary: '#3490dc', // 添加自定义颜色
        },
      },
    },
    plugins: [],
  }