import { Dispatch } from "redux";

import ExperienceModel from "../../models/Experience";

import { ExperienceActionTypes } from "../actions/types";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingExperiences {
  type: ExperienceActionTypes.LOADING_EXPERIENCES;
}

export interface SetExperiences {
  type: ExperienceActionTypes.SET_EXPERIENCES;
  payload: ExperienceModel;
}

// Actions ------------------------------------------------------------
export const loadingExperiences = (): LoadingExperiences => ({
  type: ExperienceActionTypes.LOADING_EXPERIENCES,
});

export const setExperiences = (payload: ExperienceModel): SetExperiences => ({
  type: ExperienceActionTypes.SET_EXPERIENCES,
  payload: payload,
});

export const fetchExperiences = () => async (dispatch: Dispatch) => {
  dispatch<LoadingExperiences>(loadingExperiences());
  const experiences: ExperienceModel = await api.getExperiences();
  dispatch<SetExperiences>(setExperiences(experiences));
};
