import React from "react";
import { Component } from "react";
import { Profile } from "../../../Model/Profile/Profile";
import { AuthenticatedClientAppInterface } from "../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { AuthenticatedHeader } from "./Partials/Header";

export class ProfileView extends Component<{ presenter: AuthenticatedClientAppInterface; profile: Profile }, {}> {
  constructor(props: { presenter: AuthenticatedClientAppInterface; profile: Profile }) {
    super(props);
  }

  render() {
    return (
      <div className="ProfileView page">
        <AuthenticatedHeader app_presenter={this.props.presenter} />
        <div className="page-content">
          <h1 className="page-title">{this.props.profile.name}</h1>
        </div>
      </div>
    );
  }
}
