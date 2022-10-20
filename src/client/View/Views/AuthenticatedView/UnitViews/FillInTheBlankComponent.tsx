import React from "react";
import { get_next_id } from "../../../../Model/DataAccessors/GetNextId";
import { FillInTheBlank } from "../../../../Model/ClassModel/Unit/Exercise";
import { QuestionView, QuestionViewPropsInterface, QuestionViewStateInterface } from "./QuestionView";

interface FillInTheBlankComponentProps extends QuestionViewPropsInterface {
  question: FillInTheBlank;
}
interface FillInTheBlankComponentState extends QuestionViewStateInterface {}

export class FillInTheBlankComponent extends QuestionView<FillInTheBlankComponentProps, FillInTheBlankComponentState> {
  private input_refs: React.RefObject<HTMLInputElement>[] = [];

  constructor(props: FillInTheBlankComponentProps) {
    super(props, { state: "attempting" });
  }

  protected check_answer(): void {
    this.input_refs[0].current;
    let currents: HTMLInputElement[] = [];

    for (let i: number = 0; i < this.input_refs.length; i++) {
      if (!this.input_refs[i].current) {
        return;
      } else {
        currents.push(this.input_refs[i].current!);
      }
    }

    let success: boolean = true;
    for (let i: number = 0; i < currents.length; i++) {
      let value: string = currents[i].value;
      if (!this.props.question.questions[i].correct_answers.includes(value)) {
        success = false;
      }
    }

    if (!success) {
      this.setState({ state: "error" });
    } else {
      this.setState({ state: "completed" });
    }
  }
  protected get_main_content(): JSX.Element {
    this.input_refs = [];
    let fill_in_the_blank_components: JSX.Element[] = this.props.question.questions.map((question) => {
      let next_ref: React.RefObject<HTMLInputElement> = React.createRef();
      this.input_refs.push(next_ref);
      return (
        <div className="card" key={get_next_id()}>
          <p>
            {question.before_text}
            <input type={"text"} ref={next_ref} disabled={this.state.state === "completed"} />
            {question.after_text}
          </p>
        </div>
      );
    });
    return (
      <div className="main-content">
        <h1>Fill in the blank:</h1>
        {this.props.question.question && <h2>{this.props.question.question}</h2>}
        {fill_in_the_blank_components}
      </div>
    );
  }
}
