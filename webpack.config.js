const path = require("path");

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ["ts-loader"]
      },
      {
        test: /\.css?/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
    ],
  },
  externals: {
    react: 'react'
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
}
