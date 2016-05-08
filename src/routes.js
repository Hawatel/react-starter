import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { ApiLocation } from 'containers/ApiLocation';

import { FormsList } from 'components/FormsList';
import UsernameForm from 'forms/UsernameForm';
import PaymentForm from 'forms/PaymentForm';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="list" component={List} />
        <Route path="form" component={FormsList} />
        <Route path="form/username" component={UsernameForm} />
        <Route path="form/payment" component={PaymentForm} />
        <Route path="rest" component={ApiLocation} />
        <Route status={404} path="*" component={Home} />
    </Route>
);

