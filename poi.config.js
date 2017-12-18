module.exports = {
	entry: 'src/index.js',

	webpack (config) {
		config.devtool = '#source-map'
		return config
	},
}
