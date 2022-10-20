import { Exercise } from "./Unit/Exercise";
import { Explanation } from "./Unit/Explanation";
import { exercise_0_0_1, exercise_0_0_3, explanation_0_0_0, explanation_0_0_2 } from "./Material/1-1";
import { exercise_0_1_1, explanation_0_1_0 } from "./Material/1-2";
import { Project } from "./Unit/Project";
import { exercise_0_3_1, explanation_0_3_0 } from "./Material/1-4";

export interface Topic {
  type: "Topic";
  name: string;
  subtitle: string;
  units: (Exercise | Explanation)[];
}

export const LESSON_1_SECTIONS: (Topic | Project)[] = [
  {
    type: "Topic",
    name: "Introduction",
    subtitle: "Section 1",
    units: [explanation_0_0_0, exercise_0_0_1, explanation_0_0_2, exercise_0_0_3],
  },
  {
    type: "Topic",
    name: "Variables",
    subtitle: "Section 2",
    units: [explanation_0_1_0, exercise_0_1_1],
  },
  {
    type: "Topic",
    name: "Functions",
    subtitle: "Section 3",
    units: [explanation_0_1_0, exercise_0_1_1, exercise_0_1_1],
  },
  {
    type: "Topic",
    name: "Loops",
    subtitle: "Section 4",
    units: [explanation_0_3_0, exercise_0_3_1],
  },
  {
    type: "Project",
    description: "Loops, functions, and printing",
    lesson: 0,
    section: 4,
    unit: 0,
  },
];
