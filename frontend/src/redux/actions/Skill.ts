import { Dispatch } from "redux";

import Skill from "../../models/Skill";
import * as api from "../../api";

export enum SkillActions {
  SKILL_LOAD = "SKILL_LOAD",
  SKILL_SET = "SKILL_SET",
}

export type SkillActionTypes = SkillLoad | SkillSet;

interface SkillLoad {
  type: SkillActions.SKILL_LOAD;
}
interface SkillSet {
  type: SkillActions.SKILL_SET;
  payload: Skill[];
}

export const fetchSkills = () => async (dispatch: Dispatch) => {
  dispatch<SkillLoad>({ type: SkillActions.SKILL_LOAD });
  const skills: Skill[] = await api.getSkills();
  dispatch<SkillSet>({ type: SkillActions.SKILL_SET, payload: skills });
};
