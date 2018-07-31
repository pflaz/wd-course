const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
		new HtmlWebpackPlugin({
			template: 'client/index.html',
			filename: 'index.html',
			inject: 'body'
		})];

module.exports = (env) => {
	return {
		mode: env || 'production',
		entry: './client/index.js',
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'app.bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					options: {
						plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
					}
				},
				{
					test: /\.css$/,
					use: [
						{loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		},
		devServer: {
			proxy: {
				'/socket.io': {
					target: 'http://localhost:3000',
					ws: true
				}
			}
		},
		plugins: plugins
	}
};