import React from "react";
import { Exercise } from "../Unit/Exercise";
import { Explanation } from "../Unit/Explanation";

export const explanation_0_1_0: Explanation = {
  type: "Explanation",
  pages: [
    <p>Programmers use objects called variables.</p>,
    <p>
      Variables are a way to assign a value to a name. The expression "x = 1" puts the value 1 into our variable x.
      Whenever we refer to x, we are referring to the value that x holds.
    </p>,
    <p>There are several kinds of variables. The most common kinds are strings, numbers, and boolean values.</p>,
    <p>There are several types of number variables, but but for now, we'll just worry about integer numbers.</p>,
    <p>Number example: x = 0</p>,
    <p>Number example: x = -20</p>,
    <p>Strings hold a string of symbols in double or single quotes and are used to represent text.</p>,
    <p>String example: x = "Hello, world!"</p>,
    <p>String example: x = "1 + 1 = 3"</p>,
    <p>Booleans are the simplest kind of variable, and are either True or False.</p>,
    <p>Boolean example: x = True</p>,
  ],
  lesson: 0,
  section: 1,
  unit: 0,
};

export const exercise_0_1_1: Exercise = {
  type: "Exercise",
  questions: [
    {
      type: "Flashcard",
      question: "'H' is an example of a...",
      answers: ["string", "number", "boolean"],
      correct_index: 0,
    },
    {
      type: "Flashcard",
      question: '"I love Python!" is an example of a...',
      answers: ["string", "number", "boolean"],
      correct_index: 0,
    },
    {
      type: "Flashcard",
      question: "False is an example of a...",
      answers: ["string", "number", "boolean"],
      correct_index: 2,
    },
    {
      type: "Flashcard",
      question: "9,874,198 is an example of a...",
      answers: ["string", "number", "boolean"],
      correct_index: 1,
    },
  ],
  lesson: 0,
  section: 1,
  unit: 1,
};
