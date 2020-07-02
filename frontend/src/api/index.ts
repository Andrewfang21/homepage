import axios from "axios";

import AchievementModel from "../models/Achievement";
import ExperienceModel from "../models/Experience";
import ProfileModel from "../models/Profile";
import ProjectModel from "../models/Project";
import SkillModel from "../models/Skill";

const isOnProduction: boolean = process.env.NODE_ENV === "production";

const http = axios.create({
  baseURL: isOnProduction
    ? "https://andrewfang-api.herokuapp.com/"
    : "http://localhost:8080",
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
