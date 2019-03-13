import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = Redux.createStore(
  Redux.combineReducers({ todos, goals, loading }), 
  Redux.applyMiddleware(ReduxThunk.default, checker, logger))

ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root')
)