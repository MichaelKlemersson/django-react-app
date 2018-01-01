const webpack = require('webpack')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin
const NamedModulesPlugin = require('webpack').NamedModulesPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const isDev = process.env.NODE_ENV !== "production"

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
    }
  }),
  new ExtractTextPlugin({
    filename: "style.css",
    allChunks: true
  }),
  new webpack.LoaderOptionsPlugin({
    debug: isDev
  })
]

if (isDev) {
  plugins.push(new NamedModulesPlugin());
  plugins.push(new HotModuleReplacementPlugin());
} else {
  plugins.push(new UglifyJsPlugin({
    uglifyOptions: {
      sourceMap: true,
      ecma: 8,
      compress: true
    }
  }))
}

let settings = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, 'todoapp/todoapp/static/todo/main.js')],
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'todoapp/static/dist')
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    alias: {
      App: path.resolve('./todoapp/todoapp/static/todo')
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /(.jsx|.js)?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'todoapp/todoapp/static/todo'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: isDev ? 'style-loader!css-loader' : ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css'
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: plugins
}

if (isDev) {
  settings.devServer = {
    hot: isDev
  }
}

module.exports = settings