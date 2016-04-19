## Hawatel Production React Starter

> <b>:star2: Hawatel Production React Starter Kit</b> is a boilerplate which helps you build fast and efficient web apps or sites. This is a good place to start your project, or any other project what you need to develop. The boilerplate is built on top of [Node.js](https://nodejs.org/), [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). For a development process the <b>Starter Kit</b> uses modern web development tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/) and [React Hot Loader](https://github.com/gaearon/react-hot-loader). The boilerplate contains full stack modern modules and wonderful tools such as [redux-cli](https://github.com/SpencerCDixon/redux-cli) which can generate snippets of `components`, `containers`, `react-forms` and `tests`.
> <br/>:eyes: If you are not familiar with React and Redux you can analyse a demo application which is included in the <b style='color: orange;'>Starter Kit</b>.

<p align="center">
<img src="https://s3-eu-west-1.amazonaws.com/hawatel-github/hawatel-production-react-starter/banner.png">
</p>

<p align="center">
<b><a href="#features">Features</a></b>
|
<b><a href="#usage">Usage</a></b>
|
<b><a href="#structure">Structure</a></b>
|
<b><a href="#deployment">Deployment</a></b>
|
<b><a href="#contributing">Contributing</a></b>
|
<b><a href="#license">License</a></b>
</p>

## Features

- [react](https://github.com/facebook/react)
- [redux](https://github.com/gaearon/redux)
- [react Fontawsome](https://github.com/danawoodman/react-fontawesome)
- [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) (configurable with .bootstraprc)
- Sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader))
- [redux-logger](https://github.com/fcomb/redux-logger)
- [react-document-meta](https://github.com/kodyl/react-document-meta)
- [redux-form](https://github.com/erikras/redux-form)
- [redux-cli](https://github.com/SpencerCDixon/redux-cli)
- [redux thunk](https://github.com/gaearon/redux-thunk)
- [react router](https://github.com/rackt/react-router)
- [babeljs](https://babeljs.io/)
- [eslint](http://eslint.org/)
- [karma](https://github.com/karma-runner/karma)
- [mocha](https://github.com/mochajs/mocha)

## Usage

|Command|Description|
|---|---|
|`npm run start`|Start server on `localhost:3000`|
|`npm run clean`|Clean dist directory.|
|`npm run build`|Compiles the application to disk (`~/dist` by default).|
|`npm run build:production`|Same as `npm run clean & npm run build`
|`npm run lint`|Lint all .js files.|
|`npm run test`|Runs unit tests with Karma|

## Structure

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── bin                      # Start server
├── blueprints               # Blueprint files for redux-cli
├── src                      # Application source code
│   ├── components           # Generic React Components 
│   ├── containers           # Components that provide context
│   ├── forms                # Components include forms
│   ├── redux                # Redux-specific pieces
│   │   ├── modules          # Collections of reducers/actions
│   │   └── utils            # Redux helpers
│   ├── utils                # Helper files
│   ├── routes.js            # Application route definitions
│   └── index.js             # Root application file
├── webpack                  # Webpack configuration file
└── tests                    # Unit tests files
```

## Deployment
```
$ npm run build
```
Compile application files into the 'dist' folder
```
$ npm run build:production
```
clean the `dist` folder and rebuilds the app

## Run unit tests
```
$ npm test
```

## Origin
This project was built based on the [redux-easy-boilerplate](https://github.com/anorudes/redux-easy-boilerplate) created by [anorudes](https://github.com/anorudes).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

## License

The Starter Kit is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


<p align="right"><a href="#top">:arrow_up:</a></p>
