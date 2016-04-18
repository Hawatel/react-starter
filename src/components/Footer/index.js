import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';


export class Footer extends Component {

  render() {
    return (
      <footer className={`${styles}`}>
        <h5>
          <a href='http://github.com/Hawatel' target="_blank"> <span className="fa fa-github"></span> Fallow us on GitHub! </a>
        </h5>
      </footer>
    );
  }
}
