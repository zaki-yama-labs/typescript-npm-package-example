const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-typescript-package.js",
    library: "myTsPackage",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.ts(x*)?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.umd.json"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
