import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = <App />;

ReactDOM.render(app, document.getElementById('#root'));


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
