
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Ajusta esto según tu estructura de proyecto
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map', // Incluye mapas de fuente para facilitar la depuración
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
