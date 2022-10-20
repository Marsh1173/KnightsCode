import React from "react";
import { Exercise } from "../Unit/Exercise";
import { Explanation } from "../Unit/Explanation";

export const explanation_0_3_0: Explanation = {
  type: "Explanation",
  pages: [
    <h1>Loops are a great way to accomplish a task multiple times</h1>,
    <p>
      In Python, Loops are a piece of code with a condition that repeats 
      itself until the condition is false.  The two main Loops used are 
      While and For Loops.  For now, we will focus on For Loops.
    </p>,
    <p>A For Loops general structure is for _  in range(_):</p>,
    <p>
      The first blank is a spot for the programmer to place a new variable, 
      that will start at the number 0, and count up by one, each time the 
      loop runs.  The second blank spot is for the value you want to count 
      up to.  The condition for this loop is as follows: run as long 
      as the first variable is smaller than the second value or variable.
    </p>,
    <p>
      Example - for i in range(3):
      This loop will run with i = 0, then i = 1, then i = 2.  
      When i = 3, it is no longer less than 3 and will therefore 
      not loop again.
    </p>
  ],
  lesson: 0,
  section: 3,
  unit: 0,
};

export const exercise_0_3_1: Exercise = {
  type: "Exercise",
  questions: [
    {
      type: "Flashcard",
      question: "How many times will the following loop run? for i in range(3)",
      answers: ["0", "2", "3", "4"],
      correct_index: 2,
    },
    {
      type: "Flashcard",
      question: "How many times will the following loop run? for i in range(8)",
      answers: ["8", "5", "9", "7"],
      correct_index: 0,
    },
  ],
  lesson: 0,
  section: 3,
  unit: 1,
};