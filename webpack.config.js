var debug = process.env.NODE_ENV !== "production";
// is my node environment production? If yes this config runs minification plugins

var webpack = require('webpack');

module.exports = {
  context: __dirname,
  // source directory - I could add (+"/myapp",) if my app was within a folder

  devtool: debug ? "inline-sourcemap" : null,
  // if my node environment is NOT production - then this is considered in DEBUG mode here 

  entry: "./js/scripts.js",
  // this is the starting point of my JavaScript 

  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  // output for this config is to minify scripts file and its dependencies 

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    // strips out duplicate code

    new webpack.optimize.OccurenceOrderPlugin(),
    // not sure what this does

    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // makes the file production ready by stripping out sourcemaps and comments
  ],
};