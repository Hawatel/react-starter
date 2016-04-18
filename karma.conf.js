module.exports = (config) => {
  config.set({
    basePath: '.',
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['Chrome'],
    files: [
      'tests/**/*.spec.js',
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules', 'src'],
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
        }],
      },
    },
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
      },
    },
  });
};
