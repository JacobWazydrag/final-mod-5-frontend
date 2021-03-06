import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './redux/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App'

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);