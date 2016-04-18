import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';


export class Docs extends Component {
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <h3>ReactJS</h3>
              <ul>
                <li><a href="http://facebook.github.io/react/">React Oficcial Site</a></li>
                <li><a href="https://github.com/facebook/react">React GitHub</a></li>
                <li><a href="https://discuss.reactjs.org/">React Discussion Forum</a></li>
                <li><a href="https://twitter.com/reactjs">React Twitter</a></li>
                <li><a href="http://reactpodcast.com/">React Podcast</a></li>
                <li><a href="https://facebook.github.io/react/docs/tutorial.html">React Tutorial</a></li>
                <li><a href="https://scotch.io/tutorials/learning-react-getting-started-and-concepts">Learning React.js: Getting Started and Concepts</a></li>
                <li><a href="https://scotch.io/tutorials/make-a-mobile-app-with-reactjs-in-30-minutes">Make a Mobile App with ReactJS in 30 Minutes</a></li>
                <li><a href="https://github.com/reactjs/react-router">React Router </a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3>Redux</h3>
              <ul>
                <li><a href="https://github.com/chentsulin/redux-intro">Introduce about Redux</a></li>
                <li><a href="https://speakerdeck.com/chrisui/real-world-redux">Real World Redux</a></li>
                <li><a href="http://davidandsuzi.com/writing-a-basic-app-in-redux/">Writing a Basic App in Redux</a></li>
                <li><a href="https://medium.com/@meagle/understanding-87566abcfb7a">Understanding Redux Middleware</a></li>
                <li><a href="https://medium.com/@thisbejim/getting-started-with-redux-and-graphql-8384b3b25c56#.3anuh1m7x">Getting started with Redux and GraphQL</a></li>
                <li><a href="https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html">Redux without profanity</a></li>
                <li><a href="https://github.com/paulkogel/redux-offline-docs">Redux offline docs</a></li>
                <li><a href="http://slides.com/vladimirnovick/reduxinternals">Redux Internals</a></li>
                <li><a href="https://github.com/erikras/redux-form">Redux Form</a></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h3>Misc</h3>
              <ul>
                <li><a href="https://github.com/ericdouglas/ES6-Learning">ECMAScript 6 Learning</a></li>
                <li><a href="https://github.com/lukehoban/es6features">ECMAScript 6</a></li>
                <li><a href="https://ponyfoo.com/articles/tagged/es6-in-depth">ES6 in Depth</a></li>
                <li><a href="https://webpack.github.io/docs/">Webpack Docs</a></li>
                <li><a href="http://getbootstrap.com/components/">Bootstrap Components</a></li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    );
  }
}

