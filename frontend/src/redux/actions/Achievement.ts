import { Dispatch } from "redux";

import AchievementModel from "../../models/Achievement";

import { AchievementActionTypes } from "../actions/types";
import * as api from "../../api";

// Models ------------------------------------------------------------
export interface LoadingAchievements {
  type: AchievementActionTypes.LOADING_ACHIEVEMENTS;
}

export interface SetAchievements {
  type: AchievementActionTypes.SET_ACHIEVEMENTS;
  payload: AchievementModel[];
}

// Actions ------------------------------------------------------------
export const loadingAchievements = (): LoadingAchievements => ({
  type: AchievementActionTypes.LOADING_ACHIEVEMENTS,
});

export const setAchievements = (
  payload: AchievementModel[]
): SetAchievements => ({
  type: AchievementActionTypes.SET_ACHIEVEMENTS,
  payload: payload,
});

export const fetchAchievements = () => async (dispatch: Dispatch) => {
  dispatch<LoadingAchievements>(loadingAchievements());
  const achievements: AchievementModel[] = await api.getAchievements();
  dispatch<SetAchievements>(setAchievements(achievements));
};
