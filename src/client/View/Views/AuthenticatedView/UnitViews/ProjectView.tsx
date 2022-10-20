import React from "react";
import { get_next_id } from "../../../../Model/DataAccessors/GetNextId";
import { QuestionView, QuestionViewPropsInterface, QuestionViewStateInterface } from "./QuestionView";
import { Project } from "../../../../Model/ClassModel/Unit/Project";

interface ProjectComponentProps extends QuestionViewPropsInterface {
  project: Project;
}
interface ProjectComponentState extends QuestionViewStateInterface {}

export class ProjectComponent extends QuestionView<ProjectComponentProps, ProjectComponentState> {
  private input_refs: React.RefObject<HTMLTextAreaElement>[] = [];

  constructor(props: ProjectComponentProps) {
    super(props, { state: "attempting" });
  }

  protected check_answer(): void {
    this.input_refs[0].current;
    let currents: HTMLTextAreaElement[] = [];

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
      // if (!this.props.question.questions[i].correct_answers.includes(value)) {
      //   success = false;
      // }
    }

    if (!success) {
      this.setState({ state: "error" });
    } else {
      this.setState({ state: "completed" });
    }
  }
  protected get_main_content(): JSX.Element {
    this.input_refs = [];
    // let fill_in_the_blank_components: JSX.Element[] = this.props.question.questions.map((question) => {
    //   let next_ref: React.RefObject<HTMLInputElement> = React.createRef();
    //   this.input_refs.push(next_ref);
    //   return (
    //     <div className="card" key={get_next_id()}>
    //       <p>
    //         {question.before_text}
    //         <textarea ref={next_ref} disabled={this.state.state === "completed"} />
    //         {question.after_text}
    //       </p>
    //     </div>
    //   );
    // });
    return (
      <div className="main-content">
        <h1>Fill in the blank:</h1>
        {/* {this.props.question.question && <h2>{this.props.question.question}</h2>} */}
        {/* {fill_in_the_blank_components} */}
      </div>
    );
  }
}
