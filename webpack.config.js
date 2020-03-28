module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.pug', '.html']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: { appendTsSufficTo: [/\.vue$/] }
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			}
		]
	}
};
