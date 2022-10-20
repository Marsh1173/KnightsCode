import React from "react";
import { Exercise } from "../Unit/Exercise";
import { Explanation } from "../Unit/Explanation";

export const explanation_0_0_0: Explanation = {
  type: "Explanation",
  pages: [
    <h1>Welcome to Programming in Python!</h1>,
    <p>
      Python is a programming language. When programmers write code, they use a programming language that can be
      converted to binary that the computer understands.
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
      question: "Python is a...",
      answers: ["Snake", "Programming Language", "River", "Race"],
      correct_index: 1,
    },
    {
      type: "Flashcard",
      question: "Computers only understand...",
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
    <p>Python supports mathematical expressions using symbols called operators.</p>,
    <p>These operators include + (addition), - (subtraction), * (multiplication), and / (division).</p>,
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
      question: "What does each Python expression evaluate to?",
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
