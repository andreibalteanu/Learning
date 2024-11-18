const rspack = require("@rspack/core");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
  },
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: "app", // The host app
      remotes: {
        ui: "ui@http://localhost:3001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
