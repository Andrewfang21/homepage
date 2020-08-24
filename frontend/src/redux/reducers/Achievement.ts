import Achievement from "../../models/Achievement";
import {
  AchievementActionTypes,
  AchievementActions,
} from "../actions/Achievement";

export interface AchievementState {
  achievements: Achievement[];
  isLoading: boolean;
  isLoaded: boolean;
}

const INITIAL_STATE: AchievementState = {
  achievements: [],
  isLoading: false,
  isLoaded: false,
};

export const achievementReducer = (
  state: AchievementState = INITIAL_STATE,
  action: AchievementActionTypes
): AchievementState => {
  switch (action.type) {
    case AchievementActions.ACHIEVEMENT_SET:
      return {
        ...state,
        achievements: action.payload,
        isLoading: false,
        isLoaded: true,
      };
    case AchievementActions.ACHIEVEMENT_LOAD:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
