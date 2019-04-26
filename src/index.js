import React from 'react';
import ReactDOM from 'react-dom';

//required for routing purposes
import { Router, browserHistory } from 'react-router';
//provide store to child components
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
, document.getElementById('root'));