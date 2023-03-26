const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT ?? 8080;

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[fullhash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				 {
					  loader: 'style-loader',
				 },
				 {
					  loader: 'css-loader',
					  options: {
							sourceMap: true,
					  },
				 },
				 {
					  loader: 'sass-loader',
					  options: {
							sourceMap: true,
					  },
				 },
			],
	  },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      publicPath: "/",
    }),
  ],
};
