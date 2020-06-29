import ExperienceModel from "../../models/Experience";
import { ExperienceAction, ExperienceActionTypes } from "../actions/types";

export interface ExperienceActionModel extends ExperienceModel {
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: ExperienceActionModel = {
  educations: [],
  works: [],
  loading: false,
  loaded: false,
};

export const experienceReducer = (
  state: ExperienceActionModel = INITIAL_STATE,
  action: ExperienceAction
): ExperienceActionModel => {
  switch (action.type) {
    case ExperienceActionTypes.SET_EXPERIENCES:
      return { ...state, ...action.payload, loading: false, loaded: true };
    case ExperienceActionTypes.LOADING_EXPERIENCES:
      return { ...state, loading: true };
    default:
      return state;
  }
};
