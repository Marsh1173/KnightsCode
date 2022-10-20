import React from "react";
import { Exercise } from "../Unit/Exercise";
import { Explanation } from "../Unit/Explanation";

export const explanation_0_1_0: Explanation = {
  type: "Explanation",
  pages: [
    <h1>Variables</h1>,
    <p>Programmers use objects called variables.</p>,
    <p>
      Variables are a way to assign a value to a name. The expression <mark>x = 1</mark> puts the value <mark>1</mark>{" "}
      into our variable <mark>x</mark>. Whenever we refer to <mark>x</mark>, we are referring to the value that{" "}
      <mark>x</mark> holds.
    </p>,
    <p>There are several kinds of variables. The most common kinds are strings, numbers, and boolean values.</p>,
    <h1>Examples</h1>,
    <p>There are several types of number variables, but but for now, we'll just worry about integer numbers.</p>,
    <p>
      Number example: <mark>x = 0</mark>
    </p>,
    <p>
      Number example: <mark>x = -20</mark>
    </p>,
    <p>Strings hold a string of symbols in double or single quotes and are used to represent text.</p>,
    <p>
      String example: <mark>x = "Hello, world!"</mark>
    </p>,
    <p>
      String example: <mark>x = "1 + 1 = 3"</mark>
    </p>,
    <p>Booleans are the simplest kind of variable, and are either True or False.</p>,
    <p>
      Boolean example: <mark>x = True</mark>
    </p>,
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
      question: <h2>'H' is an example of a...</h2>,
      answers: ["String", "Number", "Boolean"],
      correct_index: 0,
    },
    {
      type: "Flashcard",
      question: <h2>"I love Python!" is an example of a...</h2>,
      answers: ["String", "Number", "Boolean"],
      correct_index: 0,
    },
    {
      type: "Flashcard",
      question: <h2>False is an example of a...</h2>,
      answers: ["String", "Number", "Boolean"],
      correct_index: 2,
    },
    {
      type: "Flashcard",
      question: <h2>9,874,198 is an example of a...</h2>,
      answers: ["String", "Number", "Boolean"],
      correct_index: 1,
    },
  ],
  lesson: 0,
  section: 1,
  unit: 1,
};
