var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, "app.jsx")
  },
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  //开启dev source map
  devtool: "eval-source-map",
  //开启webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  module: {
    //配置preLoaders,将eslint添加插入

    //配置loaders，将babel添加进去
    rules: [
      {
        test: /\.jsx|js?$/,
        loaders: ["babel-loader"],
        include: APP_PATH
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  //配置plugin
  plugins: [
    new HtmlwebpackPlugin({
      title: "Deskmark app"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
