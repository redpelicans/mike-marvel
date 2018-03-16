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

const options = [
  { value: '3-D man', label: '3-D man' },
  { value: 'A-Bomb (HAS)', label: 'A-Bomb (HAS)' },
  { value: 'A.I.M', label: 'A.I.M' },
  { value: 'Aaron Stack', label: 'Aaron Stack' },
  { value: 'Abomination', label: 'Abomination' },
  { value: 'Absorbing Man', label: 'Absorbing Man' },
  { value: 'Abyss', label: 'Abyss' },
  { value: 'Abyss (Age of Apocalypse)', label: 'Abyss (Age of Apocalypse)' },
  { value: 'Aegis (Trey Rollins)', label: 'Aegis (Trey Rollins)' },
  { value: 'Agent Brand', label: 'Agent Brand' },
];

const itinialState={
  pageId: 'tableOfHeroes',
  options
}

const store = createStore(reducer, itinialState, applyMiddleware(thunk, logger));

store.dispatch(loadMarvel())

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>
 ,document.getElementById('root'));