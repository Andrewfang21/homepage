import { AchievementModel } from "../../models/Achievement";
import { AchievementAction, AchievementActionTypes } from "../actions/types";

export interface AchievementActionModel {
  achievements: AchievementModel[];
  loading: boolean;
  loaded: boolean;
}

const INITIAL_STATE: AchievementActionModel = {
  achievements: [],
  loading: false,
  loaded: false,
};

export const achievementReducer = (
  state: AchievementActionModel = INITIAL_STATE,
  action: AchievementAction
): AchievementActionModel => {
  switch (action.type) {
    case AchievementActionTypes.SET_ACHIEVEMENTS:
      return {
        ...state,
        achievements: action.payload,
        loading: false,
        loaded: true,
      };
    case AchievementActionTypes.LOADING_ACHIEVEMENTS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
