import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { NewsSideBar } from "../../View/Views/UnauthenticatedView/Partials/NewsSideBar";
import { NavSideBar } from "../../View/Views/UnauthenticatedView/Partials/NavSideBar";
import { UnauthenticatedHeader } from "../../View/Views/UnauthenticatedView/Partials/UnauthenticatedHeader";
import { HomePresenter } from "./HomePresenter";
import { SignInPresenter } from "./SignInPresenter";
import { RegisterPresenter } from "./RegisterPresenter";

export const UnauthenticatedClientApp: React.FC<{}> = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="UnauthenticatedClientApp page">
      <UnauthenticatedHeader></UnauthenticatedHeader>
      <div className="page-content">
        <NavSideBar />
        <Switch>
          <Route exact path={`${path}/register`} children={<RegisterPresenter />}></Route>
          <Route exact path={`${path}/sign-in`} children={<SignInPresenter />}></Route>
          <Route path={path} children={<HomePresenter />}></Route>
          <Redirect to={path} />
        </Switch>
        <NewsSideBar />
      </div>
    </div>
  );
};
