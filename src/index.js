import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { loadMarvel } from './thunk';
import './index.css';
import App from './components/app/app';

const store = createStore(reducer, applyMiddleware(thunk, logger));

store.dispatch(loadMarvel())

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>
 ,document.getElementById('root'));