import React, { Component } from 'react'
import DocumentMeta from 'react-document-meta';

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


export class <%= pascalEntityName %> extends Component {
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
      <section>
        <DocumentMeta {...metaData} />
      </section>
    );
  }

}

