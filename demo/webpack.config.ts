import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.react$/,
        use: [
          'babel-loader',
          path.resolve(__dirname, '../react-file-loader.js'),
        ]
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true
  }
}

export default config
