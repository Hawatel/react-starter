import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { Banner } from 'components/Banner';
import { Docs } from 'components/Docs';

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

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Banner />
        <Docs />
      </section>
    );
  }
}
