import axios from "axios";

import AchievementModel from "../models/Achievement";
import ExperienceModel from "../models/Experience";
import ProfileModel from "../models/Profile";
import ProjectModel from "../models/Project";
import SkillModel from "../models/Skill";

const http = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://andrewfang-api.herokuapp.com/",
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

export async function getSkills(): Promise<SkillModel[]> {
  const response = await http.get("/skill");
  return response.data;
}

export async function getProfile(): Promise<ProfileModel> {
  const response = await http.get("/profile");
  return response.data;
}
