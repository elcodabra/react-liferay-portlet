const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC = path.resolve(__dirname, 'app');
const DEST = path.resolve(__dirname, 'src/main/resources/META-INF/resources/dist');

module.exports = {
  entry: {
    app: SRC + '/app.jsx'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  output: {
    path: DEST,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: SRC
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};