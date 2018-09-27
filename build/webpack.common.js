const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = {
  entry: {
    app: myresolve('../src/index.js'),
    another: myresolve('../src/another_module.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: myresolve('../dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([myresolve('../dist')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
