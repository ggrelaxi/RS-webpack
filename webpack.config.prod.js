const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name][contenthash].css",
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						// Lossless optimization with custom option
						// Feel free to experiment with options for better result for you
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							[
								"svgo",
								{
									plugins: [
										{
											name: "preset-default",
											params: {
												overrides: {
													removeViewBox: false,
													addAttributesToSVGElement: {
														params: {
															attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
														},
													},
												},
											},
										},
									],
								},
							],
						],
					},
				},
			}),
		],
	},
});
