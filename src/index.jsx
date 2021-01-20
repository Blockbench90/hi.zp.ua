import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "./assets/css/header.css";
import "./assets/scss/material-kit-react.scss";

import MaxProfile from "./pages/MaxPage";
import YuraProfile from "./pages/YuraPage";
import Components from "./Components";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/max-profile" component={MaxProfile} />
      <Route path="/yura-profile" component={YuraProfile} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
