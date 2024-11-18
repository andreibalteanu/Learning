const rspack = require("@rspack/core");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js or .jsx files
        exclude: /node_modules/, // Don't transpile node_modules
        use: {
          loader: "babel-loader", // Use Babel loader
        },
      },
      {
        test: /\.css$/, // Handle CSS files (for Tailwind)
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing .jsx files without extension
  },
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./MyButton": "./src/Button.js",
      },
      shared: ["tailwindcss", "shadcn"],
    }),
  ],
};
