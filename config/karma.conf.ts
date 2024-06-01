

module.exports = (config: any) => {
	config.set({
		basePath: './',
		frameworks: ['jasmine'],
		files: [
			{
				pattern: 'src/**/*.ts',
				type: 'js'  // to silence the warning. Means load with <script> tag
			},
		],
		plugins: ['karma-jasmine', 'karma-typescript'],
		reporters: ['dots'],
		colors: true,
		singleRun: false,
	})
}
