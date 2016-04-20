import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

/* actions */
/* import { getGeometry } from 'redux/modules/apilocation'; */

/* component styles */
import { styles } from './styles.scss';

const metaData = {
  title: 'ReactJS & Redux',
  description: 'Start your project with react and redux',
  meta: {
    charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags',
      },
  },
};


/* @connect(
 state => state,
 dispatch => bindActionCreators({getGeometry}, dispatch)
) */

export class <%= pascalEntityName %> extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

/*
  clickButton(event){
    var request = this.props.getGeometry();
  }
*/

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div  className={styles}>
                this is example test
                <button className="btn" onClick={this.clickButton.bind(this)}> Call API </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }

}