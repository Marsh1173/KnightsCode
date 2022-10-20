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
    this.props.exercise_presenter.next_question();
  }
  protected get_main_content(): JSX.Element {
    let flashcard_components: JSX.Element[] = this.props.question.answers.map((answer) => {
      let next_ref: React.RefObject<HTMLInputElement> = React.createRef();
      return (
        <div className="card" key={get_next_id()} ref={next_ref}>
          <span>{answer}</span>
        </div>
      );
    });
    return (
      <div className="main-content">
        <h1>{this.props.question.question}</h1>
        {flashcard_components}
      </div>
    );
  }
}
