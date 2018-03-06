const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
var config = require('./webpack.config.js')
var webpack = require('webpack')
//const srcDir = resolve(__dirname, 'src')

module.exports = {
  entry: './src/index.js',
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
},
  plugins: [new HtmlWebpackPlugin()]

}
