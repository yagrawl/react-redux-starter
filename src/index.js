import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
