const path = require("path");
const webpack = require("webpack");
const pjson = require('./package.json');

module.exports = (env, argv) => {
  //Voor production wordt de env.production op true gezet in het npm build commando, voor development wordt deze niet gezet
  const environment = (env && env.production) ? 'production' : 'development';
  console.log('environment');
  console.log(environment);
  return {
    entry: "./src/index.js",
    mode: environment,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: (environment === 'production') ? 'template'+pjson.templateId+'.js' : 'bundle.js'
    },
    optimization: {
      minimize: (environment === 'production') ? true : false
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hot: true,
      open: true,
      overlay: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};