import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';
import { AddItem } from 'components/AddItem';



/* actions */
import { addItem, delItem, doneItem } from 'redux/modules/items';

const metaData = {
  title: 'Hawatel Production React Starter',
  description: 'Start your project with react and redux',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,redux,meta,document,html,tags',
    },
  },
};


@connect(
    state => state.items,
    dispatch => bindActionCreators({addItem, delItem, doneItem}, dispatch)
)


export class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />

        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Shopping list with Redux
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h3>
                Redux store contains:
              </h3>
              <Items {...this.props} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <AddItem {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

