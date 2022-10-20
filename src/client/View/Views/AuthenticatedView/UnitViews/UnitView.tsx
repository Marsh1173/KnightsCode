import React from "react";
import { Component } from "react";
import { AuthenticatedClientAppInterface } from "../../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";

interface UnitViewProps {
  presenter: AuthenticatedClientAppInterface;
  footer_content: JSX.Element;
  main_content: JSX.Element;
  state: "error" | "completed" | "attempting";
}

export class UnitView extends Component<UnitViewProps, {}> {
  constructor(props: UnitViewProps) {
    super(props);
  }

  render() {
    return (
      <div className="UnitView">
        <div className="unit-container">
          <button className="leave-button" onClick={() => this.props.presenter.show_progress()}>
            <img src={"images/courses/right-to-bracket-solid.svg"} />
          </button>
          {this.props.main_content}
        </div>
        <div className={`footer ${this.props.state}`}>{this.props.footer_content}</div>
      </div>
    );
  }
}
