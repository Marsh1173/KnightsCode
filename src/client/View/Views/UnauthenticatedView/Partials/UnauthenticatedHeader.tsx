import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const UnauthenticatedHeader: React.FC<{}> = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="Header">
      <div className="container">
        <div>
          <Link to={path} className={"main-link"}>
            Knight's Code
          </Link>
        </div>
        <div>
          <Link to={path + "/sign-in"}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};
