import React from "react";
import { Component } from "react";
import { AuthenticatedClientAppInterface } from "../../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { Explanation } from "../../../../Model/ClassModel/Unit/Explanation";
import { UnitView } from "./UnitView";
import { get_next_id } from "../../../../Model/DataAccessors/GetNextId";

interface ExplanationViewProps {
  presenter: AuthenticatedClientAppInterface;
  unit: Explanation;
}

export class ExplanationView extends Component<ExplanationViewProps, {}> {
  constructor(props: ExplanationViewProps) {
    super(props);
  }

  render() {
    return (
      <UnitView
        presenter={this.props.presenter}
        state="attempting"
        main_content={<div className="main-content">{this.props.unit.pages}</div>}
        footer_content={
          <div>
            <div className="left"></div>
            <button
              className="green"
              onClick={() => {
                this.props.presenter.on_complete_unit(this.props.unit);
                this.props.presenter.show_progress();
              }}
            >
              Continue
            </button>
          </div>
        }
      ></UnitView>
    );
  }
}
