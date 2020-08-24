import { combineReducers } from "redux";
import { experienceReducer, ExperienceState } from "./Experience";
import { ProjectState, projectReducer } from "./Project";
import { AchievementState, achievementReducer } from "./Achievement";
import { ProfileState, profileReducer } from "./Profile";
import { SkillState, skillReducer } from "./Skill";
import { Theme, themeReducer } from "./Theme";

export interface StoreState {
  profile: ProfileState;
  experiences: ExperienceState;
  projects: ProjectState;
  achievements: AchievementState;
  skills: SkillState;
  theme: Theme;
}

export const reducers = combineReducers<StoreState>({
  profile: profileReducer,
  experiences: experienceReducer,
  projects: projectReducer,
  achievements: achievementReducer,
  skills: skillReducer,
  theme: themeReducer,
});
