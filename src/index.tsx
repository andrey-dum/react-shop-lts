import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import reducer, { initialState } from './store/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './App';
import './index.css';


const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
