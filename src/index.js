import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './store/reducers';
import GlobalStyle from './GlobalStyle';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootComponent = (
  <Provider store={store}>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </Provider>
);

const rootDOM = document.querySelector('#root');

ReactDOM.render(rootComponent, rootDOM);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
