import React, { Component } from "react";
import { Exercise } from "../../Model/ClassModel/Unit/Exercise";
import { Explanation } from "../../Model/ClassModel/Unit/Explanation";
import { LocalStorageHandler } from "../../Model/DataAccessors/LocalStoragehandler";
import {
  get_current_profile_id,
  LocallyStoredProfiles,
  Profile,
} from "../../Model/Profile/Profile";
import { ProgressView } from "../../View/Views/AuthenticatedView/ProgressView";
import { Project } from "../../Model/ClassModel/Unit/Project";
import { ExplanationView } from "../../View/Views/AuthenticatedView/UnitViews/ExplanationView";
import { Unit } from "../../Model/ClassModel/Unit/Unit";
import { ExerciseView } from "../../View/Views/AuthenticatedView/UnitViews/ExerciseView";
import { UnitCompletion } from "../../Model/Profile/UnitCompletion";
import { ProjectComponent } from "../../View/Views/AuthenticatedView/UnitViews/ProjectView";

export interface AuthenticatedClientAppInterface {
  show_progress: () => void;
  begin_exercise: (exercise: Exercise) => void;
  begin_explanation: (explanation: Explanation) => void;
  begin_project: (project: Project) => void;
  get_current_profile: () => Profile;
  on_complete_unit: (unit: Unit) => void;
}

export class AuthenticatedClientApp
  extends Component<{}, { content: JSX.Element }>
  implements AuthenticatedClientAppInterface
{
  private readonly container_ref: React.RefObject<HTMLDivElement> =
    React.createRef();
  constructor(props: any) {
    super(props);

    this.show_progress = this.show_progress.bind(this);
    this.begin_exercise = this.begin_exercise.bind(this);
    this.begin_explanation = this.begin_explanation.bind(this);
    this.begin_project = this.begin_project.bind(this);

    this.show_progress(true);
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

  public show_progress = (if_scroll: boolean = false) => {
    let profile: Profile = this.get_current_profile();
    this.set_content(
      <ProgressView presenter={this} profile={profile} if_scroll={if_scroll} />
    );
  };

  public begin_exercise(exercise: Exercise) {
    this.set_content(<ExerciseView presenter={this} unit={exercise} />);
  }
  public begin_explanation(explanation: Explanation) {
    this.set_content(<ExplanationView presenter={this} unit={explanation} />);
  }
  public begin_project(project: Project) {
    this.set_content(<ExerciseView presenter={this} unit={project} />);
  }

  public on_complete_unit(unit: Unit) {
    let profiles: LocallyStoredProfiles | undefined =
      LocalStorageHandler.get_local_storage_item<LocallyStoredProfiles>(
        "locally-stored-profiles"
      );

    if (!profiles) {
      location.href = location.origin;
    }

    let profile: Profile | undefined = profiles!.profiles.find(
      (profile_data) => profile_data.id === get_current_profile_id()
    );

    if (!profile) {
      location.href = location.origin;
    }

    let possible_preexisting_completion: UnitCompletion | undefined =
      profile!.completed.find(
        (old_unit) =>
          unit.lesson === old_unit.lesson &&
          unit.unit === old_unit.unit &&
          unit.section === old_unit.section
      );
    if (possible_preexisting_completion) {
      possible_preexisting_completion.date = Date.now();
    } else {
      profile!.completed.push({
        lesson: unit.lesson,
        unit: unit.unit,
        section: unit.section,
        date: Date.now(),
      });
    }

    LocalStorageHandler.set_local_storage_item(
      "locally-stored-profiles",
      profiles
    );
  }

  public get_current_profile(): Profile {
    let profiles: LocallyStoredProfiles | undefined =
      LocalStorageHandler.get_local_storage_item<LocallyStoredProfiles>(
        "locally-stored-profiles"
      );

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
