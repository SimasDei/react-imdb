import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import './index.css';
import reducers from './reducers';

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(<Provide store={storeWithMiddleware}><App /></Provide>, document.getElementById('root'));
