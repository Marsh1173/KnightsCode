import { Unit } from "./Unit";

export interface Explanation extends Unit {
  type: "Explanation";
  pages: JSX.Element[];
}
