import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

// Components
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";

const middlewares = [reduxThunk];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
