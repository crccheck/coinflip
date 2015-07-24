module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
      { test: /\.useable\.css$/, loader: "style/useable!css" },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
