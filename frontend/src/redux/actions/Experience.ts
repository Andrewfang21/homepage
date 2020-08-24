import { Dispatch } from "redux";
import Experience from "../../models/Experience";
import * as api from "../../api";

export enum ExperienceActions {
  EXPERIENCE_LOAD = "EXPERIENCE_LOAD",
  EXPERIENCE_SET = "EXPERIENCE_SET",
}

export type ExperienceActionTypes = ExperienceLoad | ExperienceSet;

interface ExperienceLoad {
  type: ExperienceActions.EXPERIENCE_LOAD;
}
interface ExperienceSet {
  type: ExperienceActions.EXPERIENCE_SET;
  payload: Experience;
}

export const fetchExperiences = () => async (dispatch: Dispatch) => {
  dispatch<ExperienceLoad>({ type: ExperienceActions.EXPERIENCE_LOAD });
  const experiences: Experience = await api.getExperiences();
  dispatch<ExperienceSet>({
    type: ExperienceActions.EXPERIENCE_SET,
    payload: experiences,
  });
};
