module.exports = {
  entry: {
    app: './index.js'
  },

  output: {
    filename: 'dist/[name].js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'jsx',
      exclude: /node_modules/
    }]
  }
};
