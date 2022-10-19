import React from "react";
import { Component } from "react";
import { Profile } from "../../../Model/Profile/Profile";
import { AuthenticatedClientAppInterface } from "../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";

export class ProfileView extends Component<
  { presenter: AuthenticatedClientAppInterface; profile: Profile },
  {}
> {
  constructor(props: {
    presenter: AuthenticatedClientAppInterface;
    profile: Profile;
  }) {
    super(props);
  }

  render() {
    return (
      <div className="ProfileView big-side-bar">
        <div className="container">
          <h1 className="page-title">{this.props.profile.name}</h1>
          <p>Courses completed: 0</p>
          <p>Daily streak: 0</p>
        </div>
      </div>
    );
  }
}
