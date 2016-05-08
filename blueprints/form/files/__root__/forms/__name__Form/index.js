import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// component styles
import { styles } from './styles.scss';

// load example action
import { exampleAction } from 'redux/modules/items'

// load validators for form
import {syncValidate, asyncValidate, verifySubmitForm} from './validation';


class <%= pascalEntityName %> extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  // execute actiona and redirect to other page
  //onSubmit(props){
    //this.props.exampleAction(props);
    //this.context.router.push('/');
  //}

  render() {
    // this is equal: const title = this.props.fields.title  ..
    const { asyncValidating, submitting, error, fields: {title, categories, content}, handleSubmit} = this.props;

    var divStyle = {
      color: 'white',
     };

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {/*<form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={styles}>*/}
            <form onSubmit={handleSubmit(verifySubmitForm)} className={styles}>
            {error && <div className="text-center text-danger"><strong>{error}</strong></div>}
            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
              <label>Title</label>
              <input type="text" className="form-control" placeholder="valid title: Redux Form" {...title} />
              <div className="text-help">
                {title.touched ? title.error : ''}
              </div>
            </div>

            <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
              <label>Categories</label>
              <div className="input-group" style={{"width": "100%"}}>
                <input type="text" className="form-control" placeholder="Valid category: 12345" {...categories}/>
                {asyncValidating === 'categories' && <span className="input-group-addon"><i className="fa fa-cog fa-spin"/></span>}
              </div>
              <div className="text-help">
              {categories.touched ? categories.error : ''}
              </div>
            </div>

            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
              <label>Content</label>
              <textarea className="form-control" {...content}/>
              <div className="text-help">
                {content.touched ? content.error : ''}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting || asyncValidating === true}>Submit {submitting && <i className='fa fa-cog fa-spin' />}</button>
            <Link to="/" className="btn btn-primary">Cancel</Link>

            </form>
          </div>
        </div>
    </div>
    );

  }
}

// "inject" redux-form functionality to PostNew object
export default reduxForm({
  form: '<%= pascalEntityName %>',
  fields: ['title', 'categories', 'content'],
  asyncValidate,
  asyncBlurFields: ['categories'],
  validate: syncValidate
}, null, { exampleAction })(<%= pascalEntityName %>);
