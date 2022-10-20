import { Unit } from "./Unit";

export interface Project extends Unit {
  type: "Project";
  description: string;
}

export const project_0_4_0: Project = {
  type: "Project",
  description: "Loops, functions, and printing",
  lesson: 0,
  section: 4,
  unit: 0,
};
