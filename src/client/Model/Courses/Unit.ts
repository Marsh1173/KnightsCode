import { Course, DUMMY_COURSE_1 } from "./Course";

export interface Unit {
  name: string;
  description: string;
  courses: Course[];
  icon_url: string;
}

export const UNITS: Unit[] = [
  {
    name: "Lesson 1",
    description: "Print phrases to the console",
    courses: [DUMMY_COURSE_1, DUMMY_COURSE_1, DUMMY_COURSE_1],
    icon_url: "quote-right-solid.svg",
  },
  {
    name: "Lesson 2",
    description: "Create variables and assign values",
    courses: [DUMMY_COURSE_1, DUMMY_COURSE_1, DUMMY_COURSE_1],
    icon_url: "y-solid.svg",
  },
  {
    name: "Lesson 3",
    description: "If/else statements",
    courses: [DUMMY_COURSE_1, DUMMY_COURSE_1, DUMMY_COURSE_1],
    icon_url: "code-branch-solid.svg",
  },
  {
    name: "Lesson 4",
    description: "Use loops",
    courses: [DUMMY_COURSE_1, DUMMY_COURSE_1, DUMMY_COURSE_1],
    icon_url: "repeat-solid.svg",
  },
  {
    name: "Exercise 1",
    description: "Use everything we've learned",
    courses: [DUMMY_COURSE_1],
    icon_url: "diagram-project-solid.svg",
  },
];
