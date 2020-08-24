import Skill from "../../models/Skill";
import { SkillActions, SkillActionTypes } from "../actions/Skill";

export interface SkillState {
  skills: Skill[];
  isLoading: boolean;
  isLoaded: boolean;
}

const INITIAL_STATE: SkillState = {
  skills: [],
  isLoading: false,
  isLoaded: false,
};

export const skillReducer = (
  state: SkillState = INITIAL_STATE,
  action: SkillActionTypes
): SkillState => {
  switch (action.type) {
    case SkillActions.SKILL_SET:
      return {
        ...state,
        skills: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    case SkillActions.SKILL_LOAD:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
