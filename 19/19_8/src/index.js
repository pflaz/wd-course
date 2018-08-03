import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './reducer';
import {addComment} from './actions';
import DevTools from './DevTools';

const logger = createLogger();
const store = createStore(
    reducer,
    DevTools.instrument()
);

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();