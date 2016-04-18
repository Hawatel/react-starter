import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* actions */
//import { testAction, secondAction } from 'redux/modules/items';

//@connect(
//    state => state,         # map global states from Redux to local props (access to all states of app)
//    //state => state.test,  # map only particular state to local this.props
//    dispatch => bindActionCreators({testAction, secondAction}, dispatch) # map actions to local props
//)

export class <%= pascalEntityName %> extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }


  //clickButton(event){
  //  //var request = this.props.testAction('q=button');
  //}

  render() {
    return (
      <div>
          <button onClick={this.clickButton.bind(this)}> Click me </button>
      </div>
    );
  }

}
