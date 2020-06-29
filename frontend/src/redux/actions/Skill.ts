import { Dispatch } from "redux";

import SkillModel from "../../models/Skill";

import { SkillActionTypes } from "../actions/types";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingSkills {
  type: SkillActionTypes.LOADING_SKILLS;
}

export interface SetSkills {
  type: SkillActionTypes.SET_SKILLS;
  payload: SkillModel[];
}

// Actions ------------------------------------------------------------
export const loadingSkills = (): LoadingSkills => ({
  type: SkillActionTypes.LOADING_SKILLS,
});

export const setSkills = (payload: SkillModel[]): SetSkills => ({
  type: SkillActionTypes.SET_SKILLS,
  payload: payload,
});

export const fetchSkills = () => async (dispatch: Dispatch) => {
  dispatch<LoadingSkills>(loadingSkills());
  const skills: SkillModel[] = await api.getSkills();
  dispatch<SetSkills>(setSkills(skills));
};
