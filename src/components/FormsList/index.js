import React, { Component } from 'react'
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class FormsList extends Component {
  /*
   function will be called only once when component is mounted
   each time when DOM will be rendered
   componentWillMount(){

   }
   */

  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  render(){
    return (
        <section className={`${styles}`}>
          <div className="container">
            <div className="row pull-left">
              <ul className="snip1485">
                <li><Link to="/form/username" data-hover="User Form">User Form</Link></li>
                <li><Link to="/form/payment" data-hover="Payment Form">Payment Form</Link></li>
              </ul>
            </div>
          </div>
        </section>
    );
  }

}
