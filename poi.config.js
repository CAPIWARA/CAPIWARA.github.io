module.exports = {
	entry: 'src/index.js',

	webpack (config) {
		config.devtool = '#source-map'
		return config
	},

	html: {
		template:	'src/index.html'
	},
}
