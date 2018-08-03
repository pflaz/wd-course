import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import {addComment} from './actions';

const store = createStore(reducer);

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();