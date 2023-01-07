export const entry = ["./app.js"];
export const output = {
  path: __dirname,
  filename: "bundle.js",
  devtool: "inclien-source-map",
};
export const module = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, "src"),
      loaders: ["babel"],
      query: {
        presets: ["es2015"],
      },
    },
    {
      test: /\.css$/,
      loaders: ["style-loader!css-loader"],
    },
  ],
};
