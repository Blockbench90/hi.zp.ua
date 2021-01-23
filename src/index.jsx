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
import SupportPage from "./pages/ServicesPages/SupportPage";
import AssemblyPage from "./pages/ServicesPages/AssemblyPage";
import CallMasterPage from "./pages/ServicesPages/CallMasterPage";
import ZeroPage from "./pages/ServicesPages/ZeroPage";

//TODO: блоки показа услуг +1

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        {/*Services*/}
        <Route path="/fix" component={FixPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/assembly" component={AssemblyPage} />
        <Route path="/master" component={CallMasterPage} />
        <Route path="/zero" component={ZeroPage} />
        {/*ProfilePages*/}
      <Route path="/max-profile" component={MaxProfile} />
      <Route path="/yura-profile" component={YuraProfile} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
