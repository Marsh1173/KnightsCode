import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AuthenticatedClientAppInterface } from "src/client/Presenter/AuthenticatedPresenter/AuthenticatedClientApp";

export interface AuthenticatedHeaderProps {
  app_presenter: AuthenticatedClientAppInterface;
}

export const AuthenticatedHeader: React.FC<AuthenticatedHeaderProps> = (props: AuthenticatedHeaderProps) => {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <button className="main-link" onClick={props.app_presenter.show_progress}>
            Knight's Code
          </button>
        </div>
        <div>
          <Link to={"/home"}>Logout</Link>
        </div>
      </div>
    </div>
  );
};
