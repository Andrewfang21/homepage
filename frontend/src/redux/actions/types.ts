import { LoadingExperiences, SetExperiences } from "./Experience";
import { LoadingProjects, SetProjects } from "./Project";
import { LoadingAchievements, SetAchievements } from "./Achievement";
import { LoadingSkills, SetSkills } from "./Skill";
import { LoadingProfile, SetProfile, GetProfile } from "./Profile";

export enum ExperienceActionTypes {
  SET_EXPERIENCES = "SET_EXPERIENCES",
  LOADING_EXPERIENCES = "LOADING_EXPERIENCES",
}

export type ExperienceAction = LoadingExperiences | SetExperiences;

export enum ProjectActionTypes {
  SET_PROJECTS = "SET_PROJECTS",
  LOADING_PROJECTS = "LOADING_PROJECTS",
}

export type ProjectAction = LoadingProjects | SetProjects;

export enum AchievementActionTypes {
  SET_ACHIEVEMENTS = "SET_ACHIEVEMENTS",
  LOADING_ACHIEVEMENTS = "LOADING_ACHIEVEMENTS",
}

export type AchievementAction = LoadingAchievements | SetAchievements;

export enum SkillActionTypes {
  SET_SKILLS = "SET_SKILLS",
  LOADING_SKILLS = "LOADING_SKILLS",
}

export type SkillAction = LoadingSkills | SetSkills;

export enum ProfileActionTypes {
  SET_PROFILE = "SET_PROFILE",
  LOADING_PROFILE = "LOADING_PROFILE",
  GET_PROFILE = "GET_PROFILE",
}

export type ProfileAction = LoadingProfile | SetProfile | GetProfile;
