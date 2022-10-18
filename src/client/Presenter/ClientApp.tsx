import React from "react";
import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { AuthenticatedClientApp } from "./AuthenticatedPresenter/AuthenticatedClientApp";
import { UnauthenticatedClientApp } from "./UnauthenticatedPresenter/UnauthenticatedClientApp";

import "../View/Styles/MainStyles.less";

export class ClientApp extends Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" children={<UnauthenticatedClientApp />}></Route>
          <Route path="/app" children={<AuthenticatedClientApp />}></Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  }
}
