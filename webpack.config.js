const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //开发模式
  entry: "./src/index.js", //入口
  devServer: {
    hot: true, //开启热更新
    port: 8000, //设置端口号
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //将打包后的代码插入到html模版中
    }),
  ],
};
