import { Project } from "./Project";
import { LESSON_1_SECTIONS, Topic } from "./Topic";

export interface Lesson {
  name: string;
  sections: (Topic | Project)[];
}

export const LESSON_1: Lesson = {
  name: "Introduction to Python",
  sections: LESSON_1_SECTIONS,
};
