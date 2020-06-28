import { Dispatch } from "redux";
import { ExperienceActionTypes } from "../actions/types";
import { ExperienceModel } from "../../models/Experience";
import * as api from "../../api";

// ------------------------------------------------------------
export interface LoadingExperience {
  type: ExperienceActionTypes.LOADING_EXPERIENCE;
}

export interface SetExperience {
  type: ExperienceActionTypes.SET_EXPERIENCE;
  payload: ExperienceModel;
}

// ------------------------------------------------------------
export const loadingExperiences = (): LoadingExperience => ({
  type: ExperienceActionTypes.LOADING_EXPERIENCE,
});

export const setExperiences = (payload: ExperienceModel): SetExperience => ({
  type: ExperienceActionTypes.SET_EXPERIENCE,
  payload: payload,
});

export const fetchExperiences = () => async (dispatch: Dispatch) => {
  dispatch<LoadingExperience>(loadingExperiences());
  const experiences = await api.getExperiences();
  dispatch<SetExperience>(setExperiences(experiences));
};
