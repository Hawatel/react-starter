import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { ApiLocation } from 'containers/ApiLocation';

import Form from 'forms/UsernameForm/';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="form" component={Form} />
    <Route path="rest" component={ApiLocation} />
    <Route status={404} path="*" component={Home} />
  </Route>
);

