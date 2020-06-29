import SkillModel from "../../models/Skill";
import { SkillActionTypes, SkillAction } from "../actions/types";

export interface SkillActionModel {
  skills: SkillModel[];
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: SkillActionModel = {
  skills: [],
  loading: false,
  loaded: false,
};

export const skillReducer = (
  state: SkillActionModel = INITIAL_STATE,
  action: SkillAction
) => {
  switch (action.type) {
    case SkillActionTypes.SET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
        loaded: true,
      };
    case SkillActionTypes.LOADING_SKILLS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
