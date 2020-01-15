import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/index';
import rootReducer from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootComponent = (
  <Provider store={store}>
    <Router basename="/" >
      <App />
    </Router>
  </Provider>
);

const rootDOM = document.querySelector('#root');

ReactDOM.render(rootComponent, rootDOM);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
