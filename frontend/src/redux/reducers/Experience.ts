import { Education, Work } from "../../models/Experience";
import {
  ExperienceActions,
  ExperienceActionTypes,
} from "../actions/Experience";

export interface ExperienceState {
  educations: Education[];
  works: Work[];
  isLoading: boolean;
  isLoaded: boolean;
}

const INITIAL_STATE: ExperienceState = {
  educations: [],
  works: [],
  isLoading: false,
  isLoaded: false,
};

export const experienceReducer = (
  state: ExperienceState = INITIAL_STATE,
  action: ExperienceActionTypes
): ExperienceState => {
  switch (action.type) {
    case ExperienceActions.EXPERIENCE_LOAD:
      return { ...state, isLoading: true };
    case ExperienceActions.EXPERIENCE_SET:
      return { ...state, ...action.payload, isLoading: false, isLoaded: true };
    default:
      return { ...state };
  }
};
