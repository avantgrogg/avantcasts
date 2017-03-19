var path = require('path');

module.exports = {
  entry: ['babel-polyfill','./src/client/index.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: [["env", {
                                  "targets": {
                                    "browsers": ["last 2 versions"]
                                  }
                              }], 'react'] }
        }],
      },
    
      // Loaders for other file types can go here
    ],
  },
};