import { ExperienceAction, ExperienceActionTypes } from "../actions/types";
import { ExperienceModel } from "../../models/Experience";
// import { ExperienceActionModel } from "../actions/Experience";

const INITIAL_STATE: ExperienceModel = {
  educations: [],
  works: [],
};

export const experienceReducer = (
  state: ExperienceModel = INITIAL_STATE,
  action: ExperienceAction
) => {
  switch (action.type) {
    case ExperienceActionTypes.SET_EXPERIENCE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
