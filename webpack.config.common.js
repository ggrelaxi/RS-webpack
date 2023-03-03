const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(process.cwd(), "public", "favicon.ico"),
					to: path.resolve(process.cwd(), "dist", "favicon.ico"),
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["postcss-preset-env"]],
							},
						},
					},
					"css-loader",
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [[require("postcss-preset-env")]],
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[name][ext]",
				},
			},
			{
				test: /\.(svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/icons/[name][ext]",
				},
			},
			{
				test: /\.(ogg|mp3|wav)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/sounds/[name][ext]",
				},
			},
		],
	},
};
