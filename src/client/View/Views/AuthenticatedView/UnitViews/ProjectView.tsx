import React from "react";
import { get_next_id } from "../../../../Model/DataAccessors/GetNextId";
import {
  QuestionView,
  QuestionViewPropsInterface,
  QuestionViewStateInterface,
} from "./QuestionView";
import {
  Project,
  ProjectExerciseInterface,
} from "../../../../Model/ClassModel/Unit/Project";

interface ProjectComponentProps extends QuestionViewPropsInterface {
  question: ProjectExerciseInterface;
}
interface ProjectComponentState extends QuestionViewStateInterface {}

export class ProjectComponent extends QuestionView<
  ProjectComponentProps,
  ProjectComponentState
> {
  // private input_refs: React.RefObject<HTMLTextAreaElement>[] = [];

  constructor(props: ProjectComponentProps) {
    super(props, { state: "attempting" });
  }

  protected check_answer(): void {
    // this.input_refs[0].current;
    // let currents: HTMLTextAreaElement[] = [];

    // for (let i: number = 0; i < this.input_refs.length; i++) {
    //   if (!this.input_refs[i].current) {
    //     return;
    //   } else {
    //     currents.push(this.input_refs[i].current!);
    //   }
    // }

    // let success: boolean = true;
    // for (let i: number = 0; i < currents.length; i++) {
    //   let value: string = currents[i].value;
    //   // if (!this.props.question.questions[i].correct_answers.includes(value)) {
    //   //   success = false;
    //   // }
    // }

    this.setState({ state: "completed" });
  }
  protected get_main_content(): JSX.Element {
    let components: JSX.Element[] = this.props.question.blocks.map((block) => {
      return (
        <>
          {block.before_element}
          <input
            type={"text"}
            style={{ width: block.input_size * 20 + "px" }}
          />
          {block.after_element}
        </>
      );
    });
    let answer: JSX.Element[] = this.props.question.blocks.map((block) => {
      return (
        <>
          {block.before_element}
          {block.correct_answer}
          {block.after_element}
        </>
      );
    });
    // this.input_refs = [];
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
        {this.props.question.question}
        <p>{components}</p>
        {this.state.state === "completed" && (
          <div className="answer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  }
}
