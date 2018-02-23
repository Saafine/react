import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Redux
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
