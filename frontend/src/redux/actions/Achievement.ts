import { Dispatch } from "redux";
import Achievement from "../../models/Achievement";
import * as api from "../../api";

export enum AchievementActions {
  ACHIEVEMENT_SET = "ACHIEVEMENT_SET",
  ACHIEVEMENT_LOAD = "ACHIEVEMENT_LOAD",
}

export type AchievementActionTypes = AchievementLoad | AchievementSet;

interface AchievementLoad {
  type: AchievementActions.ACHIEVEMENT_LOAD;
}
interface AchievementSet {
  type: AchievementActions.ACHIEVEMENT_SET;
  payload: Achievement[];
}

export const fetchAchievements = () => async (dispatch: Dispatch) => {
  dispatch<AchievementLoad>({ type: AchievementActions.ACHIEVEMENT_LOAD });
  const achievements: Achievement[] = await api.getAchievements();
  dispatch<AchievementSet>({
    type: AchievementActions.ACHIEVEMENT_SET,
    payload: achievements,
  });
};
