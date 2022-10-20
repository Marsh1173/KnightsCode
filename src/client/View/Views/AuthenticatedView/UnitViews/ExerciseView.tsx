import React, { Component } from "react";
import {
  Project,
  ProjectExerciseInterface,
} from "../../../../Model/ClassModel/Unit/Project";
import {
  Exercise,
  FillInTheBlank,
  Flashcard,
} from "../../../../Model/ClassModel/Unit/Exercise";
import { AuthenticatedClientAppInterface } from "../../../../Presenter/AuthenticatedPresenter/AuthenticatedClientApp";
import { FillInTheBlankComponent } from "./FillInTheBlankComponent";
import { FlashcardComponent } from "./FlashcardComponent";
import { UnitView } from "./UnitView";
import { ProjectComponent } from "./ProjectView";

export interface ExerciseViewInterface {
  next_question: () => void;
}

interface ExerciseViewProps {
  presenter: AuthenticatedClientAppInterface;
  unit: Exercise | Project;
}

interface ExerciseViewState {
  question_index: number;
}

export class ExerciseView
  extends Component<ExerciseViewProps, ExerciseViewState>
  implements ExerciseViewInterface
{
  constructor(props: ExerciseViewProps) {
    super(props);

    this.state = { question_index: 0 };

    this.next_question = this.next_question.bind(this);
  }

  render() {
    let question: FillInTheBlank | Flashcard | ProjectExerciseInterface =
      this.props.unit.questions[this.state.question_index];
    if (question.type === "FillInTheBlank") {
      return (
        <FillInTheBlankComponent
          question={question}
          presenter={this.props.presenter}
          exercise_presenter={this}
        />
      );
    } else if (question.type === "ProjectExerciseInterface") {
      return (
        <ProjectComponent
          question={question}
          presenter={this.props.presenter}
          exercise_presenter={this}
        />
      );
    } else {
      return (
        <FlashcardComponent
          question={question}
          presenter={this.props.presenter}
          exercise_presenter={this}
        />
      );
    }
  }

  public next_question() {
    if (this.state.question_index + 1 >= this.props.unit.questions.length) {
      this.props.presenter.on_complete_unit(this.props.unit);
      this.props.presenter.show_progress();
    } else {
      this.setState({ question_index: this.state.question_index + 1 });
    }
  }
}
