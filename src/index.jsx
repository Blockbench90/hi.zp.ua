import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import "./assets/css/header.css";
import "./assets/scss/material-kit-react.scss";

import MaxProfile from "./pages/ProfilePages/MaxPage";
import YuraProfile from "./pages/ProfilePages/YuraPage";
import Components from "./Components";
import FixPage from "./pages/ServicesPages/FixPage";
import ServicePage from "./pages/ServicesPages/ServicePage";

//TODO: название вверх
//TODO: кнопка возврата на главную
//TODO: блоки показа услуг +1

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        {/*Services*/}
        <Route path="/fix" component={FixPage} />
        <Route path="/service" component={ServicePage} />
        {/*ProfilePages*/}
      <Route path="/max-profile" component={MaxProfile} />
      <Route path="/yura-profile" component={YuraProfile} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
