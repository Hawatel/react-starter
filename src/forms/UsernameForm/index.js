import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// component styles
import { styles } from './styles.scss';

// load example action
import { exampleAction } from 'redux/modules/items'


class Username extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  // execute actiona and redirect to other page
  onSubmit(props){
    this.props.exampleAction(props);
    this.context.router.push('/');
  }

  render() {
    // this is equal: const title = this.props.fields.title  ..
    const { fields: {title, categories, content}, handleSubmit} = this.props;

    var divStyle = {
      color: 'white',
     };

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className={styles}>

              <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                <label>Title</label>
                <input type="text" className="form-control" {...title} />
                <div className="text-help">
                  {title.touched ? title.error : ''}
                </div>
              </div>

              <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                <label>Categories</label>
                <input type="text" className="form-control" {...categories}/>
                <div className="text-help">
                {categories.touched ? categories.error : ''}
                </div>
              </div>

              <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                <label>Content</label>
                <textarea className="form-control" rows="18" value="" {...content} />
                <div className="text-help">
                  {content.touched ? content.error : ''}
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/" className="btn btn-primary">Cancel</Link>

            </form>
          </div>
        </div>
    </div>
    );

  }
}

function validate(values){
  const errors = {};

  if (!values.title) { errors.title = 'Enter a username'; }
  if (!values.categories) { errors.categories = 'Enter a categories'; }
  if (!values.content) { errors.content = 'Enter a content'; }
  return errors;
}

// "inject" redux-form functionality to PostNew object
export default reduxForm({
  form: 'Username',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { exampleAction })(Username);
