import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';

import configStore from './stores/Config';
import Routes from './Routes';

dotenv.load();

ReactDOM.render(
  <Provider store={configStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
