const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './client/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') 
  },
  devServer: {
    
    static: {
      directory: path.resolve(__dirname, 'build'), 
      publicPath: './build',
    },
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [new HtmlWebpackPlugin({
    template: './build/index.html',
  })],
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};