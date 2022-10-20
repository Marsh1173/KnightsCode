import React from "react";
import { Component } from "react";
import { AuthenticatedClientAppInterface } from "../../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { Exercise } from "../../../../Model/ClassModel/Unit/Exercise";
import { Explanation } from "../../../../Model/ClassModel/Unit/Explanation";

interface UnitViewProps {
  presenter: AuthenticatedClientAppInterface;
  unit: Exercise | Explanation;
}

interface UnitViewState {
  completed: boolean;
  message?: string;
  success_message?: string;
  eror_message?: string;
}

export class UnitView extends Component<UnitViewProps, {}> {
  constructor(props: UnitViewProps) {
    super(props);
  }

  render() {
    return (
      <div className="UnitView">
        <div className="unit-container">
          <button className="leave-button" onClick={this.props.presenter.show_progress}>
            <img src={"images/courses/right-to-bracket-solid.svg"} />
          </button>
        </div>
      </div>
    );
  }
}
