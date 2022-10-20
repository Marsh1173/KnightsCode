import { Unit } from "./Unit";

export interface Project extends Unit {
  type: "Project";
  description: string;
}
