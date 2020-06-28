import { combineReducers } from "redux";
import { experienceReducer, ExperienceActionModel } from "./Experience";
import { ProjectActionModel, projectReducer } from "./Project";
import { AchievementActionModel, achievementReducer } from "./Achievement";
import { SkillActionModel, skillReducer } from "./Skill";
import { ProfileActionModel, profileReducer } from "./Profile";

export interface StoreState {
  profile: ProfileActionModel;
  experiences: ExperienceActionModel;
  projects: ProjectActionModel;
  achievements: AchievementActionModel;
  skills: SkillActionModel;
}

export const reducers = combineReducers<StoreState>({
  profile: profileReducer,
  experiences: experienceReducer,
  projects: projectReducer,
  achievements: achievementReducer,
  skills: skillReducer,
});
