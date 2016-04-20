import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

/* actions */
import { getGeometryActionAsync } from 'redux/modules/apilocation';

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

@connect(
    state => state,
    dispatch => bindActionCreators({getGeometryActionAsync}, dispatch)
)

export class ApiLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.getGeometryActionAsync(this.state.term); /* execute action */
    this.setState({ term: ''});
  }

  renderData(payload){
    return (
        <tr key={payload.formatted_address}>
          <td>{payload.geometry.location.lat} {payload.geometry.location.lng}</td>
          <td>{payload.formatted_address}</td>
        </tr>
    );
  }

  render() {

    return (
        <section>
          <DocumentMeta {...metaData} />

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div  className={styles}>

                  <form className="input-group" onSubmit={this.onFormSubmit.bind(this)} >
                    <input value={this.state.term} placeholder="San Francisco" onChange={this.onInputChange.bind(this)} />
                    <button className="btn"> Call API </button>
                  </form>

                  <table className="table table-hover">
                    <thead>
                    <tr>
                      <th>Geometry</th>
                      <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.props.getGeometryReducer.map(this.renderData)}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>

        </section>
    );
  }

}
