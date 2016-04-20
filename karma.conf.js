module.exports = (config) => {
  config.set({
    basePath: '.',
    singleRun: true,
    frameworks: ['mocha', 'chai', 'sinon'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*.spec.js',
    ],

    reporters: ['dots', 'spec', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    },

    preprocessors: {
      'src/**/*.js': ['webpack', 'coverage'],
      'tests/**/*.spec.js': ['webpack'],
    },

    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules', 'src'],
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
        ],
        postLoaders: [{
          test: /\.js/,
          exclude: /(tests|node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }]
      },
    },
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
      },
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'istanbul-instrumenter-loader',
      'karma-mocha',
      'karma-sinon',
      'karma-chai',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
    ],

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
  });
};
