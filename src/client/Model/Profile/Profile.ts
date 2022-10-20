import { get_next_id } from "../DataAccessors/GetNextId";
import { UnitCompletion } from "./UnitCompletion";

export interface LocallyStoredProfiles {
  profiles: Profile[];
}

export interface Profile {
  id: number;
  name: string;
  password: string;
  email: string;
  completed: UnitCompletion[];
}

let current_profile_id: number = 8303659523037731;

export function get_current_profile_id(): number {
  return current_profile_id;
}
export function set_current_profile_id(new_profile_id: number) {
  current_profile_id = new_profile_id;
}

export const get_new_profile = (name: string, password: string, email: string): Profile => {
  return {
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    name,
    password,
    email,
    completed: [],
  };
};
