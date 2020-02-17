import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
