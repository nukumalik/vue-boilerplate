module.exports = {
	resolve: {
		extensions: ['.ts', '.pug']
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
