import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

export default ({ children, initialState = {} }) => {
  const middleware = [reduxPromise];
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return <Provider store={store}>{children}</Provider>;
};
