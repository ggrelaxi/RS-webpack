const path = require("node:path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	plugins: [
		new ESLintPlugin({
			extensions: ["js"],
			emitError: true,
			emitWarning: true,
			failOnWarning: false,
			failOnError: true,
			fix: false,
			cache: false,
		}),
	],
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		open: true,
	},
	target: "web",
});
