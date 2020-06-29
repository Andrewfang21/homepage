import AchievementModel from "../models/Achievement";
import ExperienceModel from "../models/Experience";
import ProfileModel from "../models/Profile";
import ProjectModel from "../models/Project";
import SkillModel from "../models/Skill";

import {
  achievementData,
  experienceData,
  profileData,
  projectData,
  skillData,
} from "../models";

export function getExperiences(): ExperienceModel {
  return experienceData;
}

export function getProjects(): ProjectModel[] {
  return projectData;
}

export function getAchievements(): AchievementModel[] {
  return achievementData;
}

export function getSkills(): SkillModel[] {
  return skillData;
}

export function getProfile(): ProfileModel {
  return profileData;
}
