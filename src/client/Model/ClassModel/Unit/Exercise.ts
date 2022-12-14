import { Unit } from "./Unit";

export interface Flashcard {
  type: "Flashcard";
  question: JSX.Element;
  answers: string[];
  correct_index: number;
}

export interface FillInTheBlankPhrase {
  before_text?: string;
  correct_answers: string[];
  after_text?: string;
}

export interface FillInTheBlank {
  type: "FillInTheBlank";
  question?: JSX.Element;
  questions: FillInTheBlankPhrase[];
}

export interface Exercise extends Unit {
  type: "Exercise";
  questions: (Flashcard | FillInTheBlank)[];
}
