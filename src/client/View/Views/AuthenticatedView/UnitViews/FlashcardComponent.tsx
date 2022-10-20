import React from "react";
import { get_next_id } from "../../../../Model/DataAccessors/GetNextId";
import { Flashcard } from "../../../../Model/ClassModel/Unit/Exercise";
import { QuestionView, QuestionViewPropsInterface, QuestionViewStateInterface } from "./QuestionView";

interface FlashcardComponentProps extends QuestionViewPropsInterface {
  question: Flashcard;
}
interface FlashcardComponentState extends QuestionViewStateInterface {
  selected_index: number;
}

export class FlashcardComponent extends QuestionView<FlashcardComponentProps, FlashcardComponentState> {
  constructor(props: FlashcardComponentProps) {
    super(props, { state: "attempting", selected_index: -1 });
  }

  protected check_answer(): void {
    if (this.state.selected_index == this.props.question.correct_index) {
      this.setState({ state: "completed" });
    } else {
      this.setState({ state: "error" });
    }
  }
  protected get_main_content(): JSX.Element {
    let flashcard_components: JSX.Element[] = this.props.question.answers.map((answer, index) => {
      let next_ref: React.RefObject<HTMLInputElement> = React.createRef();
      return (
        <div
          className={`card ${this.state.selected_index === index ? "selected" : ""}`}
          key={get_next_id()}
          ref={next_ref}
          onClick={() => {
            if (this.state.state !== "completed") {
              this.setState({ selected_index: index });
            }
          }}
        >
          <p>{answer}</p>
        </div>
      );
    });
    return (
      <div className="main-content">
        {this.props.question.question}
        <div className="cards">{flashcard_components}</div>
      </div>
    );
  }
}
