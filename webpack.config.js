const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.ts"),
  },
  output: {
    filename: "app.main.js",
    path: path.resolve(__dirname, "dist"),
    //clean: true,
  },
  module: {
    rules: [
      {
        //which describes what kind of files should be transformed.
        test: /\.ts$/,
        //which defines the files that shouldn’t be processed from the loader(s), if we have such.
        exclude: /node_modules/,
        //which tells which loader(s) should be used against the matched modules. Here, we can also set the loader options, as we’ve just done with the presets option.
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Map Example App",
      header: "Map Example Using Leaflet Lib",
      metaDesc: "Map Example Using Leaflet Lib",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
  devServer: {
    // static: path.resolve(__dirname, "dist"),
    open: true,
    port: 3001,
  },
};
