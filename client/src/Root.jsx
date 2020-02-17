import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import reducers from './reducers';

export default ({ children, initialState = {} }) => {
  const middleware = [async, stateValidator];
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return <Provider store={store}>{children}</Provider>;
};
