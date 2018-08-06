import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './store/DevTools';


render(
    <Provider store={store}>
        <div>
            <h1> Project </h1>
            <DevTools />
        </div>
    </Provider>, 
    document.getElementById('root')
);

