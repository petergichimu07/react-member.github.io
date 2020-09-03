import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App  from './App';
import {searchMembers} from './reducers';

// this is a middlewares
const logger = createLogger();
// creating the redux store
const store = createStore(searchMembers,applyMiddleware(logger))

ReactDOM.render(
                  <Provider store={store}>
	              <App />
	              </Provider>,document.getElementById('root')
	              
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
