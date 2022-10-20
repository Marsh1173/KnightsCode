import React from "react";
import { Exercise } from "../Unit/Exercise";
import { Explanation } from "../Unit/Explanation";

export const explanation_0_0_0: Explanation = {
  type: "Explanation",
  pages: [
    <h1>Welcome to Programming in Python!</h1>,
    <p>
      Python is a <b>programming language.</b> When programmers write code, they use a programming language that can be
      converted to <b>binary</b> that the computer understands.
    </p>,
  ],
  lesson: 0,
  section: 0,
  unit: 0,
};

export const exercise_0_0_1: Exercise = {
  type: "Exercise",
  questions: [
    {
      type: "Flashcard",
      question: <h1>Python is a...</h1>,
      answers: ["Snake", "Programming Language", "River", "Race"],
      correct_index: 1,
    },
    {
      type: "Flashcard",
      question: <h1>Computers only understand...</h1>,
      answers: ["Binary", "Code", "English", "Japanese"],
      correct_index: 0,
    },
  ],
  lesson: 0,
  section: 0,
  unit: 1,
};

export const explanation_0_0_2: Explanation = {
  type: "Explanation",
  pages: [
    <h1>Operators</h1>,
    <p>
      Python supports mathematical expressions using symbols called <b>operators.</b>
    </p>,
    <p>
      These operators include <mark>+</mark> (addition), <mark>-</mark> (subtraction), <mark>*</mark> (multiplication),
      and <mark>/</mark> (division).
    </p>,
  ],
  lesson: 0,
  section: 0,
  unit: 2,
};

export const exercise_0_0_3: Exercise = {
  type: "Exercise",
  questions: [
    {
      type: "FillInTheBlank",
      question: <h2>What does each Python expression evaluate to?</h2>,
      questions: [
        {
          before_text: "6 + 5 = ",
          correct_answers: ["11", "eleven"],
        },
        {
          before_text: "10 - 3 = ",
          correct_answers: ["7", "seven"],
        },
        {
          before_text: "3 * 3 = ",
          correct_answers: ["9", "nine"],
        },
        {
          before_text: "9 / 3 = ",
          correct_answers: ["3", "three"],
        },
      ],
    },
  ],
  lesson: 0,
  section: 0,
  unit: 3,
};
