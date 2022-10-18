import React, { Component } from "react";
import { LocalStorageHandler } from "../../Model/DataAccessors/LocalStoragehandler";
import { get_current_profile_id, LocallyStoredProfiles, Profile } from "../../Model/Profile/Profile";
import { GameResultsView } from "../../View/Views/AuthenticatedView/GameResultsView";
import { ProfileView } from "../../View/Views/AuthenticatedView/ProfileView";
import { ProgressView } from "../../View/Views/AuthenticatedView/ProgressView";

export interface AuthenticatedClientAppInterface {
  show_progress: () => void;
  begin_game: () => void;
  show_game_results: () => void;
  get_current_profile: () => Profile;
}

export class AuthenticatedClientApp
  extends Component<{}, { content: JSX.Element }>
  implements AuthenticatedClientAppInterface
{
  private readonly container_ref: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: any) {
    super(props);

    this.show_progress = this.show_progress.bind(this);
    this.begin_game = this.begin_game.bind(this);
    this.show_game_results = this.show_game_results.bind(this);

    let profile: Profile = this.get_current_profile();
    this.set_content(<ProgressView presenter={this} profile={profile} />);
  }
  render() {
    return (
      <div className="AuthenticatedClientApp" ref={this.container_ref}>
        {this.state.content}
      </div>
    );
  }

  private set_content(elem: JSX.Element) {
    if (this.container_ref.current) {
      this.setState({ content: elem });
    } else {
      this.state = { content: elem };
    }
  }

  public show_progress = () => {
    let profile: Profile = this.get_current_profile();
    this.set_content(<ProgressView presenter={this} profile={profile} />);
  };
  public begin_game = () => {};
  public show_game_results = () => {
    this.set_content(<GameResultsView />);
  };

  public get_current_profile(): Profile {
    let profiles: LocallyStoredProfiles | undefined =
      LocalStorageHandler.get_local_storage_item<LocallyStoredProfiles>("locally-stored-profiles");

    if (!profiles) {
      location.href = location.origin;
    }

    let profile: Profile | undefined = profiles!.profiles.find(
      (profile_data) => profile_data.id === get_current_profile_id()
    );

    if (!profile) {
      location.href = location.origin;
    }
    return profile!;
  }
}
