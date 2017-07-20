/**
 * Base webpack config used across other specific configs
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/src/renderer.js',
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin(),
    // function() {
    //   this.plugin('done', function(stats) {
    //     require('fs').writeFileSync(
    //       path.join(__dirname, 'build', 'stats.json'),
    //       JSON.stringify(stats.toJson())
    //     );
    //   });
    // }
  ],
  module: {
    rules: [
      // style
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // image
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};