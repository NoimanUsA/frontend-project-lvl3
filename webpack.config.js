const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelRules = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: 'babel-loader',
};

const bootstrapRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [babelRules, bootstrapRules],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/html/index.html'),
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    open: true,
    writeToDisk: true,
  },
};
