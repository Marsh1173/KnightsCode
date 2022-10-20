import React from "react";
import { Unit } from "./Unit";

export interface ProjectBlockInterface {
  before_element?: JSX.Element;
  input_size: number;
  after_element?: JSX.Element;
  correct_answer: JSX.Element;
}

export interface ProjectExerciseInterface {
  type: "ProjectExerciseInterface";
  question: JSX.Element;
  blocks: ProjectBlockInterface[];
}

export interface Project extends Unit {
  type: "Project";
  description: string;
  questions: ProjectExerciseInterface[];
}

export const project_0_4_0: Project = {
  type: "Project",
  description: "Loops, functions, and printing",
  lesson: 0,
  section: 4,
  unit: 0,
  questions: [
    {
      type: "ProjectExerciseInterface",
      question: (
        <h1>
          Call the summon() method on the Archer class 10 times, then print
          "Fire!".
          <br />
          <br />
        </h1>
      ),
      blocks: [
        {
          before_element: <>For&nbsp;</>,
          input_size: 10,
          correct_answer: <>i in range</>,
        },
        {
          before_element: (
            <>
              (10):
              <br />
              &nbsp;&nbsp;&nbsp;Archer.
            </>
          ),
          input_size: 10,
          correct_answer: <>summon()</>,
        },
        {
          before_element: (
            <>
              <br />
              print
            </>
          ),
          input_size: 10,
          correct_answer: <>("Fire!")</>,
        },
      ],
    },
  ],
};
