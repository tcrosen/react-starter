module.exports = {
  entry: {
    js: './src/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
