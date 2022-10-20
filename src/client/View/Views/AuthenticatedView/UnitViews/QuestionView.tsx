import React, { Component } from "react";
import { AuthenticatedClientAppInterface } from "../../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { ExerciseViewInterface } from "./ExerciseView";
import { UnitView } from "./UnitView";

export interface QuestionViewPropsInterface {
  exercise_presenter: ExerciseViewInterface;
  presenter: AuthenticatedClientAppInterface;
}
export interface QuestionViewStateInterface {
  state: "attempting" | "error" | "completed";
}
export abstract class QuestionView<
  Props extends QuestionViewPropsInterface,
  State extends QuestionViewStateInterface
> extends Component<Props, State> {
  constructor(props: Props, initial_state: State) {
    super(props);

    this.state = initial_state;

    this.check_answer = this.check_answer.bind(this);
  }

  render() {
    return (
      <UnitView
        presenter={this.props.presenter}
        main_content={this.get_main_content()}
        state={this.state.state}
        footer_content={
          <div>
            <div className="left">
              {this.state.state === "completed" && <h1>Correct!</h1>}
              {this.state.state === "error" && <h1>Incorrect</h1>}
            </div>
            {this.get_button()}
          </div>
        }
      ></UnitView>
    );
  }

  protected get_button(): JSX.Element {
    if (this.state.state === "attempting" || this.state.state === "error") {
      return (
        <button className="green" onClick={this.check_answer}>
          Check
        </button>
      );
    } else {
      return (
        <button className="green" onClick={this.props.exercise_presenter.next_question}>
          Continue
        </button>
      );
    }
  }
  protected abstract check_answer(): void;
  protected abstract get_main_content(): JSX.Element;
}
