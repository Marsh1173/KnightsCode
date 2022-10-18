import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

export const NavSideBar: React.FC<{}> = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  return (
    <div className="NavSideBar side-bar">
      <NavSideBarLink prop_path={""} title={"Home"}></NavSideBarLink>
      <NavSideBarLink prop_path={"/sign-in"} title={"Sign in"}></NavSideBarLink>
      <NavSideBarLink prop_path={"/register"} title={"Register"}></NavSideBarLink>
    </div>
  );
};

export const NavSideBarLink: React.FC<{ prop_path: string; title: string }> = (props: {
  prop_path: string;
  title: string;
}) => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  return (
    <Link to={path + props.prop_path} className={location.pathname == path + props.prop_path ? "selected" : ""}>
      {props.title}
    </Link>
  );
};
