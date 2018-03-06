const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
const srcDir = resolve(__dirname, 'src')



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]

}
