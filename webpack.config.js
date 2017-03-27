var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader",
            })
        },
        {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader",
            })
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                query: {
                  progressive: true,
                  optimizationLevel: 7,
                  interlaced: false,
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  }
                }
              }
            ]
          }
    ],
  },
  plugins: [
        new ExtractTextPlugin('../css/styles.css'),
  ]
};