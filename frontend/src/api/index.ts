import axios from "axios";

import AchievementModel from "../models/Achievement";
import ExperienceModel from "../models/Experience";
import ProfileModel from "../models/Profile";
import ProjectModel from "../models/Project";
import SkillModel from "../models/Skill";

import { profileData, skillData } from "../models";

const http = axios.create({
  baseURL: "http://localhost:8080",
});

export async function getExperiences(): Promise<ExperienceModel> {
  const response = await http.get("/experience");
  return response.data;
}

export async function getProjects(): Promise<ProjectModel[]> {
  const response = await http.get("/project");
  return response.data;
}

export async function getAchievements(): Promise<AchievementModel[]> {
  const response = await http.get("/achievement");
  return response.data;
}

export function getSkills(): SkillModel[] {
  return skillData;
}

export function getProfile(): ProfileModel {
  return profileData;
}
