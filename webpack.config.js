module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.json$/, loader: 'json'},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  }
};