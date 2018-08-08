import React from 'react';
import { render } from 'react-dom';
import {Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

import DevTools from './store/DevTools';
import { getCountries } from './actions/actions-countries';
import './country.css';

store.dispatch(getCountries());
render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}>

            </Router>
            <DevTools />
        </div>
    </Provider>, 
    document.getElementById('root')
);

