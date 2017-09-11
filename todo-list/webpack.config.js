var path = require("path");


module.exports = {
  entry: {
    index: './main.js'
  }, // 入口文件路径compoents
  output: {
    path: path.join(__dirname, './build'),
    publicPath: "/build/",
    filename: '[name].js'
  },
  devServer: {
    inline:true,
    port: 3333
      },
  module: {
    loaders: [
      {
          test: /\.js$/, // babel 转换为兼容性的 js
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: [
              'react',
              'es2015',
              'latest']
          }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules!less-loader"
      },
    ]
  }
}