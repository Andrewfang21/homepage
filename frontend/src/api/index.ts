import { ExperienceModel, experienceData } from "../models/Experience";
import { ProjectModel, projectData } from "../models/Project";
import { AchievementModel, achievementData } from "../models/Achievement";
import { SkillModel, skillData } from "../models/Skill";
import { ProfileModel, profileData } from "../models/Profile";

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
