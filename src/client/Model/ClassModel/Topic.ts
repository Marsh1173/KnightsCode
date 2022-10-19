import { DUMMY_EXERCISE_1, Exercise } from "./Exercise";
import { Explanation } from "./Explanation";
import { Project } from "./Project";

export interface Topic {
  type: "Topic";
  name: string;
  subtitle: string;
  courses: (Exercise | Explanation)[];
  icon_url: string;
}

export const LESSON_1_SECTIONS: (Topic | Project)[] = [
  {
    type: "Topic",
    name: "Section 1",
    subtitle: "Print phrases to the console",
    courses: [DUMMY_EXERCISE_1, DUMMY_EXERCISE_1, DUMMY_EXERCISE_1],
    icon_url: "quote-right-solid.svg",
  },
  {
    type: "Topic",
    name: "Section 2",
    subtitle: "Create variables and assign values",
    courses: [DUMMY_EXERCISE_1, DUMMY_EXERCISE_1, DUMMY_EXERCISE_1],
    icon_url: "y-solid.svg",
  },
  {
    type: "Topic",
    name: "Section 3",
    subtitle: "If/else statements",
    courses: [DUMMY_EXERCISE_1, DUMMY_EXERCISE_1, DUMMY_EXERCISE_1],
    icon_url: "code-branch-solid.svg",
  },
  {
    type: "Topic",
    name: "Section 4",
    subtitle: "Use loops",
    courses: [DUMMY_EXERCISE_1, DUMMY_EXERCISE_1, DUMMY_EXERCISE_1],
    icon_url: "repeat-solid.svg",
  },
  {
    type: "Project",
  },
];
